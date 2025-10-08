import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Heading from '../components/ui/Heading';
import Card from '../components/ui/Card';
import Breadcrumb from '../components/ui/Breadcrumb';
import { stories } from '../data/storiesdata';
import { Calendar, User, Clock, Heart, Share2 } from 'lucide-react';

const StoryDetail: React.FC = () => {
    const { storyId } = useParams<{ storyId: string }>();
    const navigate = useNavigate();

    const story = stories.find(item => item.id === parseInt(storyId || ''));

    if (!story) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Card className="text-center p-8">
                    <Heading level={1} className="text-2xl mb-4">Story Not Found</Heading>
                    <p className="text-white/70 mb-6">The requested story could not be found.</p>
                    <button
                        onClick={() => navigate('/stories')}
                        className="px-6 py-2 bg-gold text-dark-blue rounded-lg font-semibold hover:bg-[#e6c200] transition-colors"
                    >
                        Back to Stories
                    </button>
                </Card>
            </div>
        );
    }

    return (
        <div className="space-y-16 animate-fadeIn">
            <Breadcrumb currentPage={story.title} parentPage="Stories" parentPath="/stories" />

            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="relative py-12 text-center border border-white/20 rounded-2xl bg-white/5 backdrop-blur-sm">
                        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5 rounded-2xl"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent rounded-2xl"></div>

                        <div className="relative z-10 px-6">
                            <div className="inline-flex items-center gap-3 bg-gold/10 backdrop-blur-sm border border-gold/30 rounded-full px-6 py-3 mb-8">
                                <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                                <span className="text-gold text-sm font-semibold tracking-wider uppercase">
                                    {story.category}
                                </span>
                                <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                {story.title}
                            </h1>

                            <div className="flex flex-wrap justify-center items-center gap-6 text-white/70 text-sm mb-8">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>{story.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <User className="w-4 h-4" />
                                    <span>By {story.author}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>{story.readTime}</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap justify-center gap-2">
                                {story.tags.map((tag, index) => (
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
                            <div className="text-gold text-6xl">📖</div>
                        </div>

                        <div className="text-white/80 leading-relaxed space-y-6">
                            <p className="text-xl font-semibold text-gold italic">
                                "{story.excerpt}"
                            </p>

                            <div className="space-y-6">
                                <p>
                                    {story.content}
                                </p>

                                <p>
                                    This inspiring story showcases the real-world impact of our research and
                                    the dedication of our team to making a difference in communities worldwide.
                                    Through innovative approaches and collaborative efforts, we are transforming
                                    maternal healthcare and creating lasting change.
                                </p>

                                <div className="bg-white/5 border border-gold/30 p-6 rounded-lg my-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Heart className="w-6 h-6 text-gold" />
                                        <Heading level={3} className="text-gold">The Impact</Heading>
                                    </div>
                                    <p className="text-white/70">
                                        This initiative has already touched the lives of thousands of families,
                                        providing better healthcare access, improving outcomes, and creating
                                        sustainable solutions that will benefit generations to come.
                                    </p>
                                </div>

                                <p>
                                    We remain committed to our mission of advancing maternal healthcare through
                                    research, innovation, and community engagement. Stories like this inspire us
                                    to continue our work and strive for even greater impact.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-12 pt-8 border-t border-white/20">
                            <button
                                onClick={() => navigate('/stories')}
                                className="px-6 py-3 border border-gold text-gold rounded-lg font-semibold hover:bg-gold hover:text-dark-blue transition-colors"
                            >
                                ← Back to Stories
                            </button>
                            <div className="flex gap-4 flex-1 justify-end">
                                <button className="px-6 py-3 bg-white/5 text-white rounded-lg font-semibold hover:bg-gold/10 hover:text-gold transition-colors flex items-center gap-2">
                                    <Heart className="w-4 h-4" />
                                    Like Story
                                </button>
                                <button className="px-6 py-3 bg-gold text-dark-blue rounded-lg font-semibold hover:bg-[#e6c200] transition-colors flex items-center gap-2">
                                    <Share2 className="w-4 h-4" />
                                    Share Story
                                </button>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <Heading level={2} className="text-center mb-8">More Inspiring Stories</Heading>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {stories
                            .filter(item => item.id !== story.id)
                            .slice(0, 3)
                            .map((relatedStory) => (
                                <Card
                                    key={relatedStory.id}
                                    className="group hover:transform hover:scale-105 transition-all duration-500 overflow-hidden cursor-pointer"
                                    onClick={() => navigate(`/stories/${relatedStory.id}`)}
                                >
                                    <div className="flex flex-col h-full">
                                        <div className="relative h-40 bg-gradient-to-br from-gold/20 to-dark-blue rounded-t-lg overflow-hidden">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="text-gold text-3xl">📖</div>
                                            </div>
                                        </div>

                                        <div className="p-6 flex-1 flex flex-col">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="text-white/60 text-xs">{relatedStory.date}</span>
                                                <span className="text-white/60 text-xs">{relatedStory.readTime}</span>
                                            </div>

                                            <Heading level={4} className="text-lg mb-3 group-hover:text-gold transition-colors duration-300">
                                                {relatedStory.title}
                                            </Heading>

                                            <p className="text-white/70 text-sm leading-relaxed line-clamp-2">
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