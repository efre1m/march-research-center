import React from 'react';
import { useNavigate } from 'react-router-dom';
import Heading from '../components/ui/Heading';
import Card from '../components/ui/Card';
import Breadcrumb from '../components/ui/Breadcrumb';
import { newsItems } from '../data/newsdata';

const NewsStories: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="space-y-16 animate-fadeIn">
            <Breadcrumb currentPage="News Stories" parentPage="Home" parentPath="/" />

            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="relative py-12 text-center border border-white/20 rounded-2xl bg-white/5 backdrop-blur-sm">
                        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5 rounded-2xl"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent rounded-2xl"></div>

                        <div className="relative z-10 px-6">
                            <div className="inline-flex items-center gap-3 bg-gold/10 backdrop-blur-sm border border-gold/30 rounded-full px-6 py-3 mb-8">
                                <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                                <span className="text-gold text-sm font-semibold tracking-wider uppercase">
                                    Latest Updates
                                </span>
                                <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                News <span className="text-gold">Stories</span>
                            </h1>

                            <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto mb-8 leading-relaxed">
                                Stay informed with the latest research breakthroughs, announcements,
                                and developments in maternal healthcare from MARCH Research Center.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {newsItems.map((news) => (
                            <Card
                                key={news.id}
                                className="group hover:transform hover:scale-105 transition-all duration-500 overflow-hidden cursor-pointer"
                                onClick={() => navigate(`/news/${news.id}`)}
                            >
                                <div className="flex flex-col h-full">
                                    <div className="relative h-48 bg-gradient-to-br from-gold/20 to-dark-blue rounded-t-lg overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-gold text-4xl">📰</div>
                                        </div>
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-gold text-dark-blue text-sm font-semibold rounded-full">
                                                {news.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-white/60 text-sm">{news.date}</span>
                                            <span className="text-white/60 text-sm">{news.readTime}</span>
                                        </div>

                                        <Heading level={3} className="text-xl mb-3 group-hover:text-gold transition-colors duration-300">
                                            {news.title}
                                        </Heading>

                                        <p className="text-white/70 text-sm mb-4 leading-relaxed flex-1">
                                            {news.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between pt-4 border-t border-white/20">
                                            <span className="text-white/50 text-sm">By {news.author}</span>
                                            <span className="text-gold font-semibold text-sm">Read More →</span>
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

export default NewsStories;