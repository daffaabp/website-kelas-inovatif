/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.table('schedules', function (table) {
        table.integer('original_price');
        table.integer('discounted_price');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.table('schedules', function (table) {
        table.dropColumn('original_price');
        table.dropColumn('discounted_price');
    });
};
