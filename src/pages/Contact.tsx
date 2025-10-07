import React, { useState } from 'react';
import Heading from '../components/ui/Heading';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Contact: React.FC = () => {
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
        <div className="space-y-12">
            <div className="text-center">
                <Heading level={1}>Contact Us</Heading>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                    Get in touch with our team. We're here to answer your questions and explore
                    opportunities for collaboration and partnership.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <Card>
                    <Heading level={2} className="mb-6">Send us a Message</Heading>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="block text-white text-sm font-semibold mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-gold transition-colors"
                                    placeholder="Your full name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-white text-sm font-semibold mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-gold transition-colors"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="inquiryType" className="block text-white text-sm font-semibold mb-2">
                                Inquiry Type
                            </label>
                            <select
                                id="inquiryType"
                                name="inquiryType"
                                value={formData.inquiryType}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-gold transition-colors"
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
                            <label htmlFor="subject" className="block text-white text-sm font-semibold mb-2">
                                Subject *
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-gold transition-colors"
                                placeholder="Message subject"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-white text-sm font-semibold mb-2">
                                Message *
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                rows={6}
                                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-gold transition-colors resize-vertical"
                                placeholder="Your message..."
                            />
                        </div>

                        <Button type="submit" variant="primary" className="w-full">
                            Send Message
                        </Button>
                    </form>
                </Card>

                {/* Contact Information */}
                <div className="space-y-8">
                    {/* Quick Contact */}
                    <Card>
                        <Heading level={3} className="mb-6">Get in Touch</Heading>
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="pb-4 border-b border-white/10 last:border-b-0 last:pb-0">
                                    <div className="text-gold font-semibold mb-2">{info.title}</div>
                                    <div className="text-white/70 text-sm mb-1">{info.description}</div>
                                    <div className="text-white text-sm">📧 {info.email}</div>
                                    <div className="text-white text-sm">📞 {info.phone}</div>
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Locations */}
                    <Card>
                        <Heading level={3} className="mb-6">Our Locations</Heading>
                        <div className="space-y-4">
                            {locations.map((location, index) => (
                                <div key={index} className="pb-4 border-b border-white/10 last:border-b-0 last:pb-0">
                                    <div className="text-gold font-semibold mb-2">{location.name}</div>
                                    <div className="text-white/70 text-sm mb-1">📍 {location.address}</div>
                                    <div className="text-white text-sm mb-1">📞 {location.phone}</div>
                                    <div className="text-white/60 text-xs">⏰ {location.hours}</div>
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Map Placeholder */}
                    <Card>
                        <Heading level={3} className="mb-4">Visit Us</Heading>
                        <div className="h-48 bg-gradient-to-br from-gold/20 to-dark-blue rounded-lg flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-gold text-2xl mb-2">📍</div>
                                <div className="text-gold font-semibold">Interactive Map</div>
                                <div className="text-white/70 text-sm">Main Research Campus</div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>

            {/* Emergency Contact */}
            <Card className="max-w-4xl mx-auto text-center bg-gradient-to-r from-gold/10 to-dark-blue">
                <Heading level={3} className="mb-4">Emergency Contact</Heading>
                <p className="text-white/70 mb-4">
                    For urgent matters outside of business hours, please contact our emergency line.
                </p>
                <div className="text-2xl font-bold text-gold">+1 (555) 123-EMERgency</div>
                <div className="text-white/60 text-sm mt-2">Available 24/7 for critical issues</div>
            </Card>
        </div>
    );
};

export default Contact;