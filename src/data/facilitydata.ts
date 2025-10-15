export interface Facility {
    id: number;
    name: string;
    type: 'Learning Hospital' | 'Platform Facility';
    location: string;
    description: string;
    beds: number;
    staff: number;
    specialties: string[];
    image?: string;
}

export const learningFacilities: Facility[] = [
    {
        id: 1,
        name: 'Adi Gudum Hospital',
        type: 'Learning Hospital',
        location: 'Tigray Region',
        description: 'A leading teaching hospital providing comprehensive maternal and child healthcare services while serving as a training center for healthcare professionals.',
        beds: 120,
        staff: 85,
        specialties: ['Maternal Health', 'Pediatric Care', 'Surgical Services', 'Emergency Care'],
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&h=400&fit=crop'
    },
    {
        id: 2,
        name: 'Mehkelle Hagereselam Hospital',
        type: 'Learning Hospital',
        location: 'Tigray Region',
        description: 'Specialized in maternal healthcare with advanced neonatal care units and community outreach programs.',
        beds: 95,
        staff: 62,
        specialties: ['Neonatal Care', 'Obstetrics', 'Gynecology', 'Community Health'],
        image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=500&h=400&fit=crop'
    },
    {
        id: 3,
        name: 'Kuiha Hospital',
        type: 'Learning Hospital',
        location: 'Tigray Region',
        description: 'Regional referral hospital with comprehensive maternal and child health services and research facilities.',
        beds: 150,
        staff: 110,
        specialties: ['Referral Care', 'Research', 'Training', 'Specialized Surgery'],
        image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=500&h=400&fit=crop'
    },
    {
        id: 4,
        name: 'Ayder Referral Hospital',
        type: 'Learning Hospital',
        location: 'Tigray Region',
        description: 'Comprehensive teaching hospital affiliated with Mekelle University, providing advanced maternal healthcare services.',
        beds: 400,
        staff: 350,
        specialties: ['Advanced Surgery', 'Medical Education', 'Research', 'Specialized Care'],
        image: 'https://images.unsplash.com/photo-1516549655669-dfbf54c44a66?w=500&h=400&fit=crop'
    }
];

export const platformFacilities: Facility[] = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `Health Center ${i + 1}`,
    type: 'Platform Facility',
    location: 'Tigray Region',
    description: 'Community health center providing essential maternal and child healthcare services to local communities.',
    beds: Math.floor(Math.random() * 30) + 10,
    staff: Math.floor(Math.random() * 15) + 5,
    specialties: ['Primary Care', 'Maternal Health', 'Child Immunization', 'Health Education'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=400&fit=crop'
}));