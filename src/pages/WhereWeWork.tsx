import React, { useState } from 'react';
import Heading from '../components/ui/Heading';
import Card from '../components/ui/Card';
import Breadcrumb from '../components/ui/Breadcrumb';
import { MapPin, Users, Building, Image, Target, Heart, Stethoscope, Shield, ChevronDown, ChevronUp, ZoomIn } from 'lucide-react';
import { learningFacilities, platformFacilities } from '../data/facilitydata';
import { communities } from '../data/communitiesdata';
import { healthSystemComponents } from '../data/healthsystemdata';
import { galleryImages } from '../data/gallerydata';

const WhereWeWork: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'learning' | 'platform'>('learning');
    const [showAllPlatformFacilities, setShowAllPlatformFacilities] = useState(false);
    const [showAllGallery, setShowAllGallery] = useState(false);
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const displayedPlatformFacilities = showAllPlatformFacilities
        ? platformFacilities
        : platformFacilities.slice(0, 4);

    const displayedGalleryImages = showAllGallery
        ? galleryImages
        : galleryImages.slice(0, 4);

    const selectedImageData = selectedImage ? galleryImages.find(img => img.id === selectedImage) : null;

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 space-y-16 py-12 animate-fadeIn">
            {/* Image Modal */}
            {selectedImage && selectedImageData && (
                <div
                    className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative max-w-4xl max-h-[90vh] w-full animate-scaleIn"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="bg-white rounded-2xl overflow-hidden border border-blue-200">
                            <div
                                className="relative aspect-video bg-cover bg-center"
                                style={{ backgroundImage: `url(${selectedImageData.imageUrl})` }}
                            >
                                <div className="absolute inset-0 bg-black/20"></div>
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors z-10"
                                >
                                    <ChevronUp className="w-6 h-6 text-blue-600 rotate-45" />
                                </button>
                            </div>
                            <div className="p-6">
                                <Heading level={3} className="text-blue-600 mb-2">
                                    {selectedImageData.title}
                                </Heading>
                                <p className="text-gray-700">
                                    {selectedImageData.description}
                                </p>
                                <div className="flex items-center gap-2 mt-4">
                                    <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-600 text-xs font-medium">
                                        {selectedImageData.category}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Breadcrumb Navigation */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <Breadcrumb
                        currentPage="Where We Work"
                        parentPage="Home"
                        parentPath="/"
                    />
                </div>
            </section>

            {/* Hero Header Section */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="relative py-20 text-center border border-blue-200 rounded-2xl bg-white/80 backdrop-blur-lg">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-transparent to-blue-600/10 rounded-2xl"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-2xl"></div>

                        <div className="relative z-10 px-6">
                            <div className="inline-flex items-center gap-3 bg-blue-500/10 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 mb-8">
                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase">
                                    Our Reach & Impact
                                </span>
                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Where We <span className="text-blue-600">Work</span>
                            </h1>

                            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed text-justify">
                                Discover our extensive network of healthcare facilities, community partnerships,
                                and health system strengthening initiatives across multiple regions,
                                working tirelessly to improve maternal and child healthcare outcomes.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4 text-gray-600 text-sm">
                                <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-blue-200">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span>{learningFacilities.length + platformFacilities.length}+ Healthcare Facilities</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-blue-200">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span>90+ Communities Served</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-blue-200">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                    <span>{healthSystemComponents.length} Health System Components</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Health Facilities Section */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <Heading level={2} className="text-blue-600 mb-4">Healthcare Facilities</Heading>
                        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                            Our network includes learning hospitals for advanced care and research,
                            and platform facilities providing essential community healthcare services.
                        </p>
                    </div>

                    {/* Facility Type Tabs */}
                    <div className="flex justify-center mb-8">
                        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-2 border border-blue-200 inline-flex">
                            <button
                                onClick={() => {
                                    setActiveTab('learning');
                                    setShowAllPlatformFacilities(false);
                                }}
                                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${activeTab === 'learning'
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'text-gray-700 hover:text-blue-600'
                                    }`}
                            >
                                <Building className="w-5 h-5" />
                                Learning Hospitals ({learningFacilities.length})
                            </button>
                            <button
                                onClick={() => {
                                    setActiveTab('platform');
                                    setShowAllPlatformFacilities(false);
                                }}
                                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${activeTab === 'platform'
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'text-gray-700 hover:text-blue-600'
                                    }`}
                            >
                                <Target className="w-5 h-5" />
                                Platform Facilities ({platformFacilities.length})
                            </button>
                        </div>
                    </div>

                    {/* Facilities Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {(activeTab === 'learning' ? learningFacilities : displayedPlatformFacilities).map((facility) => (
                            <Card
                                key={facility.id}
                                className="group hover:transform hover:scale-[1.02] transition-all duration-500 bg-white/80 backdrop-blur-lg border border-blue-200 hover:border-blue-400"
                            >
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <Heading level={3} className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                                {facility.name}
                                            </Heading>
                                            <span className="text-blue-600 font-semibold text-sm">{facility.type}</span>
                                        </div>
                                        <div className="bg-blue-500/10 p-2 rounded-lg">
                                            <MapPin className="w-5 h-5 text-blue-600" />
                                        </div>
                                    </div>

                                    <p className="text-gray-700 mb-4 leading-relaxed">
                                        {facility.description}
                                    </p>

                                    <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                                        <div className="flex items-center gap-2">
                                            <Heart className="w-4 h-4 text-blue-500" />
                                            <span>{facility.beds} Beds</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users className="w-4 h-4 text-blue-500" />
                                            <span>{facility.staff} Staff</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {facility.specialties.map((specialty, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-600 text-xs font-medium"
                                            >
                                                {specialty}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    {/* View More/Less Button for Platform Facilities */}
                    {activeTab === 'platform' && (
                        <div className="text-center mt-8">
                            <button
                                onClick={() => setShowAllPlatformFacilities(!showAllPlatformFacilities)}
                                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300 flex items-center gap-2 mx-auto"
                            >
                                <span>
                                    {showAllPlatformFacilities ? 'Show Less' : `View All ${platformFacilities.length} Facilities`}
                                </span>
                                {showAllPlatformFacilities ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Useful Information Section */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <Card className="bg-white/80 backdrop-blur-lg border border-blue-200 p-8">
                        <div className="text-center mb-8">
                            <Heading level={2} className="text-blue-600 mb-4">Facility Services & Impact</Heading>
                            <p className="text-gray-700 max-w-3xl mx-auto">
                                Comprehensive healthcare services and community impact across all our facilities
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="bg-green-500/10 p-4 rounded-2xl inline-flex mb-4">
                                    <Stethoscope className="w-8 h-8 text-green-600" />
                                </div>
                                <Heading level={3} className="text-gray-900 mb-2">Clinical Services</Heading>
                                <ul className="text-gray-700 text-sm space-y-1">
                                    <li>• Maternal & Child Healthcare</li>
                                    <li>• Emergency Obstetric Care</li>
                                    <li>• Neonatal Intensive Care</li>
                                    <li>• Surgical Services</li>
                                    <li>• Primary Healthcare</li>
                                </ul>
                            </div>

                            <div className="text-center">
                                <div className="bg-blue-500/10 p-4 rounded-2xl inline-flex mb-4">
                                    <Users className="w-8 h-8 text-blue-600" />
                                </div>
                                <Heading level={3} className="text-gray-900 mb-2">Training & Education</Heading>
                                <ul className="text-gray-700 text-sm space-y-1">
                                    <li>• Healthcare Professional Training</li>
                                    <li>• Community Health Worker Programs</li>
                                    <li>• Medical Student Rotations</li>
                                    <li>• Continuing Medical Education</li>
                                    <li>• Research Opportunities</li>
                                </ul>
                            </div>

                            <div className="text-center">
                                <div className="bg-purple-500/10 p-4 rounded-2xl inline-flex mb-4">
                                    <Shield className="w-8 h-8 text-purple-600" />
                                </div>
                                <Heading level={3} className="text-gray-900 mb-2">Community Impact</Heading>
                                <ul className="text-gray-700 text-sm space-y-1">
                                    <li>• Reduced Maternal Mortality</li>
                                    <li>• Improved Child Health Outcomes</li>
                                    <li>• Enhanced Healthcare Access</li>
                                    <li>• Community Health Education</li>
                                    <li>• Emergency Response Capacity</li>
                                </ul>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Communities Section */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <Heading level={2} className="text-blue-600 mb-4">Communities We Serve</Heading>
                        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                            Reaching diverse populations with tailored healthcare solutions and community-based interventions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {communities.map((community, index) => (
                            <Card
                                key={index}
                                className="group hover:transform hover:scale-[1.02] transition-all duration-500 bg-white/80 backdrop-blur-lg border border-blue-200 hover:border-blue-400 text-center p-8"
                            >
                                <div className="bg-blue-500/10 p-4 rounded-2xl inline-flex mb-4">
                                    <Users className="w-8 h-8 text-blue-600" />
                                </div>
                                <Heading level={3} className="text-gray-900 mb-2">{community.name}</Heading>
                                <div className="text-3xl font-bold text-blue-600 mb-4">{community.count}</div>
                                <p className="text-gray-700 mb-4 leading-relaxed">
                                    {community.description}
                                </p>
                                <div className="space-y-2">
                                    {community.focus.map((item, idx) => (
                                        <span
                                            key={idx}
                                            className="block px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-600 text-xs font-medium"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Health System Section */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <Heading level={2} className="text-blue-600 mb-4">Health System Strengthening</Heading>
                        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                            Building sustainable healthcare systems through comprehensive interventions and capacity building.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {healthSystemComponents.map((component, index) => (
                            <Card
                                key={index}
                                className="group hover:transform hover:scale-[1.02] transition-all duration-500 bg-white/80 backdrop-blur-lg border border-blue-200 hover:border-blue-400 p-8"
                            >
                                <div className="text-4xl mb-4">{component.icon}</div>
                                <Heading level={3} className="text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                                    {component.title}
                                </Heading>
                                <p className="text-gray-700 mb-4 leading-relaxed">
                                    {component.description}
                                </p>
                                <div className="space-y-2">
                                    {component.initiatives.map((initiative, idx) => (
                                        <div key={idx} className="flex items-center gap-3 text-gray-700">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                            <span className="text-sm">{initiative}</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Field Gallery Section */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <Heading level={2} className="text-blue-600 mb-4">Field Gallery</Heading>
                        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                            Visual journey through our facilities, community work, and healthcare interventions.
                        </p>
                    </div>

                    {/* Enhanced Gallery Grid - 2 images per row, larger size */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {displayedGalleryImages.map((image, index) => (
                            <Card
                                key={image.id}
                                className="group hover:transform hover:scale-[1.02] transition-all duration-500 bg-white/80 backdrop-blur-lg border border-blue-200 hover:border-blue-400 cursor-pointer overflow-hidden animate-fadeIn"
                                style={{ animationDelay: `${index * 100}ms` }}
                                onClick={() => setSelectedImage(image.id)}
                            >
                                <div
                                    className="relative aspect-[4/3] bg-cover bg-center transition-all duration-500 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${image.imageUrl})` }}
                                >
                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-500"></div>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white">
                                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="bg-white/90 p-2 rounded-full shadow-lg">
                                                <ZoomIn className="w-5 h-5 text-blue-600" />
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <Heading level={3} className="text-white text-xl mb-2 group-hover:text-white transition-colors duration-300">
                                                {image.title}
                                            </Heading>
                                            <p className="text-white/90 text-sm mb-3 line-clamp-2">
                                                {image.description}
                                            </p>
                                            <span className="px-3 py-1 bg-white/20 border border-white/30 rounded-full text-white text-xs font-medium">
                                                {image.category}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button
                            onClick={() => setShowAllGallery(!showAllGallery)}
                            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center gap-3 mx-auto hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            <Image className="w-5 h-5" />
                            <span className="text-lg">
                                {showAllGallery ? 'Show Less Images' : `Explore Full Gallery (${galleryImages.length} Images)`}
                            </span>
                            {showAllGallery ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhereWeWork;