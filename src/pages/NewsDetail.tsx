import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Heading from '../components/ui/Heading';
import Card from '../components/ui/Card';
import Breadcrumb from '../components/ui/Breadcrumb';
import { newsItems } from '../data/newsdata';
import { Calendar, User, Clock } from 'lucide-react';

const NewsDetail: React.FC = () => {
    const { newsId } = useParams<{ newsId: string }>();
    const navigate = useNavigate();

    const newsItem = newsItems.find(item => item.id === parseInt(newsId || ''));

    if (!newsItem) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Card className="text-center p-8">
                    <Heading level={1} className="text-2xl mb-4">News Not Found</Heading>
                    <p className="text-white/70 mb-6">The requested news article could not be found.</p>
                    <button
                        onClick={() => navigate('/news')}
                        className="px-6 py-2 bg-gold text-dark-blue rounded-lg font-semibold hover:bg-[#e6c200] transition-colors"
                    >
                        Back to News
                    </button>
                </Card>
            </div>
        );
    }

    return (
        <div className="space-y-16 animate-fadeIn">
            <Breadcrumb currentPage={newsItem.title} parentPage="News" parentPath="/news" />

            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="relative py-12 text-center border border-white/20 rounded-2xl bg-white/5 backdrop-blur-sm">
                        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5 rounded-2xl"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent rounded-2xl"></div>

                        <div className="relative z-10 px-6">
                            <div className="inline-flex items-center gap-3 bg-gold/10 backdrop-blur-sm border border-gold/30 rounded-full px-6 py-3 mb-8">
                                <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                                <span className="text-gold text-sm font-semibold tracking-wider uppercase">
                                    {newsItem.category}
                                </span>
                                <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                {newsItem.title}
                            </h1>

                            <div className="flex flex-wrap justify-center items-center gap-6 text-white/70 text-sm mb-8">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>{newsItem.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <User className="w-4 h-4" />
                                    <span>By {newsItem.author}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>{newsItem.readTime}</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap justify-center gap-2">
                                {newsItem.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-white/5 border border-gold/30 rounded-full text-gold text-xs font-medium"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="animate-slideUp">
                <div className="max-w-4xl mx-auto px-6">
                    <Card className="p-8 lg:p-12">
                        <div className="relative h-64 lg:h-80 bg-gradient-to-br from-gold/20 to-dark-blue rounded-xl mb-8 flex items-center justify-center">
                            <div className="text-gold text-6xl">📰</div>
                        </div>

                        <div className="text-white/80 leading-relaxed space-y-6">
                            <p className="text-xl font-semibold text-gold">
                                {newsItem.excerpt}
                            </p>

                            <div className="space-y-4">
                                <p>
                                    {newsItem.content}
                                </p>
                                <p>
                                    This groundbreaking research represents a significant step forward in our understanding
                                    of maternal healthcare and its impact on communities worldwide. The findings have
                                    far-reaching implications for healthcare providers, policymakers, and researchers
                                    working to improve maternal and child health outcomes.
                                </p>
                                <p>
                                    Our team continues to work diligently to translate these research findings into
                                    practical solutions that can be implemented in healthcare settings across the globe.
                                </p>
                            </div>

                            <div className="bg-white/5 border-l-4 border-gold p-6 rounded-r-lg my-8">
                                <Heading level={3} className="text-gold mb-4">Key Takeaways</Heading>
                                <ul className="space-y-2 text-white/70">
                                    <li>• Significant improvement in maternal healthcare outcomes</li>
                                    <li>• Innovative approach to healthcare delivery</li>
                                    <li>• Potential for global implementation</li>
                                    <li>• Strong foundation for future research</li>
                                </ul>
                            </div>

                            <p>
                                We are committed to continuing our research and expanding our efforts to create
                                meaningful change in maternal healthcare worldwide. Stay tuned for more updates
                                as we progress in our mission.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-12 pt-8 border-t border-white/20">
                            <button
                                onClick={() => navigate('/news')}
                                className="px-6 py-3 border border-gold text-gold rounded-lg font-semibold hover:bg-gold hover:text-dark-blue transition-colors"
                            >
                                ← Back to News
                            </button>
                            <button className="px-6 py-3 bg-gold text-dark-blue rounded-lg font-semibold hover:bg-[#e6c200] transition-colors flex-1">
                                Share This Story
                            </button>
                        </div>
                    </Card>
                </div>
            </section>

            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <Heading level={2} className="text-center mb-8">Related News</Heading>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {newsItems
                            .filter(item => item.id !== newsItem.id)
                            .slice(0, 3)
                            .map((relatedNews) => (
                                <Card
                                    key={relatedNews.id}
                                    className="group hover:transform hover:scale-105 transition-all duration-500 overflow-hidden cursor-pointer"
                                    onClick={() => navigate(`/news/${relatedNews.id}`)}
                                >
                                    <div className="flex flex-col h-full">
                                        <div className="relative h-40 bg-gradient-to-br from-gold/20 to-dark-blue rounded-t-lg overflow-hidden">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="text-gold text-3xl">📰</div>
                                            </div>
                                        </div>

                                        <div className="p-6 flex-1 flex flex-col">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="text-white/60 text-xs">{relatedNews.date}</span>
                                                <span className="text-white/60 text-xs">{relatedNews.readTime}</span>
                                            </div>

                                            <Heading level={4} className="text-lg mb-3 group-hover:text-gold transition-colors duration-300">
                                                {relatedNews.title}
                                            </Heading>

                                            <p className="text-white/70 text-sm leading-relaxed line-clamp-2">
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