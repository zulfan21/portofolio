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
    title: 'E-Commerce Dashboard',
    description: 'Dashboard admin untuk mengelola produk, pesanan, dan analisis penjualan dengan visualisasi data yang interaktif.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Aplikasi manajemen tugas dengan fitur drag-and-drop, deadline reminder, dan kolaborasi tim.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    technologies: ['React', 'Redux', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 3,
    title: 'Weather Forecast',
    description: 'Aplikasi prakiraan cuaca real-time dengan lokasi berdasarkan GPS dan notifikasi cuaca ekstrem.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
    technologies: ['React Native', 'OpenWeather API', 'Expo'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'Website portofolio pribadi dengan desain minimalis, animasi smooth, dan dark mode.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
    technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 5,
    title: 'Blog Platform',
    description: 'Platform blogging dengan editor rich text, komentar, dan sistem autentikasi pengguna.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 6,
    title: 'Chat Application',
    description: 'Aplikasi chat real-time dengan fitur private message, group chat, dan file sharing.',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=600&fit=crop',
    technologies: ['Socket.io', 'Express', 'React', 'Redis'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
];
