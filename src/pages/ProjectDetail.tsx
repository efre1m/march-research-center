import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Users, BookOpen, Cpu, Heart, Zap, Calendar } from 'lucide-react';
import Heading from '../components/ui/Heading';
import Card from '../components/ui/Card';
import Breadcrumb from '../components/ui/Breadcrumb';
import { researchAreas } from '../data/projectdata';

const ProjectDetail: React.FC = () => {
    const navigate = useNavigate();
    const { projectId } = useParams<{ projectId: string }>();
    const project = researchAreas.find(p => p.id === Number(projectId));

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

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (!project) {
        return (
            <div className="min-h-screen bg-dark-blue flex items-center justify-center">
                <div className="text-center text-white/80 py-20">
                    <Heading level={1} className="text-red-400 mb-4">Project Not Found</Heading>
                    <p className="text-xl mb-6">The project you're looking for doesn't exist.</p>
                    <button
                        onClick={() => navigate('/projects')}
                        className="px-6 py-3 bg-gold text-dark-blue rounded-lg font-semibold hover:bg-[#e6c200] transition-all duration-300"
                    >
                        Return to Projects
                    </button>
                </div>
            </div>
        );
    }

    const { status, progress } = getProjectStatus(project.startDate, project.endDate);

    // Get icon based on project type
    const getProjectIcon = (title: string) => {
        if (title.includes('MARCH') || title.includes('Computing')) return <Cpu size={32} />;
        if (title.includes('AI') || title.includes('Artificial')) return <Cpu size={32} />;
        if (title.includes('Energy')) return <Zap size={32} />;
        if (title.includes('Medical') || title.includes('Biomedical')) return <Heart size={32} />;
        return <BookOpen size={32} />;
    };

    return (
        <div className="min-h-screen bg-dark-blue space-y-16 animate-fadeIn">
            {/* Breadcrumb Navigation */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <Breadcrumb
                        currentPage={project.title}
                        parentPage="Research Projects"
                        parentPath="/projects"
                    />
                </div>
            </section>

            {/* Project Hero Section */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <Card className="relative overflow-hidden border border-gold/20 group hover:transform hover:scale-[1.01] transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-dark-blue to-gold/5 opacity-60"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent"></div>

                        <div className="relative z-10 p-8">
                            <div className="flex flex-col lg:flex-row items-start gap-6 mb-6">
                                <div className="w-20 h-20 bg-gradient-to-br from-gold to-gold/70 rounded-2xl flex items-center justify-center flex-shrink-0">
                                    {getProjectIcon(project.title)}
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                                        <Heading level={1} className="text-3xl lg:text-4xl font-bold text-white mb-2 lg:mb-0">
                                            {project.title}
                                        </Heading>
                                        <div className="flex items-center gap-3">
                                            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${status === 'Active'
                                                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                                : status === 'Completed'
                                                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                                    : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                                                }`}>
                                                {status}
                                            </span>
                                            <span className="text-gold font-bold text-lg">{progress}% Complete</span>
                                        </div>
                                    </div>

                                    <p className="text-xl text-white/80 leading-relaxed mb-6">
                                        {project.fullDescription}
                                    </p>

                                    {/* Project Details */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                        <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                                            <Users className="text-gold" size={20} />
                                            <div>
                                                <div className="text-gold font-semibold text-sm">Research Lead</div>
                                                <div className="text-white">{project.lead}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                                            <Calendar className="text-gold" size={20} />
                                            <div>
                                                <div className="text-gold font-semibold text-sm">Timeline</div>
                                                <div className="text-white">{formatDate(project.startDate)} - {formatDate(project.endDate)}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                                            <BookOpen className="text-gold" size={20} />
                                            <div>
                                                <div className="text-gold font-semibold text-sm">Funder</div>
                                                <div className="text-white">{project.funder}</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Impact Statement */}
                                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                                        <Heading level={3} className="text-gold text-lg mb-3">Project Impact</Heading>
                                        <p className="text-white/70 leading-relaxed">
                                            {project.impact}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Research Team Section */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <Card className="group hover:transform hover:scale-[1.02] transition-all duration-300">
                        <div className="flex items-center gap-3 mb-6">
                            <Users className="text-gold" size={24} />
                            <Heading level={2} className="text-gold text-xl">Research Team</Heading>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {project.team.map((member, index) => (
                                <div key={index} className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-gold/30 transition-all duration-300">
                                    <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-gold font-bold text-sm">{index + 1}</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-white font-semibold">{member}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </section>

            {/* Other Research Projects */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <Card className="group hover:transform hover:scale-[1.02] transition-all duration-300">
                        <Heading level={2} className="text-gold text-xl mb-6">Explore Other Research Projects</Heading>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {researchAreas
                                .filter(p => p.id !== project.id)
                                .map((otherProject) => {
                                    const { status: otherStatus, progress: otherProgress } = getProjectStatus(otherProject.startDate, otherProject.endDate);

                                    return (
                                        <Link
                                            key={otherProject.id}
                                            to={`/projects/${otherProject.id}`}
                                            className="block p-6 border border-white/10 rounded-xl hover:border-gold/50 hover:bg-white/5 transition-all duration-300 group"
                                        >
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="w-10 h-10 bg-gold/20 rounded-xl flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                                                    {getProjectIcon(otherProject.title)}
                                                </div>
                                                <div>
                                                    <Heading level={3} className="text-white group-hover:text-gold transition-colors text-lg">
                                                        {otherProject.title}
                                                    </Heading>
                                                    <div className="text-gold text-sm font-semibold">
                                                        {otherProgress}% Complete • {otherStatus}
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-white/70 text-sm line-clamp-3">
                                                {otherProject.description}
                                            </p>
                                            <div className="mt-3 text-gold text-sm font-semibold">
                                                Click to view details →
                                            </div>
                                        </Link>
                                    );
                                })}
                        </div>
                        <div className="text-center mt-6 pt-6 border-t border-white/10">
                            <Link
                                to="/projects"
                                className="inline-flex items-center gap-2 px-6 py-3 border border-gold text-gold rounded-lg hover:bg-gold/10 transition-all duration-300"
                            >
                                <ArrowLeft className="rotate-180" size={16} />
                                View All Research Projects
                            </Link>
                        </div>
                    </Card>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetail;