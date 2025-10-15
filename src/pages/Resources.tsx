import React, { useEffect, useState } from 'react';
import { Download, Search, Play, FileText, Video, Database, Filter, X, Eye, Settings } from 'lucide-react';
import Breadcrumb from '../components/ui/Breadcrumb';
import { resourceItems, type ResourceItem } from '../data/resourcedata';

const Resources: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [selectedType, setSelectedType] = useState<string>('all');
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    // Simplified category groups with clear names
    const categoryGroups = {
        'Research Documents': ['reports', 'publications', 'briefs'],
        'Training & Guidelines': ['training', 'guidelines', 'manuals'],
        'Tools & Data': ['toolkits', 'datasets', 'sops']
    };

    const categoryLabels: Record<string, string> = {
        'reports': 'Research Reports',
        'manuals': 'Procedure Manuals',
        'training': 'Training Materials',
        'guidelines': 'Guidelines',
        'materials': 'Communication Materials',
        'toolkits': 'Toolkits',
        'sops': 'Standard Procedures',
        'archives': 'Event Archives',
        'summaries': 'Policy Briefs',
        'briefs': 'Research Briefs',
        'datasets': 'Data Resources'
    };

    const typeLabels: Record<string, string> = {
        'pdf': 'PDF Document',
        'video': 'Video Guide',
        'document': 'Document',
        'dataset': 'Dataset',
        'tool': 'Digital Tool'
    };

    const typeIcons: Record<string, React.ReactNode> = {
        'pdf': <FileText size={20} />,
        'video': <Video size={20} />,
        'document': <FileText size={20} />,
        'dataset': <Database size={20} />,
        'tool': <Settings size={20} />
    };

    const filteredItems = resourceItems.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

        const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
        const matchesType = selectedType === 'all' || item.type === selectedType;

        return matchesSearch && matchesCategory && matchesType;
    });

    // Group items by category group for better organization
    const groupedItems = filteredItems.reduce((acc, item) => {
        const group = Object.entries(categoryGroups).find(([_, categories]) =>
            categories.includes(item.category)
        )?.[0] || 'Other';

        if (!acc[group]) acc[group] = [];
        acc[group].push(item);
        return acc;
    }, {} as Record<string, ResourceItem[]>);

    const getTypeColor = (type: string) => {
        const colors = {
            'pdf': 'bg-blue-500/20 text-blue-600 border border-blue-500/30',
            'video': 'bg-red-500/20 text-red-600 border border-red-500/30',
            'document': 'bg-green-500/20 text-green-600 border border-green-500/30',
            'dataset': 'bg-purple-500/20 text-purple-600 border border-purple-500/30',
            'tool': 'bg-orange-500/20 text-orange-600 border border-orange-500/30'
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

    const handleDownload = (item: ResourceItem) => {
        // Simulate download - in real app, this would trigger file download
        console.log('Downloading:', item.title);
        // You can implement actual download logic here
    };

    const clearFilters = () => {
        setSelectedCategory('all');
        setSelectedType('all');
        setSearchTerm('');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 space-y-8 py-8">
            {/* Breadcrumb */}
            <section>
                <div className="max-w-7xl mx-auto px-4">
                    <Breadcrumb currentPage="Resources" parentPage="Home" parentPath="/" />
                </div>
            </section>

            {/* Header */}
            <section>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center py-8">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Knowledge <span className="text-blue-600">Resources</span>
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Access our comprehensive collection of research materials, training modules, and tools
                        </p>
                    </div>
                </div>
            </section>

            {/* Search & Filters */}
            <section>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-white rounded-xl p-6 border border-blue-200 mb-6">
                        {/* Search */}
                        <div className="relative mb-6">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search resources by title, description, or tags..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Category Filters */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <Filter size={20} className="text-gray-600" />
                                <span className="font-semibold text-gray-700">Filter by:</span>
                                {(selectedCategory !== 'all' || selectedType !== 'all') && (
                                    <button
                                        onClick={clearFilters}
                                        className="flex items-center gap-1 px-3 py-1 text-sm text-red-600 hover:text-red-700"
                                    >
                                        <X size={16} />
                                        Clear Filters
                                    </button>
                                )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Category Groups */}
                                {Object.entries(categoryGroups).map(([groupName, categories]) => (
                                    <div key={groupName} className="space-y-2">
                                        <h3 className="font-semibold text-gray-700 text-sm">{groupName}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {categories.map(category => (
                                                <button
                                                    key={category}
                                                    onClick={() => setSelectedCategory(category)}
                                                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${selectedCategory === category
                                                        ? 'bg-blue-600 text-white'
                                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                                        }`}
                                                >
                                                    {categoryLabels[category]}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Type Filters */}
                            <div className="flex flex-wrap gap-2">
                                <span className="font-semibold text-gray-700 text-sm mr-2">Resource Type:</span>
                                {['all', 'pdf', 'video', 'dataset', 'tool'].map(type => (
                                    <button
                                        key={type}
                                        onClick={() => setSelectedType(type)}
                                        className={`px-3 py-1 rounded-full text-xs font-medium transition-colors flex items-center gap-1 ${selectedType === type
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}
                                    >
                                        {type !== 'all' && typeIcons[type]}
                                        {type === 'all' ? 'All Types' : typeLabels[type]}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Resources Grid - Grouped by Category */}
            <section>
                <div className="max-w-7xl mx-auto px-4">
                    {Object.entries(groupedItems).length > 0 ? (
                        Object.entries(groupedItems).map(([groupName, items]) => (
                            <div key={groupName} className="mb-12">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-blue-200 pb-2">
                                    {groupName}
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {items.map((item) => (
                                        <div key={item.id} className="bg-white rounded-xl border border-blue-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                                            {/* Thumbnail/Icon */}
                                            <div className="relative aspect-video bg-gradient-to-br from-blue-100 to-blue-200">
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
                                                    <div className="w-full h-full flex items-center justify-center">
                                                        <div className="text-blue-600">
                                                            {typeIcons[item.type]}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Content */}
                                            <div className="p-4">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                                                        {typeLabels[item.type]}
                                                    </span>
                                                    <span className="text-gray-500 text-xs">
                                                        {item.downloadCount} downloads
                                                    </span>
                                                </div>

                                                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                                                    {item.title}
                                                </h3>

                                                <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                                                    {item.description}
                                                </p>

                                                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                                                    <span>{categoryLabels[item.category]}</span>
                                                    <span>{formatDate(item.publishDate)}</span>
                                                </div>

                                                {/* Tags */}
                                                <div className="flex flex-wrap gap-1 mb-3">
                                                    {item.tags.slice(0, 3).map(tag => (
                                                        <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                                                            #{tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* Actions */}
                                                <div className="flex gap-2">
                                                    {item.type === 'video' ? (
                                                        <button
                                                            onClick={() => playVideo(item.videoId!)}
                                                            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition-colors"
                                                        >
                                                            <Play size={16} />
                                                            Watch
                                                        </button>
                                                    ) : (
                                                        <button
                                                            onClick={() => handleDownload(item)}
                                                            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
                                                        >
                                                            <Download size={16} />
                                                            Download ({item.fileSize})
                                                        </button>
                                                    )}
                                                    <button className="px-3 py-2 border border-blue-600 text-blue-600 rounded-lg text-sm hover:bg-blue-50 transition-colors">
                                                        <Eye size={16} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-12 text-gray-500">
                            <FileText size={48} className="mx-auto mb-4 text-gray-300" />
                            <div className="text-lg">No resources found matching your criteria</div>
                            <button
                                onClick={clearFilters}
                                className="mt-2 text-blue-600 hover:text-blue-700"
                            >
                                Clear all filters
                            </button>
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

export default Resources;