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
    title: 'Japanese Learning Web',
    description: 'Aplikasi web untuk belajar bahasa Jepang dengan fitur pembelajaran interaktif dan kuis',
    image: '/Nihongo.png',
    technologies: ['React', 'JavaScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/zulfan21/nihonggoquiz',
    liveUrl: 'https://nihongoquizu.vercel.app/',
  },
];
