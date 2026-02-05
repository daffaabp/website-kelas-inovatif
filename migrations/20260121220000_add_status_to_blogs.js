exports.up = function (knex) {
    return knex.schema.table('blogs', function (table) {
        table.enum('status', ['published', 'draft']).notNullable().defaultTo('published');
    });
};

exports.down = function (knex) {
    return knex.schema.table('blogs', function (table) {
        table.dropColumn('status');
    });
};
