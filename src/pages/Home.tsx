import React from 'react';
import { useNavigate } from 'react-router-dom';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import ImageSlider from '../components/ui/ImageSlider';
import { coreTeamMembers } from '../data/teamdata';
import { newsItems } from '../data/newsdata';
import { events } from '../data/eventsdata';
import { stories } from '../data/storiesdata';

interface HomeProps {
    // Remove onNavigate prop since we're using useNavigate
}

const Home: React.FC<HomeProps> = () => {
    const navigate = useNavigate();

    // Hero Slider Images and Data
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

    // Enhanced navigation handler with smooth transitions
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
                    innerDiv.textContent = '📷';
                }
            }
        }
    };

    // Handle section header click - scroll to section with zigzag animation
    const handleSectionClick = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <div className="space-y-16 animate-fadeIn">
            {/* Scroll to Top Button */}
            {/* <ScrollToTop /> */}

            {/* Hero Header Section */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Main Hero Header with matching section width */}
                    <div className="relative py-12 text-center border border-white/20 rounded-2xl bg-white/5 backdrop-blur-sm">
                        {/* Background Effects */}
                        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5 rounded-2xl"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent rounded-2xl"></div>

                        {/* Content */}
                        <div className="relative z-10 px-6">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-3 bg-gold/10 backdrop-blur-sm border border-gold/30 rounded-full px-6 py-3 mb-8">
                                <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                                <span className="text-gold text-sm font-semibold tracking-wider uppercase">
                                    Excellence in Maternal Health Research
                                </span>
                                <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                            </div>

                            {/* Main Title */}
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                Transforming <span className="text-gold">Global Maternal</span>
                                <br className="hidden lg:block" /> Healthcare Through Innovation
                            </h1>

                            {/* Subtitle */}
                            <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto mb-8 leading-relaxed">
                                Pioneering evidence-based research and innovative technologies to improve
                                maternal and child health outcomes in underserved communities worldwide.
                            </p>

                            {/* Feature Indicators */}
                            <div className="flex flex-wrap justify-center gap-4 text-white/70 text-sm">
                                <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/20">
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    <span>Evidence-Based Research</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/20">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                    <span>Global Partnerships</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/20">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                    <span>Community-Centered Solutions</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hero Section with Image Slider */}
            <section className="relative animate-fadeIn">
                <div className="max-w-7xl mx-auto px-6">
                    <ImageSlider slides={heroSlides} autoPlay={true} interval={6000} />
                </div>
            </section>

            {/* Latest News Section */}
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
                                {/* Image with fallback */}
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

            {/* Upcoming Events Section */}
            <section id="upcoming-events" className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionHeader
                        title="Upcoming Events"
                        subtitle="Join our knowledge-sharing sessions, training programs, and collaborative events"
                        variant="elegant"
                        onClick={() => handleSectionClick('upcoming-events')}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {events.slice(0, 2).map((event) => (
                            <Card key={event.id} className={`group hover:transform hover:scale-[1.01] transition-all duration-500 overflow-hidden animate-fadeIn`}>
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="md:w-2/5">
                                        <div
                                            className="relative h-48 md:h-full rounded-lg overflow-hidden bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700 flex items-center justify-center"
                                            style={{ backgroundImage: `url(${event.image})` }}
                                            onError={handleImageError}
                                            data-initials={event.title.split(' ').map(word => word[0]).join('').slice(0, 2)}
                                        >
                                            <div className="text-gold text-4xl opacity-0">🎪</div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/70 to-transparent md:bg-gradient-to-r md:from-dark-blue/70 md:to-transparent" />
                                        </div>
                                    </div>

                                    <div className="md:w-3/5 p-1 md:p-0 md:pr-2 flex flex-col justify-center">
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="text-gold font-semibold text-sm">{event.date}</div>
                                            <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${getStatusColor(event.status)} transition-colors duration-300`}>
                                                {event.status}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gold transition-colors duration-300 leading-tight">
                                            {event.title}
                                        </h3>

                                        <div className="space-y-2 text-sm mb-4">
                                            <div className="flex items-center gap-3 text-white/70">
                                                <span className="w-4">🕒</span>
                                                <span>{event.time}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-white/70">
                                                <span className="w-4">📍</span>
                                                <span className="line-clamp-1">{event.location}</span>
                                            </div>
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
                            onClick={() => handleNavigation('/events')}
                        >
                            View All Events
                        </Button>
                    </div>
                </div>
            </section>

            {/* Impact Stories Section */}
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

            {/* Leadership Team Section */}
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
                                {/* Circular Profile Image with fallback */}
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

                                {/* Member Info */}
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

            {/* Quick Links Section */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionHeader
                        title="Explore Our Initiatives"
                        subtitle="Discover our comprehensive approach to maternal and child health innovation"
                        variant="slanted"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: '🔬',
                                title: 'Research Programs',
                                path: '/projects',
                                description: 'Explore our groundbreaking studies and clinical trials advancing maternal healthcare worldwide.'
                            },
                            {
                                icon: '🌍',
                                title: 'Global Impact',
                                path: '/about',
                                description: 'See how our programs are transforming healthcare delivery in communities across the globe.'
                            },
                            {
                                icon: '🤝',
                                title: 'Collaborate With Us',
                                path: '/contact',
                                description: 'Join our mission through partnerships, research collaborations, and career opportunities.'
                            }
                        ].map((link) => (
                            <Card
                                key={link.title}
                                className={`text-center group hover:transform hover:scale-105 transition-all duration-500 p-8 animate-fadeIn`}
                            >
                                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{link.icon}</div>
                                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-gold transition-colors duration-300">
                                    {link.title}
                                </h3>
                                <p className="text-white/70 text-sm mb-6 leading-relaxed">
                                    {link.description}
                                </p>
                                <Button
                                    variant="primary"
                                    className="w-full py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                    onClick={() => handleNavigation(link.path)}
                                >
                                    Explore {link.title}
                                </Button>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;