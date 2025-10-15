import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';
import Heading from '../components/ui/Heading';
import Card from '../components/ui/Card';
import ShareModal from '../components/ui/ShareModal';
import { newsItems } from '../data/newsdata';
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react';

const NewsDetail: React.FC = () => {
    const { newsId } = useParams<{ newsId: string }>();
    const navigate = useNavigate();
    const [showShareModal, setShowShareModal] = useState(false);

    const newsItem = newsItems.find(item => item.id === parseInt(newsId || ''));

    if (!newsItem) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center py-12">
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 text-center border border-blue-200">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">News Not Found</h1>
                    <p className="text-gray-700 mb-6">The requested news article could not be found.</p>
                    <button
                        onClick={() => navigate('/news')}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 hover:scale-105 transition-transform"
                    >
                        Back to News
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 space-y-16 py-12 animate-fadeIn">
            {/* Share Modal */}
            <ShareModal
                isOpen={showShareModal}
                onClose={() => setShowShareModal(false)}
                title={newsItem.title}
                url={typeof window !== 'undefined' ? window.location.href : ''}
                type="news"
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
                            onClick={() => navigate('/news')}
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            News
                        </button>
                        <span className="text-gray-400">/</span>
                        <span className="text-blue-600 font-semibold flex items-center space-x-1">
                            <span>{newsItem.title}</span>
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
                                    {newsItem.category}
                                </span>
                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                {newsItem.title}
                            </h1>

                            <div className="flex flex-wrap justify-center items-center gap-6 text-gray-600 text-sm mb-8">
                                <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-blue-200">
                                    <Calendar className="w-4 h-4 text-blue-500" />
                                    <span>{newsItem.date}</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-blue-200">
                                    <User className="w-4 h-4 text-blue-500" />
                                    <span>By {newsItem.author}</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-blue-200">
                                    <Clock className="w-4 h-4 text-blue-500" />
                                    <span>{newsItem.readTime}</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap justify-center gap-2">
                                {newsItem.tags.map((tag, index) => (
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

            {/* News Content */}
            <section className="animate-slideUp">
                <div className="max-w-4xl mx-auto px-6">
                    <Card className="p-8 lg:p-12 bg-white/80 backdrop-blur-lg border border-blue-200">
                        <div className="relative h-64 lg:h-80 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-xl mb-8 flex items-center justify-center border border-blue-300">
                            <div className="text-blue-600 text-6xl">📰</div>
                        </div>

                        <div className="text-gray-700 leading-relaxed space-y-6">
                            <p className="text-xl font-semibold text-blue-600">
                                {newsItem.excerpt}
                            </p>

                            <div className="space-y-4">
                                <p className="text-justify">
                                    {newsItem.content}
                                </p>
                                <p className="text-justify">
                                    This groundbreaking research represents a significant step forward in our understanding
                                    of maternal healthcare and its impact on communities worldwide. The findings have
                                    far-reaching implications for healthcare providers, policymakers, and researchers
                                    working to improve maternal and child health outcomes.
                                </p>
                                <p className="text-justify">
                                    Our team continues to work diligently to translate these research findings into
                                    practical solutions that can be implemented in healthcare settings across the globe.
                                </p>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
                                <Heading level={3} className="text-blue-600 mb-4">Key Takeaways</Heading>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Significant improvement in maternal healthcare outcomes</li>
                                    <li>• Innovative approach to healthcare delivery</li>
                                    <li>• Potential for global implementation</li>
                                    <li>• Strong foundation for future research</li>
                                </ul>
                            </div>

                            <p className="text-justify">
                                We are committed to continuing our research and expanding our efforts to create
                                meaningful change in maternal healthcare worldwide. Stay tuned for more updates
                                as we progress in our mission.
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-12 pt-8 border-t border-blue-200">
                            <button
                                onClick={() => navigate('/news')}
                                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300 flex items-center gap-2 justify-center hover:scale-105 transition-transform"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Back to News
                            </button>
                            <button
                                onClick={() => setShowShareModal(true)}
                                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2 justify-center hover:scale-105 transition-transform flex-1"
                            >
                                <Share2 className="w-4 h-4" />
                                Share This Story
                            </button>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Related News */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <Heading level={2} className="text-center mb-8 text-gray-900">Related News</Heading>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {newsItems
                            .filter(item => item.id !== newsItem.id)
                            .slice(0, 3)
                            .map((relatedNews) => (
                                <Card
                                    key={relatedNews.id}
                                    className="group hover:transform hover:scale-[1.02] transition-all duration-500 overflow-hidden cursor-pointer bg-white/80 backdrop-blur-lg border border-blue-200 hover:border-blue-400"
                                    onClick={() => navigate(`/news/${relatedNews.id}`)}
                                >
                                    <div className="flex flex-col h-full">
                                        <div className="relative h-40 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-t-lg overflow-hidden border-b border-blue-200">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="text-blue-600 text-3xl">📰</div>
                                            </div>
                                            <div className="absolute top-4 left-4">
                                                <span className="px-2 py-1 bg-blue-500/20 text-blue-600 border border-blue-500/30 text-xs font-semibold rounded-full">
                                                    {relatedNews.category}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-6 flex-1 flex flex-col">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="text-blue-600 font-semibold text-xs">{relatedNews.date}</span>
                                                <span className="text-gray-600 text-xs">{relatedNews.readTime}</span>
                                            </div>

                                            <Heading level={4} className="text-lg mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                                {relatedNews.title}
                                            </Heading>

                                            <p className="text-gray-700 text-sm leading-relaxed line-clamp-2">
                                                {relatedNews.excerpt}
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

export default NewsDetail;