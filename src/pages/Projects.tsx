import React from 'react';
import { Link } from 'react-router-dom';
import Heading from '../components/ui/Heading';
import Card from '../components/ui/Card';

const Projects: React.FC = () => {
    const researchAreas = [
        {
            id: 1,
            title: 'MARCH Computing & Information',
            description: 'Developing scalable MARCH processors, error correction codes, and MARCH algorithms for complex computational problems.',
            lead: 'Dr. Sarah Chen',
            projects: ['MARCH Error Correction', 'MARCH Machine Learning', 'Topological Qubits'],
            imageUrl: '/images/quantum-computing.jpg',
            duration: '2023-2026',
            budget: '$4.2M',
            status: 'Active'
        },
        {
            id: 2,
            title: 'Artificial Intelligence Research',
            description: 'Advanced machine learning models, neural architecture search, and AI ethics for responsible technology development.',
            lead: 'Dr. Michael Rodriguez',
            projects: ['Explainable AI', 'Reinforcement Learning', 'Computer Vision Systems'],
            imageUrl: '/images/ai-research.jpg',
            duration: '2024-2027',
            budget: '$3.8M',
            status: 'Planning'
        }
        // Add more projects as needed
    ];

    return (
        <div className="space-y-8">
            <div className="text-center mb-12">
                <Heading level={1}>Research Projects</Heading>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                    Cutting-edge research across multiple disciplines, pushing the boundaries of scientific knowledge
                    and technological innovation for a better future.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {researchAreas.map((area) => (
                    <Card
                        key={area.id}
                        className="hover:transform hover:scale-105 transition-all duration-300 flex flex-col h-full"
                    >
                        <div className="h-48 bg-gradient-to-br from-gold/20 to-dark-blue rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                            <div className="text-gold text-4xl font-bold">
                                {area.title.split(' ').map(w => w[0]).join('')}
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col">
                            <Heading level={3} className="text-xl mb-3">{area.title}</Heading>
                            <p className="text-white/70 text-sm mb-4 leading-relaxed flex-1">{area.description}</p>

                            <div className="mb-4">
                                <div className="text-gold text-sm font-semibold mb-2">Research Lead:</div>
                                <div className="text-white text-sm">{area.lead}</div>
                            </div>

                            <div className="mb-4">
                                <div className="text-gold text-sm font-semibold mb-2">Project Info:</div>
                                <div className="text-white/70 text-xs grid grid-cols-2 gap-1">
                                    <span>Duration: {area.duration}</span>
                                    <span>Budget: {area.budget}</span>
                                    <span className="col-span-2">
                                        Status:{' '}
                                        <span className={`font-semibold ${area.status === 'Active' ? 'text-green-400' : 'text-yellow-400'}`}>
                                            {area.status}
                                        </span>
                                    </span>
                                </div>
                            </div>

                            <div className="mb-4">
                                <div className="text-gold text-sm font-semibold mb-2">Active Projects:</div>
                                <div className="space-y-1">
                                    {area.projects.map((project, index) => (
                                        <div key={index} className="text-white/70 text-xs bg-white/5 rounded px-2 py-1">
                                            {project}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Link
                                to={`/projects/${area.id}`}
                                className="w-full mt-auto py-3 bg-gold text-dark-blue rounded-lg font-semibold hover:bg-[#e6c200] transition-colors duration-300 text-center"
                            >
                                View Project Details
                            </Link>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Projects;
