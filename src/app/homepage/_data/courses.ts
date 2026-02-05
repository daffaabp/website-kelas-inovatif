import { Course } from "../types";

export const courses: Course[] = [
  {
    id: '1',
    category: 'AI untuk Akademik',
    title: 'AI for Akademik',
    description: 'Selesaikan tesis dan disertasi lebih cepat dengan tools AI yang tepat. Literature review, penulisan akademik, dan penelitian menjadi lebih efisien.',
    image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2670&auto=format&fit=crop',
    duration: '8 Minggu',
    level: 'Semua Level',
    rating: 4.9,
    students: 1240,
    price: 'Rp 2.500.000',
    instructor: { 
      name: 'Dr. Rina Sari, M.Kom', 
      avatar: 'https://i.pravatar.cc/100?img=32', 
      role: 'Dosen & Peneliti, Universitas Indonesia',
      bio: 'Dr. Rina Sari memiliki pengalaman lebih dari 10 tahun dalam penelitian akademik dan telah membantu ratusan mahasiswa menyelesaikan tesis dan disertasi dengan tools AI.'
    },
    syllabus: [
      { title: 'Pengantar AI untuk Akademik', content: 'Memahami tools AI yang tepat untuk penelitian dan penulisan akademik.' },
      { title: 'Scispace untuk Literature Review', content: 'Menggunakan Scispace untuk analisis paper dan citation management yang efisien.' },
      { title: 'NotebookLM untuk Note-taking', content: 'Mengorganisir ratusan paper dan catatan penelitian dengan NotebookLM.' },
      { title: 'Cursor untuk Penulisan Akademik', content: 'Menulis akademik bebas plagiasi dan terstruktur dengan bantuan Cursor.' }
    ],
    prerequisites: ['Tidak diperlukan pengetahuan sebelumnya', 'Minat pada penelitian dan penulisan akademik']
  }
];

