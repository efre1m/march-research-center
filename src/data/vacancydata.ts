export interface VacancyItem {
    id: number;
    title: string;
    location: string;
    department: string;
    jobType: string;
    description: string;
    postedAt: string;
    deadline: string;
    vacancyStatus: "opened" | "closed";
}

export const vacancies: VacancyItem[] = [
    {
        id: 1,
        title: "Senior Research Fellow - Maternal Health",
        location: "Boston, MA",
        department: "Research & Innovation",
        jobType: "Full-time",
        description: "Lead innovative research projects in maternal healthcare with extensive experience in clinical research.",
        postedAt: "Jan 15, 2024",
        deadline: "2024-03-15",
        vacancyStatus: "opened"
    },
    {
        id: 2,
        title: "Data Scientist - Health Analytics",
        location: "Remote",
        department: "Data Science",
        jobType: "Full-time",
        description: "Analyze maternal health data and develop predictive models for improving healthcare delivery.",
        postedAt: "Jan 10, 2024",
        deadline: "2024-02-28",
        vacancyStatus: "opened"
    },
    {
        id: 3,
        title: "Community Health Coordinator",
        location: "Nairobi, Kenya",
        department: "Community Outreach",
        jobType: "Contract",
        description: "Coordinate community health programs and build relationships with local healthcare providers.",
        postedAt: "Jan 8, 2024",
        deadline: "2024-02-20",
        vacancyStatus: "opened"
    },
    {
        id: 4,
        title: "Clinical Research Associate",
        location: "Addis Ababa, Ethiopia",
        department: "Clinical Research",
        jobType: "Full-time",
        description: "Manage clinical trial operations and ensure compliance with research protocols.",
        postedAt: "Jan 5, 2024",
        deadline: "2024-02-10",
        vacancyStatus: "closed"
    },
    {
        id: 5,
        title: "Public Health Program Manager",
        location: "Remote",
        department: "Program Management",
        jobType: "Full-time",
        description: "Oversee public health initiatives and coordinate with international partners.",
        postedAt: "Jan 3, 2024",
        deadline: "2024-03-01",
        vacancyStatus: "opened"
    },
    {
        id: 6,
        title: "Research Assistant - Field Studies",
        location: "Hawassa, Ethiopia",
        department: "Research & Innovation",
        jobType: "Contract",
        description: "Support field research activities and data collection in rural communities.",
        postedAt: "Dec 28, 2023",
        deadline: "2024-01-30",
        vacancyStatus: "closed"
    }
];