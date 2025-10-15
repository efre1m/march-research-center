import React, { useEffect, useState } from 'react';
import { Link, Play, Headphones, FileText, Newspaper, X } from 'lucide-react';
import Breadcrumb from '../components/ui/Breadcrumb';
import { mediaItems } from '../data/mediadata';

const InTheMedia: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [filter, setFilter] = useState<'all' | 'video' | 'article' | 'podcast' | 'news'>('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    const filteredItems = mediaItems.filter(item => {
        const matchesFilter = filter === 'all' || item.type === filter;
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.source.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const getTypeIcon = (type: string) => {
        const icons = {
            'video': Play,
            'podcast': Headphones,
            'article': FileText,
            'news': Newspaper
        };
        const IconComponent = icons[type as keyof typeof icons] || FileText;
        return <IconComponent size={16} />;
    };

    const getTypeColor = (type: string) => {
        const colors = {
            'video': 'bg-red-500/20 text-red-600 border border-red-500/30',
            'podcast': 'bg-purple-500/20 text-purple-600 border border-purple-500/30',
            'article': 'bg-blue-500/20 text-blue-600 border border-blue-500/30',
            'news': 'bg-green-500/20 text-green-600 border border-green-500/30'
        };
        return colors[type as keyof typeof colors] || 'bg-gray-500/20 text-gray-600 border border-gray-500/30';
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const playVideo = (videoId: string) => {
        setSelectedVideo(videoId);
    };

    const closeVideo = () => {
        setSelectedVideo(null);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 space-y-8 py-8">
            {/* Breadcrumb */}
            <section>
                <div className="max-w-7xl mx-auto px-4">
                    <Breadcrumb currentPage="In The Media" parentPage="Home" parentPath="/" />
                </div>
            </section>

            {/* Header */}
            <section>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center py-8">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            In The <span className="text-blue-600">Media</span>
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Featured coverage and interviews from various media outlets
                        </p>
                    </div>
                </div>
            </section>

            {/* Search & Filter */}
            <section>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-white rounded-xl p-4 border border-blue-200 mb-6">
                        <div className="flex flex-col md:flex-row gap-4 items-center">
                            <div className="flex-1 w-full">
                                <input
                                    type="text"
                                    placeholder="Search media..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex gap-2">
                                {(['all', 'video', 'article', 'podcast', 'news'] as const).map((type) => (
                                    <button
                                        key={type}
                                        onClick={() => setFilter(type)}
                                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${filter === type
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}
                                    >
                                        {type === 'all' ? 'All' : type}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Media Grid */}
            <section>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredItems.map((item) => (
                            <div key={item.id} className="bg-white rounded-xl border border-blue-200 overflow-hidden hover:shadow-lg transition-shadow">
                                {/* Thumbnail */}
                                <div className="relative aspect-video bg-gray-200">
                                    {item.type === 'video' && item.videoId ? (
                                        <>
                                            <img
                                                src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <button
                                                onClick={() => playVideo(item.videoId!)}
                                                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
                                            >
                                                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                                                    <Play size={24} className="text-white ml-1" />
                                                </div>
                                            </button>
                                        </>
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
                                            <div className="text-blue-600">
                                                {getTypeIcon(item.type)}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getTypeColor(item.type)}`}>
                                            {getTypeIcon(item.type)}
                                            {item.type}
                                        </span>
                                        <span className="text-gray-500 text-sm">{formatDate(item.date)}</span>
                                    </div>

                                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                        {item.description}
                                    </p>

                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-700 text-sm font-medium">{item.source}</span>
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
                                        >
                                            <Link size={14} />
                                            View
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredItems.length === 0 && (
                        <div className="text-center py-12 text-gray-500">
                            No media found matching your criteria.
                        </div>
                    )}
                </div>
            </section>

            {/* Video Modal */}
            {selectedVideo && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                    <div className="relative w-full max-w-4xl">
                        <button
                            onClick={closeVideo}
                            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
                        >
                            <X size={24} />
                        </button>
                        <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
                            <iframe
                                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="w-full h-full"
                                frameBorder="0"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InTheMedia;