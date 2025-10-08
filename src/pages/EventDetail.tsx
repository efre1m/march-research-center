import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Heading from '../components/ui/Heading';
import Card from '../components/ui/Card';
import Breadcrumb from '../components/ui/Breadcrumb';
import { events } from '../data/eventsdata';
import { Calendar, Clock, MapPin, Users, Calendar as CalendarIcon } from 'lucide-react';

const EventDetail: React.FC = () => {
    const { eventId } = useParams<{ eventId: string }>();
    const navigate = useNavigate();

    const event = events.find(item => item.id === parseInt(eventId || ''));

    if (!event) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Card className="text-center p-8">
                    <Heading level={1} className="text-2xl mb-4">Event Not Found</Heading>
                    <p className="text-white/70 mb-6">The requested event could not be found.</p>
                    <button
                        onClick={() => navigate('/events')}
                        className="px-6 py-2 bg-gold text-dark-blue rounded-lg font-semibold hover:bg-[#e6c200] transition-colors"
                    >
                        Back to Events
                    </button>
                </Card>
            </div>
        );
    }

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
            <Breadcrumb currentPage={event.title} parentPage="Events" parentPath="/events" />

            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="relative py-12 text-center border border-white/20 rounded-2xl bg-white/5 backdrop-blur-sm">
                        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5 rounded-2xl"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent rounded-2xl"></div>

                        <div className="relative z-10 px-6">
                            <div className="inline-flex items-center gap-3 bg-gold/10 backdrop-blur-sm border border-gold/30 rounded-full px-6 py-3 mb-8">
                                <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                                <span className="text-gold text-sm font-semibold tracking-wider uppercase">
                                    {event.type}
                                </span>
                                <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                {event.title}
                            </h1>

                            <div className="flex flex-wrap justify-center items-center gap-6 text-white/70 text-sm mb-8">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>{event.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>{event.time}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    <span>{event.location}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${getStatusColor(event.status)}`}>
                                        {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="animate-slideUp">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <Card className="p-8">
                                <div className="relative h-64 bg-gradient-to-br from-gold/20 to-dark-blue rounded-xl mb-8 flex items-center justify-center">
                                    <div className="text-gold text-6xl">🎪</div>
                                </div>

                                <div className="text-white/80 leading-relaxed space-y-6">
                                    <p className="text-xl font-semibold text-gold">
                                        {event.description}
                                    </p>

                                    <div className="space-y-4">
                                        <p>
                                            {event.fullDescription}
                                        </p>
                                        <p>
                                            This event brings together leading experts, researchers, and practitioners
                                            in the field of maternal healthcare to share insights, discuss challenges,
                                            and explore innovative solutions that can transform healthcare delivery
                                            worldwide.
                                        </p>
                                    </div>

                                    <div className="bg-white/5 border-l-4 border-gold p-6 rounded-r-lg my-8">
                                        <Heading level={3} className="text-gold mb-4">Key Discussion Topics</Heading>
                                        <ul className="space-y-2 text-white/70">
                                            <li>• Innovative maternal healthcare technologies</li>
                                            <li>• Community-based healthcare solutions</li>
                                            <li>• Global health partnerships and collaborations</li>
                                            <li>• Research translation and implementation</li>
                                            <li>• Future directions in maternal health</li>
                                        </ul>
                                    </div>

                                    <p>
                                        Don't miss this opportunity to connect with like-minded professionals,
                                        learn from experts in the field, and contribute to the advancement of
                                        maternal healthcare worldwide.
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-white/20">
                                    <button className="px-6 py-3 bg-gold text-dark-blue rounded-lg font-semibold hover:bg-[#e6c200] transition-colors flex-1">
                                        Register Now
                                    </button>
                                    <button className="px-6 py-3 border border-gold text-gold rounded-lg font-semibold hover:bg-gold hover:text-dark-blue transition-colors">
                                        Add to Calendar
                                    </button>
                                </div>
                            </Card>
                        </div>

                        <div className="space-y-6">
                            <Card className="p-6">
                                <Heading level={3} className="text-gold mb-4">Event Details</Heading>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <CalendarIcon className="w-5 h-5 text-gold" />
                                        <div>
                                            <div className="text-white font-medium">{event.date}</div>
                                            <div className="text-white/60 text-sm">{event.time}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <MapPin className="w-5 h-5 text-gold" />
                                        <div>
                                            <div className="text-white font-medium">Location</div>
                                            <div className="text-white/60 text-sm">{event.location}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Users className="w-5 h-5 text-gold" />
                                        <div>
                                            <div className="text-white font-medium">Event Type</div>
                                            <div className="text-white/60 text-sm">{event.type}</div>
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-6">
                                <Heading level={3} className="text-gold mb-4">Quick Actions</Heading>
                                <div className="space-y-3">
                                    <button className="w-full text-left px-4 py-3 bg-white/5 hover:bg-gold/10 rounded-lg transition-colors text-white hover:text-gold">
                                        Download Event Brochure
                                    </button>
                                    <button className="w-full text-left px-4 py-3 bg-white/5 hover:bg-gold/10 rounded-lg transition-colors text-white hover:text-gold">
                                        View Speaker Lineup
                                    </button>
                                    <button className="w-full text-left px-4 py-3 bg-white/5 hover:bg-gold/10 rounded-lg transition-colors text-white hover:text-gold">
                                        Share with Colleagues
                                    </button>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between mb-8">
                        <Heading level={2}>Related Events</Heading>
                        <button
                            onClick={() => navigate('/events')}
                            className="text-gold hover:underline transition-colors"
                        >
                            View All Events →
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {events
                            .filter(item => item.id !== event.id)
                            .slice(0, 3)
                            .map((relatedEvent) => (
                                <Card
                                    key={relatedEvent.id}
                                    className="group hover:transform hover:scale-105 transition-all duration-500 overflow-hidden cursor-pointer"
                                    onClick={() => navigate(`/events/${relatedEvent.id}`)}
                                >
                                    <div className="flex flex-col h-full">
                                        <div className="relative h-40 bg-gradient-to-br from-gold/20 to-dark-blue rounded-t-lg overflow-hidden">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="text-gold text-3xl">🎪</div>
                                            </div>
                                        </div>

                                        <div className="p-6 flex-1 flex flex-col">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="text-gold font-semibold text-xs">{relatedEvent.date}</span>
                                                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getStatusColor(relatedEvent.status)}`}>
                                                    {relatedEvent.status}
                                                </span>
                                            </div>

                                            <Heading level={4} className="text-lg mb-3 group-hover:text-gold transition-colors duration-300">
                                                {relatedEvent.title}
                                            </Heading>

                                            <p className="text-white/70 text-sm leading-relaxed line-clamp-2">
                                                {relatedEvent.description}
                                            </p>
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

export default EventDetail;