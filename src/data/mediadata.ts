export interface MediaItem {
    id: string;
    title: string;
    source: string;
    date: string;
    type: 'video' | 'article' | 'podcast' | 'news';
    url: string;
    description: string;
    thumbnail?: string;
    videoId?: string;
}

export const mediaItems: MediaItem[] = [
    // Videos
    {
        id: '1',
        title: 'What is Quantum Computing?',
        source: 'IBM Research',
        date: '2024-01-15',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=OWJCfOvochA',
        videoId: 'OWJCfOvochA',
        description: 'Introduction to quantum computing and its potential applications'
    },
    {
        id: '2',
        title: 'The Future of Artificial Intelligence',
        source: 'MIT',
        date: '2024-01-12',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=5hKJdKBxXo8',
        videoId: '5hKJdKBxXo8',
        description: 'Exploring latest developments in AI research and ethics'
    },
    {
        id: '3',
        title: 'Neural Networks Explained',
        source: '3Blue1Brown',
        date: '2024-01-10',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=aircAruvnKk',
        videoId: 'aircAruvnKk',
        description: 'Visual introduction to neural networks and deep learning'
    },

    // Articles
    {
        id: '4',
        title: 'Renewable Energy Breakthroughs',
        source: 'Nature',
        date: '2024-01-08',
        type: 'article',
        url: 'https://www.nature.com/articles/renewable-energy',
        description: 'Latest innovations in solar and wind power technology'
    },
    {
        id: '5',
        title: 'Climate Change Solutions',
        source: 'Science Magazine',
        date: '2024-01-05',
        type: 'article',
        url: 'https://www.science.org/climate-solutions',
        description: 'Innovative approaches to addressing climate challenges'
    },
    {
        id: '6',
        title: 'Biotechnology Revolution',
        source: 'Nature Biotechnology',
        date: '2024-01-03',
        type: 'article',
        url: 'https://www.nature.com/biotech',
        description: 'Breakthroughs in genetic engineering and medical tech'
    },

    // Podcasts
    {
        id: '7',
        title: 'AI in Healthcare Podcast',
        source: 'The AI Podcast',
        date: '2024-01-02',
        type: 'podcast',
        url: 'https://spotify.com/ai-healthcare',
        description: 'Discussion on AI applications in medical diagnosis'
    },
    {
        id: '8',
        title: 'Quantum Computing Today',
        source: 'Science Friday',
        date: '2023-12-28',
        type: 'podcast',
        url: 'https://sciencefriday.com/quantum',
        description: 'Current state and future of quantum computing'
    },
    {
        id: '9',
        title: 'Sustainable Tech Innovations',
        source: 'Tech Talks Daily',
        date: '2023-12-25',
        type: 'podcast',
        url: 'https://techtalksdaily.com/sustainable',
        description: 'Emerging technologies for environmental sustainability'
    },

    // News
    {
        id: '10',
        title: 'Research Center Opens New Lab',
        source: 'Local News',
        date: '2023-12-20',
        type: 'news',
        url: 'https://localnews.com/lab-opening',
        description: 'New research facility to advance scientific discoveries'
    },
    {
        id: '11',
        title: 'Scientists Win Innovation Award',
        source: 'Research Weekly',
        date: '2023-12-18',
        type: 'news',
        url: 'https://researchweekly.com/awards',
        description: 'Team recognized for groundbreaking research work'
    },
    {
        id: '12',
        title: 'Partnership with Tech Giant',
        source: 'Tech News',
        date: '2023-12-15',
        type: 'news',
        url: 'https://technews.com/partnership',
        description: 'Collaboration to accelerate research development'
    }
];