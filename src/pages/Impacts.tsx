import React from 'react';

const Impacts: React.FC = () => {
    const impactMetrics = [
        {
            number: "2.5M+",
            label: "Lives Impacted",
            description: "Through improved health services and policies",
            trend: "+25%",
            color: "from-red-400 to-pink-600"
        },
        {
            number: "15+",
            label: "Policies Influenced",
            description: "National and regional health policies adopted",
            trend: "+3 this year",
            color: "from-blue-400 to-cyan-600"
        },
        {
            number: "50+",
            label: "Communities Served",
            description: "Across multiple regions and countries",
            trend: "Expanding",
            color: "from-green-400 to-emerald-600"
        },
        {
            number: "$10M+",
            label: "Funding Secured",
            description: "For health research and implementation",
            trend: "+$2M",
            color: "from-purple-400 to-indigo-600"
        }
    ];

    const successStories = [
        {
            title: "Maternal Health Initiative",
            location: "Rural East Africa",
            impact: "Reduced maternal mortality by 40%",
            story: "Implemented community-based prenatal care and emergency transport system",
            image: "/images/impacts/maternal-health.jpg",
            year: "2023"
        },
        {
            title: "Digital Health Platform",
            location: "Southeast Asia",
            impact: "Improved clinic efficiency by 60%",
            story: "Developed mobile health platform connecting remote communities with specialists",
            image: "/images/impacts/digital-health.jpg",
            year: "2022"
        },
        {
            title: "Child Nutrition Program",
            location: "South America",
            impact: "Reduced malnutrition by 35%",
            story: "Community-led nutrition education and supplement distribution program",
            image: "/images/impacts/child-nutrition.jpg",
            year: "2023"
        }
    ];

    const policyImpacts = [
        {
            policy: "National Health Insurance Expansion",
            status: "Implemented",
            impact: "Extended coverage to 5 million additional people",
            partners: ["Ministry of Health", "WHO", "Local NGOs"]
        },
        {
            policy: "Telemedicine Guidelines",
            status: "Adopted",
            impact: "Standardized remote healthcare delivery nationwide",
            partners: ["Health Regulatory Body", "Tech Companies"]
        },
        {
            policy: "Maternal Leave Extension",
            status: "In Progress",
            impact: "Proposed extension from 3 to 6 months",
            partners: ["Labor Ministry", "Women's Rights Organizations"]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        Our Impact
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Transforming research into tangible outcomes that improve health systems,
                        influence policies, and empower communities worldwide.
                    </p>
                </div>

                {/* Impact Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {impactMetrics.map((metric) => (
                        <div
                            key={metric.label}
                            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
                        >
                            <div className={`text-3xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}>
                                {metric.number}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {metric.label}
                            </h3>
                            <p className="text-gray-600 text-sm mb-3">
                                {metric.description}
                            </p>
                            <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                                ↑ {metric.trend}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Success Stories */}
                <div className="mb-20">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                        Success Stories
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {successStories.map((story) => (
                            <div
                                key={story.title}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
                            >
                                {/* Story Image */}
                                <div className="h-48 bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center relative">
                                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-amber-600">
                                        {story.year}
                                    </div>
                                    <div className="text-4xl text-white">🏆</div>
                                </div>

                                {/* Story Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {story.title}
                                    </h3>
                                    <p className="text-amber-600 font-semibold mb-3">
                                        📍 {story.location}
                                    </p>
                                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                                        <p className="text-green-800 font-semibold text-sm">
                                            Key Impact: {story.impact}
                                        </p>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {story.story}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Policy Impacts */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                        Policy Influence
                    </h2>
                    <div className="space-y-6">
                        {policyImpacts.map((policy, index) => (
                            <div
                                key={policy.policy}
                                className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200"
                            >
                                <div className="flex-1 mb-4 md:mb-0">
                                    <div className="flex items-center mb-2">
                                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                                            {index + 1}
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            {policy.policy}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 ml-11">{policy.impact}</p>
                                    <div className="flex flex-wrap gap-2 mt-2 ml-11">
                                        {policy.partners.map((partner) => (
                                            <span
                                                key={partner}
                                                className="px-2 py-1 bg-white text-blue-600 rounded text-xs font-medium border border-blue-200"
                                            >
                                                {partner}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className={`px-4 py-2 rounded-full font-semibold ${policy.status === 'Implemented'
                                    ? 'bg-green-100 text-green-800'
                                    : policy.status === 'Adopted'
                                        ? 'bg-blue-100 text-blue-800'
                                        : 'bg-amber-100 text-amber-800'
                                    }`}>
                                    {policy.status}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Global Reach */}
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Global Reach, Local Impact
                    </h3>
                    <div className="flex justify-center space-x-8 text-gray-600">
                        <div className="text-center">
                            <div className="text-2xl">🌍</div>
                            <div className="font-semibold">3 Continents</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl">🤝</div>
                            <div className="font-semibold">50+ Partners</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl">📈</div>
                            <div className="font-semibold">Growing Impact</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Impacts;