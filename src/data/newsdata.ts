export interface NewsItem {
    id: number;
    title: string;
    date: string;
    category: string;
    excerpt: string;
    content: string;
    image: string;
    readTime: string;
    author: string;
    tags: string[];
}

export const newsItems: NewsItem[] = [
    {
        id: 1,
        title: 'Breakthrough in Maternal Healthcare Research',
        date: 'December 15, 2024',
        category: 'Research Breakthrough',
        excerpt: 'Our research team achieves significant improvements in maternal healthcare outcomes through innovative interventions.',
        content: 'Full content...',
        image: '/images/news/maternal-breakthrough.jpg',
        readTime: '3 min read',
        author: 'Research Team',
        tags: ['Maternal Health', 'Research', 'Healthcare Innovation']
    },
    {
        id: 2,
        title: 'International Research Partnership Announced',
        date: 'December 8, 2024',
        category: 'Collaboration',
        excerpt: 'MARCH Research Center partners with leading global institutions to advance maternal and child health research.',
        content: 'Full content...',
        image: '/images/news/international-partnership.jpg',
        readTime: '2 min read',
        author: 'Partnership Team',
        tags: ['Collaboration', 'Global Health', 'Partnerships']
    }
];