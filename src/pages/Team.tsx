import React from 'react';
import Heading from '../components/ui/Heading';
import Card from '../components/ui/Card';
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
            target.classList.add('bg-gradient-to-br', 'from-gold/20', 'to-dark-blue');
            const innerDiv = target.querySelector('div');
            if (innerDiv) {
                innerDiv.className = 'text-gold text-4xl';
                if (target.classList.contains('rounded-full')) {
                    innerDiv.textContent = target.getAttribute('data-initials') || 'DR';
                } else {
                    innerDiv.textContent = '👤';
                }
            }
        }
    };

    return (
        <div className="space-y-16 animate-fadeIn">
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
                    <div className="relative py-12 text-center border border-white/20 rounded-2xl bg-white/5 backdrop-blur-sm">
                        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5 rounded-2xl"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent rounded-2xl"></div>

                        <div className="relative z-10 px-6">
                            <div className="inline-flex items-center gap-3 bg-gold/10 backdrop-blur-sm border border-gold/30 rounded-full px-6 py-3 mb-8">
                                <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                                <span className="text-gold text-sm font-semibold tracking-wider uppercase">
                                    World-Class Research Team
                                </span>
                                <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                Meet Our <span className="text-gold">Expert</span>
                                <br className="hidden lg:block" /> Research Team
                            </h1>

                            <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto mb-8 leading-relaxed">
                                World-class researchers, scientists, and innovators dedicated to pushing the boundaries
                                of knowledge and creating impactful solutions for global challenges.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4 text-white/70 text-sm">
                                <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/20">
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    <span>Interdisciplinary Expertise</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/20">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                    <span>Global Research Network</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/20">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
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
                        {fullTeamMembers.map((member, index) => (
                            <Card
                                key={member.id}
                                className={`text-center group hover:transform hover:scale-105 transition-all duration-500 overflow-hidden animate-fadeIn delay-${index * 100}`}
                            >
                                {/* Profile Image with fallback */}
                                <div
                                    className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-gold/30 group-hover:border-gold/50 transition-all duration-500 bg-cover bg-center transform group-hover:scale-110 flex items-center justify-center"
                                    style={{ backgroundImage: `url(${member.image})` }}
                                    onError={handleImageError}
                                    data-initials={member.name.split(' ').map(n => n[0]).join('')}
                                >
                                    <div className="text-gold text-2xl font-bold opacity-0">
                                        {member.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-dark-blue/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <Heading level={3} className="text-xl mb-1 group-hover:text-gold transition-colors duration-300">
                                    {member.name}
                                </Heading>
                                <div className="text-gold font-medium text-sm mb-2">{member.role}</div>
                                <div className="text-white/70 text-sm mb-4">{member.department}</div>

                                <div className="space-y-3 text-left">
                                    <div>
                                        <div className="text-gold text-xs font-semibold mb-1">EDUCATION</div>
                                        {member.education.map((edu, index) => (
                                            <div key={index} className="text-white/70 text-xs mb-1">{edu}</div>
                                        ))}
                                    </div>

                                    <div className="pt-2 border-t border-white/20">
                                        <div className="text-gold text-xs font-semibold">CONTACT</div>
                                        <div className="text-white/70 text-xs">{member.email}</div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Our Team Section */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center">
                        <Card className="max-w-2xl mx-auto p-8 group hover:transform hover:scale-[1.02] transition-all duration-500">
                            <Heading level={3} className="mb-4 text-2xl">Join Our Team</Heading>
                            <p className="text-white/70 mb-6 text-lg leading-relaxed">
                                We're always looking for talented researchers and scientists to join our mission.
                                Explore current opportunities and become part of our innovative team.
                            </p>
                            <Button
                                variant="primary"
                                className="px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                onClick={() => navigate('/careers')}
                            >
                                View Career Opportunities
                            </Button>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;