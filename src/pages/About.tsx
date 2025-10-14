import React, { useEffect, useRef, useState } from 'react';
import Heading from '../components/ui/Heading';
import { fullTeamMembers } from '../data/teamdata';
import Breadcrumb from '../components/ui/Breadcrumb';

const About: React.FC = () => {
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

    const coreValues = [
        {
            principle: 'Excellence',
            description: 'We strive for the highest standards in all our research activities, pushing the boundaries of knowledge and innovation.'
        },
        {
            principle: 'Collaboration',
            description: 'We believe in the power of teamwork and interdisciplinary approaches to solve complex global challenges.'
        },
        {
            principle: 'Integrity',
            description: 'We conduct our research with honesty, transparency, and adherence to ethical principles.'
        },
        {
            principle: 'Innovation',
            description: 'We foster creativity and embrace new ideas to drive transformative discoveries and solutions.'
        },
        {
            principle: 'Impact',
            description: 'We are committed to research that makes a meaningful difference in society and addresses real-world problems.'
        },
        {
            principle: 'Diversity',
            description: 'We value diverse perspectives and create an inclusive environment where everyone can thrive.'
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

    // Get director from team data
    const director = fullTeamMembers.find(member =>
        member.role.toLowerCase().includes('director') ||
        member.name.toLowerCase().includes('chen')
    ) || fullTeamMembers[0];

    // Handle image error for director
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement | HTMLDivElement, Event>) => {
        const target = e.target as HTMLElement;
        if (target.style.backgroundImage) {
            target.style.backgroundImage = 'none';
            target.classList.add('bg-gradient-to-br', 'from-blue-400', 'to-blue-600');
            const innerDiv = target.querySelector('div');
            if (innerDiv) {
                innerDiv.className = 'text-white text-2xl font-bold';
                innerDiv.textContent = target.getAttribute('data-initials') || 'DR';
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 space-y-16 py-12 animate-fadeIn">
            {/* Breadcrumb Navigation */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <Breadcrumb
                        currentPage="About MARCH"
                        parentPage="Home"
                        parentPath="/"
                    />
                </div>
            </section>

            {/* Hero Section */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="relative py-16 text-center border border-blue-200 rounded-2xl bg-white/80 backdrop-blur-lg">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-transparent to-blue-600/10 rounded-2xl"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-2xl"></div>

                        <div className="relative z-10 px-6">
                            <div className="inline-flex items-center gap-3 bg-blue-500/10 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 mb-8">
                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase">
                                    World-Class Research Institution
                                </span>
                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                About <span className="text-blue-600">MARCH</span>
                                <br className="hidden lg:block" /> Research Center
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

            {/* Who We Are - Two Column Layout with Background Image */}
            <section ref={setSectionRef(0)} className="relative py-16">
                {/* Background Image with Light Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed"
                    style={{
                        backgroundImage: `url('images/march/work.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]"></div>
                </div>

                <div className={`relative max-w-7xl mx-auto px-6 transition-all duration-700 ease-out ${getSectionAnimationClass(0)}`}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Left Column - Description */}
                        <div className="space-y-6">
                            <Heading level={2} className="text-blue-600 mb-6">Who We Are</Heading>

                            <div className="space-y-4 text-gray-800 leading-relaxed text-lg text-justify">
                                <p>
                                    The MARCH Research Center is an interdisciplinary research institution established in 2018
                                    with a strong affiliation to leading academic networks and research consortia worldwide.
                                    Our center represents a convergence of brilliant minds dedicated to pushing the boundaries
                                    of scientific discovery and technological innovation.
                                </p>

                                <p>
                                    With deep roots in academic excellence and a commitment to addressing global challenges,
                                    MARCH brings together researchers, scientists, and innovators from diverse fields to
                                    collaborate on transformative projects that transcend traditional disciplinary boundaries.
                                </p>

                                <div className="bg-white/90 p-6 rounded-lg border border-blue-200 backdrop-blur-sm">
                                    <Heading level={3} className="text-blue-600 mb-4 text-lg">Key Thematic Areas & Priorities</Heading>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                                            <span className="text-gray-700 text-sm">Artificial Intelligence & Machine Learning</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                                            <span className="text-gray-700 text-sm">Sustainable Energy Technologies</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                                            <span className="text-gray-700 text-sm">Biomedical Research & Healthcare Innovation</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                                            <span className="text-gray-700 text-sm">Climate Change & Environmental Science</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                                            <span className="text-gray-700 text-sm">Data Science & Computational Research</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                                            <span className="text-gray-700 text-sm">Public Health & Community Well-being</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-justify">
                                    Our research priorities are carefully aligned with global sustainable development goals
                                    and emerging technological frontiers, ensuring that our work remains relevant, impactful,
                                    and forward-looking.
                                </p>
                            </div>
                        </div>

                        {/* Right Column - Large Clean Image with Auto Fit */}
                        <div className="relative">
                            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-0 overflow-hidden group hover:transform hover:scale-105 transition-all duration-500 h-full border-2 border-blue-300">
                                <div className="w-full h-[650px] flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
                                    <img
                                        src="images/march/march.jpg"
                                        alt="MARCH Research Center"
                                        className="w-full h-full object-contain"
                                        onError={handleImageError}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section ref={setSectionRef(1)}>
                <div className={`max-w-7xl mx-auto px-6 transition-all duration-700 ease-out ${getSectionAnimationClass(1)}`}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div
                            ref={setCardRef(0)}
                            className={`transition-all duration-500 ease-out ${getCardAnimationClass(0)}`}
                        >
                            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-blue-200 hover:border-blue-400 transition-all duration-300 group h-full">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-blue-600 text-xl">🎯</span>
                                    </div>
                                    <Heading level={2} className="text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Our Mission</Heading>
                                </div>
                                <p className="text-gray-700 leading-relaxed text-justify">
                                    To conduct groundbreaking interdisciplinary research that expands human knowledge
                                    and creates innovative solutions to the world's most pressing challenges. We foster
                                    an environment of scientific excellence, collaboration, and discovery that transcends
                                    traditional disciplinary boundaries.
                                </p>
                            </div>
                        </div>
                        <div
                            ref={setCardRef(1)}
                            className={`transition-all duration-500 ease-out delay-100 ${getCardAnimationClass(1)}`}
                        >
                            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-blue-200 hover:border-blue-400 transition-all duration-300 group h-full">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-blue-600 text-xl">🔭</span>
                                    </div>
                                    <Heading level={2} className="text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Our Vision</Heading>
                                </div>
                                <p className="text-gray-700 leading-relaxed text-justify">
                                    To be a global leader in scientific research and technological innovation,
                                    recognized for our contributions to advancing knowledge and improving lives
                                    worldwide. We envision a future where our discoveries lead to sustainable
                                    solutions and transformative technologies that benefit humanity.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story / History with Animation */}
            <section ref={setSectionRef(2)}>
                <div className={`max-w-7xl mx-auto px-6 transition-all duration-700 ease-out ${getSectionAnimationClass(2)}`}>
                    <Heading level={2} className="text-center mb-12 text-blue-600">Our Journey</Heading>
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-400/50 h-full"></div>

                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <div
                                    key={index}
                                    ref={setTimelineRef(index)}
                                    className={`flex items-center w-full ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} transition-all duration-700 ease-out ${getTimelineAnimationClass(index)}`}
                                >
                                    <div className="w-1/2 pr-8 pl-8">
                                        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-blue-200 hover:border-blue-400 transition-all duration-300 hover:scale-105 group">
                                            <div className="text-blue-600 font-bold text-lg mb-2">{item.year}</div>
                                            <Heading level={4} className="text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{item.event}</Heading>
                                            <p className="text-gray-700 text-sm text-justify">{item.description}</p>
                                        </div>
                                    </div>
                                    <div className="w-8 h-8 bg-blue-500 rounded-full border-4 border-white z-10 transform hover:scale-125 transition-transform duration-300"></div>
                                    <div className="w-1/2 pl-8 pr-8"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section ref={setSectionRef(3)}>
                <div className={`max-w-7xl mx-auto px-6 transition-all duration-700 ease-out ${getSectionAnimationClass(3)}`}>
                    <Heading level={2} className="text-center mb-12 text-blue-600">Our Core Values</Heading>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {coreValues.map((value, index) => (
                            <div
                                key={index}
                                ref={setCardRef(2 + index)}
                                className={`transition-all duration-500 ease-out ${getCardAnimationClass(2 + index)}`}
                            >
                                <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-blue-200 hover:border-blue-400 transition-all duration-300 hover:scale-105 group h-full">
                                    <div className="flex items-start mb-4">
                                        <div className="bg-blue-500/20 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <span className="text-blue-600 text-lg font-bold">{index + 1}</span>
                                        </div>
                                        <Heading level={3} className="text-gray-900 text-lg group-hover:text-blue-600 transition-colors duration-300">{value.principle}</Heading>
                                    </div>
                                    <p className="text-gray-700 text-sm leading-relaxed text-justify">
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Message */}
            <section ref={setSectionRef(4)}>
                <div className={`max-w-7xl mx-auto px-6 transition-all duration-700 ease-out ${getSectionAnimationClass(4)}`}>
                    <div
                        ref={setCardRef(2 + coreValues.length)}
                        className={`transition-all duration-500 ease-out ${getCardAnimationClass(2 + coreValues.length)}`}
                    >
                        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-blue-200 hover:border-blue-400 transition-all duration-300 group max-w-4xl mx-auto">
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                {/* Director Image */}
                                <div className="flex-shrink-0">
                                    <div
                                        className="w-32 h-32 rounded-full border-2 border-blue-300 group-hover:border-blue-500 transition-all duration-500 bg-cover bg-center flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600"
                                        style={{ backgroundImage: `url(${director.image})` }}
                                        onError={handleImageError}
                                        data-initials={director.name.split(' ').map(n => n[0]).join('')}
                                    >
                                        <div className="text-white text-2xl font-bold opacity-0">
                                            {director.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                </div>

                                {/* Message Content */}
                                <div className="flex-1 text-center md:text-left">
                                    <Heading level={3} className="mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Message from the Director</Heading>
                                    <p className="text-gray-700 text-lg leading-relaxed mb-4 italic text-justify">
                                        "At MARCH Research Center, we believe that the most significant scientific breakthroughs
                                        happen at the intersection of disciplines. Our collaborative approach brings together
                                        brilliant minds from diverse fields to tackle challenges that no single discipline
                                        could solve alone."
                                    </p>
                                    <div className="text-blue-600 font-semibold">
                                        {director.name}, {director.role}
                                    </div>
                                    <div className="text-gray-600 text-sm mt-1">
                                        {director.department}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;