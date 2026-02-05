import db from '../src/lib/db';

async function restore() {
    console.log('Restoring schedules table...');

    try {
        const exists = await db.schema.hasTable('schedules');
        if (exists) {
            console.log('Table "schedules" already exists. Dropping it first...');
            await db.schema.dropTable('schedules');
        }

        console.log('Creating "schedules" table...');
        await db.schema.createTable('schedules', function (table) {
            table.increments('id').primary();
            table.string('title').notNullable();
            table.string('type').notNullable(); // Workshop, Seminar, etc.
            table.string('speaker_name').notNullable();
            table.string('speaker_role');
            table.text('speaker_image'); // Changed to text for long URLs
            table.dateTime('date').notNullable();
            table.string('start_time').notNullable();
            table.string('end_time').notNullable();
            table.text('location').notNullable(); // Changed to text just in case
            table.text('description');
            table.timestamps(true, true);
        });

        console.log('Successfully restored "schedules" table.');
    } catch (error) {
        console.error('Error restoring table:', error);
    } finally {
        await db.destroy();
    }
}

restore();
