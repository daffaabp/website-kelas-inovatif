/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable('schedules', function (table) {
            table.increments('id').primary();
            table.string('title').notNullable();
            table.string('type').notNullable(); // Workshop, Seminar, etc.
            table.string('speaker_name').notNullable();
            table.string('speaker_role');
            table.string('speaker_image');
            table.dateTime('date').notNullable();
            table.string('start_time').notNullable();
            table.string('end_time').notNullable();
            table.string('location').notNullable();
            table.text('description');
            table.timestamps(true, true);
        })
        .createTable('blogs', function (table) {
            table.increments('id').primary();
            table.string('title').notNullable();
            table.text('excerpt');
            table.text('content');
            table.string('category');
            table.string('author_name');
            table.string('author_image');
            table.string('image');
            table.string('read_time');
            table.boolean('featured').defaultTo(false);
            table.timestamps(true, true);
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema
        .dropTable('blogs')
        .dropTable('schedules');
};
