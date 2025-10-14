import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import ImageSlider from '../components/ui/ImageSlider';
import { coreTeamMembers } from '../data/teamdata';
import { newsItems } from '../data/newsdata';
import { events } from '../data/eventsdata';
import { stories } from '../data/storiesdata';
import { vacancies } from '../data/vacancydata'; // Import vacancies data

interface HomeProps { }

const AnimatedCounter: React.FC<{ target: number; duration?: number; suffix?: string }> = ({
    target,
    duration = 2000,
    suffix = ''
}) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                    let start = 0;
                    const increment = target / (duration / 16);

                    const timer = setInterval(() => {
                        start += increment;
                        if (start >= target) {
                            setCount(target);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(start));
                        }
                    }, 16);

                    return () => clearInterval(timer);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [target, duration, hasStarted]);

    return (
        <div ref={ref} className="animated-counter">
            {count}{suffix}
        </div>
    );
};

const Home: React.FC<HomeProps> = () => {
    const navigate = useNavigate();

    const heroSlides = [
        {
            id: 1,
            image: '/images/hero-slider/slide1.jpg',
            title: 'Transforming Maternal Healthcare Worldwide',
            description: 'Pioneering research and interventions that save lives and improve health outcomes for mothers and newborns in underserved communities.',
            caption: 'Field Research'
        },
        {
            id: 2,
            image: '/images/hero-slider/slide2.jpg',
            title: 'Innovative Technology for Better Health',
            description: 'Developing cutting-edge diagnostic tools and mobile health platforms to bridge healthcare gaps in remote areas.',
            caption: 'Technology Innovation'
        },
        {
            id: 3,
            image: '/images/hero-slider/slide3.jpg',
            title: 'Global Partnerships, Local Impact',
            description: 'Collaborating with international institutions to scale successful maternal and child health interventions across continents.',
            caption: 'International Collaboration'
        }
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'upcoming': return 'bg-green-500/20 text-green-400 border border-green-500/30';
            case 'ongoing': return 'bg-blue-500/20 text-blue-400 border border-blue-500/30';
            case 'completed': return 'bg-gray-500/20 text-gray-400 border border-gray-500/30';
            default: return 'bg-gray-500/20 text-gray-400 border border-gray-500/30';
        }
    };

    const handleNavigation = (path: string) => {
        const mainContent = document.querySelector('main');
        if (mainContent) {
            mainContent.style.opacity = '0.7';
            mainContent.style.transition = 'opacity 0.3s ease';
        }

        setTimeout(() => {
            navigate(path);
        }, 300);

        setTimeout(() => {
            if (mainContent) {
                mainContent.style.opacity = '1';
            }
        }, 600);
    };

    const handleApply = (vacancyId: number, title: string) => {
        navigate(`/apply?vacancyId=${vacancyId}&title=${encodeURIComponent(title)}`);
    };

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
                    innerDiv.textContent = '📷';
                }
            }
        }
    };

    const handleSectionClick = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    // Get open vacancies for display
    const openVacancies = vacancies.filter(v => v.vacancyStatus === 'opened').slice(0, 2);

    return (
        <div className="space-y-16 animate-fadeIn">
            <section className="relative animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-dark-blue/90 backdrop-blur-sm">
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                            style={{
                                backgroundImage: 'url(/images/overview/medical.png)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center 30%'
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/70 via-dark-blue/30 to-dark-blue/10"></div>
                            <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-dark-blue/20"></div>
                        </div>

                        <div className="relative z-10 p-8 lg:p-12">
                            <div className="inline-flex items-center gap-3 bg-gold/20 backdrop-blur-sm border border-gold/40 rounded-full px-6 py-3 mb-8">
                                <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                                <span className="text-gold text-sm font-semibold tracking-wider uppercase">
                                    Center for Maternal Health Innovation
                                </span>
                                <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                            </div>

                            <div className="max-w-3xl">
                                <div className="space-y-4 mb-8">
                                    <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                                        Transforming <span className="text-gold">Maternal Healthcare</span> Through Cutting-Edge Research & Innovation
                                    </h1>
                                    <div className="w-20 h-1 bg-gradient-to-r from-gold to-transparent rounded-full"></div>
                                </div>

                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-gold/30 transition-all duration-300 mb-8">
                                    <p className="text-white/90 text-lg leading-relaxed">
                                        We are dedicated to revolutionizing maternal and child health outcomes through evidence-based research,
                                        innovative technologies, and community-centered interventions that address healthcare disparities worldwide.
                                        Our vision encompasses a world where every mother and child, regardless of location or socioeconomic status,
                                        has access to quality healthcare and the opportunity to thrive through sustainable, scalable health solutions.
                                        Guided by our core values of evidence-based research, global partnerships, community-centered approaches,
                                        and innovation excellence, we pioneer cutting-edge technologies and methodologies to solve complex health
                                        challenges in underserved communities across the globe.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                    {[
                                        { number: 50, label: 'Research Projects', suffix: '+' },
                                        { number: 25, label: 'Countries', suffix: '+' },
                                        { number: 100, label: 'Lives Impacted', suffix: 'K+' },
                                        { number: 15, label: 'Years Excellence', suffix: '+' }
                                    ].map((stat, index) => (
                                        <div
                                            key={index}
                                            className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:border-white/40 transition-all duration-300 group"
                                        >
                                            <div className={`text-2xl font-bold bg-gradient-to-r from-gold to-gold/80 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                                                <AnimatedCounter
                                                    target={stat.number}
                                                    duration={2500}
                                                    suffix={stat.suffix}
                                                />
                                            </div>
                                            <div className="text-white/80 text-sm mt-2 font-medium">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-4">
                                    <Button
                                        variant="primary"
                                        className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-gold to-gold/80 hover:from-gold/90 hover:to-gold/70 text-dark-blue font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                        onClick={() => handleNavigation('/about')}
                                    >
                                        Discover Our Full Story
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent z-10"></div>
                    </div>
                </div>
            </section>

            <section className="relative animate-fadeIn">
                <div className="max-w-7xl mx-auto px-6">
                    <ImageSlider slides={heroSlides} autoPlay={true} interval={6000} />
                </div>
            </section>

            <section id="latest-news" className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionHeader
                        title="Latest News"
                        subtitle="Stay informed with our most recent breakthroughs and developments in maternal healthcare"
                        variant="slanted"
                        onClick={() => handleSectionClick('latest-news')}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {newsItems.slice(0, 3).map((news) => (
                            <Card key={news.id} className={`group hover:transform hover:scale-[1.02] transition-all duration-500 overflow-hidden cursor-pointer h-full flex flex-col animate-fadeIn`}>
                                <div
                                    className="relative h-48 overflow-hidden rounded-t-lg bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700 flex items-center justify-center"
                                    style={{ backgroundImage: `url(${news.image})` }}
                                    onError={handleImageError}
                                    data-initials={news.title.split(' ').map(word => word[0]).join('').slice(0, 2)}
                                >
                                    <div className="text-gold text-4xl opacity-0">📰</div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/70 to-transparent" />
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="text-white/60 text-sm mb-3 font-medium">{news.date}</div>
                                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-gold transition-colors duration-300 line-clamp-2 flex-1 leading-tight">
                                        {news.title}
                                    </h3>
                                    <p className="text-white/70 text-sm leading-relaxed line-clamp-2 mb-4">
                                        {news.excerpt}
                                    </p>
                                    <div className="text-white/50 text-xs mt-auto font-medium">
                                        By {news.author}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <Button
                            variant="secondary"
                            className="px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg border-gold/50"
                            onClick={() => handleNavigation('/news')}
                        >
                            View All News
                        </Button>
                    </div>
                </div>
            </section>

            <section id="events-announcements" className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionHeader
                        title="Events & Announcements"
                        subtitle="Stay updated with our latest events, job opportunities, and important announcements"
                        variant="elegant"
                        onClick={() => handleSectionClick('events-announcements')}
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Upcoming Events */}
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h3 className="text-2xl font-bold text-white">Upcoming Events</h3>
                                <span className="text-gold text-sm font-semibold">{events.filter(e => e.status === 'upcoming').length} Events</span>
                            </div>

                            <div className="space-y-4">
                                {events.slice(0, 2).map((event) => (
                                    <Card key={event.id} className="group hover:transform hover:scale-[1.02] transition-all duration-500 overflow-hidden">
                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0">
                                                <div
                                                    className="w-20 h-20 rounded-lg bg-cover bg-center"
                                                    style={{ backgroundImage: `url(${event.image})` }}
                                                    onError={handleImageError}
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between mb-2">
                                                    <div className="text-gold font-semibold text-sm">{event.date}</div>
                                                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getStatusColor(event.status)}`}>
                                                        {event.status}
                                                    </span>
                                                </div>
                                                <h4 className="text-white font-semibold mb-2 group-hover:text-gold transition-colors duration-300">
                                                    {event.title}
                                                </h4>
                                                <div className="flex items-center gap-2 text-white/70 text-sm">
                                                    <span>📍</span>
                                                    <span>{event.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                            </div>

                            <Button
                                variant="secondary"
                                className="w-full py-3 transition-all duration-300 hover:scale-105"
                                onClick={() => handleNavigation('/events')}
                            >
                                View All Events
                            </Button>
                        </div>

                        {/* Job Vacancies */}
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h3 className="text-2xl font-bold text-white">Job Opportunities</h3>
                                <span className="text-gold text-sm font-semibold">{openVacancies.length} Open Positions</span>
                            </div>

                            <div className="space-y-4">
                                {openVacancies.map((job) => (
                                    <Card key={job.id} className="group hover:transform hover:scale-[1.02] transition-all duration-500 overflow-hidden">
                                        <div className="flex justify-between items-start">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${job.vacancyStatus === 'opened'
                                                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                                        : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                                                        }`}>
                                                        {job.vacancyStatus}
                                                    </span>
                                                </div>
                                                <h4 className="text-white font-semibold mb-2 group-hover:text-gold transition-colors duration-300">
                                                    {job.title}
                                                </h4>
                                                <div className="space-y-1 text-sm text-white/70">
                                                    <div className="flex items-center gap-2">
                                                        <span>🏢</span>
                                                        <span>{job.department}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <span>📍</span>
                                                        <span>{job.location}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <span>⏱️</span>
                                                        <span>{job.jobType}</span>
                                                    </div>
                                                </div>
                                                <p className="text-white/80 text-sm mt-3 line-clamp-2">
                                                    {job.description}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 mt-4">
                                            <Button
                                                variant="primary"
                                                className="flex-1 py-2 text-sm"
                                                onClick={() => handleNavigation('/careers')}
                                            >
                                                View Details
                                            </Button>
                                            <Button
                                                variant="secondary"
                                                className="flex-1 py-2 text-sm"
                                                onClick={() => handleApply(job.id, job.title)}
                                            >
                                                Apply Now
                                            </Button>
                                        </div>
                                    </Card>
                                ))}
                            </div>

                            <Button
                                variant="secondary"
                                className="w-full py-3 transition-all duration-300 hover:scale-105"
                                onClick={() => handleNavigation('/careers')}
                            >
                                View All Opportunities
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="impact-stories" className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionHeader
                        title="Impact Stories"
                        subtitle="Discover inspiring stories of transformation and innovation in maternal healthcare"
                        variant="modern"
                        onClick={() => handleSectionClick('impact-stories')}
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {stories.slice(0, 2).map((story) => (
                            <Card
                                key={story.id}
                                className="group hover:transform hover:scale-105 transition-all duration-500 overflow-hidden cursor-pointer"
                                onClick={() => handleNavigation(`/stories/${story.id}`)}
                            >
                                <div className="flex flex-col h-full">
                                    <div className="relative h-48 bg-gradient-to-br from-gold/20 to-dark-blue rounded-t-lg overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-gold text-4xl">📖</div>
                                        </div>
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-gold text-dark-blue text-sm font-semibold rounded-full">
                                                {story.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-white/60 text-sm">{story.date}</span>
                                            <span className="text-white/60 text-sm">{story.readTime}</span>
                                        </div>

                                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                                            {story.title}
                                        </h3>

                                        <p className="text-white/70 text-sm mb-4 leading-relaxed flex-1">
                                            {story.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between pt-4 border-t border-white/20">
                                            <span className="text-white/50 text-sm">By {story.author}</span>
                                            <span className="text-gold font-semibold text-sm">Read Story →</span>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <Button
                            variant="secondary"
                            className="px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg border-gold/50"
                            onClick={() => handleNavigation('/stories')}
                        >
                            View All Stories
                        </Button>
                    </div>
                </div>
            </section>

            <section id="leadership-team" className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionHeader
                        title="Our Leadership Team"
                        subtitle="Meet the experts driving innovation and excellence in maternal health research"
                        variant="modern"
                        onClick={() => handleSectionClick('leadership-team')}
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {coreTeamMembers.map((member) => (
                            <Card
                                key={member.id}
                                className={`text-center group hover:transform hover:scale-105 transition-all duration-500 overflow-hidden animate-fadeIn`}
                            >
                                <div
                                    className="relative w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden border-2 border-gold/30 group-hover:border-gold/50 transition-all duration-500 bg-cover bg-center transform group-hover:scale-110 flex items-center justify-center"
                                    style={{ backgroundImage: `url(${member.image})` }}
                                    onError={handleImageError}
                                    data-initials={member.name.split(' ').map(n => n[0]).join('')}
                                >
                                    <div className="text-gold text-2xl font-bold opacity-0">
                                        {member.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-dark-blue/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gold transition-colors duration-300">
                                    {member.name}
                                </h3>
                                <div className="text-gold font-medium text-sm mb-3">
                                    {member.role}
                                </div>
                                <div className="text-white/70 text-sm mb-4 leading-relaxed">
                                    {member.department}
                                </div>

                                <button
                                    className="text-gold text-sm font-semibold hover:underline flex items-center justify-center gap-2 group-hover:gap-3 transition-all duration-300 w-full py-2 rounded-lg hover:bg-gold/5 border border-gold/20 group-hover:border-gold/40"
                                    onClick={() => handleNavigation('/team')}
                                >
                                    View Full Profile
                                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                                </button>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <Button
                            variant="secondary"
                            className="px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg border-gold/50"
                            onClick={() => handleNavigation('/team')}
                        >
                            Explore Full Team Directory
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;