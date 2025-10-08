export interface Story {
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

export const stories: Story[] = [
    {
        id: 1,
        title: 'Transforming Lives Through Maternal Health Innovation',
        date: 'December 10, 2024',
        category: 'Impact Story',
        excerpt: 'How our research is making a real difference in communities across the globe.',
        content: 'Full story content...',
        image: '/images/stories/impact-story.jpg',
        readTime: '5 min read',
        author: 'Community Team',
        tags: ['Impact', 'Community', 'Transformation']
    },
    {
        id: 2,
        title: 'The Journey of a Research Breakthrough',
        date: 'November 28, 2024',
        category: 'Research Story',
        excerpt: 'Behind the scenes of our latest groundbreaking discovery in maternal healthcare.',
        content: 'Full story content...',
        image: '/images/stories/research-journey.jpg',
        readTime: '4 min read',
        author: 'Research Team',
        tags: ['Research', 'Innovation', 'Discovery']
    }
];