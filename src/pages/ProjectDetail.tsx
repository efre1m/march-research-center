import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Heading from '../components/ui/Heading';
import Card from '../components/ui/Card';

const allProjects = [
    {
        id: 1,
        title: 'MARCH Computing & Information',
        description: 'Developing scalable MARCH processors, error correction codes, and algorithms.',
        fullDescription:
            'This program advances MARCH computing with scalable processor architectures, robust error correction methodologies, and algorithms tailored for complex computational problems.',
        lead: 'Dr. Sarah Chen',
        team: ['Dr. Sarah Chen (Lead)', 'Dr. Wei Zhang', 'Dr. Elena Petrova', 'MSc. Alex Thompson'],
        projects: [
            { name: 'MARCH Error Correction', description: 'Developing novel error correction codes capable of handling decoherence in large-scale systems.', status: 'In Progress', progress: 75 },
            { name: 'MARCH Machine Learning', description: 'Implementing ML algorithms optimized for MARCH computing architectures.', status: 'Active', progress: 60 },
            { name: 'Topological Qubits', description: 'Research into topological qubit designs for improved stability and fault tolerance.', status: 'Planning', progress: 20 }
        ],
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
            'Development of scalable processor architecture',
            'Novel error correction codes with 99.9% accuracy',
            'Open-source MARCH algorithm library',
            'Peer-reviewed publications in top journals'
        ],
        imageUrl: '/images/projects/computing.jpg'
    },
    {
        id: 2,
        title: 'Artificial Intelligence Research',
        description: 'Advanced machine learning models, neural architecture search, and AI ethics.',
        fullDescription: 'This project develops next-gen AI models with focus on explainability, robustness, and ethical deployment.',
        lead: 'Dr. Michael Rodriguez',
        team: ['Dr. Michael Rodriguez (Lead)', 'Dr. Sarah Chen', 'PhD Candidate Ana Silva'],
        projects: [],
        timeline: { start: '2024', end: '2027', milestones: [{ date: 'Jun 2024', event: 'Initial Model Development' }] },
        budget: '$2.1M',
        funding: 'Tech Innovation Fund',
        outcomes: ['Explainable AI frameworks', 'Open-source RL toolkit'],
        imageUrl: ''
    }
];

const ProjectDetail: React.FC = () => {
    const navigate = useNavigate();
    const { projectId } = useParams<{ projectId: string }>();
    const project = allProjects.find(p => p.id === Number(projectId));

    if (!project) {
        return (
            <div className="text-center text-white/80 py-20">
                <p>Project not found.</p>
                <button
                    onClick={() => navigate('/projects')}
                    className="mt-6 px-4 py-2 bg-gold text-dark-blue rounded-lg font-semibold hover:bg-[#e6c200]"
                >
                    Back to Projects
                </button>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            {/* Header with Back Button */}
            <div className="flex items-center gap-4 mb-8">
                <button
                    onClick={() => navigate('/projects')}
                    className="flex items-center gap-2 px-4 py-2 text-gold border border-gold rounded-lg hover:bg-gold/10 transition-colors"
                >
                    <ArrowLeft size={20} />
                    Back to Projects
                </button>
                <div className="h-6 border-l border-gold/30"></div>
                <span className="text-white/60 text-sm">Project Detail</span>
            </div>

            {/* Project Header */}
            <Card className="relative overflow-hidden">
                {project.imageUrl ? (
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-30"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-dark-blue to-gold/10">
                        <div className="text-gold text-6xl font-bold">
                            {project.title.split(' ').map(w => w[0]).join('')}
                        </div>
                    </div>
                )}
                <div className="absolute inset-0 bg-dark-blue/60" />
                <div className="relative z-10 p-8">
                    <Heading level={1} className="text-3xl mb-4">{project.title}</Heading>
                    <p className="text-xl text-white/80 mb-6">{project.fullDescription}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                            <div className="text-gold font-semibold">Project Lead</div>
                            <div className="text-white">{project.lead}</div>
                        </div>
                        <div>
                            <div className="text-gold font-semibold">Timeline</div>
                            <div className="text-white">{project.timeline.start} - {project.timeline.end}</div>
                        </div>
                        <div>
                            <div className="text-gold font-semibold">Budget</div>
                            <div className="text-white">{project.budget}</div>
                        </div>
                    </div>
                </div>
            </Card>

            {/* Team + Funding */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                    <Heading level={2} className="text-xl mb-4 text-gold">Research Team</Heading>
                    <div className="space-y-2">
                        {project.team.map((member, index) => (
                            <div key={index} className="text-white/80 text-sm py-2 border-b border-white/10 last:border-b-0">{member}</div>
                        ))}
                    </div>
                </Card>
                <Card>
                    <Heading level={2} className="text-xl mb-4 text-gold">Funding & Support</Heading>
                    <div className="text-white/80 space-y-2">
                        <div className="font-semibold">{project.funding}</div>
                        <div className="text-sm">This project is supported by dedicated research funding.</div>
                    </div>
                </Card>
            </div>

            {/* Sub-projects */}
            {project.projects.length > 0 && (
                <Card>
                    <Heading level={2} className="text-xl mb-6 text-gold">Active Sub-projects</Heading>
                    <div className="space-y-6">
                        {project.projects.map((sub, index) => (
                            <div key={index} className="border border-gold/20 rounded-lg p-4">
                                <div className="flex justify-between items-start mb-3">
                                    <Heading level={3} className="text-lg text-white">{sub.name}</Heading>
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${sub.status === 'Active' ? 'bg-green-500/20 text-green-400' : sub.status === 'In Progress' ? 'bg-blue-500/20 text-blue-400' : 'bg-yellow-500/20 text-yellow-400'}`}>{sub.status}</span>
                                </div>
                                <p className="text-white/70 text-sm mb-4">{sub.description}</p>
                                <div className="flex items-center gap-4">
                                    <div className="flex-1 bg-white/10 rounded-full h-2">
                                        <div className="bg-gold h-2 rounded-full transition-all duration-300" style={{ width: `${sub.progress}%` }}></div>
                                    </div>
                                    <span className="text-white/60 text-sm">{sub.progress}%</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            )}

            {/* Outcomes */}
            <Card>
                <Heading level={2} className="text-xl mb-4 text-gold">Expected Outcomes & Impact</Heading>
                <ul className="space-y-3">
                    {project.outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start gap-3 text-white/80">
                            <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                            <span>{outcome}</span>
                        </li>
                    ))}
                </ul>
            </Card>
        </div>
    );
};

export default ProjectDetail;
