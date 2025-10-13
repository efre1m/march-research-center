export interface Project {
    id: number;
    title: string;
    description: string;
    fullDescription: string;
    lead: string;
    team: string[];
    impact: string;
    startDate: string;
    endDate: string;
    funder: string;
}

export const researchAreas: Project[] = [
    {
        id: 1,
        title: 'MARCH Computing & Information',
        description: 'Developing scalable MARCH processors, error correction codes, and MARCH algorithms for complex computational problems.',
        fullDescription: 'This research program focuses on advancing the frontiers of MARCH computing through the development of scalable processor architectures, robust error correction methodologies, and innovative algorithms tailored for complex computational problems. Our work bridges the gap between theoretical computer science and practical implementation, with applications in cryptography, optimization, and large-scale data processing.',
        lead: 'Dr. Sarah Chen',
        team: ['Dr. Sarah Chen (Lead)', 'Dr. Wei Zhang', 'Dr. Elena Petrova', 'MSc. Alex Thompson', 'PhD Candidate Maria Rodriguez'],
        impact: 'This research will enable breakthroughs in secure communications, optimization problems, and scientific computing, with potential applications in finance, healthcare, and national security.',
        startDate: '2023-01-15',
        endDate: '2026-12-31',
        funder: 'National Science Foundation'
    },
    {
        id: 2,
        title: 'Artificial Intelligence Research',
        description: 'Advanced machine learning models, neural architecture search, and AI ethics for responsible technology development.',
        fullDescription: 'This project focuses on developing next-generation AI models with emphasis on explainability, robustness, and ethical deployment across various domains. We are pioneering new approaches to make AI systems more transparent, fair, and accountable while maintaining state-of-the-art performance in complex real-world applications.',
        lead: 'Dr. Michael Rodriguez',
        team: ['Dr. Michael Rodriguez (Lead)', 'Dr. Sarah Chen', 'PhD Candidate Ana Silva', 'MSc. James Wilson', 'Research Assistant Lisa Wang'],
        impact: 'Our AI research will transform industries by creating more trustworthy and deployable AI systems, particularly in high-stakes domains like healthcare, autonomous vehicles, and financial services.',
        startDate: '2024-03-01',
        endDate: '2027-02-28',
        funder: 'Tech Innovation Fund'
    },
    {
        id: 3,
        title: 'Sustainable Energy Systems',
        description: 'Developing next-generation renewable energy technologies and smart grid solutions for sustainable future.',
        fullDescription: 'This interdisciplinary project focuses on creating innovative solutions for renewable energy generation, storage, and distribution. We are developing advanced solar cell technologies, novel battery storage systems, and intelligent grid management algorithms to address the global energy challenge.',
        lead: 'Dr. Elena Petrova',
        team: ['Dr. Elena Petrova (Lead)', 'Dr. James Wilson', 'PhD Candidate David Kim', 'MSc. Sophia Martinez', 'Research Assistant Omar Hassan'],
        impact: 'This research will accelerate the transition to renewable energy by improving efficiency, reducing costs, and enabling better integration of sustainable energy sources into existing infrastructure.',
        startDate: '2023-09-10',
        endDate: '2026-08-15',
        funder: 'Department of Energy'
    },
    {
        id: 4,
        title: 'Biomedical Engineering Innovations',
        description: 'Developing advanced medical devices, diagnostic tools, and therapeutic technologies for improved healthcare.',
        fullDescription: 'Our biomedical engineering program focuses on creating innovative solutions to pressing healthcare challenges. We develop cutting-edge medical devices, advanced diagnostic platforms, and novel therapeutic technologies that can transform patient care.',
        lead: 'Dr. Wei Zhang',
        team: ['Dr. Wei Zhang (Lead)', 'Dr. Maria Rodriguez', 'PhD Candidate Lisa Wang', 'MSc. Omar Hassan', 'Clinical Specialist Dr. Emily Chen'],
        impact: 'Our biomedical innovations will improve early disease detection, enable personalized treatments, and enhance patient outcomes across various medical conditions and healthcare settings.',
        startDate: '2024-06-01',
        endDate: '2027-05-31',
        funder: 'National Institutes of Health'
    }
];