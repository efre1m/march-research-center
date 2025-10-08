import React from 'react';
import { useNavigate } from 'react-router-dom';
import Heading from '../components/ui/Heading';
import Card from '../components/ui/Card';
import Breadcrumb from '../components/ui/Breadcrumb';
import { events } from '../data/eventsdata';

const Events: React.FC = () => {
    const navigate = useNavigate();

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'upcoming': return 'bg-green-500/20 text-green-400 border border-green-500/30';
            case 'ongoing': return 'bg-blue-500/20 text-blue-400 border border-blue-500/30';
            case 'completed': return 'bg-gray-500/20 text-gray-400 border border-gray-500/30';
            default: return 'bg-gray-500/20 text-gray-400 border border-gray-500/30';
        }
    };

    return (
        <div className="space-y-16 animate-fadeIn">
            <Breadcrumb currentPage="Events" parentPage="Home" parentPath="/" />

            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="relative py-12 text-center border border-white/20 rounded-2xl bg-white/5 backdrop-blur-sm">
                        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5 rounded-2xl"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent rounded-2xl"></div>

                        <div className="relative z-10 px-6">
                            <div className="inline-flex items-center gap-3 bg-gold/10 backdrop-blur-sm border border-gold/30 rounded-full px-6 py-3 mb-8">
                                <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                                <span className="text-gold text-sm font-semibold tracking-wider uppercase">
                                    Upcoming Activities
                                </span>
                                <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                Upcoming <span className="text-gold">Events</span>
                            </h1>

                            <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto mb-8 leading-relaxed">
                                Join our knowledge-sharing sessions, training programs, and collaborative events
                                to stay at the forefront of maternal healthcare innovation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {events.map((event) => (
                            <Card
                                key={event.id}
                                className="group hover:transform hover:scale-105 transition-all duration-500 overflow-hidden"
                                onClick={() => navigate(`/events/${event.id}`)}
                            >
                                <div className="flex flex-col h-full">
                                    <div className="relative h-48 bg-gradient-to-br from-gold/20 to-dark-blue rounded-t-lg overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-gold text-4xl">🎪</div>
                                        </div>
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-gold text-dark-blue text-sm font-semibold rounded-full">
                                                {event.type}
                                            </span>
                                        </div>
                                        <div className="absolute top-4 right-4">
                                            <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${getStatusColor(event.status)}`}>
                                                {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-gold font-semibold text-sm">{event.date}</span>
                                            <span className="text-white/60 text-sm">{event.time}</span>
                                        </div>

                                        <Heading level={3} className="text-xl mb-3 group-hover:text-gold transition-colors duration-300">
                                            {event.title}
                                        </Heading>

                                        <div className="space-y-2 mb-4">
                                            <div className="flex items-center gap-2 text-white/70 text-sm">
                                                <span>📍</span>
                                                <span>{event.location}</span>
                                            </div>
                                        </div>

                                        <p className="text-white/70 text-sm mb-4 leading-relaxed flex-1">
                                            {event.description}
                                        </p>

                                        <div className="flex gap-2 pt-4 border-t border-white/20">
                                            <button className="flex-1 px-4 py-2 bg-gold text-dark-blue rounded-lg text-sm font-semibold hover:bg-[#e6c200] transition-colors">
                                                Register Now
                                            </button>
                                            <button className="px-4 py-2 border border-gold text-gold rounded-lg text-sm font-semibold hover:bg-gold hover:text-dark-blue transition-colors">
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Events;