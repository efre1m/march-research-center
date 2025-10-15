export interface ResourceItem {
    id: string;
    title: string;
    category: 'reports' | 'manuals' | 'training' | 'guidelines' | 'materials' | 'toolkits' | 'sops' | 'archives' | 'summaries' | 'briefs' | 'datasets';
    type: 'pdf' | 'video' | 'document' | 'dataset' | 'tool';
    description: string;
    fileUrl: string;
    fileSize: string;
    publishDate: string;
    thumbnail?: string;
    videoId?: string;
    downloadCount: number;
    tags: string[];
}

export const resourceItems: ResourceItem[] = [
    // Annual/Periodic Reports
    {
        id: '1',
        title: 'Annual Research Report 2024',
        category: 'reports',
        type: 'pdf',
        description: 'Comprehensive overview of research activities, achievements, and financial reports for the year 2024.',
        fileUrl: '/resources/reports/annual-report-2024.pdf',
        fileSize: '4.2 MB',
        publishDate: '2024-12-31',
        downloadCount: 245,
        tags: ['annual', 'research', 'financial', 'achievements']
    },
    {
        id: '2',
        title: 'Quarterly Progress Report Q1 2024',
        category: 'reports',
        type: 'pdf',
        description: 'First quarter progress report detailing project milestones and research outcomes.',
        fileUrl: '/resources/reports/q1-2024.pdf',
        fileSize: '2.1 MB',
        publishDate: '2024-03-31',
        downloadCount: 189,
        tags: ['quarterly', 'progress', 'milestones']
    },

    // Manuals
    {
        id: '3',
        title: 'Research Methodology Manual',
        category: 'manuals',
        type: 'pdf',
        description: 'Comprehensive guide to research methodologies and best practices for scientific studies.',
        fileUrl: '/resources/manuals/research-methodology.pdf',
        fileSize: '3.8 MB',
        publishDate: '2024-01-15',
        downloadCount: 567,
        tags: ['methodology', 'research', 'guide', 'best-practices']
    },
    {
        id: '4',
        title: 'Data Collection Procedures Manual',
        category: 'manuals',
        type: 'pdf',
        description: 'Step-by-step guide for data collection, validation, and management procedures.',
        fileUrl: '/resources/manuals/data-collection.pdf',
        fileSize: '2.9 MB',
        publishDate: '2024-02-20',
        downloadCount: 432,
        tags: ['data', 'collection', 'procedures', 'validation']
    },

    // Training Modules
    {
        id: '5',
        title: 'Research Ethics Training Module',
        category: 'training',
        type: 'pdf',
        description: 'Complete training module on research ethics, integrity, and compliance standards.',
        fileUrl: '/resources/training/ethics-module.pdf',
        fileSize: '5.1 MB',
        publishDate: '2024-01-10',
        downloadCount: 321,
        tags: ['ethics', 'training', 'integrity', 'compliance']
    },
    {
        id: '6',
        title: 'Data Analysis Training Video Guide',
        category: 'training',
        type: 'video',
        description: 'Video tutorial series on advanced data analysis techniques and tools.',
        fileUrl: 'https://www.youtube.com/watch?v=aircAruvnKk',
        videoId: 'aircAruvnKk',
        fileSize: '45 min',
        publishDate: '2024-02-15',
        downloadCount: 678,
        tags: ['data-analysis', 'video', 'tutorial', 'statistics']
    },

    // Guidelines
    {
        id: '7',
        title: 'Publication Guidelines',
        category: 'guidelines',
        type: 'pdf',
        description: 'Comprehensive guidelines for manuscript preparation and publication processes.',
        fileUrl: '/resources/guidelines/publication.pdf',
        fileSize: '1.8 MB',
        publishDate: '2024-01-20',
        downloadCount: 298,
        tags: ['publication', 'manuscript', 'guidelines']
    },
    {
        id: '8',
        title: 'Research Collaboration Guidelines',
        category: 'guidelines',
        type: 'pdf',
        description: 'Framework and procedures for establishing and managing research collaborations.',
        fileUrl: '/resources/guidelines/collaboration.pdf',
        fileSize: '2.3 MB',
        publishDate: '2024-03-10',
        downloadCount: 187,
        tags: ['collaboration', 'partnership', 'framework']
    },

    // IEC/BCC/SBCC Materials
    {
        id: '9',
        title: 'Health Communication Toolkit',
        category: 'materials',
        type: 'pdf',
        description: 'Complete set of materials for health education and behavior change communication.',
        fileUrl: '/resources/materials/health-communication.pdf',
        fileSize: '6.7 MB',
        publishDate: '2024-02-28',
        downloadCount: 412,
        tags: ['health', 'communication', 'education', 'behavior-change']
    },
    {
        id: '10',
        title: 'Community Engagement Video Series',
        category: 'materials',
        type: 'video',
        description: 'Video series for effective community engagement and outreach programs.',
        fileUrl: 'https://www.youtube.com/watch?v=5hKJdKBxXo8',
        videoId: '5hKJdKBxXo8',
        fileSize: '32 min',
        publishDate: '2024-01-25',
        downloadCount: 534,
        tags: ['community', 'engagement', 'video', 'outreach']
    },

    // Toolkits
    {
        id: '11',
        title: 'Research Project Management Toolkit',
        category: 'toolkits',
        type: 'pdf',
        description: 'Complete toolkit for planning, implementing, and monitoring research projects.',
        fileUrl: '/resources/toolkits/project-management.pdf',
        fileSize: '4.5 MB',
        publishDate: '2024-03-05',
        downloadCount: 289,
        tags: ['project-management', 'toolkit', 'planning', 'monitoring']
    },
    {
        id: '12',
        title: 'Data Visualization Toolkit',
        category: 'toolkits',
        type: 'tool',
        description: 'Interactive tools and templates for creating effective data visualizations.',
        fileUrl: '/resources/toolkits/data-visualization.zip',
        fileSize: '8.9 MB',
        publishDate: '2024-02-10',
        downloadCount: 456,
        tags: ['data-visualization', 'tools', 'templates', 'interactive']
    },

    // SOPs
    {
        id: '13',
        title: 'Laboratory Safety SOP',
        category: 'sops',
        type: 'pdf',
        description: 'Standard operating procedures for laboratory safety and equipment handling.',
        fileUrl: '/resources/sops/lab-safety.pdf',
        fileSize: '2.7 MB',
        publishDate: '2024-01-30',
        downloadCount: 345,
        tags: ['laboratory', 'safety', 'procedures', 'equipment']
    },
    {
        id: '14',
        title: 'Data Management SOP',
        category: 'sops',
        type: 'pdf',
        description: 'Standard procedures for data collection, storage, and security protocols.',
        fileUrl: '/resources/sops/data-management.pdf',
        fileSize: '3.2 MB',
        publishDate: '2024-02-25',
        downloadCount: 278,
        tags: ['data-management', 'security', 'storage', 'protocols']
    },

    // Webinar and Seminar Archives
    {
        id: '15',
        title: 'AI in Healthcare Webinar',
        category: 'archives',
        type: 'video',
        description: 'Recorded webinar on artificial intelligence applications in healthcare.',
        fileUrl: 'https://www.youtube.com/watch?v=OWJCfOvochA',
        videoId: 'OWJCfOvochA',
        fileSize: '58 min',
        publishDate: '2024-03-15',
        downloadCount: 892,
        tags: ['AI', 'healthcare', 'webinar', 'recorded']
    },
    {
        id: '16',
        title: 'Climate Change Research Seminar',
        category: 'archives',
        type: 'video',
        description: 'Seminar recording on latest climate change research findings.',
        fileUrl: 'https://www.youtube.com/watch?v=zbEnOYtsXHA',
        videoId: 'zbEnOYtsXHA',
        fileSize: '47 min',
        publishDate: '2024-03-20',
        downloadCount: 567,
        tags: ['climate-change', 'seminar', 'research', 'recording']
    },

    // Policy Dialogue Summaries
    {
        id: '17',
        title: 'Health Policy Dialogue Summary',
        category: 'summaries',
        type: 'pdf',
        description: 'Summary of key discussions and recommendations from health policy dialogue.',
        fileUrl: '/resources/summaries/health-policy.pdf',
        fileSize: '1.5 MB',
        publishDate: '2024-02-18',
        downloadCount: 198,
        tags: ['health-policy', 'dialogue', 'summary', 'recommendations']
    },
    {
        id: '18',
        title: 'Education Reform Policy Summary',
        category: 'summaries',
        type: 'pdf',
        description: 'Comprehensive summary of education reform policy discussions and outcomes.',
        fileUrl: '/resources/summaries/education-reform.pdf',
        fileSize: '1.9 MB',
        publishDate: '2024-03-12',
        downloadCount: 167,
        tags: ['education', 'policy', 'reform', 'summary']
    },

    // Learning Briefs
    {
        id: '19',
        title: 'Research Impact Assessment Brief',
        category: 'briefs',
        type: 'pdf',
        description: 'Brief on methodologies for assessing research impact and outcomes.',
        fileUrl: '/resources/briefs/impact-assessment.pdf',
        fileSize: '1.2 MB',
        publishDate: '2024-01-22',
        downloadCount: 234,
        tags: ['impact-assessment', 'research', 'methodology', 'brief']
    },
    {
        id: '20',
        title: 'Community-Based Research Brief',
        category: 'briefs',
        type: 'pdf',
        description: 'Learning brief on community-based participatory research approaches.',
        fileUrl: '/resources/briefs/community-research.pdf',
        fileSize: '1.4 MB',
        publishDate: '2024-02-08',
        downloadCount: 189,
        tags: ['community', 'participatory', 'research', 'brief']
    },

    // Datasets/Dashboards
    {
        id: '21',
        title: 'Public Health Dataset 2024',
        category: 'datasets',
        type: 'dataset',
        description: 'Comprehensive public health dataset with demographic and health indicators.',
        fileUrl: '/resources/datasets/health-2024.csv',
        fileSize: '15.6 MB',
        publishDate: '2024-03-25',
        downloadCount: 345,
        tags: ['public-health', 'dataset', 'demographic', 'indicators']
    },
    {
        id: '22',
        title: 'Research Performance Dashboard',
        category: 'datasets',
        type: 'tool',
        description: 'Interactive dashboard for monitoring research performance metrics.',
        fileUrl: '/resources/datasets/research-dashboard.zip',
        fileSize: '12.3 MB',
        publishDate: '2024-03-18',
        downloadCount: 278,
        tags: ['dashboard', 'performance', 'metrics', 'interactive']
    }
];