export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Nihongo Quizu',
    description: 'Web untuk berlatih bahasa Jepang dasar dengan fitur pembelajaran interaktif dan kuis',
    image: '/Nihongo.png',
    technologies: ['React', 'JavaScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/zulfan21/nihonggoquiz',
    liveUrl: 'https://nihongoquizu.vercel.app/',
  },
  {
    id: 2,
    title: 'Sistem Kasir Sederhana',
    description: 'Aplikasi web untuk sistem kasir menggunakan local storage untuk menyimpan data transaksi',
    image: '/POS.png',
    technologies: ['React', 'JavaScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/zulfan21/kasir',
    liveUrl: 'https://kasirproject16.vercel.app/',
  },
    {
    id: 3,
    title: 'Amelia Hantaran',
    description: 'Website untuk bisnis hantaran pernikahan dengan fitur katalog produk dan pengelolaan pesanan',
    image: '/Hantaran.png',
    technologies: ['PHP', 'Laravel', 'Tailwind CSS'],
    githubUrl: 'https://github.com/zulfan21/ameliahantaran',
    liveUrl: 'https://github.com/zulfan21/ameliahantaran',
  },
];
