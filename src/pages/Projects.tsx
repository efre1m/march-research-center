import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Heading from '../components/ui/Heading';
import Card from '../components/ui/Card';
import Breadcrumb from '../components/ui/Breadcrumb';
import { researchAreas, type Project } from '../data/projectdata';

const Projects: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Compute project status and progress based on dates
    const getProjectStatus = (startDate: string, endDate: string) => {
        const today = new Date();
        const start = new Date(startDate);
        const end = new Date(endDate);

        if (today < start) return { status: 'Planning', progress: 0 };
        if (today > end) return { status: 'Completed', progress: 100 };

        const totalDuration = end.getTime() - start.getTime();
        const elapsed = today.getTime() - start.getTime();
        const progress = Math.min(Math.max(Math.round((elapsed / totalDuration) * 100), 0), 100);

        return { status: 'Active', progress };
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Active': return 'bg-green-500/20 text-green-400 border border-green-500/30';
            case 'Completed': return 'bg-blue-500/20 text-blue-400 border border-blue-500/30';
            case 'Planning': return 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30';
            default: return 'bg-gray-500/20 text-gray-400 border border-gray-500/30';
        }
    };

    const getProgressColor = (progress: number) => {
        if (progress >= 70) return 'bg-green-500';
        if (progress >= 40) return 'bg-blue-500';
        return 'bg-yellow-500';
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="space-y-16 animate-fadeIn">
            {/* Breadcrumb Navigation */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <Breadcrumb
                        currentPage="Research Projects"
                        parentPage="Home"
                        parentPath="/"
                    />
                </div>
            </section>

            {/* Hero Header Section */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="relative py-12 text-center border border-white/20 rounded-2xl bg-white/5 backdrop-blur-sm">
                        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5 rounded-2xl"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent rounded-2xl"></div>

                        <div className="relative z-10 px-6">
                            <div className="inline-flex items-center gap-3 bg-gold/10 backdrop-blur-sm border border-gold/30 rounded-full px-6 py-3 mb-8">
                                <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                                <span className="text-gold text-sm font-semibold tracking-wider uppercase">
                                    Cutting-Edge Research
                                </span>
                                <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                            </div>

                            <Heading level={1} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                Our <span className="text-gold">Research</span>
                                <br className="hidden lg:block" /> Projects & Initiatives
                            </Heading>

                            <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto mb-8 leading-relaxed">
                                Explore our innovative research programs that are pushing the boundaries of knowledge
                                and creating real-world impact across multiple scientific disciplines.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4 text-white/70 text-sm">
                                <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/20">
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    <span>Interdisciplinary Research</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/20">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                    <span>Real-World Impact</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/20">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                    <span>Global Collaborations</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 gap-8">
                        {researchAreas.map((project: Project, index) => {
                            const { status, progress } = getProjectStatus(project.startDate, project.endDate);

                            return (
                                <Card
                                    key={project.id}
                                    className={`hover:transform hover:scale-[1.01] transition-all duration-300 overflow-hidden border border-white/10 animate-fadeIn delay-${index * 100}`}
                                >
                                    <div className="p-6">
                                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                                            <div className="flex-1">
                                                <Heading level={2} className="text-2xl mb-2 text-white">
                                                    {project.title}
                                                </Heading>
                                                <p className="text-white/80 text-lg leading-relaxed">
                                                    {project.description}
                                                </p>
                                            </div>
                                            <div className="flex flex-col items-end gap-2 mt-4 lg:mt-0">
                                                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(status)}`}>
                                                    {status}
                                                </span>
                                                <div className="text-gold text-lg font-bold">
                                                    {progress}% Complete
                                                </div>
                                            </div>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="mb-6">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-gold font-semibold text-sm">Project Progress</span>
                                                <span className="text-white/60 text-sm">{progress}%</span>
                                            </div>
                                            <div className="w-full bg-white/10 rounded-full h-3">
                                                <div
                                                    className={`h-3 rounded-full transition-all duration-500 ${getProgressColor(progress)}`}
                                                    style={{ width: `${progress}%` }}
                                                ></div>
                                            </div>
                                        </div>

                                        {/* Essential Details */}
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                                            <div>
                                                <div className="text-gold font-semibold mb-2">Research Lead</div>
                                                <div className="text-white">{project.lead}</div>
                                            </div>
                                            <div>
                                                <div className="text-gold font-semibold mb-2">Timeline</div>
                                                <div className="text-white">{formatDate(project.startDate)} - {formatDate(project.endDate)}</div>
                                            </div>
                                            <div>
                                                <div className="text-gold font-semibold mb-2">Funder</div>
                                                <div className="text-white">{project.funder}</div>
                                            </div>
                                        </div>

                                        {/* Action Button */}
                                        <div className="flex justify-center">
                                            <Link
                                                to={`/projects/${project.id}`}
                                                className="py-3 px-8 bg-gold text-dark-blue rounded-lg font-semibold hover:bg-[#e6c200] transition-all duration-300 text-center hover:scale-105"
                                            >
                                                View Detailed Project Report
                                            </Link>
                                        </div>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Statistics Summary */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <Card className="text-center group hover:transform hover:scale-[1.02] transition-all duration-500">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div>
                                <div className="text-3xl font-bold text-gold mb-2">{researchAreas.length}</div>
                                <div className="text-white/80 text-sm">Active Projects</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-gold mb-2">
                                    {researchAreas.reduce((total: number, project: Project) => total + project.team.length, 0)}
                                </div>
                                <div className="text-white/80 text-sm">Team Members</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-gold mb-2">
                                    {Math.round(researchAreas.reduce((total: number, project: Project) => {
                                        const { progress } = getProjectStatus(project.startDate, project.endDate);
                                        return total + progress;
                                    }, 0) / researchAreas.length)}%
                                </div>
                                <div className="text-white/80 text-sm">Average Progress</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-gold mb-2">
                                    {researchAreas.filter(project => {
                                        const { status } = getProjectStatus(project.startDate, project.endDate);
                                        return status === 'Active';
                                    }).length}
                                </div>
                                <div className="text-white/80 text-sm">Currently Active</div>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>
        </div>
    );
};

export default Projects;