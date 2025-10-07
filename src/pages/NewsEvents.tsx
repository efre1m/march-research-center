import React, { useState } from 'react';
import Heading from '../components/ui/Heading';
import Card from '../components/ui/Card';

const NewsEvents: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'news' | 'events'>('news');

    const newsItems = [
        {
            id: 1,
            title: 'Breakthrough in MARCH Computing Stability',
            date: 'December 15, 2024',
            category: 'Research Breakthrough',
            excerpt: 'Our MARCH research team achieves record-breaking coherence times in superconducting qubits, paving the way for more stable MARCH computers.',
            image: '/news/MARCH-breakthrough.jpg',
            readTime: '3 min read'
        },
        {
            id: 2,
            title: 'International Research Partnership Announced',
            date: 'December 8, 2024',
            category: 'Collaboration',
            excerpt: 'MARCH Research Center partners with leading European institutions to advance AI and MARCH computing research on a global scale.',
            image: '/news/international-partnership.jpg',
            readTime: '2 min read'
        },
        {
            id: 3,
            title: 'New Sustainable Energy Lab Opening',
            date: 'November 25, 2024',
            category: 'Facility Update',
            excerpt: 'State-of-the-art renewable energy laboratory opens with advanced equipment for solar cell and battery technology development.',
            image: '/news/energy-lab.jpg',
            readTime: '4 min read'
        },
        {
            id: 4,
            title: 'AI Research Wins National Award',
            date: 'November 12, 2024',
            category: 'Award',
            excerpt: 'Our AI team receives the National Science Foundation award for innovative work in explainable artificial intelligence systems.',
            image: '/news/ai-award.jpg',
            readTime: '2 min read'
        }
    ];

    const events = [
        {
            id: 1,
            title: 'Annual Research Symposium 2025',
            date: 'January 20, 2025',
            time: '9:00 AM - 5:00 PM',
            location: 'Main Auditorium, MARCH Research Center',
            type: 'Symposium',
            description: 'Showcasing groundbreaking research from all departments with keynote speakers from industry and academia.',
            registrationLink: '#register'
        },
        {
            id: 2,
            title: 'International Conference on MARCH Technologies',
            date: 'February 5-7, 2025',
            time: 'All Day',
            location: 'Conference Center & Virtual',
            type: 'Conference',
            description: 'Three-day international conference featuring leading researchers in MARCH computing and MARCH information science.',
            registrationLink: '#register'
        },
        {
            id: 3,
            title: 'Public Science Lecture Series',
            date: 'March 15, 2025',
            time: '6:00 PM - 7:30 PM',
            location: 'Public Lecture Hall',
            type: 'Public Event',
            description: 'Monthly public lectures making complex scientific concepts accessible to the general public.',
            registrationLink: '#register'
        },
        {
            id: 4,
            title: 'Career Fair & Open House',
            date: 'April 10, 2025',
            time: '10:00 AM - 4:00 PM',
            location: 'Main Campus',
            type: 'Recruitment',
            description: 'Opportunity for students and professionals to explore career opportunities and research collaborations.',
            registrationLink: '#register'
        }
    ];

    return (
        <div className="space-y-8">
            <div className="text-center mb-12">
                <Heading level={1}>News & Events</Heading>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                    Stay updated with the latest research breakthroughs, announcements, and upcoming events
                    at MARCH Research Center.
                </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-white/20">
                <button
                    onClick={() => setActiveTab('news')}
                    className={`px-6 py-3 font-semibold border-b-2 transition-colors ${activeTab === 'news'
                        ? 'border-gold text-gold'
                        : 'border-transparent text-white/70 hover:text-white'
                        }`}
                >
                    Latest News
                </button>
                <button
                    onClick={() => setActiveTab('events')}
                    className={`px-6 py-3 font-semibold border-b-2 transition-colors ${activeTab === 'events'
                        ? 'border-gold text-gold'
                        : 'border-transparent text-white/70 hover:text-white'
                        }`}
                >
                    Upcoming Events
                </button>
            </div>

            {/* News Content */}
            {activeTab === 'news' && (
                <div className="space-y-6">
                    {newsItems.map((news) => (
                        <Card key={news.id} className="hover:bg-white/15 transition-all duration-300">
                            <div className="flex flex-col lg:flex-row gap-6">
                                <div className="lg:w-48 lg:h-32 bg-gradient-to-br from-gold/20 to-dark-blue rounded-lg flex items-center justify-center flex-shrink-0">
                                    <div className="text-gold text-2xl font-bold">QR</div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-4 mb-2">
                                        <span className="text-gold text-sm font-semibold">{news.category}</span>
                                        <span className="text-white/50 text-sm">{news.date}</span>
                                        <span className="text-white/50 text-sm">{news.readTime}</span>
                                    </div>
                                    <Heading level={3} className="text-xl mb-3 text-white">
                                        {news.title}
                                    </Heading>
                                    <p className="text-white/70 mb-4 leading-relaxed">
                                        {news.excerpt}
                                    </p>
                                    <button className="text-gold font-semibold hover:underline transition-colors">
                                        Read Full Story →
                                    </button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            )}

            {/* Events Content */}
            {activeTab === 'events' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {events.map((event) => (
                        <Card key={event.id} className="hover:transform hover:scale-105 transition-all duration-300">
                            <div className="flex items-start justify-between mb-4">
                                <span className="px-3 py-1 bg-gold text-dark-blue text-sm font-semibold rounded-full">
                                    {event.type}
                                </span>
                                <div className="text-gold text-sm font-semibold text-right">
                                    {event.date}
                                </div>
                            </div>

                            <Heading level={3} className="text-xl mb-3 text-white">
                                {event.title}
                            </Heading>

                            <div className="space-y-2 mb-4">
                                <div className="flex items-center gap-2 text-white/70 text-sm">
                                    <span>🕒</span>
                                    <span>{event.time}</span>
                                </div>
                                <div className="flex items-center gap-2 text-white/70 text-sm">
                                    <span>📍</span>
                                    <span>{event.location}</span>
                                </div>
                            </div>

                            <p className="text-white/70 text-sm mb-4 leading-relaxed">
                                {event.description}
                            </p>

                            <div className="flex gap-2">
                                <button className="px-4 py-2 bg-gold text-dark-blue rounded-lg text-sm font-semibold hover:bg-[#e6c200] transition-colors flex-1">
                                    Register Now
                                </button>
                                <button className="px-4 py-2 border border-gold text-gold rounded-lg text-sm font-semibold hover:bg-gold hover:text-dark-blue transition-colors">
                                    Add to Calendar
                                </button>
                            </div>
                        </Card>
                    ))}
                </div>
            )}

            {/* Newsletter Signup */}
            <Card className="max-w-2xl mx-auto mt-12 text-center">
                <Heading level={3} className="mb-4">Stay Informed</Heading>
                <p className="text-white/70 mb-6">
                    Subscribe to our newsletter to receive updates on research breakthroughs,
                    upcoming events, and career opportunities.
                </p>
                <div className="flex gap-2 max-w-md mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-gold"
                    />
                    <button className="px-6 py-2 bg-gold text-dark-blue rounded-lg font-semibold hover:bg-[#e6c200] transition-colors">
                        Subscribe
                    </button>
                </div>
            </Card>
        </div>
    );
};

export default NewsEvents;