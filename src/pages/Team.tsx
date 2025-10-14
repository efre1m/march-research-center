import React from 'react';
import Heading from '../components/ui/Heading';
import Button from '../components/ui/Button';
import Breadcrumb from '../components/ui/Breadcrumb';
import { useNavigate } from 'react-router-dom';
import { fullTeamMembers } from '../data/teamdata';

const Team: React.FC = () => {
    const navigate = useNavigate();

    // Handle image error - fallback to gradient background
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement | HTMLDivElement, Event>) => {
        const target = e.target as HTMLElement;
        if (target.style.backgroundImage) {
            target.style.backgroundImage = 'none';
            target.classList.add('bg-gradient-to-br', 'from-blue-400', 'to-blue-600');
            const innerDiv = target.querySelector('div');
            if (innerDiv) {
                innerDiv.className = 'text-white text-2xl font-bold';
                if (target.classList.contains('rounded-full')) {
                    innerDiv.textContent = target.getAttribute('data-initials') || 'DR';
                } else {
                    innerDiv.textContent = '👤';
                }
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 space-y-16 py-12 animate-fadeIn">
            {/* Breadcrumb Navigation */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <Breadcrumb
                        currentPage="Our Team"
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
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-2xl"></div>

                        <div className="relative z-10 px-6">
                            <div className="inline-flex items-center gap-3 bg-blue-500/10 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 mb-8">
                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase">
                                    World-Class Research Team
                                </span>
                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Meet Our <span className="text-blue-600">Expert</span>
                                <br className="hidden lg:block" /> Research Team
                            </h1>

                            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed text-justify">
                                World-class researchers, scientists, and innovators dedicated to pushing the boundaries
                                of knowledge and creating impactful solutions for global challenges.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4 text-gray-600 text-sm">
                                <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-blue-200">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span>Interdisciplinary Expertise</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-blue-200">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span>Global Research Network</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-blue-200">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                    <span>Innovation-Driven Approach</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Grid Section */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {fullTeamMembers.map((member) => (
                            <div
                                key={member.id}
                                className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 text-center group hover:transform hover:scale-105 transition-all duration-500 overflow-hidden animate-fadeIn border border-blue-200 hover:border-blue-400"
                            >
                                {/* Profile Image with fallback */}
                                <div
                                    className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-blue-300 group-hover:border-blue-500 transition-all duration-500 bg-cover bg-center transform group-hover:scale-110 flex items-center justify-center"
                                    style={{ backgroundImage: `url(${member.image})` }}
                                    onError={handleImageError}
                                    data-initials={member.name.split(' ').map(n => n[0]).join('')}
                                >
                                    <div className="text-white text-2xl font-bold opacity-0">
                                        {member.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <Heading level={3} className="text-xl mb-1 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                    {member.name}
                                </Heading>
                                <div className="text-blue-600 font-medium text-sm mb-2">{member.role}</div>
                                <div className="text-gray-700 text-sm mb-4">{member.department}</div>

                                <div className="space-y-3 text-left">
                                    <div>
                                        <div className="text-blue-600 text-xs font-semibold mb-1">EDUCATION</div>
                                        {member.education.map((edu) => (
                                            <div key={edu} className="text-gray-700 text-xs mb-1 text-justify">{edu}</div>
                                        ))}
                                    </div>

                                    <div className="pt-2 border-t border-blue-200">
                                        <div className="text-blue-600 text-xs font-semibold">CONTACT</div>
                                        <div className="text-gray-700 text-xs">{member.email}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Our Team Section */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center">
                        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 max-w-2xl mx-auto group hover:transform hover:scale-[1.02] transition-all duration-500 border border-blue-200 hover:border-blue-400">
                            <Heading level={3} className="mb-4 text-2xl text-gray-900">Join Our Team</Heading>
                            <p className="text-gray-700 mb-6 text-lg leading-relaxed text-justify">
                                We're always looking for talented researchers and scientists to join our mission.
                                Explore current opportunities and become part of our innovative team.
                            </p>
                            <Button
                                variant="primary"
                                className="px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg bg-blue-600 hover:bg-blue-700"
                                onClick={() => navigate('/careers')}
                            >
                                View Career Opportunities
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;