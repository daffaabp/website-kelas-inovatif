import db from '../src/lib/db';

const SPECIFIC_EVENTS = [
    {
        title: 'FREE WEBINAR - 3 JANUARI 2026',
        type: 'FREE WEBINAR',
        date: '2026-01-03',
        description: 'Webinar gratis pembuka tahun 2026. Bahas tren teknologi terbaru.'
    },
    {
        title: 'FREE WEBINAR - 6 JANUARI 2026',
        type: 'FREE WEBINAR',
        date: '2026-01-06',
        description: 'Lanjutan pembahasan tren teknologi dan roadmap developer 2026.'
    },
    {
        title: 'KELAS INTENSIF: CURSOR - 9 JANUARI 2026',
        type: 'KELAS INTENSIF: CURSOR',
        date: '2026-01-09',
        description: 'Kelas intensif menguasai AI code editor Cursor untuk membantu penulisan.'
    },
    {
        title: 'WORKSHOP REGULAR: NOTEBOOKLM - 10 JANUARI 2026',
        type: 'WORKSHOP REGULAR: NOTEBOOKLM',
        date: '2026-01-10',
        description: 'Optimalkan riset dan belajar dengan Google NotebookLM.'
    },
    {
        title: 'FREE WEBINAR - 17 JANUARI 2026',
        type: 'FREE WEBINAR',
        date: '2026-01-17',
        description: 'Webinar gratis pertengahan bulan. Strategi belajar dengan AI secara efektif.'
    },
    {
        title: 'WORKSHOP REGULAR: SCISPACE - 20 JANUARI 2026',
        type: 'WORKSHOP REGULAR: SCISPACE',
        date: '2026-01-20',
        description: 'Workshop penggunaan SciSpace untuk review jurnal dan penulisan ilmiah.'
    },
    {
        title: 'FREE WEBINAR - 21 JANUARI 2026',
        type: 'FREE WEBINAR',
        date: '2026-01-21',
        description: 'Sesi Q&A dan bedah kasus development real-world dengan AI.'
    },
    {
        title: 'KELAS INTENSIF: CURSOR - 23 JANUARI 2026',
        type: 'KELAS INTENSIF: CURSOR',
        date: '2026-01-23',
        description: 'Batch kedua kelas intensif Cursor. Deep dive fitur advanced.'
    },
    {
        title: 'PERTEMUAN ALUMNI - 30 JANUARI 2026',
        type: 'PERTEMUAN ALUMNI',
        date: '2026-01-30',
        description: 'Temu kangen dan networking alumni Kelas Inovatif.'
    }
];

const SPEAKER = {
    name: 'M. Arianto',
    role: 'Prompt Engineer',
    image: '/images/speaker/arianto.avif'
};

async function seed() {
    console.log('Seeding schedules...');

    const schedules = SPECIFIC_EVENTS.map(event => ({
        title: event.title,
        type: event.type,
        speaker_name: SPEAKER.name,
        speaker_role: SPEAKER.role,
        speaker_image: SPEAKER.image,
        date: new Date(event.date),
        start_time: '19:00',
        end_time: '21:00',
        location: 'Zoom Meeting', // Default for these types of events
        description: event.description,
        created_at: new Date(),
        updated_at: new Date()
    }));

    try {
        if (!process.env.DATABASE_URL) {
            throw new Error("DATABASE_URL is not defined");
        }
        console.log(`Connecting to DB... ${process.env.DATABASE_URL.substring(0, 15)}...`);

        // Clear existing schedules
        console.log('Clearing existing schedules...');
        await db('schedules').del();

        await db('schedules').insert(schedules);
        console.log(`Successfully seeded ${schedules.length} schedules`);
    } catch (error: any) {
        console.error('Error seeding schedules:', error);
        if (error.message) console.error('Message:', error.message);
        if (error.stack) console.error('Stack:', error.stack);
    } finally {
        await db.destroy();
    }
}

seed();
