import React from 'react';

const ResearchAreas: React.FC = () => {
    const researchThemes = [
        {
            title: "Maternal Health",
            description: "Improving health outcomes for mothers during pregnancy, childbirth, and postpartum period",
            focus: ["Antenatal care", "Maternal mortality", "Postpartum care", "Reproductive health"]
        },
        {
            title: "Child & Adolescent Health",
            description: "Enhancing health and development from infancy through adolescence",
            focus: ["Child nutrition", "Vaccination coverage", "Adolescent mental health", "School health programs"]
        },
        {
            title: "Health Systems Strengthening",
            description: "Building resilient and efficient healthcare delivery systems",
            focus: ["Health workforce", "Supply chain management", "Health financing", "Quality of care"]
        },
        {
            title: "Health Policy & Governance",
            description: "Shaping policies that improve health equity and access",
            focus: ["Policy analysis", "Health equity", "Governance structures", "Regulatory frameworks"]
        },
        {
            title: "SBCC (Social and Behavior Change Communication)",
            description: "Designing communication strategies to improve health behaviors",
            focus: ["Health communication", "Behavior change", "Community engagement", "Media campaigns"]
        },
        {
            title: "Digital Health & AI",
            description: "Leveraging technology to transform healthcare delivery",
            focus: ["mHealth applications", "Telemedicine", "AI diagnostics", "Health data analytics"]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Research Areas
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Exploring key thematic areas that drive our mission to improve health outcomes
                        through innovative research and evidence-based solutions.
                    </p>
                </div>

                {/* Research Themes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {researchThemes.map((theme, index) => (
                        <div
                            key={theme.title}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 border border-gray-200"
                        >
                            {/* Icon/Number */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                    {index + 1}
                                </div>
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {theme.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                {theme.description}
                            </p>

                            {/* Focus Areas */}
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-2 text-sm uppercase tracking-wide">
                                    Focus Areas:
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {theme.focus.map((area) => (
                                        <span
                                            key={area}
                                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                                        >
                                            {area}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Methodology Section */}
                <div className="mt-20 bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                        Our Research Approach
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🔍</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Mixed Methods</h3>
                            <p className="text-gray-600">Combining quantitative and qualitative approaches for comprehensive insights</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🤝</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Engagement</h3>
                            <p className="text-gray-600">Collaborating with communities to ensure research relevance and impact</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">📊</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Evidence-Based</h3>
                            <p className="text-gray-600">Rigorous data analysis and scientific validation of findings</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResearchAreas;