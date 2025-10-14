import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';
import { events } from '../data/eventsdata';
import { Calendar, Clock, MapPin, Users, Calendar as CalendarIcon } from 'lucide-react';

const EventDetail: React.FC = () => {
    const { eventId } = useParams<{ eventId: string }>();
    const navigate = useNavigate();

    const event = events.find(item => item.id === parseInt(eventId || ''));

    if (!event) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 text-center border border-blue-200">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Event Not Found</h1>
                    <p className="text-gray-700 mb-6">The requested event could not be found.</p>
                    <button
                        onClick={() => navigate('/events')}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                        Back to Events
                    </button>
                </div>
            </div>
        );
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'upcoming': return 'bg-green-500/20 text-green-600 border border-green-500/30';
            case 'ongoing': return 'bg-blue-500/20 text-blue-600 border border-blue-500/30';
            case 'completed': return 'bg-gray-500/20 text-gray-600 border border-gray-500/30';
            default: return 'bg-gray-500/20 text-gray-600 border border-gray-500/30';
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 space-y-16 py-12">
            {/* Breadcrumb Navigation */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <nav className="flex items-center space-x-2 text-sm mb-8 animate-fadeIn">
                        {/* Home Link */}
                        <button
                            onClick={() => navigate('/')}
                            className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-all duration-300 group hover:scale-105"
                        >
                            <Home className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                            <span className="font-medium">Home</span>
                        </button>

                        {/* Separator */}
                        <span className="text-gray-400">/</span>

                        {/* Events Link */}
                        <button
                            onClick={() => navigate('/events')}
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            Events
                        </button>

                        {/* Separator */}
                        <span className="text-gray-400">/</span>

                        {/* Current Page */}
                        <span className="text-blue-600 font-semibold flex items-center space-x-1">
                            <span>{event.title}</span>
                        </span>
                    </nav>
                </div>
            </section>

            {/* Header Section */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="relative py-16 text-center border border-blue-200 rounded-2xl bg-white/80 backdrop-blur-lg">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-transparent to-blue-600/10 rounded-2xl"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-2xl"></div>

                        <div className="relative z-10 px-6">
                            <div className="inline-flex items-center gap-3 bg-blue-500/10 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 mb-8">
                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase">
                                    {event.type}
                                </span>
                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                {event.title}
                            </h1>

                            <div className="flex flex-wrap justify-center items-center gap-6 text-gray-600 text-sm mb-8">
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

                            <div className="flex flex-wrap justify-center gap-4 text-gray-600 text-sm">
                                <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-blue-200">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span>Expert Speakers</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-blue-200">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span>Networking Opportunities</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-blue-200">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                    <span>Latest Research</span>
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
                            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-blue-200">
                                <div className="relative h-64 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-xl mb-8 flex items-center justify-center border border-blue-300">
                                    <div className="text-blue-600 text-6xl">🎪</div>
                                </div>

                                <div className="text-gray-700 leading-relaxed space-y-6">
                                    <p className="text-xl font-semibold text-blue-600">
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

                                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
                                        <h3 className="text-blue-600 text-xl font-bold mb-4">Key Discussion Topics</h3>
                                        <ul className="space-y-2 text-gray-700">
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

                                <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-blue-200">
                                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex-1">
                                        Register Now
                                    </button>
                                    <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                                        Add to Calendar
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-blue-200">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Event Details</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <CalendarIcon className="w-5 h-5 text-blue-600" />
                                        <div>
                                            <div className="text-gray-900 font-medium">{event.date}</div>
                                            <div className="text-gray-600 text-sm">{event.time}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <MapPin className="w-5 h-5 text-blue-600" />
                                        <div>
                                            <div className="text-gray-900 font-medium">Location</div>
                                            <div className="text-gray-600 text-sm">{event.location}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Users className="w-5 h-5 text-blue-600" />
                                        <div>
                                            <div className="text-gray-900 font-medium">Event Type</div>
                                            <div className="text-gray-600 text-sm">{event.type}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-blue-200">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
                                <div className="space-y-3">
                                    <button className="w-full text-left px-4 py-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-gray-900 hover:text-blue-600 border border-blue-200">
                                        Download Event Brochure
                                    </button>
                                    <button className="w-full text-left px-4 py-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-gray-900 hover:text-blue-600 border border-blue-200">
                                        View Speaker Lineup
                                    </button>
                                    <button className="w-full text-left px-4 py-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-gray-900 hover:text-blue-600 border border-blue-200">
                                        Share with Colleagues
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold text-gray-900">Related Events</h2>
                        <button
                            onClick={() => navigate('/events')}
                            className="text-blue-600 hover:underline transition-colors"
                        >
                            View All Events →
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {events
                            .filter(item => item.id !== event.id)
                            .slice(0, 3)
                            .map((relatedEvent) => (
                                <div
                                    key={relatedEvent.id}
                                    className="bg-white/80 backdrop-blur-lg rounded-2xl overflow-hidden border border-blue-200 group hover:transform hover:scale-105 transition-all duration-500 cursor-pointer"
                                    onClick={() => navigate(`/events/${relatedEvent.id}`)}
                                >
                                    <div className="flex flex-col h-full">
                                        <div className="relative h-40 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-t-lg overflow-hidden border-b border-blue-200">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="text-blue-600 text-3xl">🎪</div>
                                            </div>
                                        </div>

                                        <div className="p-6 flex-1 flex flex-col">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="text-blue-600 font-semibold text-xs">{relatedEvent.date}</span>
                                                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getStatusColor(relatedEvent.status)}`}>
                                                    {relatedEvent.status}
                                                </span>
                                            </div>

                                            <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                                {relatedEvent.title}
                                            </h4>

                                            <p className="text-gray-700 text-sm leading-relaxed line-clamp-2">
                                                {relatedEvent.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EventDetail;