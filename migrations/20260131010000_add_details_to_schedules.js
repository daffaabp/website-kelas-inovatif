/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.table('schedules', function (table) {
        table.text('excerpt');
        table.text('benefits');
        table.string('register_url');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.table('schedules', function (table) {
        table.dropColumn('excerpt');
        table.dropColumn('benefits');
        table.dropColumn('register_url');
    });
};
