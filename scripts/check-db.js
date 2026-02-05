const knexConfig = require('../knexfile');
const db = require('knex')(knexConfig);

async function checkBlogs() {
    try {
        const countResult = await db('blogs').count('id as count').first();
        console.log(`Total blogs in database: ${countResult.count}`);

        const sample = await db('blogs').select('slug', 'title').limit(5);
        console.log('Sample blogs:', sample);
    } catch (error) {
        console.error('Error checking blogs:', error);
    } finally {
        await db.destroy();
    }
}

checkBlogs();
