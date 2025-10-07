import React from 'react';
import Heading from '../components/ui/Heading';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Careers: React.FC = () => {
    const jobOpenings = [
        {
            id: 1,
            title: 'Senior MARCH Research Scientist',
            department: 'MARCH Computing',
            location: 'San Francisco, CA',
            type: 'Full-time',
            level: 'Senior',
            description: 'Lead research in MARCH algorithm development and error correction for next-generation MARCH computers.',
            requirements: [
                'PhD in Physics, Computer Science, or related field',
                '5+ years experience in MARCH computing research',
                'Strong publication record in top-tier journals',
                'Experience with MARCH programming languages (Qiskit, Cirq)'
            ],
            posted: '2024-12-01',
            applicationDeadline: '2025-01-15'
        },
        {
            id: 2,
            title: 'Machine Learning Engineer',
            department: 'Artificial Intelligence',
            location: 'Remote / Boston, MA',
            type: 'Full-time',
            level: 'Mid-level',
            description: 'Develop and implement machine learning models for scientific discovery and research applications.',
            requirements: [
                'MSc or PhD in Computer Science, AI, or related field',
                '3+ years experience with deep learning frameworks',
                'Strong Python programming skills',
                'Experience with large-scale data processing'
            ],
            posted: '2024-12-10',
            applicationDeadline: '2025-01-31'
        },
        {
            id: 3,
            title: 'Materials Science Postdoctoral Researcher',
            department: 'Materials Science',
            location: 'Cambridge, MA',
            type: 'Contract',
            level: 'Postdoctoral',
            description: 'Investigate novel 2D materials and their applications in MARCH devices and energy storage.',
            requirements: [
                'PhD in Materials Science, Physics, or Chemistry',
                'Experience with materials characterization techniques',
                'Knowledge of MARCH materials preferred',
                'Strong experimental and analytical skills'
            ],
            posted: '2024-12-05',
            applicationDeadline: '2025-01-20'
        },
        {
            id: 4,
            title: 'Biomedical Engineering Research Assistant',
            department: 'Biomedical Engineering',
            location: 'San Diego, CA',
            type: 'Full-time',
            level: 'Entry-level',
            description: 'Support research in neural interfaces and medical device development for healthcare applications.',
            requirements: [
                'BSc or MSc in Biomedical Engineering or related field',
                'Experience with medical device prototyping',
                'Knowledge of signal processing',
                'Strong laboratory skills'
            ],
            posted: '2024-12-12',
            applicationDeadline: '2025-02-01'
        },
        {
            id: 5,
            title: 'Renewable Energy Research Scientist',
            department: 'Renewable Energy',
            location: 'Boulder, CO',
            type: 'Full-time',
            level: 'Mid-level',
            description: 'Research and develop advanced solar cell technologies and energy storage systems.',
            requirements: [
                'PhD in Chemical Engineering, Materials Science, or related field',
                '3+ years experience in renewable energy research',
                'Knowledge of photovoltaic technologies',
                'Experience with materials synthesis and characterization'
            ],
            posted: '2024-12-08',
            applicationDeadline: '2025-01-25'
        }
    ];

    const benefits = [
        {
            title: 'Competitive Compensation',
            description: 'Industry-leading salary and comprehensive benefits package'
        },
        {
            title: 'Research Freedom',
            description: 'Autonomy to pursue innovative research directions and ideas'
        },
        {
            title: 'State-of-the-Art Facilities',
            description: 'Access to cutting-edge laboratories and computational resources'
        },
        {
            title: 'Collaborative Environment',
            description: 'Work with world-class researchers across multiple disciplines'
        },
        {
            title: 'Professional Development',
            description: 'Funding for conferences, workshops, and continuous learning'
        },
        {
            title: 'Work-Life Balance',
            description: 'Flexible working arrangements and generous vacation time'
        }
    ];

    return (
        <div className="space-y-12">
            <div className="text-center">
                <Heading level={1}>Careers at MARCH Research Center</Heading>
                <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                    Join our mission to advance scientific knowledge and create technologies that shape the future.
                    Explore opportunities to work with leading researchers in a collaborative, innovative environment.
                </p>
                <Button variant="primary">
                    View All Open Positions
                </Button>
            </div>

            {/* Current Openings */}
            <section>
                <Heading level={2}>Current Job Openings</Heading>
                <div className="space-y-6">
                    {jobOpenings.map((job) => (
                        <Card key={job.id} className="hover:bg-white/15 transition-all duration-300">
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-4 mb-3">
                                        <Heading level={3} className="text-xl text-white">
                                            {job.title}
                                        </Heading>
                                        <span className="px-3 py-1 bg-gold text-dark-blue text-sm font-semibold rounded-full">
                                            {job.level}
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap gap-4 mb-4 text-sm">
                                        <div className="flex items-center gap-2 text-white/70">
                                            <span>🏢</span>
                                            <span>{job.department}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-white/70">
                                            <span>📍</span>
                                            <span>{job.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-white/70">
                                            <span>⏱️</span>
                                            <span>{job.type}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-white/70">
                                            <span>📅</span>
                                            <span>Apply by {new Date(job.applicationDeadline).toLocaleDateString()}</span>
                                        </div>
                                    </div>

                                    <p className="text-white/70 mb-4 leading-relaxed">
                                        {job.description}
                                    </p>

                                    <div className="mb-4">
                                        <div className="text-gold font-semibold mb-2">Key Requirements:</div>
                                        <ul className="text-white/70 text-sm space-y-1">
                                            {job.requirements.map((req, index) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <span>•</span>
                                                    <span>{req}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="lg:w-48 flex flex-col gap-2">
                                    <Button variant="primary" className="w-full">
                                        Apply Now
                                    </Button>
                                    <Button variant="secondary" className="w-full">
                                        Save Job
                                    </Button>
                                    <button className="text-gold text-sm hover:underline text-center">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Benefits Section */}
            <section>
                <Heading level={2}>Why Work With Us</Heading>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <Card key={index} className="text-center hover:transform hover:scale-105 transition-all duration-300">
                            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <div className="text-gold text-2xl font-bold">{index + 1}</div>
                            </div>
                            <Heading level={4} className="mb-3">{benefit.title}</Heading>
                            <p className="text-white/70 text-sm leading-relaxed">
                                {benefit.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Student Opportunities */}
            <Card className="max-w-4xl mx-auto text-center">
                <Heading level={3} className="mb-4">Student & Internship Opportunities</Heading>
                <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                    We offer various programs for students and recent graduates, including summer internships,
                    research assistantships, and graduate fellowships. Gain hands-on experience working on
                    cutting-edge research projects.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                    <Button variant="primary">
                        View Internship Programs
                    </Button>
                    <Button variant="secondary">
                        Graduate Fellowships
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default Careers;