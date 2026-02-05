const fs = require('fs');
const path = require('path');
const https = require('https');
const config = require('../knexfile');
const knex = require('knex');

// Initialize Knex
const db = knex(config);

const ARTICLES_FILE = path.join(__dirname, '..', 'articles.json');
const DOWNLOAD_DIR = path.join(__dirname, '..', 'public', 'images', 'blogs');
const DB_IMAGE_PREFIX = '/images/blogs';

// Ensure download directory exists
if (!fs.existsSync(DOWNLOAD_DIR)) {
    fs.mkdirSync(DOWNLOAD_DIR, { recursive: true });
}

function downloadImage(url, filepath) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filepath);
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download image: ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filepath, () => { }); // Delete the file async. (But we don't check result)
            reject(err);
        });
    });
}

function getExtension(url) {
    const ext = path.extname(url).split('?')[0]; // simple extension extraction
    if (!ext || ext.length > 5) return '.jpg'; // fallback
    return ext;
}

async function main() {
    try {
        if (!fs.existsSync(ARTICLES_FILE)) {
            console.error('articles.json not found!');
            process.exit(1);
        }

        const articles = JSON.parse(fs.readFileSync(ARTICLES_FILE, 'utf8'));
        console.log(`Processing ${articles.length} articles...`);

        let updatedCount = 0;
        let diffCount = 0; // downloaded but not in db? OR just count downloads

        for (const article of articles) {
            if (!article.image || !article.slug) continue;

            const ext = getExtension(article.image);
            // Clean slug to be safe for filename if needed, but slug is usually safe
            const filename = `${article.slug}${ext}`;
            const localFilePath = path.join(DOWNLOAD_DIR, filename);
            const dbImagePath = `${DB_IMAGE_PREFIX}/${filename}`;

            // 1. Download Image
            // Check if file exists to avoid redownloading? remove check if overwrite is desired.
            // Let's check if it exists to verify success, but we overwrite to ensure fresh.
            try {
                process.stdout.write(`Downloading for ${article.slug}... `);
                await downloadImage(article.image, localFilePath);
                process.stdout.write('Done.\n');
            } catch (err) {
                console.error(`\nFailed to download ${article.image}:`, err.message);
                continue; // Skip DB update if download fails
            }

            // 2. Update Database
            try {
                // Check if blog exists first? Or just update.
                const updated = await db('blogs')
                    .where({ slug: article.slug })
                    .update({ image: dbImagePath });

                if (updated) {
                    console.log(`  -> DB Updated: ${dbImagePath}`);
                    updatedCount++;
                } else {
                    console.log(`  -> Blog not found in DB with slug: ${article.slug}`);
                }
            } catch (err) {
                console.error(`  -> DB Update failed:`, err.message);
            }
        }

        console.log('-------------------------');
        console.log(`Finished.`);
        console.log(`Total Updated in DB: ${updatedCount}`);

    } catch (error) {
        console.error('Script failed:', error);
    } finally {
        await db.destroy();
    }
}

main();
