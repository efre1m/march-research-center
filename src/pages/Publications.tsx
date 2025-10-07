import React from 'react';
import Heading from '../components/ui/Heading';
import Card from '../components/ui/Card';

const Publications: React.FC = () => {
    const publications = [
        {
            id: 1,
            title: 'MARCH Supremacy in Random Circuit Sampling',
            authors: ['Chen, S.', 'Zhang, W.', 'Rodriguez, M.', 'Petrova, E.'],
            journal: 'Nature Physics',
            year: 2024,
            volume: '20',
            pages: '112-118',
            doi: '10.1038/s41567-024-02578-x',
            abstract: 'Demonstration of MARCH computational advantage using a programmable superconducting processor with 53 qubits.'
        },
        {
            id: 2,
            title: 'Explainable AI for Medical Diagnosis: A Novel Framework',
            authors: ['Wilson, J.', 'Gonzalez, M.', 'Kim, R.'],
            journal: 'Science Advances',
            year: 2024,
            volume: '10',
            pages: 'eabn2657',
            doi: '10.1126/sciadv.abn2657',
            abstract: 'A transparent AI system that provides interpretable explanations for medical imaging diagnoses.'
        },
        {
            id: 3,
            title: 'High-Efficiency Perovskite-Silicon Tandem Solar Cells',
            authors: ['Gonzalez, M.', 'Chen, S.', 'Wilson, J.'],
            journal: 'Joule',
            year: 2024,
            volume: '8',
            pages: '1-15',
            doi: '10.1016/j.joule.2024.02.001',
            abstract: 'Development of stable perovskite-silicon tandem solar cells achieving 32.5% conversion efficiency.'
        },
        {
            id: 4,
            title: 'Neural Interfaces for Restoring Motor Function',
            authors: ['Wilson, J.', 'Rodriguez, M.', 'Petrova, E.'],
            journal: 'Nature Biomedical Engineering',
            year: 2023,
            volume: '7',
            pages: '1455-1468',
            doi: '10.1038/s41551-023-01127-8',
            abstract: 'Advanced brain-computer interfaces enabling paralyzed patients to control robotic limbs.'
        },
        {
            id: 5,
            title: 'Climate Resilience in Urban Infrastructure',
            authors: ['Kim, R.', 'Gonzalez, M.', 'Chen, S.'],
            journal: 'Proceedings of the National Academy of Sciences',
            year: 2023,
            volume: '120',
            pages: 'e2309511120',
            doi: '10.1073/pnas.2309511120',
            abstract: 'Framework for designing climate-resilient urban infrastructure systems.'
        },
        {
            id: 6,
            title: 'Topological MARCH Computing with Majorana Fermions',
            authors: ['Petrova, E.', 'Zhang, W.', 'Chen, S.'],
            journal: 'Physical Review Letters',
            year: 2023,
            volume: '131',
            pages: '160501',
            doi: '10.1103/PhysRevLett.131.160501',
            abstract: 'Experimental realization of Majorana zero modes in semiconductor-superconductor heterostructures.'
        }
    ];

    return (
        <div className="space-y-8">
            <div className="text-center mb-12">
                <Heading level={1}>Publications</Heading>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                    Peer-reviewed research papers, conference proceedings, and scientific publications
                    showcasing our contributions to advancing knowledge across disciplines.
                </p>
            </div>

            <div className="space-y-6">
                {publications.map((pub) => (
                    <Card key={pub.id} className="hover:bg-white/15 transition-all duration-300">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                            <div className="flex-1">
                                <Heading level={3} className="text-xl mb-2 text-white">
                                    {pub.title}
                                </Heading>
                                <div className="text-gold text-sm mb-2">
                                    {pub.authors.join(', ')}
                                </div>
                                <div className="text-white/70 text-sm mb-3">
                                    <span className="font-semibold">{pub.journal}</span>
                                    {pub.volume && `, ${pub.volume}`}
                                    {pub.pages && `: ${pub.pages}`}
                                    {` (${pub.year})`}
                                </div>
                                <div className="text-white/60 text-sm mb-3">
                                    DOI: <span className="font-mono">{pub.doi}</span>
                                </div>
                                <p className="text-white/70 text-sm leading-relaxed">
                                    {pub.abstract}
                                </p>
                            </div>
                            <div className="flex gap-2 lg:flex-col">
                                <button className="px-4 py-2 bg-gold text-dark-blue rounded-lg text-sm font-semibold hover:bg-[#e6c200] transition-colors">
                                    PDF
                                </button>
                                <button className="px-4 py-2 border border-gold text-gold rounded-lg text-sm font-semibold hover:bg-gold hover:text-dark-blue transition-colors">
                                    Cite
                                </button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="text-center mt-12">
                <div className="text-white/60 text-sm">
                    Showing {publications.length} recent publications •
                    <button className="text-gold hover:underline ml-2">
                        View Complete Publication List
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Publications;