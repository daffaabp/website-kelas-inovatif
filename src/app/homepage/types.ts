export interface Course {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  instructor: {
    name: string;
    avatar: string;
    role: string;
    bio?: string;
  };
  syllabus?: { title: string; content: string }[];
  prerequisites?: string[];
  duration?: string;
  level?: string;
  rating?: number;
  students?: number;
  price?: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  isHighlight?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Testimonial {
  id: number;
  title?: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

