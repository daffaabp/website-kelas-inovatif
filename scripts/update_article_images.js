const fs = require('fs');
const path = require('path');
// Use the development config from knexfile
const config = require('../knexfile');
const knex = require('knex');

const db = knex(config);

async function main() {
    try {
        const articlesPath = path.join(__dirname, '..', 'articles.json');
        console.log(`Reading articles from ${articlesPath}`);

        if (!fs.existsSync(articlesPath)) {
            console.error('articles.json not found!');
            process.exit(1);
        }

        const articlesData = fs.readFileSync(articlesPath, 'utf8');
        const articles = JSON.parse(articlesData);

        console.log(`Found ${articles.length} articles to process.`);

        let updatedCount = 0;
        let notFoundCount = 0;

        for (const article of articles) {
            const { slug, image } = article;

            if (!slug) {
                console.warn('Skipping article without slug:', article);
                continue;
            }

            // Check if post exists
            const post = await db('blogs').where({ slug }).first();

            if (post) {
                await db('blogs')
                    .where({ slug })
                    .update({ image });
                console.log(`[UPDATED] ${slug}`);
                updatedCount++;
            } else {
                console.log(`[NOT FOUND] ${slug}`);
                notFoundCount++;
            }
        }

        console.log('-----------------------------------');
        console.log(`Processing complete.`);
        console.log(`Updated: ${updatedCount}`);
        console.log(`Not Found: ${notFoundCount}`);

    } catch (error) {
        console.error('Error executing script:', error);
    } finally {
        await db.destroy();
    }
}

main();
