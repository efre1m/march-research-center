export interface GalleryImage {
    id: number;
    title: string;
    category: string;
    description: string;
    imageUrl: string;
}

export const galleryImages: GalleryImage[] = [
    {
        id: 1,
        title: 'Hospital Infrastructure',
        category: 'facilities',
        description: 'Modern healthcare facilities equipped with state-of-the-art medical equipment',
        imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop'
    },
    {
        id: 2,
        title: 'Community Outreach',
        category: 'communities',
        description: 'Engaging with local communities to provide essential healthcare services',
        imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop'
    },
    {
        id: 3,
        title: 'Training Sessions',
        category: 'training',
        description: 'Professional development programs for healthcare workers and community health volunteers',
        imageUrl: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&h=400&fit=crop'
    },
    {
        id: 4,
        title: 'Medical Equipment',
        category: 'equipment',
        description: 'Advanced medical equipment ensuring quality healthcare delivery',
        imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop'
    },
    {
        id: 5,
        title: 'Field Work',
        category: 'field',
        description: 'On-ground activities and interventions in various communities',
        imageUrl: 'https://images.unsplash.com/photo-1547489432-cf93fa6c71ee?w=600&h=400&fit=crop'
    },
    {
        id: 6,
        title: 'Team Activities',
        category: 'team',
        description: 'Collaborative efforts of our dedicated healthcare teams',
        imageUrl: 'https://images.unsplash.com/photo-1583324113626-70df0f4deaab?w=600&h=400&fit=crop'
    },
    {
        id: 7,
        title: 'Patient Care',
        category: 'care',
        description: 'Comprehensive patient care and medical consultations',
        imageUrl: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop'
    },
    {
        id: 8,
        title: 'Research Activities',
        category: 'research',
        description: 'Ongoing research initiatives and data collection',
        imageUrl: 'https://images.unsplash.com/photo-1516549655669-dfbf54c44a66?w=600&h=400&fit=crop'
    },
    {
        id: 9,
        title: 'Community Education',
        category: 'education',
        description: 'Health education sessions and awareness programs',
        imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop'
    },
    {
        id: 10,
        title: 'Health Campaigns',
        category: 'campaigns',
        description: 'Public health campaigns and vaccination drives',
        imageUrl: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop'
    },
    {
        id: 11,
        title: 'Facility Tours',
        category: 'tours',
        description: 'Infrastructure development and facility improvements',
        imageUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&h=400&fit=crop'
    },
    {
        id: 12,
        title: 'Staff Training',
        category: 'training',
        description: 'Continuous professional development for healthcare staff',
        imageUrl: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&h=400&fit=crop'
    }
];