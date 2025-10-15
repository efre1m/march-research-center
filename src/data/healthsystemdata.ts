export interface HealthSystemComponent {
    title: string;
    description: string;
    initiatives: string[];
    icon: string;
}

export const healthSystemComponents: HealthSystemComponent[] = [
    {
        title: 'Healthcare Infrastructure',
        description: 'Strengthening physical infrastructure and medical equipment in healthcare facilities.',
        initiatives: ['Facility Upgrades', 'Equipment Provision', 'Maintenance Systems'],
        icon: '🏥'
    },
    {
        title: 'Human Resources',
        description: 'Building capacity through training and professional development of healthcare workers.',
        initiatives: ['Training Programs', 'Mentorship', 'Continuing Education'],
        icon: '👥'
    },
    {
        title: 'Health Information Systems',
        description: 'Implementing digital health solutions for better data management and patient care.',
        initiatives: ['Electronic Records', 'Data Analytics', 'Telehealth Platforms'],
        icon: '💻'
    },
    {
        title: 'Supply Chain Management',
        description: 'Ensuring reliable supply of essential medicines and medical supplies.',
        initiatives: ['Inventory Systems', 'Supply Tracking', 'Distribution Networks'],
        icon: '🚚'
    }
];