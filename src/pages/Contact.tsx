import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';
import Button from '../components/ui/Button';

const Contact: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        inquiryType: 'general'
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
            inquiryType: 'general'
        });
    };

    const contactInfo = [
        {
            title: 'General Inquiries',
            email: 'info@MARCHresearch.edu',
            phone: '+1 (555) 123-4567',
            description: 'For general questions about our research and programs'
        },
        {
            title: 'Research Collaboration',
            email: 'collaborations@MARCHresearch.edu',
            phone: '+1 (555) 123-4568',
            description: 'Interested in partnering with us on research projects'
        },
        {
            title: 'Media & Press',
            email: 'press@MARCHresearch.edu',
            phone: '+1 (555) 123-4569',
            description: 'For media inquiries and interview requests'
        },
        {
            title: 'Career Opportunities',
            email: 'careers@MARCHresearch.edu',
            phone: '+1 (555) 123-4570',
            description: 'Questions about job openings and internships'
        }
    ];

    const locations = [
        {
            name: 'Main Research Campus',
            address: '123 Innovation Drive, Tech City, TC 12345',
            phone: '+1 (555) 123-4567',
            hours: 'Mon-Fri: 8:00 AM - 6:00 PM'
        },
        {
            name: 'MARCH Computing Lab',
            address: '456 Science Park, Research District, TC 12346',
            phone: '+1 (555) 123-4571',
            hours: 'Mon-Sun: 24/7 Research Facility'
        },
        {
            name: 'AI Research Center',
            address: '789 Algorithm Avenue, Data Square, TC 12347',
            phone: '+1 (555) 123-4572',
            hours: 'Mon-Fri: 9:00 AM - 8:00 PM'
        }
    ];

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

                        {/* Current Page */}
                        <span className="text-blue-600 font-semibold flex items-center space-x-1">
                            <span>Contact</span>
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
                                    Get In Touch
                                </span>
                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Contact <span className="text-blue-600">Us</span>
                            </h1>

                            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed text-justify">
                                Get in touch with our team. We're here to answer your questions and explore
                                opportunities for collaboration and partnership.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4 text-gray-600 text-sm">
                                <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-blue-200">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span>Quick Response</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-blue-200">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span>Multiple Contact Channels</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-blue-200">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                    <span>Global Support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-blue-200">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-gray-900 text-sm font-semibold mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-white border border-blue-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                                        placeholder="Your full name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-gray-900 text-sm font-semibold mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-white border border-blue-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="inquiryType" className="block text-gray-900 text-sm font-semibold mb-2">
                                    Inquiry Type
                                </label>
                                <select
                                    id="inquiryType"
                                    name="inquiryType"
                                    value={formData.inquiryType}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-white border border-blue-300 rounded-lg text-gray-900 focus:outline-none focus:border-blue-500 transition-colors"
                                >
                                    <option value="general">General Inquiry</option>
                                    <option value="research">Research Collaboration</option>
                                    <option value="media">Media/Press</option>
                                    <option value="career">Career Opportunity</option>
                                    <option value="partnership">Partnership</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-gray-900 text-sm font-semibold mb-2">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-white border border-blue-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="Message subject"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-gray-900 text-sm font-semibold mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 bg-white border border-blue-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-vertical"
                                    placeholder="Your message..."
                                />
                            </div>

                            <Button type="submit" variant="primary" className="w-full bg-blue-600 hover:bg-blue-700">
                                Send Message
                            </Button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        {/* Quick Contact */}
                        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-blue-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                            <div className="space-y-4">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="pb-4 border-b border-blue-200 last:border-b-0 last:pb-0">
                                        <div className="text-blue-600 font-semibold mb-2">{info.title}</div>
                                        <div className="text-gray-700 text-sm mb-1">{info.description}</div>
                                        <div className="text-gray-900 text-sm">📧 {info.email}</div>
                                        <div className="text-gray-900 text-sm">📞 {info.phone}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Locations */}
                        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-blue-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Locations</h3>
                            <div className="space-y-4">
                                {locations.map((location, index) => (
                                    <div key={index} className="pb-4 border-b border-blue-200 last:border-b-0 last:pb-0">
                                        <div className="text-blue-600 font-semibold mb-2">{location.name}</div>
                                        <div className="text-gray-700 text-sm mb-1">📍 {location.address}</div>
                                        <div className="text-gray-900 text-sm mb-1">📞 {location.phone}</div>
                                        <div className="text-gray-600 text-xs">⏰ {location.hours}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-blue-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Visit Us</h3>
                            <div className="h-48 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-lg flex items-center justify-center border border-blue-300">
                                <div className="text-center">
                                    <div className="text-blue-600 text-2xl mb-2">📍</div>
                                    <div className="text-blue-600 font-semibold">Interactive Map</div>
                                    <div className="text-gray-700 text-sm">Main Research Campus</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Emergency Contact */}
                <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-2xl p-8 border border-blue-300 max-w-4xl mx-auto text-center mt-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Contact</h3>
                    <p className="text-gray-700 mb-4">
                        For urgent matters outside of business hours, please contact our emergency line.
                    </p>
                    <div className="text-2xl font-bold text-blue-600">+1 (555) 123-EMERgency</div>
                    <div className="text-gray-600 text-sm mt-2">Available 24/7 for critical issues</div>
                </div>
            </div>
        </div>
    );
};

export default Contact;