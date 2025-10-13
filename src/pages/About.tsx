import React, { useEffect, useRef, useState } from 'react';
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

    const learningFacilities = [
        {
            name: 'Ayder Comprehensive Specialized Hospital',
            location: 'Mekelle, Tigray',
            description: 'Our flagship teaching hospital and clinical research hub, featuring advanced medical technology and serving as the primary site for medical training, clinical trials, and healthcare innovation.',
            capacity: '750+ beds, 15 specialized units',
            focus: 'Clinical Research, Medical Education, Patient Care'
        },
        {
            name: 'Mekelle University Main Campus',
            location: 'Mekelle, Tigray',
            description: 'The central academic hub with state-of-the-art research laboratories, lecture halls, and collaborative spaces that foster interdisciplinary research and innovation.',
            capacity: '20+ research labs, 5 lecture halls',
            focus: 'Academic Research, Laboratory Studies, Student Training'
        },
        {
            name: 'College of Health Sciences Complex',
            location: 'Mekelle University',
            description: 'Specialized facility dedicated to medical and health sciences education, featuring simulation centers, research labs, and community health outreach programs.',
            capacity: '10 simulation labs, 3 research centers',
            focus: 'Medical Training, Public Health Research, Community Outreach'
        },
        {
            name: 'Tigray Innovation and Research Park',
            location: 'Mekelle, Tigray',
            description: 'Modern research park housing advanced technology labs, startup incubators, and collaborative spaces for industry-academia partnerships and regional development projects.',
            capacity: '8 technology labs, 3 incubator spaces',
            focus: 'Technology Transfer, Innovation, Regional Development'
        }
    ];

    const additionalFacilities = [
        'Adigrat University Research Center',
        'Axum Heritage Research Facility',
        'Adwa Historical Studies Institute',
        'Shire Agricultural Research Station',
        'Humera Biomedical Research Unit',
        'Wukro Environmental Studies Center',
        'Alamata Technology Innovation Hub',
        'Maychew Data Science Laboratory',
        'Abi Adi Public Health Research Unit',
        'Korem Climate Studies Center',
        'Mekelle Engineering Research Complex',
        'Hawzen Social Sciences Institute',
        'Sekota Rural Development Center',
        'Enderta Biotechnology Laboratory',
        'Raya Valley Agricultural Research',
        'Sheraro Mining Technology Unit',
        'Adi Gudom Energy Research Facility',
        'Mekelle Digital Innovation Hub',
        'Tigray Cultural Heritage Archive',
        'Regional Water Research Institute'
    ];

    const ethicalPrinciples = [
        {
            principle: 'Research Integrity',
            description: 'We adhere to the highest standards of scientific rigor, transparency, and reproducibility in all our research activities.'
        },
        {
            principle: 'Ethical Oversight',
            description: 'All research projects undergo rigorous ethical review to ensure compliance with international standards and regulations.'
        },
        {
            principle: 'Data Privacy',
            description: 'We implement robust data protection measures and respect participant confidentiality in all studies.'
        },
        {
            principle: 'Responsible Innovation',
            description: 'We consider the societal implications of our research and strive to develop technologies that benefit humanity.'
        },
        {
            principle: 'Open Science',
            description: 'We promote open access to research findings and collaborate openly with the scientific community.'
        },
        {
            principle: 'Sustainability',
            description: 'Our research practices prioritize environmental sustainability and social responsibility.'
        }
    ];

    const partners = [
        {
            type: 'Academic Institutions',
            organizations: [
                'Massachusetts Institute of Technology',
                'Stanford University',
                'University of Cambridge',
                'National University of Singapore',
                'Technical University of Munich'
            ]
        },
        {
            type: 'Government Agencies',
            organizations: [
                'National Science Foundation',
                'European Research Council',
                'Department of Energy',
                'National Institutes of Health'
            ]
        },
        {
            type: 'Industry Partners',
            organizations: [
                'Google Research',
                'Microsoft Research',
                'Siemens AG',
                'IBM Research',
                'Tesla AI'
            ]
        },
        {
            type: 'Non-Profit Organizations',
            organizations: [
                'Bill & Melinda Gates Foundation',
                'Chan Zuckerberg Initiative',
                'World Health Organization',
                'United Nations Development Programme'
            ]
        }
    ];

    // Animation refs for all sections
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [visibleSections, setVisibleSections] = useState<number[]>([]);

    // Animation for individual cards/elements
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [visibleCards, setVisibleCards] = useState<number[]>([]);

    // Timeline refs
    const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [visibleTimelineItems, setVisibleTimelineItems] = useState<number[]>([]);

    // Section observer
    useEffect(() => {
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
                        if (index !== -1 && !visibleSections.includes(index)) {
                            setVisibleSections(prev => [...prev, index]);
                        }
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '-50px 0px -50px 0px'
            }
        );

        sectionRefs.current.forEach(ref => {
            if (ref) sectionObserver.observe(ref);
        });

        return () => {
            sectionRefs.current.forEach(ref => {
                if (ref) sectionObserver.unobserve(ref);
            });
        };
    }, [visibleSections]);

    // Card observer
    useEffect(() => {
        const cardObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
                        if (index !== -1 && !visibleCards.includes(index)) {
                            setTimeout(() => {
                                setVisibleCards(prev => [...prev, index]);
                            }, index * 100);
                        }
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '-20px 0px -20px 0px'
            }
        );

        cardRefs.current.forEach(ref => {
            if (ref) cardObserver.observe(ref);
        });

        return () => {
            cardRefs.current.forEach(ref => {
                if (ref) cardObserver.unobserve(ref);
            });
        };
    }, [visibleCards]);

    // Timeline observer
    useEffect(() => {
        const timelineObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = timelineRefs.current.indexOf(entry.target as HTMLDivElement);
                        if (index !== -1 && !visibleTimelineItems.includes(index)) {
                            setTimeout(() => {
                                setVisibleTimelineItems(prev => [...prev, index]);
                            }, index * 200);
                        }
                    } else {
                        const index = timelineRefs.current.indexOf(entry.target as HTMLDivElement);
                        if (index !== -1 && visibleTimelineItems.includes(index)) {
                            setVisibleTimelineItems(prev => prev.filter(item => item !== index));
                        }
                    }
                });
            },
            {
                threshold: 0.3,
                rootMargin: '-50px 0px -100px 0px'
            }
        );

        timelineRefs.current.forEach(ref => {
            if (ref) timelineObserver.observe(ref);
        });

        return () => {
            timelineRefs.current.forEach(ref => {
                if (ref) timelineObserver.unobserve(ref);
            });
        };
    }, [visibleTimelineItems]);

    // Ref setters
    const setSectionRef = (index: number) => (el: HTMLDivElement | null) => {
        sectionRefs.current[index] = el;
    };

    const setCardRef = (index: number) => (el: HTMLDivElement | null) => {
        cardRefs.current[index] = el;
    };

    const setTimelineRef = (index: number) => (el: HTMLDivElement | null) => {
        timelineRefs.current[index] = el;
    };

    // Animation classes
    const getSectionAnimationClass = (index: number) => {
        return visibleSections.includes(index)
            ? 'opacity-100 transform translate-y-0'
            : 'opacity-0 transform translate-y-10';
    };

    const getCardAnimationClass = (index: number) => {
        return visibleCards.includes(index)
            ? 'opacity-100 transform translate-y-0'
            : 'opacity-0 transform translate-y-8';
    };

    const getTimelineAnimationClass = (index: number) => {
        return visibleTimelineItems.includes(index)
            ? 'opacity-100 transform translate-x-0'
            : index % 2 === 0
                ? 'opacity-0 transform -translate-x-10'
                : 'opacity-0 transform translate-x-10';
    };

    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <div
                ref={setSectionRef(0)}
                className={`text-center transition-all duration-700 ease-out ${getSectionAnimationClass(0)}`}
            >
                <Heading level={1}>About MARCH Research Center</Heading>
                <p className="text-xl text-white/80 max-w-4xl mx-auto">
                    We are a premier interdisciplinary research institution dedicated to advancing
                    scientific knowledge and developing innovative technologies that address global
                    challenges. Through collaboration across disciplines, we push the boundaries
                    of what's possible.
                </p>
            </div>

            {/* Stats Section */}
            <section ref={setSectionRef(1)}>
                <div className={`transition-all duration-700 ease-out ${getSectionAnimationClass(1)}`}>
                    <Card className="bg-gradient-to-r from-gold/10 to-dark-blue">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    ref={setCardRef(index)}
                                    className={`transition-all duration-500 ease-out delay-${index * 100} ${getCardAnimationClass(index)}`}
                                >
                                    <div className="text-3xl font-bold text-gold mb-2">{stat.number}</div>
                                    <div className="text-white/70 text-sm">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </section>

            {/* Mission & Vision */}
            <section ref={setSectionRef(2)}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-700 ease-out ${getSectionAnimationClass(2)}`}>
                    <div
                        ref={setCardRef(stats.length)}
                        className={`transition-all duration-500 ease-out ${getCardAnimationClass(stats.length)}`}
                    >
                        <Card>
                            <Heading level={2} className="mb-4">Our Mission</Heading>
                            <p className="text-white/70 leading-relaxed">
                                To conduct groundbreaking interdisciplinary research that expands human knowledge
                                and creates innovative solutions to the world's most pressing challenges. We foster
                                an environment of scientific excellence, collaboration, and discovery that transcends
                                traditional disciplinary boundaries.
                            </p>
                        </Card>
                    </div>
                    <div
                        ref={setCardRef(stats.length + 1)}
                        className={`transition-all duration-500 ease-out delay-100 ${getCardAnimationClass(stats.length + 1)}`}
                    >
                        <Card>
                            <Heading level={2} className="mb-4">Our Vision</Heading>
                            <p className="text-white/70 leading-relaxed">
                                To be a global leader in scientific research and technological innovation,
                                recognized for our contributions to advancing knowledge and improving lives
                                worldwide. We envision a future where our discoveries lead to sustainable
                                solutions and transformative technologies that benefit humanity.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Our Story / History with Animation */}
            <section ref={setSectionRef(3)}>
                <div className={`transition-all duration-700 ease-out ${getSectionAnimationClass(3)}`}>
                    <Heading level={2} className="text-center mb-8">Our Story</Heading>
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gold/30 h-full"></div>

                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <div
                                    key={index}
                                    ref={setTimelineRef(index)}
                                    className={`flex items-center w-full ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} transition-all duration-700 ease-out ${getTimelineAnimationClass(index)}`}
                                >
                                    <div className="w-1/2 pr-8 pl-8">
                                        <Card className="hover:bg-white/15 transition-all duration-300 hover:scale-105">
                                            <div className="text-gold font-bold text-lg mb-2">{item.year}</div>
                                            <Heading level={4} className="text-white mb-2">{item.event}</Heading>
                                            <p className="text-white/70 text-sm">{item.description}</p>
                                        </Card>
                                    </div>
                                    <div className="w-8 h-8 bg-gold rounded-full border-4 border-dark-blue z-10 transform hover:scale-125 transition-transform duration-300"></div>
                                    <div className="w-1/2 pl-8 pr-8"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Learning Facilities */}
            <section ref={setSectionRef(4)}>
                <div className={`transition-all duration-700 ease-out ${getSectionAnimationClass(4)}`}>
                    <Heading level={2} className="text-center mb-8">Our Learning Facilities</Heading>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {learningFacilities.map((facility, index) => (
                            <div
                                key={index}
                                ref={setCardRef(stats.length + 2 + index)}
                                className={`transition-all duration-500 ease-out delay-${index * 100} ${getCardAnimationClass(stats.length + 2 + index)}`}
                            >
                                <Card className="hover:transform hover:scale-105 transition-all duration-300 bg-gradient-to-br from-dark-blue/50 to-gold/10">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <Heading level={3} className="text-white mb-1">{facility.name}</Heading>
                                            <p className="text-gold text-sm">{facility.location}</p>
                                        </div>
                                        <div className="bg-gold/20 px-3 py-1 rounded-full">
                                            <span className="text-gold text-sm font-semibold">{index + 1}</span>
                                        </div>
                                    </div>
                                    <p className="text-white/70 text-sm mb-3">{facility.description}</p>
                                    <div className="bg-dark-blue/50 px-3 py-2 rounded-lg mb-2">
                                        <span className="text-gold text-xs font-semibold">Capacity: </span>
                                        <span className="text-white/70 text-xs">{facility.capacity}</span>
                                    </div>
                                    <div className="bg-gold/10 px-3 py-2 rounded-lg">
                                        <span className="text-gold text-xs font-semibold">Primary Focus: </span>
                                        <span className="text-white/70 text-xs">{facility.focus}</span>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>

                    {/* Additional Facilities */}
                    <div
                        ref={setCardRef(stats.length + 2 + learningFacilities.length)}
                        className={`transition-all duration-500 ease-out delay-300 ${getCardAnimationClass(stats.length + 2 + learningFacilities.length)}`}
                    >
                        <Card className="bg-gradient-to-r from-gold/10 to-dark-blue/50">
                            <Heading level={3} className="text-center mb-6 text-gold">Additional Research Facilities Across Tigray</Heading>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {additionalFacilities.map((facility, index) => (
                                    <div key={index} className="flex items-center text-white/70 text-sm p-2 hover:bg-white/10 rounded-lg transition-colors duration-200">
                                        <div className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></div>
                                        <span>{facility}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="text-center mt-6">
                                <p className="text-gold font-semibold">
                                    Total: {learningFacilities.length + additionalFacilities.length} Facilities Serving the Tigray Region
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Ethical Principles */}
            <section ref={setSectionRef(5)}>
                <div className={`transition-all duration-700 ease-out ${getSectionAnimationClass(5)}`}>
                    <Heading level={2} className="text-center mb-8">Ethical Principles</Heading>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ethicalPrinciples.map((principle, index) => (
                            <div
                                key={index}
                                ref={setCardRef(stats.length + 2 + learningFacilities.length + 1 + index)}
                                className={`transition-all duration-500 ease-out delay-${index * 100} ${getCardAnimationClass(stats.length + 2 + learningFacilities.length + 1 + index)}`}
                            >
                                <Card className="hover:bg-white/15 transition-all duration-300 hover:scale-105">
                                    <div className="flex items-start mb-4">
                                        <div className="bg-gold/20 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                                            <span className="text-gold text-sm font-bold">{index + 1}</span>
                                        </div>
                                        <Heading level={3} className="text-white text-lg">{principle.principle}</Heading>
                                    </div>
                                    <p className="text-white/70 text-sm leading-relaxed">
                                        {principle.description}
                                    </p>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners & Funders */}
            <section ref={setSectionRef(6)}>
                <div className={`transition-all duration-700 ease-out ${getSectionAnimationClass(6)}`}>
                    <Heading level={2} className="text-center mb-8">Partners & Funders</Heading>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {partners.map((partner, index) => (
                            <div
                                key={index}
                                ref={setCardRef(stats.length + 2 + learningFacilities.length + 1 + ethicalPrinciples.length + index)}
                                className={`transition-all duration-500 ease-out delay-${index * 100} ${getCardAnimationClass(stats.length + 2 + learningFacilities.length + 1 + ethicalPrinciples.length + index)}`}
                            >
                                <Card className="hover:bg-white/15 transition-all duration-300 hover:scale-105">
                                    <Heading level={3} className="text-gold mb-4 text-center">{partner.type}</Heading>
                                    <ul className="space-y-3">
                                        {partner.organizations.map((org, orgIndex) => (
                                            <li key={orgIndex} className="flex items-center text-white/70 text-sm hover:text-gold transition-colors duration-200">
                                                <div className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></div>
                                                {org}
                                            </li>
                                        ))}
                                    </ul>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Message */}
            <section ref={setSectionRef(7)}>
                <div className={`transition-all duration-700 ease-out ${getSectionAnimationClass(7)}`}>
                    <div
                        ref={setCardRef(stats.length + 2 + learningFacilities.length + 1 + ethicalPrinciples.length + partners.length)}
                        className={`transition-all duration-500 ease-out ${getCardAnimationClass(stats.length + 2 + learningFacilities.length + 1 + ethicalPrinciples.length + partners.length)}`}
                    >
                        <Card className="max-w-4xl mx-auto text-center hover:bg-white/10 transition-all duration-300">
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
                </div>
            </section>
        </div>
    );
};

export default About;