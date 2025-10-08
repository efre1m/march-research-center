// src/data/teamData.ts

export interface TeamMember {
    id: number;
    name: string;
    role: string;
    department: string;
    education: string[];
    email: string;
    image: string;
}

export const coreTeamMembers: TeamMember[] = [
    {
        id: 1,
        name: 'Dr. Araya',
        role: 'Director & Senior Researcher',
        department: 'Maternal Health Research',
        education: ['PhD in Public Health, Johns Hopkins University', 'MSc in Epidemiology, London School of Hygiene & Tropical Medicine'],
        email: 'araya@marchresearch.org',
        image: '/images/team/1.jpg'
    },
    {
        id: 2,
        name: 'Mr. Kbrom',
        role: 'Lead Research Scientist',
        department: 'Medical Technology & Innovation',
        education: ['MSc in Biomedical Engineering, MIT', 'BSc in Electrical Engineering, Stanford University'],
        email: 'kbrom@marchresearch.org',
        image: '/images/team/2.jpg'
    },
    {
        id: 3,
        name: 'Ms. Liya',
        role: 'Community Health Director',
        department: 'Community Engagement & Health Equity',
        education: ['MPH in Global Health, Harvard University', 'BSc in Nursing, University of California'],
        email: 'liya@marchresearch.org',
        image: '/images/team/3.jpg'
    },
    {
        id: 4,
        name: 'Mr. Samson',
        role: 'Clinical Research Lead',
        department: 'Obstetrics & Clinical Trials',
        education: ['MD in Obstetrics, University of Toronto', 'MSc in Clinical Research, Oxford University'],
        email: 'samson@marchresearch.org',
        image: '/images/team/4.jpg'
    }
];

export const fullTeamMembers: TeamMember[] = [
    ...coreTeamMembers,
    {
        id: 5,
        name: 'Dr. Sarah Chen',
        role: 'Senior MARCH Researcher',
        department: 'MARCH Computing',
        education: ['PhD in Physics, MIT', 'MSc in Computer Science, Stanford'],
        email: 's.chen@marchresearch.org',
        image: '/team/sarah-chen.jpg'
    },
    {
        id: 6,
        name: 'Dr. Michael Rodriguez',
        role: 'Lead AI Research Scientist',
        department: 'Artificial Intelligence',
        education: ['PhD in Computer Science, Carnegie Mellon', 'MEng in Electrical Engineering, MIT'],
        email: 'm.rodriguez@marchresearch.org',
        image: '/team/michael-rodriguez.jpg'
    },
    {
        id: 7,
        name: 'Dr. Elena Petrova',
        role: 'Senior Materials Scientist',
        department: 'Materials Science',
        education: ['PhD in Materials Science, Cambridge', 'MSc in Chemistry, ETH Zurich'],
        email: 'e.petrova@marchresearch.org',
        image: '/team/elena-petrova.jpg'
    },
    {
        id: 8,
        name: 'Dr. James Wilson',
        role: 'Biomedical Engineering Lead',
        department: 'Biomedical Engineering',
        education: ['PhD in Bioengineering, UC Berkeley', 'MD, Harvard Medical School'],
        email: 'j.wilson@marchresearch.org',
        image: '/team/james-wilson.jpg'
    },
    {
        id: 9,
        name: 'Dr. Maria Gonzalez',
        role: 'Energy Systems Researcher',
        department: 'Renewable Energy',
        education: ['PhD in Chemical Engineering, Caltech', 'MSc in Energy Science, TU Delft'],
        email: 'm.gonzalez@marchresearch.org',
        image: '/team/maria-gonzalez.jpg'
    },
    {
        id: 10,
        name: 'Dr. Robert Kim',
        role: 'Climate Science Director',
        department: 'Climate & Sustainability',
        education: ['PhD in Environmental Science, Columbia', 'MSc in Climate Physics, Princeton'],
        email: 'r.kim@marchresearch.org',
        image: '/team/robert-kim.jpg'
    }
];