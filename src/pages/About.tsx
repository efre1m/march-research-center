import React from 'react';
import Heading from '../components/ui/Heading';
import Card from '../components/ui/Card';

const About: React.FC = () => {
    const stats = [
        { number: '50+', label: 'Research Projects' },
        { number: '100+', label: 'Publications' },
        { number: '25+', label: 'PhD Researchers' },
        { number: '15+', label: 'International Collaborations' },
        { number: '$10M+', label: 'Research Funding' },
        { number: '5', label: 'Research Departments' }
    ];

    const values = [
        {
            title: 'Excellence',
            description: 'We strive for the highest standards in research quality and scientific rigor.',
            icon: '⭐'
        },
        {
            title: 'Innovation',
            description: 'We embrace creative thinking and novel approaches to solve complex problems.',
            icon: '💡'
        },
        {
            title: 'Collaboration',
            description: 'We believe in the power of interdisciplinary teamwork and global partnerships.',
            icon: '🤝'
        },
        {
            title: 'Impact',
            description: 'We focus on research that creates meaningful change and benefits society.',
            icon: '🌍'
        },
        {
            title: 'Integrity',
            description: 'We maintain the highest ethical standards in all our research activities.',
            icon: '⚖️'
        },
        {
            title: 'Diversity',
            description: 'We value diverse perspectives and inclusive research environments.',
            icon: '🌈'
        }
    ];

    const timeline = [
        {
            year: '2018',
            event: 'MARCH Research Center Founded',
            description: 'Established with focus on interdisciplinary research'
        },
        {
            year: '2019',
            event: 'First Major Research Grant',
            description: 'Awarded $2M for MARCH computing research'
        },
        {
            year: '2020',
            event: 'AI Research Division Launched',
            description: 'Expanded into artificial intelligence and machine learning'
        },
        {
            year: '2021',
            event: 'International Partnerships',
            description: 'Established collaborations with leading European institutions'
        },
        {
            year: '2022',
            event: 'New Research Campus',
            description: 'Moved to state-of-the-art facilities with advanced labs'
        },
        {
            year: '2023',
            event: 'Breakthrough Publications',
            description: 'Multiple high-impact publications in top scientific journals'
        },
        {
            year: '2024',
            event: 'Sustainable Energy Initiative',
            description: 'Launched major research program in renewable energy technologies'
        }
    ];

    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center">
                <Heading level={1}>About MARCH Research Center</Heading>
                <p className="text-xl text-white/80 max-w-4xl mx-auto">
                    We are a premier interdisciplinary research institution dedicated to advancing
                    scientific knowledge and developing innovative technologies that address global
                    challenges. Through collaboration across disciplines, we push the boundaries
                    of what's possible.
                </p>
            </div>

            {/* Stats Section */}
            <section>
                <Card className="bg-gradient-to-r from-gold/10 to-dark-blue">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
                        {stats.map((stat, index) => (
                            <div key={index}>
                                <div className="text-3xl font-bold text-gold mb-2">{stat.number}</div>
                                <div className="text-white/70 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </Card>
            </section>

            {/* Mission & Vision */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                    <Heading level={2} className="mb-4">Our Mission</Heading>
                    <p className="text-white/70 leading-relaxed">
                        To conduct groundbreaking interdisciplinary research that expands human knowledge
                        and creates innovative solutions to the world's most pressing challenges. We foster
                        an environment of scientific excellence, collaboration, and discovery that transcends
                        traditional disciplinary boundaries.
                    </p>
                </Card>

                <Card>
                    <Heading level={2} className="mb-4">Our Vision</Heading>
                    <p className="text-white/70 leading-relaxed">
                        To be a global leader in scientific research and technological innovation,
                        recognized for our contributions to advancing knowledge and improving lives
                        worldwide. We envision a future where our discoveries lead to sustainable
                        solutions and transformative technologies that benefit humanity.
                    </p>
                </Card>
            </section>

            {/* Values */}
            <section>
                <Heading level={2} className="text-center mb-8">Our Values</Heading>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {values.map((value, index) => (
                        <Card key={index} className="text-center hover:transform hover:scale-105 transition-all duration-300">
                            <div className="text-3xl mb-4">{value.icon}</div>
                            <Heading level={3} className="mb-3">{value.title}</Heading>
                            <p className="text-white/70 text-sm leading-relaxed">
                                {value.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Timeline */}
            <section>
                <Heading level={2} className="text-center mb-8">Our Journey</Heading>
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gold/30 h-full"></div>

                    <div className="space-y-12">
                        {timeline.map((item, index) => (
                            <div key={index} className={`flex items-center w-full ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                <div className="w-1/2 pr-8 pl-8">
                                    <Card className="hover:bg-white/15 transition-all duration-300">
                                        <div className="text-gold font-bold text-lg mb-2">{item.year}</div>
                                        <Heading level={4} className="text-white mb-2">{item.event}</Heading>
                                        <p className="text-white/70 text-sm">{item.description}</p>
                                    </Card>
                                </div>
                                <div className="w-8 h-8 bg-gold rounded-full border-4 border-dark-blue z-10"></div>
                                <div className="w-1/2 pl-8 pr-8"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Message */}
            <Card className="max-w-4xl mx-auto text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-gold/30 to-dark-blue rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="text-gold text-2xl font-bold">DR</div>
                </div>
                <Heading level={3} className="mb-4">Message from the Director</Heading>
                <p className="text-white/70 text-lg leading-relaxed mb-4">
                    "At MARCH Research Center, we believe that the most significant scientific breakthroughs
                    happen at the intersection of disciplines. Our collaborative approach brings together
                    brilliant minds from diverse fields to tackle challenges that no single discipline
                    could solve alone."
                </p>
                <div className="text-gold font-semibold">
                    Dr. Sarah Chen, Director
                </div>
            </Card>
        </div>
    );
};

export default About;