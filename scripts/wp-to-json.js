const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'rahasiaa',
        database: 'kelasinovatif',
    },
});

const fs = require('fs');
const path = require('path');

async function extractPosts() {
    try {
        console.log('Connecting to WordPress database...');

        // Check connection first
        await knex.raw('SELECT 1');
        console.log('Connected successfully.');

        console.log('Fetching posts...');
        const posts = await knex('noxdyty_posts')
            .select(
                'ID',
                'post_title',
                'post_excerpt',
                'post_content',
                'post_name',
                'post_date',
                'post_modified',
                'post_type',
            )
            .where('post_type', 'post')
            .andWhere('post_status', 'publish');

        console.log(`Found ${posts.length} published posts.`);

        const mappedPosts = posts.map((post) => ({
            id: post.ID,
            title: post.post_title,
            excerpt: post.post_excerpt,
            content: post.post_content,
            slug: post.post_name,
            created_at: post.post_date,
            updated_at: post.post_modified,
            type: post.post_type,
        }));

        const outputPath = path.join(__dirname, '..', 'posts.json');
        fs.writeFileSync(outputPath, JSON.stringify(mappedPosts, null, 2));

        console.log(`Successfully wrote ${mappedPosts.length} items to ${outputPath}`);
    } catch (error) {
        console.error('Error extracting posts:', error);
    } finally {
        await knex.destroy();
    }
}

extractPosts();
