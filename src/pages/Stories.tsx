import React from 'react';
import { useNavigate } from 'react-router-dom';
import Heading from '../components/ui/Heading';
import Card from '../components/ui/Card';
import Breadcrumb from '../components/ui/Breadcrumb';
import { stories } from '../data/storiesdata';

const Stories: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 space-y-16 py-12 animate-fadeIn">
            {/* Breadcrumb Navigation */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <Breadcrumb
                        currentPage="Stories"
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
                                    Impact Stories
                                </span>
                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Impact <span className="text-blue-600">Stories</span>
                            </h1>

                            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed text-justify">
                                Discover the real-world impact of our research through inspiring stories
                                of transformation, innovation, and community engagement.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4 text-gray-600 text-sm">
                                <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-blue-200">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span>Research Impact</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-blue-200">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span>Community Stories</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-blue-200">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                    <span>Innovation Journeys</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stories Grid */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {stories.map((story) => (
                            <Card
                                key={story.id}
                                className="group hover:transform hover:scale-[1.02] transition-all duration-500 overflow-hidden cursor-pointer bg-white/80 backdrop-blur-lg border border-blue-200 hover:border-blue-400"
                                onClick={() => navigate(`/stories/${story.id}`)}
                            >
                                <div className="flex flex-col h-full">
                                    <div className="relative h-48 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-t-lg overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-blue-600 text-4xl">📖</div>
                                        </div>
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-blue-500/20 text-blue-600 border border-blue-500/30 text-sm font-semibold rounded-full">
                                                {story.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-gray-600 text-sm">{story.date}</span>
                                            <span className="text-gray-600 text-sm">{story.readTime}</span>
                                        </div>

                                        <Heading level={3} className="text-xl mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                            {story.title}
                                        </Heading>

                                        <p className="text-gray-700 text-sm mb-4 leading-relaxed flex-1">
                                            {story.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between pt-4 border-t border-blue-200">
                                            <span className="text-gray-600 text-sm">By {story.author}</span>
                                            <span className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors duration-300">
                                                Read Story →
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Statistics Summary */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-blue-200 text-center group hover:transform hover:scale-[1.02] transition-all duration-500">
                        <Heading level={3} className="text-blue-600 mb-8">Stories Overview</Heading>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div>
                                <div className="text-3xl font-bold text-blue-600 mb-2">{stories.length}</div>
                                <div className="text-gray-700 text-sm">Total Stories</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-blue-600 mb-2">
                                    {new Set(stories.map(story => story.category)).size}
                                </div>
                                <div className="text-gray-700 text-sm">Categories</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-blue-600 mb-2">
                                    {new Set(stories.map(story => story.author)).size}
                                </div>
                                <div className="text-gray-700 text-sm">Featured Authors</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-blue-600 mb-2">
                                    {Math.round(stories.reduce((total, story) => {
                                        const readTime = parseInt(story.readTime);
                                        return total + (isNaN(readTime) ? 0 : readTime);
                                    }, 0) / stories.length)} min
                                </div>
                                <div className="text-gray-700 text-sm">Avg. Read Time</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Stories;