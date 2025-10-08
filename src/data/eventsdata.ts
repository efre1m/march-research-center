export interface Event {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    type: string;
    description: string;
    fullDescription: string;
    image: string;
    registrationLink: string;
    status: 'upcoming' | 'ongoing' | 'completed';
}

export const events: Event[] = [
    {
        id: 1,
        title: 'Global Maternal Health Symposium 2025',
        date: 'January 20, 2025',
        time: '9:00 AM - 5:00 PM',
        location: 'Main Auditorium, MARCH Research Center',
        type: 'Symposium',
        description: 'Showcasing groundbreaking research in maternal healthcare with keynote speakers from global health institutions.',
        fullDescription: 'Detailed description...',
        image: '/images/events/symposium.jpg',
        registrationLink: '#register',
        status: 'upcoming'
    },
    {
        id: 2,
        title: 'International Conference on Maternal Health Technologies',
        date: 'February 5-7, 2025',
        time: 'All Day',
        location: 'Conference Center & Virtual',
        type: 'Conference',
        description: 'Three-day international conference featuring leading researchers in maternal health technologies and innovations.',
        fullDescription: 'Detailed conference description...',
        image: '/images/events/conference.jpg',
        registrationLink: '#register',
        status: 'upcoming'
    }
];