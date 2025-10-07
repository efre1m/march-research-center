import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Heading from '../components/ui/Heading';
import Card from '../components/ui/Card';
import ScrollToTop from '../components/ui/ScrollToTop';

const Projects: React.FC = () => {
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const researchAreas = [
        {
            id: 1,
            title: 'MARCH Computing & Information',
            description: 'Developing scalable MARCH processors, error correction codes, and MARCH algorithms for complex computational problems.',
            fullDescription: 'This research program focuses on advancing the frontiers of MARCH computing through the development of scalable processor architectures, robust error correction methodologies, and innovative algorithms tailored for complex computational problems.',
            lead: 'Dr. Sarah Chen',
            team: ['Dr. Sarah Chen (Lead)', 'Dr. Wei Zhang', 'Dr. Elena Petrova', 'MSc. Alex Thompson', 'PhD Candidate Maria Rodriguez'],
            timeline: {
                start: 'January 2023',
                end: 'December 2026',
                milestones: [
                    { date: 'Mar 2023', event: 'Project Initiation' },
                    { date: 'Sep 2023', event: 'First Prototype' },
                    { date: 'Jun 2024', event: 'Algorithm Optimization' },
                    { date: 'Dec 2025', event: 'System Integration' },
                    { date: 'Dec 2026', event: 'Final Implementation' }
                ]
            },
            budget: '$4.2M',
            funding: 'National Science Foundation',
            outcomes: [
                'Development of scalable MARCH processor architecture',
                'Novel error correction codes with 99.9% accuracy',
                'Open-source MARCH algorithm library',
                'Peer-reviewed publications in top journals'
            ],
            status: 'Active',
            progress: 52,
            imageUrl: '/images/quantum-computing.jpg'
        },
        {
            id: 2,
            title: 'Artificial Intelligence Research',
            description: 'Advanced machine learning models, neural architecture search, and AI ethics for responsible technology development.',
            fullDescription: 'This project focuses on developing next-generation AI models with emphasis on explainability, robustness, and ethical deployment across various domains.',
            lead: 'Dr. Michael Rodriguez',
            team: ['Dr. Michael Rodriguez (Lead)', 'Dr. Sarah Chen', 'PhD Candidate Ana Silva'],
            timeline: {
                start: 'March 2024',
                end: 'February 2027',
                milestones: [
                    { date: 'Jun 2024', event: 'Initial Model Development' },
                    { date: 'Dec 2024', event: 'Framework Completion' },
                    { date: 'Jun 2025', event: 'Testing Phase' },
                    { date: 'Dec 2026', event: 'Deployment Ready' }
                ]
            },
            budget: '$3.8M',
            funding: 'Tech Innovation Fund',
            outcomes: [
                'Explainable AI frameworks for healthcare',
                'Open-source reinforcement learning toolkit',
                'Real-time computer vision systems',
                'Ethical AI deployment guidelines'
            ],
            status: 'Active',
            progress: 47,
            imageUrl: '/images/ai-research.jpg'
        },
        {
            id: 3,
            title: 'Maternal Health Technology',
            description: 'Innovative medical devices and digital health solutions for improving maternal care in low-resource settings.',
            fullDescription: 'Developing affordable, accessible medical technologies and digital platforms to enhance maternal healthcare delivery in underserved communities.',
            lead: 'Dr. Elena Petrova',
            team: ['Dr. Elena Petrova (Lead)', 'Mr. Kbrom', 'Ms. Liya', 'Clinical Specialists'],
            timeline: {
                start: 'June 2023',
                end: 'May 2026',
                milestones: [
                    { date: 'Sep 2023', event: 'Requirements Analysis' },
                    { date: 'Mar 2024', event: 'Prototype Development' },
                    { date: 'Sep 2024', event: 'Field Testing' },
                    { date: 'Dec 2025', event: 'Clinical Trials' }
                ]
            },
            budget: '$2.5M',
            funding: 'Global Health Initiative',
            outcomes: [
                'Affordable portable ultrasound device',
                'Mobile health platform deployment',
                'Reduced maternal mortality rates',
                'Training programs for healthcare workers'
            ],
            status: 'Active',
            progress: 60,
            imageUrl: '/images/health-tech.jpg'
        }
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Active': return 'bg-green-500/20 text-green-400 border border-green-500/30';
            case 'In Progress': return 'bg-blue-500/20 text-blue-400 border border-blue-500/30';
            case 'Planning': return 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30';
            case 'Completed': return 'bg-gray-500/20 text-gray-400 border border-gray-500/30';
            default: return 'bg-gray-500/20 text-gray-400 border border-gray-500/30';
        }
    };

    const getProgressColor = (progress: number) => {
        if (progress >= 70) return 'bg-green-500';
        if (progress >= 40) return 'bg-blue-500';
        return 'bg-yellow-500';
    };

    return (
        <div className="space-y-8">
            {/* Scroll to top button */}
            <ScrollToTop />

            <div className="text-center mb-12">
                <Heading level={1}>Research Projects & Initiatives</Heading>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                    Comprehensive overview of our active research programs, their progress, and impact across multiple disciplines.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
                {researchAreas.map((project) => (
                    <Card
                        key={project.id}
                        className="hover:transform hover:scale-[1.01] transition-all duration-300 overflow-hidden border border-white/10"
                    >
                        <div className="flex flex-col lg:flex-row gap-6">
                            {/* Project Image/Icon */}
                            <div className="lg:w-1/4">
                                <div className="h-48 lg:h-full bg-gradient-to-br from-gold/20 to-dark-blue rounded-lg flex items-center justify-center overflow-hidden">
                                    <div className="text-gold text-4xl font-bold text-center p-4">
                                        {project.title.split(' ').map(w => w[0]).join('')}
                                    </div>
                                </div>
                            </div>

                            {/* Project Details */}
                            <div className="lg:w-3/4 p-4 lg:p-6">
                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                                    <div>
                                        <Heading level={2} className="text-2xl mb-2 text-white">
                                            {project.title}
                                        </Heading>
                                        <p className="text-white/80 text-lg mb-4 leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-end gap-2">
                                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(project.status)}`}>
                                            {project.status}
                                        </span>
                                        <div className="text-gold text-lg font-bold">
                                            {project.progress}% Complete
                                        </div>
                                    </div>
                                </div>

                                {/* Progress Bar */}
                                <div className="mb-6">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-gold font-semibold text-sm">Project Progress</span>
                                        <span className="text-white/60 text-sm">{project.progress}%</span>
                                    </div>
                                    <div className="w-full bg-white/10 rounded-full h-3">
                                        <div
                                            className={`h-3 rounded-full transition-all duration-500 ${getProgressColor(project.progress)}`}
                                            style={{ width: `${project.progress}%` }}
                                        ></div>
                                    </div>
                                </div>

                                {/* Project Details Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                                    <div>
                                        <div className="text-gold font-semibold mb-2">Research Lead</div>
                                        <div className="text-white">{project.lead}</div>
                                    </div>
                                    <div>
                                        <div className="text-gold font-semibold mb-2">Timeline</div>
                                        <div className="text-white">{project.timeline.start} - {project.timeline.end}</div>
                                    </div>
                                    <div>
                                        <div className="text-gold font-semibold mb-2">Budget & Funding</div>
                                        <div className="text-white">{project.budget}</div>
                                        <div className="text-white/70 text-sm">{project.funding}</div>
                                    </div>
                                </div>

                                {/* Team Members */}
                                <div className="mb-6">
                                    <div className="text-gold font-semibold mb-2">Team Members</div>
                                    <div className="flex flex-wrap gap-2">
                                        {project.team.map((member, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-white/5 rounded-full text-white/80 text-sm border border-white/10"
                                            >
                                                {member}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Expected Outcomes */}
                                <div className="mb-6">
                                    <div className="text-gold font-semibold mb-2">Expected Outcomes</div>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        {project.outcomes.map((outcome, index) => (
                                            <li key={index} className="flex items-start gap-2 text-white/80 text-sm">
                                                <span className="text-gold mt-1">•</span>
                                                {outcome}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Timeline Milestones */}
                                <div className="mb-6">
                                    <div className="text-gold font-semibold mb-3">Key Milestones</div>
                                    <div className="space-y-2">
                                        {project.timeline.milestones.map((milestone, index) => (
                                            <div key={index} className="flex items-center gap-4 text-sm">
                                                <div className="w-20 text-gold font-semibold">{milestone.date}</div>
                                                <div className="flex-1 text-white/80">{milestone.event}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Link
                                        to={`/projects/${project.id}`}
                                        className="flex-1 py-3 bg-gold text-dark-blue rounded-lg font-semibold hover:bg-[#e6c200] transition-all duration-300 text-center hover:scale-105"
                                        onClick={() => window.scrollTo(0, 0)}
                                    >
                                        View Detailed Project Report
                                    </Link>
                                    <button className="py-3 px-6 border border-gold text-gold rounded-lg font-semibold hover:bg-gold/10 transition-all duration-300 hover:scale-105">
                                        Download Summary
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Statistics Summary */}
            <Card className="text-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                        <div className="text-3xl font-bold text-gold mb-2">{researchAreas.length}</div>
                        <div className="text-white/80 text-sm">Active Projects</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-gold mb-2">
                            {researchAreas.reduce((total, project) => total + project.team.length, 0)}
                        </div>
                        <div className="text-white/80 text-sm">Team Members</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-gold mb-2">
                            {Math.round(researchAreas.reduce((total, project) => total + project.progress, 0) / researchAreas.length)}%
                        </div>
                        <div className="text-white/80 text-sm">Average Progress</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-gold mb-2">
                            ${researchAreas.reduce((total, project) => total + parseFloat(project.budget.replace('$', '').replace('M', '')), 0)}M
                        </div>
                        <div className="text-white/80 text-sm">Total Funding</div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Projects;