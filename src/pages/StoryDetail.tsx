import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';
import Heading from '../components/ui/Heading';
import Card from '../components/ui/Card';
import ShareModal from '../components/ui/ShareModal';
import { stories } from '../data/storiesdata';
import { Calendar, User, Clock, Heart, Share2, ArrowLeft } from 'lucide-react';

const StoryDetail: React.FC = () => {
    const { storyId } = useParams<{ storyId: string }>();
    const navigate = useNavigate();
    const [showShareModal, setShowShareModal] = useState(false);

    const story = stories.find(item => item.id === parseInt(storyId || ''));

    if (!story) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center py-12">
                <Card className="text-center p-8 bg-white/80 backdrop-blur-lg border border-blue-200">
                    <Heading level={1} className="text-2xl mb-4 text-gray-900">Story Not Found</Heading>
                    <p className="text-gray-700 mb-6">The requested story could not be found.</p>
                    <button
                        onClick={() => navigate('/stories')}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors hover:scale-105 transition-transform duration-300"
                    >
                        Back to Stories
                    </button>
                </Card>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 space-y-16 py-12 animate-fadeIn">
            {/* Share Modal */}
            <ShareModal
                isOpen={showShareModal}
                onClose={() => setShowShareModal(false)}
                title={story.title}
                url={typeof window !== 'undefined' ? window.location.href : ''}
                type="story"
            />

            {/* Breadcrumb Navigation */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <nav className="flex items-center space-x-2 text-sm mb-8 animate-fadeIn">
                        <button
                            onClick={() => navigate('/')}
                            className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-all duration-300 group hover:scale-105"
                        >
                            <Home className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                            <span className="font-medium">Home</span>
                        </button>
                        <span className="text-gray-400">/</span>
                        <button
                            onClick={() => navigate('/stories')}
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            Stories
                        </button>
                        <span className="text-gray-400">/</span>
                        <span className="text-blue-600 font-semibold flex items-center space-x-1">
                            <span>{story.title}</span>
                        </span>
                    </nav>
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
                                    {story.category}
                                </span>
                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                {story.title}
                            </h1>

                            <div className="flex flex-wrap justify-center items-center gap-6 text-gray-600 text-sm mb-8">
                                <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-blue-200">
                                    <Calendar className="w-4 h-4 text-blue-500" />
                                    <span>{story.date}</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-blue-200">
                                    <User className="w-4 h-4 text-blue-500" />
                                    <span>By {story.author}</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-blue-200">
                                    <Clock className="w-4 h-4 text-blue-500" />
                                    <span>{story.readTime}</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap justify-center gap-2">
                                {story.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-600 text-xs font-medium"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story Content */}
            <section className="animate-slideUp">
                <div className="max-w-4xl mx-auto px-6">
                    <Card className="p-8 lg:p-12 bg-white/80 backdrop-blur-lg border border-blue-200">
                        <div className="relative h-64 lg:h-80 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-xl mb-8 flex items-center justify-center">
                            <div className="text-blue-600 text-6xl">📖</div>
                        </div>

                        <div className="text-gray-700 leading-relaxed space-y-6">
                            <p className="text-xl font-semibold text-blue-600 italic">
                                "{story.excerpt}"
                            </p>

                            <div className="space-y-6">
                                <p className="text-justify">
                                    {story.content}
                                </p>

                                <p className="text-justify">
                                    This inspiring story showcases the real-world impact of our research and
                                    the dedication of our team to making a difference in communities worldwide.
                                    Through innovative approaches and collaborative efforts, we are transforming
                                    maternal healthcare and creating lasting change.
                                </p>

                                <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg my-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Heart className="w-6 h-6 text-blue-600" />
                                        <Heading level={3} className="text-blue-600">The Impact</Heading>
                                    </div>
                                    <p className="text-gray-700">
                                        This initiative has already touched the lives of thousands of families,
                                        providing better healthcare access, improving outcomes, and creating
                                        sustainable solutions that will benefit generations to come.
                                    </p>
                                </div>

                                <p className="text-justify">
                                    We remain committed to our mission of advancing maternal healthcare through
                                    research, innovation, and community engagement. Stories like this inspire us
                                    to continue our work and strive for even greater impact.
                                </p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-12 pt-8 border-t border-blue-200">
                            <button
                                onClick={() => navigate('/stories')}
                                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300 flex items-center gap-2 justify-center hover:scale-105 transition-transform"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Back to Stories
                            </button>
                            <div className="flex gap-4 flex-1 justify-end">
                                <button className="px-6 py-3 bg-blue-500/10 text-blue-600 rounded-lg font-semibold hover:bg-blue-500/20 transition-colors duration-300 flex items-center gap-2 hover:scale-105 transition-transform">
                                    <Heart className="w-4 h-4" />
                                    Like Story
                                </button>
                                <button
                                    onClick={() => setShowShareModal(true)}
                                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2 hover:scale-105 transition-transform"
                                >
                                    <Share2 className="w-4 h-4" />
                                    Share Story
                                </button>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Related Stories */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <Heading level={2} className="text-center mb-8 text-gray-900">More Inspiring Stories</Heading>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {stories
                            .filter(item => item.id !== story.id)
                            .slice(0, 3)
                            .map((relatedStory) => (
                                <Card
                                    key={relatedStory.id}
                                    className="group hover:transform hover:scale-[1.02] transition-all duration-500 overflow-hidden cursor-pointer bg-white/80 backdrop-blur-lg border border-blue-200 hover:border-blue-400"
                                    onClick={() => navigate(`/stories/${relatedStory.id}`)}
                                >
                                    <div className="flex flex-col h-full">
                                        <div className="relative h-40 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-t-lg overflow-hidden">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="text-blue-600 text-3xl">📖</div>
                                            </div>
                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1 bg-blue-500/20 text-blue-600 border border-blue-500/30 text-xs font-semibold rounded-full">
                                                    {relatedStory.category}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-6 flex-1 flex flex-col">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="text-gray-600 text-xs">{relatedStory.date}</span>
                                                <span className="text-gray-600 text-xs">{relatedStory.readTime}</span>
                                            </div>

                                            <Heading level={4} className="text-lg mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                                {relatedStory.title}
                                            </Heading>

                                            <p className="text-gray-700 text-sm leading-relaxed line-clamp-2">
                                                {relatedStory.excerpt}
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

export default StoryDetail;