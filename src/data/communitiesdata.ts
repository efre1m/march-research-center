export interface Community {
    name: string;
    count: string;
    description: string;
    focus: string[];
    image?: string;
}

export const communities: Community[] = [
    {
        name: 'Rural Communities',
        count: '50+',
        description: 'Serving remote rural communities with limited access to healthcare facilities.',
        focus: ['Mobile Clinics', 'Community Health Workers', 'Telemedicine'],
        image: 'https://images.unsplash.com/photo-1547489432-cf93fa6c71ee?w=400&h=300&fit=crop'
    },
    {
        name: 'Urban Populations',
        count: '15+',
        description: 'Working in urban settings to improve maternal healthcare in densely populated areas.',
        focus: ['Hospital Partnerships', 'Public Health Programs', 'Capacity Building'],
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop'
    },
    {
        name: 'Displaced Populations',
        count: '25+',
        description: 'Providing essential healthcare services to internally displaced persons and refugees.',
        focus: ['Emergency Care', 'Mobile Health Units', 'Psychological Support'],
        image: 'https://images.unsplash.com/photo-1583324113626-70df0f4deaab?w=400&h=300&fit=crop'
    }
];