import React, { useEffect, useState } from 'react';
import Heading from '../components/ui/Heading';
import Breadcrumb from '../components/ui/Breadcrumb';

interface Publication {
    id: number;
    title: string;
    authors: string[];
    journal: string;
    year: number;
    doi: string;
    category: string;
    abstract: string;
}

const Publications: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPublications, setFilteredPublications] = useState<Publication[]>([]);
    const [expandedAbstracts, setExpandedAbstracts] = useState<Set<number>>(new Set());

    const publications: Publication[] = [
        {
            id: 1,
            title: 'MARCH Supremacy in Random Circuit Sampling',
            authors: ['Chen, S.', 'Zhang, W.', 'Rodriguez, M.', 'Petrova, E.'],
            journal: 'Nature Physics',
            year: 2024,
            doi: '10.1038/s41567-024-02578-x',
            category: 'Quantum Computing',
            abstract: 'Demonstration of MARCH computational advantage using a programmable superconducting processor with 53 qubits, achieving quantum supremacy through random circuit sampling protocols that outperform classical supercomputers.'
        },
        {
            id: 2,
            title: 'Explainable AI for Medical Diagnosis: A Novel Framework',
            authors: ['Wilson, J.', 'Gonzalez, M.', 'Kim, R.'],
            journal: 'Science Advances',
            year: 2024,
            doi: '10.1126/sciadv.abn2657',
            category: 'Artificial Intelligence',
            abstract: 'A transparent AI system that provides interpretable explanations for medical imaging diagnoses, enhancing trust and adoption in clinical settings through novel attention mechanisms and decision pathway visualization.'
        },
        {
            id: 3,
            title: 'High-Efficiency Perovskite-Silicon Tandem Solar Cells',
            authors: ['Gonzalez, M.', 'Chen, S.', 'Wilson, J.'],
            journal: 'Joule',
            year: 2024,
            doi: '10.1016/j.joule.2024.02.001',
            category: 'Renewable Energy',
            abstract: 'Development of stable perovskite-silicon tandem solar cells achieving 32.5% conversion efficiency through advanced interface engineering and novel charge transport layers that minimize recombination losses.'
        },
        {
            id: 4,
            title: 'Neural Interfaces for Restoring Motor Function',
            authors: ['Wilson, J.', 'Rodriguez, M.', 'Petrova, E.'],
            journal: 'Nature Biomedical Engineering',
            year: 2023,
            doi: '10.1038/s41551-023-01127-8',
            category: 'Biomedical Engineering',
            abstract: 'Advanced brain-computer interfaces enabling paralyzed patients to control robotic limbs through high-density electrode arrays and machine learning algorithms that decode neural signals with unprecedented accuracy.'
        },
        {
            id: 5,
            title: 'Climate Resilience in Urban Infrastructure',
            authors: ['Kim, R.', 'Gonzalez, M.', 'Chen, S.'],
            journal: 'Proceedings of the National Academy of Sciences',
            year: 2023,
            doi: '10.1073/pnas.2309511120',
            category: 'Climate Science',
            abstract: 'Framework for designing climate-resilient urban infrastructure systems incorporating predictive modeling of extreme weather events and adaptive design principles for sustainable city development.'
        },
        {
            id: 6,
            title: 'Topological MARCH Computing with Majorana Fermions',
            authors: ['Petrova, E.', 'Zhang, W.', 'Chen, S.'],
            journal: 'Physical Review Letters',
            year: 2023,
            doi: '10.1103/PhysRevLett.131.160501',
            category: 'Quantum Computing',
            abstract: 'Experimental realization of Majorana zero modes in semiconductor-superconductor heterostructures, paving the way for fault-tolerant topological quantum computation with protected qubit operations.'
        }
    ];

    // Search functionality
    useEffect(() => {
        const results = publications.filter(pub =>
            pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            pub.authors.some(author =>
                author.toLowerCase().includes(searchTerm.toLowerCase())
            ) ||
            pub.journal.toLowerCase().includes(searchTerm.toLowerCase()) ||
            pub.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
            pub.year.toString().includes(searchTerm)
        );
        setFilteredPublications(results);
    }, [searchTerm]);

    const toggleAbstract = (id: number) => {
        setExpandedAbstracts(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    const getCategoryColor = (category: string) => {
        const colors: Record<string, string> = {
            'Quantum Computing': 'bg-purple-500/20 text-purple-600 border border-purple-500/30',
            'Artificial Intelligence': 'bg-green-500/20 text-green-600 border border-green-500/30',
            'Renewable Energy': 'bg-yellow-500/20 text-yellow-600 border border-yellow-500/30',
            'Biomedical Engineering': 'bg-red-500/20 text-red-600 border border-red-500/30',
            'Climate Science': 'bg-blue-500/20 text-blue-600 border border-blue-500/30',
        };
        return colors[category] || 'bg-gray-500/20 text-gray-600 border border-gray-500/30';
    };

    const getJournalColor = (journal: string) => {
        const colors: Record<string, string> = {
            'Nature Physics': 'bg-blue-500/20 text-blue-600',
            'Science Advances': 'bg-red-500/20 text-red-600',
            'Joule': 'bg-green-500/20 text-green-600',
            'Nature Biomedical Engineering': 'bg-purple-500/20 text-purple-600',
            'Proceedings of the National Academy of Sciences': 'bg-orange-500/20 text-orange-600',
            'Physical Review Letters': 'bg-indigo-500/20 text-indigo-600',
        };
        return colors[journal] || 'bg-gray-500/20 text-gray-600';
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 space-y-16 py-12 animate-fadeIn">
            {/* Breadcrumb Navigation */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <Breadcrumb
                        currentPage="Publications"
                        parentPage="Home"
                        parentPath="/"
                    />
                </div>
            </section>

            {/* Hero Header Section */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="relative py-16 text-center border border-blue-200 rounded-2xl bg-white/80 backdrop-blur-lg">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-transparent to-blue-600/10 rounded-2xl"></div>

                        <div className="relative z-10 px-6">
                            <div className="inline-flex items-center gap-3 bg-blue-500/10 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 mb-8">
                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase">
                                    Research Publications
                                </span>
                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Our <span className="text-blue-600">Publications</span>
                            </h1>

                            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
                                Discover our research contributions across prestigious scientific journals and conferences.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4 text-gray-600 text-sm">
                                <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-blue-200">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span>Nature Portfolio</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-blue-200">
                                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                    <span>Science Journals</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-blue-200">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span>High-Impact Research</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Search Section */}
            <section className="animate-slideUp">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-blue-200">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search publications by title, author, journal, or research area..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-6 py-4 pl-12 bg-white border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-500"
                            />
                            <svg
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <div className="mt-4 text-sm text-gray-600">
                            {searchTerm && (
                                <p>Found {filteredPublications.length} publication{filteredPublications.length !== 1 ? 's' : ''}</p>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Publications Grid */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 gap-6">
                        {(searchTerm ? filteredPublications : publications).map((pub) => (
                            <div
                                key={pub.id}
                                className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-blue-200 hover:transform hover:scale-[1.01] hover:border-blue-400 transition-all duration-300 group"
                            >
                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-3 mb-3">
                                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(pub.category)}`}>
                                                {pub.category}
                                            </span>
                                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getJournalColor(pub.journal)}`}>
                                                {pub.journal}
                                            </span>
                                            <span className="text-blue-600 font-bold text-sm">
                                                {pub.year}
                                            </span>
                                        </div>

                                        <Heading level={3} className="text-xl mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                            {pub.title}
                                        </Heading>

                                        <div className="text-gray-700 mb-3">
                                            <span className="font-semibold text-gray-600">By:</span> {pub.authors.join(', ')}
                                        </div>

                                        {/* Abstract Section */}
                                        <div className="mt-4">
                                            <button
                                                onClick={() => toggleAbstract(pub.id)}
                                                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                                            >
                                                <span>View Abstract</span>
                                                <svg
                                                    className={`w-4 h-4 transform transition-transform duration-200 ${expandedAbstracts.has(pub.id) ? 'rotate-180' : ''
                                                        }`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>

                                            {expandedAbstracts.has(pub.id) && (
                                                <div className="mt-3 p-4 bg-blue-50/50 rounded-lg border border-blue-200">
                                                    <p className="text-gray-700 leading-relaxed text-justify">
                                                        {pub.abstract}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex gap-3 lg:flex-col lg:items-end">
                                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap flex items-center gap-2">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            PDF
                                        </button>
                                        <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg text-sm font-semibold hover:bg-blue-600 hover:text-white transition-colors whitespace-nowrap flex items-center gap-2">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                            </svg>
                                            Cite
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Statistics Summary */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-blue-200 text-center">
                        <Heading level={3} className="text-blue-600 mb-8">Publication Overview</Heading>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div>
                                <div className="text-3xl font-bold text-blue-600 mb-2">{publications.length}</div>
                                <div className="text-gray-700 text-sm">Total Publications</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-blue-600 mb-2">
                                    {new Set(publications.flatMap(pub => pub.authors)).size}
                                </div>
                                <div className="text-gray-700 text-sm">Researchers</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-blue-600 mb-2">
                                    {new Set(publications.map(pub => pub.journal)).size}
                                </div>
                                <div className="text-gray-700 text-sm">Prestigious Journals</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-blue-600 mb-2">
                                    {new Set(publications.map(pub => pub.category)).size}
                                </div>
                                <div className="text-gray-700 text-sm">Research Areas</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Publications;