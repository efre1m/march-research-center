import React from 'react';
import Heading from '../components/ui/Heading';
import Card from '../components/ui/Card';

const Team: React.FC = () => {
    const teamMembers = [
        {
            id: 1,
            name: 'Dr. Sarah Chen',
            role: 'Director & Senior MARCH Researcher',
            department: 'MARCH Computing',
            education: ['PhD in Physics, MIT', 'MSc in Computer Science, Stanford'],
            expertise: ['MARCH Algorithms', 'MARCH Error Correction', 'MARCH Machine Learning'],
            email: 's.chen@MARCHresearch.edu',
            image: '/team/sarah-chen.jpg'
        },
        {
            id: 2,
            name: 'Dr. Michael Rodriguez',
            role: 'Lead AI Research Scientist',
            department: 'Artificial Intelligence',
            education: ['PhD in Computer Science, Carnegie Mellon', 'MEng in Electrical Engineering, MIT'],
            expertise: ['Machine Learning', 'Computer Vision', 'AI Ethics'],
            email: 'm.rodriguez@MARCHresearch.edu',
            image: '/team/michael-rodriguez.jpg'
        },
        {
            id: 3,
            name: 'Dr. Elena Petrova',
            role: 'Senior Materials Scientist',
            department: 'Materials Science',
            education: ['PhD in Materials Science, Cambridge', 'MSc in Chemistry, ETH Zurich'],
            expertise: ['2D Materials', 'Superconductors', 'Nanofabrication'],
            email: 'e.petrova@MARCHresearch.edu',
            image: '/team/elena-petrova.jpg'
        },
        {
            id: 4,
            name: 'Dr. James Wilson',
            role: 'Biomedical Engineering Lead',
            department: 'Biomedical Engineering',
            education: ['PhD in Bioengineering, UC Berkeley', 'MD, Harvard Medical School'],
            expertise: ['Neural Interfaces', 'Medical Devices', 'Drug Delivery'],
            email: 'j.wilson@MARCHresearch.edu',
            image: '/team/james-wilson.jpg'
        },
        {
            id: 5,
            name: 'Dr. Maria Gonzalez',
            role: 'Energy Systems Researcher',
            department: 'Renewable Energy',
            education: ['PhD in Chemical Engineering, Caltech', 'MSc in Energy Science, TU Delft'],
            expertise: ['Solar Cells', 'Energy Storage', 'Sustainable Tech'],
            email: 'm.gonzalez@MARCHresearch.edu',
            image: '/team/maria-gonzalez.jpg'
        },
        {
            id: 6,
            name: 'Dr. Robert Kim',
            role: 'Climate Science Director',
            department: 'Climate & Sustainability',
            education: ['PhD in Environmental Science, Columbia', 'MSc in Climate Physics, Princeton'],
            expertise: ['Climate Modeling', 'Carbon Capture', 'Sustainability'],
            email: 'r.kim@MARCHresearch.edu',
            image: '/team/robert-kim.jpg'
        }
    ];

    return (
        <div className="space-y-8">
            <div className="text-center mb-12">
                <Heading level={1}>Our Team</Heading>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                    World-class researchers, scientists, and innovators dedicated to pushing the boundaries
                    of knowledge and creating impactful solutions for global challenges.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member) => (
                    <Card key={member.id} className="text-center hover:transform hover:scale-105 transition-all duration-300">
                        {/* Profile Image Placeholder */}
                        <div className="w-32 h-32 bg-gradient-to-br from-gold/30 to-dark-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                            <div className="text-gold text-2xl font-bold">
                                {member.name.split(' ').map(n => n[0]).join('')}
                            </div>
                        </div>

                        <Heading level={3} className="text-xl mb-1">{member.name}</Heading>
                        <div className="text-gold text-sm font-semibold mb-2">{member.role}</div>
                        <div className="text-white/70 text-sm mb-4">{member.department}</div>

                        <div className="space-y-3 text-left">
                            <div>
                                <div className="text-gold text-xs font-semibold mb-1">EDUCATION</div>
                                {member.education.map((edu, index) => (
                                    <div key={index} className="text-white/70 text-xs mb-1">{edu}</div>
                                ))}
                            </div>

                            <div>
                                <div className="text-gold text-xs font-semibold mb-1">EXPERTISE</div>
                                <div className="flex flex-wrap gap-1">
                                    {member.expertise.map((skill, index) => (
                                        <span key={index} className="text-white/70 text-xs bg-white/5 rounded px-2 py-1">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-2 border-t border-white/20">
                                <div className="text-gold text-xs font-semibold">CONTACT</div>
                                <div className="text-white/70 text-xs">{member.email}</div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="text-center mt-12">
                <Card className="max-w-2xl mx-auto">
                    <Heading level={3} className="mb-4">Join Our Team</Heading>
                    <p className="text-white/70 mb-4">
                        We're always looking for talented researchers and scientists to join our mission.
                        Explore current opportunities and become part of our innovative team.
                    </p>
                    <button className="px-6 py-2 bg-gold text-dark-blue rounded-lg font-semibold hover:bg-[#e6c200] transition-colors">
                        View Career Opportunities
                    </button>
                </Card>
            </div>
        </div>
    );
};

export default Team;