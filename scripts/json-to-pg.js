const fs = require('fs');
const path = require('path');
require('dotenv').config();

const knexConfig = require('../knexfile');
const db = require('knex')(knexConfig);

async function importPosts() {
    try {
        const postsPath = path.join(__dirname, '..', 'posts.json');
        const rawData = fs.readFileSync(postsPath, 'utf-8');
        const posts = JSON.parse(rawData);

        console.log(`Read ${posts.length} entries from posts.json`);

        const validPosts = posts.filter(post => post.type === 'post');
        console.log(`Filtering for 'post' type: ${validPosts.length} posts found.`);

        for (const post of validPosts) {
            const blogData = {
                title: post.title,
                content: post.content,
                excerpt: post.excerpt,
                slug: post.slug,
                created_at: new Date(post.created_at),
                updated_at: new Date(post.updated_at),
                // Default values for fields not in JSON
                featured: false,
                category: 'Uncategorized', // Default category
                author_name: 'Admin',      // Default author
            };

            // Use onConflict to update if exists, or insert if new.
            // Assuming 'slug' is unique constraint as per migration.
            await db('blogs')
                .insert(blogData)
                .onConflict('slug')
                .merge(); // Update existing fields if slug matches

            console.log(`Imported: ${post.title}`);
        }

        console.log('Import completed successfully.');

    } catch (error) {
        console.error('Error importing posts:', error);
    } finally {
        await db.destroy();
    }
}

importPosts();
