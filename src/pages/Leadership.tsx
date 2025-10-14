import React from 'react';

const Leadership: React.FC = () => {
    const leadershipPrinciples = [
        {
            icon: "🌱",
            title: "Empowerment Philosophy",
            description: "Fostering leadership at all levels through mentorship and capacity building",
            metrics: "500+ researchers trained",
            color: "from-green-400 to-emerald-600"
        },
        {
            icon: "🔬",
            title: "Research Excellence",
            description: "Maintaining highest standards of scientific rigor and innovation in all projects",
            metrics: "100+ peer-reviewed publications",
            color: "from-blue-400 to-cyan-600"
        },
        {
            icon: "🌍",
            title: "Policy Influence",
            description: "Translating research findings into actionable policies and programs",
            metrics: "50+ policy briefs adopted",
            color: "from-purple-400 to-indigo-600"
        },
        {
            icon: "👥",
            title: "Collaborative Leadership",
            description: "Building partnerships across sectors for greater impact and sustainability",
            metrics: "30+ institutional partners",
            color: "from-orange-400 to-red-600"
        }
    ];

    const teamMembers = [
        {
            name: "Dr. Sarah Chen",
            role: "Director & Principal Investigator",
            expertise: "Maternal Health, Health Systems",
            achievement: "Led national maternal health policy reform",
            image: "/images/team/dr-chen.jpg"
        },
        {
            name: "Prof. Michael Rodriguez",
            role: "Head of Research",
            expertise: "Digital Health, AI Applications",
            achievement: "Pioneered AI diagnostic tools for rural clinics",
            image: "/images/team/prof-rodriguez.jpg"
        },
        {
            name: "Dr. Amina Jalloh",
            role: "Community Engagement Lead",
            expertise: "SBCC, Community Health",
            achievement: "Developed award-winning health communication campaigns",
            image: "/images/team/dr-jalloh.jpg"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-white mb-6">
                        Leadership & Empowerment
                    </h1>
                    <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                        Cultivating visionary leadership and empowering the next generation of
                        health researchers and policymakers through innovative approaches.
                    </p>
                </div>

                {/* Leadership Principles */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {leadershipPrinciples.map((principle) => (
                        <div
                            key={principle.title}
                            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:transform hover:scale-105 transition-all duration-300"
                        >
                            <div className="text-4xl mb-4">{principle.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                {principle.title}
                            </h3>
                            <p className="text-blue-100 mb-4 leading-relaxed">
                                {principle.description}
                            </p>
                            <div className={`inline-block bg-gradient-to-r ${principle.color} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                                {principle.metrics}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Leadership Team */}
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-white text-center mb-12">
                        Our Leadership Team
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teamMembers.map((member) => (
                            <div
                                key={member.name}
                                className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
                            >
                                {/* Profile Image */}
                                <div className="h-48 bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-2xl">
                                        👤
                                    </div>
                                </div>

                                {/* Profile Info */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {member.name}
                                    </h3>
                                    <p className="text-blue-600 font-semibold mb-3">
                                        {member.role}
                                    </p>
                                    <p className="text-gray-600 mb-4">
                                        {member.expertise}
                                    </p>
                                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                                        <p className="text-sm text-gray-700">
                                            <span className="font-semibold">Notable Achievement:</span> {member.achievement}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Empowerment Timeline */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                    <h2 className="text-3xl font-bold text-white text-center mb-8">
                        Empowerment Journey
                    </h2>
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                                2018
                            </div>
                            <h3 className="text-white font-semibold">Leadership Program Launch</h3>
                            <p className="text-blue-200 text-sm">First cohort of fellows</p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                                2020
                            </div>
                            <h3 className="text-white font-semibold">Policy Academy</h3>
                            <p className="text-blue-200 text-sm">Training policymakers</p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                                2022
                            </div>
                            <h3 className="text-white font-semibold">Global Partnerships</h3>
                            <p className="text-blue-200 text-sm">International collaboration</p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                                2024
                            </div>
                            <h3 className="text-white font-semibold">Digital Transformation</h3>
                            <p className="text-blue-200 text-sm">AI and tech integration</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leadership;