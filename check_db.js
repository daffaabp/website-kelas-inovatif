const knex = require('knex')(require('./knexfile'));

async function checkBlog() {
    try {
        const row = await knex('blogs').select('content').orderBy('id', 'desc').first();
        if (row && row.content) {
            console.log("Content start:", row.content.substring(0, 200));
        } else {
            console.log("No content found");
        }
    } catch (e) {
        console.error(e);
    } finally {
        await knex.destroy();
    }
}

checkBlog();
