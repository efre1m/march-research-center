import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Users, BookOpen, Cpu, Heart, Zap, Calendar, Home } from 'lucide-react';

// Define types for the project data
interface Project {
    id: number;
    title: string;
    description: string;
    fullDescription: string;
    lead: string;
    team: string[];
    funder: string;
    startDate: string;
    endDate: string;
    impact: string;
}

// Mock data - replace with your actual import
const researchAreas: Project[] = [
    {
        id: 1,
        title: "MARCH Computing Research",
        description: "Advanced computing research for maternal healthcare",
        fullDescription: "This project focuses on developing advanced computing solutions to improve maternal healthcare outcomes through data analysis and predictive modeling.",
        lead: "Dr. Sarah Chen",
        team: ["Dr. Sarah Chen", "Prof. Michael Rodriguez", "Dr. Amina Jalloh", "Dr. James Wilson"],
        funder: "National Science Foundation",
        startDate: "2023-01-01",
        endDate: "2025-12-31",
        impact: "This research aims to reduce maternal mortality rates by 30% through early detection and intervention systems."
    },
    {
        id: 2,
        title: "AI-Powered Diagnostics",
        description: "Artificial intelligence for early disease detection",
        fullDescription: "Developing AI algorithms to detect maternal health complications at early stages using machine learning and medical imaging.",
        lead: "Prof. Michael Rodriguez",
        team: ["Prof. Michael Rodriguez", "Dr. Lisa Zhang", "Dr. Robert Kim"],
        funder: "Global Health Initiative",
        startDate: "2023-03-01",
        endDate: "2024-12-31",
        impact: "Expected to improve diagnostic accuracy by 40% and reduce false positives in maternal health screenings."
    }
];

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
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 text-center border border-blue-200">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
                    <p className="text-gray-700 mb-6">The project you're looking for doesn't exist.</p>
                    <button
                        onClick={() => navigate('/projects')}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
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
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 space-y-16 py-12 animate-fadeIn">
            {/* Breadcrumb Navigation */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <nav className="flex items-center space-x-2 text-sm mb-8 animate-fadeIn">
                        {/* Home Link */}
                        <button
                            onClick={() => navigate('/')}
                            className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-all duration-300 group hover:scale-105"
                        >
                            <Home className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                            <span className="font-medium">Home</span>
                        </button>

                        {/* Separator */}
                        <span className="text-gray-400">/</span>

                        {/* Projects Link */}
                        <button
                            onClick={() => navigate('/projects')}
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            Research Projects
                        </button>

                        {/* Separator */}
                        <span className="text-gray-400">/</span>

                        {/* Current Page */}
                        <span className="text-blue-600 font-semibold flex items-center space-x-1">
                            <span>{project.title}</span>
                        </span>
                    </nav>
                </div>
            </section>

            {/* Project Hero Section */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-blue-200 relative overflow-hidden group hover:transform hover:scale-[1.01] transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-transparent to-blue-600/5 opacity-60"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent"></div>

                        <div className="relative z-10">
                            <div className="flex flex-col lg:flex-row items-start gap-6 mb-6">
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 text-white">
                                    {getProjectIcon(project.title)}
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                                        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 lg:mb-0">
                                            {project.title}
                                        </h1>
                                        <div className="flex items-center gap-3">
                                            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${status === 'Active'
                                                ? 'bg-green-500/20 text-green-600 border border-green-500/30'
                                                : status === 'Completed'
                                                    ? 'bg-blue-500/20 text-blue-600 border border-blue-500/30'
                                                    : 'bg-yellow-500/20 text-yellow-600 border border-yellow-500/30'
                                                }`}>
                                                {status}
                                            </span>
                                            <span className="text-blue-600 font-bold text-lg">{progress}% Complete</span>
                                        </div>
                                    </div>

                                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                        {project.fullDescription}
                                    </p>

                                    {/* Project Details */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                        <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                                            <Users className="text-blue-600" size={20} />
                                            <div>
                                                <div className="text-blue-600 font-semibold text-sm">Research Lead</div>
                                                <div className="text-gray-900">{project.lead}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                                            <Calendar className="text-blue-600" size={20} />
                                            <div>
                                                <div className="text-blue-600 font-semibold text-sm">Timeline</div>
                                                <div className="text-gray-900">{formatDate(project.startDate)} - {formatDate(project.endDate)}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                                            <BookOpen className="text-blue-600" size={20} />
                                            <div>
                                                <div className="text-blue-600 font-semibold text-sm">Funder</div>
                                                <div className="text-gray-900">{project.funder}</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Impact Statement */}
                                    <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                                        <h3 className="text-blue-600 text-lg font-bold mb-3">Project Impact</h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            {project.impact}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Research Team Section */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-blue-200 group hover:transform hover:scale-[1.02] transition-all duration-300">
                        <div className="flex items-center gap-3 mb-6">
                            <Users className="text-blue-600" size={24} />
                            <h2 className="text-blue-600 text-xl font-bold">Research Team</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {project.team.map((member: string, index: number) => (
                                <div key={index} className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-300">
                                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-gray-900 font-semibold">{member}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Other Research Projects */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-blue-200 group hover:transform hover:scale-[1.02] transition-all duration-300">
                        <h2 className="text-blue-600 text-xl font-bold mb-6">Explore Other Research Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {researchAreas
                                .filter(p => p.id !== project.id)
                                .map((otherProject: Project) => {
                                    const { status: otherStatus, progress: otherProgress } = getProjectStatus(otherProject.startDate, otherProject.endDate);

                                    return (
                                        <Link
                                            key={otherProject.id}
                                            to={`/projects/${otherProject.id}`}
                                            className="block p-6 border border-blue-200 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 group"
                                        >
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors text-blue-600">
                                                    {getProjectIcon(otherProject.title)}
                                                </div>
                                                <div>
                                                    <h3 className="text-gray-900 group-hover:text-blue-600 transition-colors text-lg font-bold">
                                                        {otherProject.title}
                                                    </h3>
                                                    <div className="text-blue-600 text-sm font-semibold">
                                                        {otherProgress}% Complete • {otherStatus}
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-gray-700 text-sm line-clamp-3">
                                                {otherProject.description}
                                            </p>
                                            <div className="mt-3 text-blue-600 text-sm font-semibold">
                                                Click to view details →
                                            </div>
                                        </Link>
                                    );
                                })}
                        </div>
                        <div className="text-center mt-6 pt-6 border-t border-blue-200">
                            <Link
                                to="/projects"
                                className="inline-flex items-center gap-2 px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
                            >
                                View All Research Projects
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetail;