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
    status: 'upcoming' | 'ongoing' | 'completed' | 'canceled';
    isOnline: boolean;
    meetingLink?: string;
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
        status: 'upcoming',
        isOnline: false
    },
    {
        id: 2,
        title: 'International Conference on Maternal Health Technologies',
        date: 'February 5-7, 2025',
        time: 'All Day',
        location: 'https://zoom.us/j/123456789',
        type: 'Conference',
        description: 'Three-day international conference featuring leading researchers in maternal health technologies and innovations.',
        fullDescription: 'Detailed conference description...',
        image: '/images/events/conference.jpg',
        registrationLink: '#register',
        status: 'upcoming',
        isOnline: true,
        meetingLink: 'https://zoom.us/j/123456789'
    },
    {
        id: 3,
        title: 'Maternal Health Workshop Series',
        date: 'December 15, 2024',
        time: '2:00 PM - 4:00 PM',
        location: 'Virtual Event - Online',
        type: 'Workshop',
        description: 'Interactive workshop series focusing on practical maternal health solutions and community engagement.',
        fullDescription: 'Detailed workshop description...',
        image: '/images/events/workshop.jpg',
        registrationLink: '#register',
        status: 'completed',
        isOnline: true
    },
    {
        id: 4,
        title: 'Research Collaboration Meeting',
        date: 'January 10, 2025',
        time: '10:00 AM - 12:00 PM',
        location: 'https://teams.microsoft.com/l/meetup-join/19:meeting_ABCD123456',
        type: 'Meeting',
        description: 'Quarterly research collaboration meeting to discuss ongoing projects and future directions.',
        fullDescription: 'Detailed meeting description...',
        image: '/images/events/meeting.jpg',
        registrationLink: '#register',
        status: 'ongoing',
        isOnline: true,
        meetingLink: 'https://teams.microsoft.com/l/meetup-join/19:meeting_ABCD123456'
    },
    {
        id: 5,
        title: 'Community Health Training Program',
        date: 'November 30, 2024',
        time: '9:00 AM - 4:00 PM',
        location: 'Training Room B, Healthcare Center',
        type: 'Training',
        description: 'Comprehensive training program for community health workers on maternal care best practices.',
        fullDescription: 'Detailed training description...',
        image: '/images/events/training.jpg',
        registrationLink: '#register',
        status: 'canceled',
        isOnline: false
    }
];