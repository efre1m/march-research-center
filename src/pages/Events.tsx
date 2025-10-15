import React from 'react';
import { useNavigate } from 'react-router-dom';
import Heading from '../components/ui/Heading';
import Card from '../components/ui/Card';
import Breadcrumb from '../components/ui/Breadcrumb';
import { events } from '../data/eventsdata';
import { MapPin, Calendar, Clock, ExternalLink } from 'lucide-react';

const Events: React.FC = () => {
    const navigate = useNavigate();

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'upcoming': return 'bg-green-500/20 text-green-600 border border-green-500/30';
            case 'ongoing': return 'bg-blue-500/20 text-blue-600 border border-blue-500/30';
            case 'completed': return 'bg-gray-500/20 text-gray-600 border border-gray-500/30';
            case 'canceled': return 'bg-red-500/20 text-red-600 border border-red-500/30';
            default: return 'bg-gray-500/20 text-gray-600 border border-gray-500/30';
        }
    };

    const getDisplayLocation = (event: any) => {
        if (event.isOnline && event.meetingLink) {
            return event.meetingLink;
        }
        if (event.isOnline) {
            return 'Virtual Event';
        }
        return event.location;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 space-y-16 py-12 animate-fadeIn">
            {/* Breadcrumb Navigation */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <Breadcrumb
                        currentPage="Events"
                        parentPage="Home"
                        parentPath="/"
                    />
                </div>
            </section>

            {/* Hero Header Section */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="relative py-16 text-center border border-blue-200 rounded-2xl bg-white/80 backdrop-blur-lg">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-transparent to-blue-600/10 rounded-2xl"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-2xl"></div>

                        <div className="relative z-10 px-6">
                            <div className="inline-flex items-center gap-3 bg-blue-500/10 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 mb-8">
                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase">
                                    Events & Activities
                                </span>
                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Our <span className="text-blue-600">Events</span>
                            </h1>

                            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed text-justify">
                                Discover our upcoming and past events, including conferences, workshops, and collaborative sessions
                                that drive innovation in maternal healthcare research and practice.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4 text-gray-600 text-sm">
                                <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-blue-200">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span>Conferences</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-blue-200">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span>Workshops</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-blue-200">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                    <span>Meetings</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Events Grid */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {events.map((event) => {
                            const displayLocation = getDisplayLocation(event);

                            return (
                                <Card
                                    key={event.id}
                                    className="group hover:transform hover:scale-[1.02] transition-all duration-500 overflow-hidden cursor-pointer bg-white/80 backdrop-blur-lg border border-blue-200 hover:border-blue-400"
                                    onClick={() => navigate(`/events/${event.id}`)}
                                >
                                    <div className="flex flex-col h-full">
                                        <div className="relative h-48 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-t-lg overflow-hidden">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="text-blue-600 text-4xl">🎪</div>
                                            </div>
                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1 bg-blue-500/20 text-blue-600 border border-blue-500/30 text-sm font-semibold rounded-full">
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
                                                <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{event.date}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-600 text-sm">
                                                    <Clock className="w-4 h-4" />
                                                    <span>{event.time}</span>
                                                </div>
                                            </div>

                                            <Heading level={3} className="text-xl mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                                {event.title}
                                            </Heading>

                                            <div className="space-y-2 mb-4">
                                                <div className="flex items-center gap-2 text-gray-700 text-sm">
                                                    <MapPin className="w-4 h-4 text-blue-500" />
                                                    <span className={event.isOnline ? 'text-blue-600 font-medium' : ''}>
                                                        {displayLocation}
                                                    </span>
                                                    {event.isOnline && event.meetingLink && (
                                                        <a
                                                            href={event.meetingLink}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            onClick={(e) => e.stopPropagation()}
                                                            className="flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors font-semibold"
                                                        >
                                                            <ExternalLink className="w-3 h-3" />
                                                            <span className="text-xs">Join</span>
                                                        </a>
                                                    )}
                                                </div>
                                            </div>

                                            <p className="text-gray-700 text-sm mb-4 leading-relaxed flex-1">
                                                {event.description}
                                            </p>

                                            <div className="pt-4 border-t border-blue-200">
                                                <button
                                                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors duration-300 hover:scale-105 transition-transform"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate(`/events/${event.id}`);
                                                    }}
                                                >
                                                    View Event Details
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Statistics Summary */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-blue-200 text-center group hover:transform hover:scale-[1.02] transition-all duration-500">
                        <Heading level={3} className="text-blue-600 mb-8">Events Overview</Heading>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div>
                                <div className="text-3xl font-bold text-blue-600 mb-2">{events.length}</div>
                                <div className="text-gray-700 text-sm">Total Events</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-blue-600 mb-2">
                                    {events.filter(event => event.status === 'upcoming').length}
                                </div>
                                <div className="text-gray-700 text-sm">Upcoming</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-blue-600 mb-2">
                                    {events.filter(event => event.status === 'ongoing').length}
                                </div>
                                <div className="text-gray-700 text-sm">Ongoing</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-blue-600 mb-2">
                                    {events.filter(event => event.isOnline).length}
                                </div>
                                <div className="text-gray-700 text-sm">Online Events</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Events;