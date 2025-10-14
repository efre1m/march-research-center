import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Building2, Briefcase, Search, Clock } from 'lucide-react';
import Button from '../components/ui/Button';
import { vacancies, type VacancyItem } from '../data/vacancydata';
import Breadcrumb from '../components/ui/Breadcrumb';
import Heading from '../components/ui/Heading';

const Careers: React.FC = () => {
    const [filteredVacancies, setFilteredVacancies] = useState<VacancyItem[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [locationFilter, setLocationFilter] = useState("All");
    const [departmentFilter, setDepartmentFilter] = useState("All");
    const [jobTypeFilter, setJobTypeFilter] = useState("All");
    const navigate = useNavigate();

    useEffect(() => {
        // Filter vacancies based on search and filters
        const filtered = vacancies.filter((vacancy) => {
            const matchesSearch = `${vacancy.title} ${vacancy.location} ${vacancy.department}`
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            const matchesLocation = locationFilter === "All" || vacancy.location === locationFilter;
            const matchesDepartment = departmentFilter === "All" || vacancy.department === departmentFilter;
            const matchesJobType = jobTypeFilter === "All" || vacancy.jobType === jobTypeFilter;
            return matchesSearch && matchesLocation && matchesDepartment && matchesJobType;
        });
        setFilteredVacancies(filtered);
    }, [searchTerm, locationFilter, departmentFilter, jobTypeFilter]);

    const uniqueLocations = Array.from(new Set(vacancies.map((v) => v.location)));
    const uniqueDepartments = Array.from(new Set(vacancies.map((v) => v.department)));
    const uniqueJobTypes = Array.from(new Set(vacancies.map((v) => v.jobType)));

    const handleApply = (vacancyId: number, title: string) => {
        navigate(`/apply?vacancyId=${vacancyId}&title=${encodeURIComponent(title)}`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 space-y-16 py-12 animate-fadeIn">
            {/* Breadcrumb Navigation */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <Breadcrumb
                        currentPage="Careers"
                        parentPage="Home"
                        parentPath="/"
                    />
                </div>
            </section>

            {/* Hero Section */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="relative py-16 text-center border border-blue-200 rounded-2xl bg-white/80 backdrop-blur-lg">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-transparent to-blue-600/10 rounded-2xl"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-2xl"></div>

                        <div className="relative z-10 px-6">
                            <div className="inline-flex items-center gap-3 bg-blue-500/10 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 mb-8">
                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase">
                                    Career Opportunities
                                </span>
                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Join <span className="text-blue-600">Our Team</span>
                                <br className="hidden lg:block" /> at MARCH
                            </h1>

                            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed text-justify">
                                Explore exciting career opportunities at MARCH Research Center and be part of our mission
                                to push the boundaries of scientific discovery and create impactful solutions for global challenges.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4 text-gray-600 text-sm">
                                <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-blue-200">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span>Competitive Benefits</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-blue-200">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span>Professional Growth</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-blue-200">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                    <span>Cutting-Edge Research</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Search and Filters Section */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-blue-200 mb-8">
                        <Heading level={2} className="text-blue-600 mb-6 text-center">Find Your Perfect Role</Heading>

                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                            <div className="lg:col-span-2 relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600" size={20} />
                                <input
                                    type="text"
                                    placeholder="Search by title, location or department..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-white border border-blue-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                                />
                            </div>

                            <select
                                value={locationFilter}
                                onChange={(e) => setLocationFilter(e.target.value)}
                                className="px-4 py-3 bg-white border border-blue-300 rounded-lg text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                            >
                                <option value="All">All Locations</option>
                                {uniqueLocations.map(loc => (
                                    <option key={loc} value={loc}>{loc}</option>
                                ))}
                            </select>

                            <select
                                value={departmentFilter}
                                onChange={(e) => setDepartmentFilter(e.target.value)}
                                className="px-4 py-3 bg-white border border-blue-300 rounded-lg text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                            >
                                <option value="All">All Departments</option>
                                {uniqueDepartments.map(dept => (
                                    <option key={dept} value={dept}>{dept}</option>
                                ))}
                            </select>

                            <select
                                value={jobTypeFilter}
                                onChange={(e) => setJobTypeFilter(e.target.value)}
                                className="px-4 py-3 bg-white border border-blue-300 rounded-lg text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                            >
                                <option value="All">All Job Types</option>
                                {uniqueJobTypes.map(type => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Vacancies Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {filteredVacancies.length > 0 ? (
                            filteredVacancies.map((job) => (
                                <div
                                    key={job.id}
                                    className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-blue-200 group hover:transform hover:scale-[1.02] hover:border-blue-400 transition-all duration-500"
                                >
                                    <div className="p-4">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${job.vacancyStatus === 'opened'
                                                        ? 'bg-green-500/20 text-green-600 border border-green-500/30'
                                                        : 'bg-gray-500/20 text-gray-600 border border-gray-500/30'
                                                        }`}>
                                                        {job.vacancyStatus}
                                                    </span>
                                                </div>
                                                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                                    {job.title}
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="space-y-2 mb-4">
                                            <div className="flex items-center gap-2 text-gray-700">
                                                <Building2 size={16} className="text-blue-600" />
                                                <span>{job.department}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-700">
                                                <MapPin size={16} className="text-blue-600" />
                                                <span>{job.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-700">
                                                <Briefcase size={16} className="text-blue-600" />
                                                <span>{job.jobType}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-700">
                                                <Clock size={16} className="text-blue-600" />
                                                <span>Apply by: {new Date(job.deadline).toLocaleDateString()}</span>
                                            </div>
                                        </div>

                                        <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                                            {job.description}
                                        </p>

                                        <Button
                                            variant="primary"
                                            className="w-full py-3 bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                                            onClick={() => handleApply(job.id, job.title)}
                                            disabled={job.vacancyStatus === 'closed'}
                                        >
                                            {job.vacancyStatus === 'opened' ? 'Apply Now' : 'Position Closed'}
                                        </Button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-2 text-center p-12 bg-white/80 backdrop-blur-lg rounded-2xl border border-blue-200">
                                <div className="text-blue-600 text-6xl mb-4">📋</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">No Vacancies Found</h3>
                                <p className="text-gray-700 mb-6">
                                    {searchTerm || locationFilter !== 'All' || departmentFilter !== 'All' || jobTypeFilter !== 'All'
                                        ? "No vacancies match your current filters. Try adjusting your search criteria."
                                        : "There are currently no open positions. Please check back later for new opportunities."
                                    }
                                </p>
                                <Button
                                    variant="primary"
                                    className="bg-blue-600 hover:bg-blue-700"
                                    onClick={() => {
                                        setSearchTerm('');
                                        setLocationFilter('All');
                                        setDepartmentFilter('All');
                                        setJobTypeFilter('All');
                                    }}
                                >
                                    Clear Filters
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Why Join Us Section */}
            <section className="animate-slideUp">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-blue-200 text-center">
                        <Heading level={3} className="text-blue-600 mb-6">Why Join MARCH?</Heading>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-4">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-blue-600 text-xl">💼</span>
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2">Professional Development</h4>
                                <p className="text-gray-700 text-sm">Continuous learning opportunities and career advancement</p>
                            </div>
                            <div className="p-4">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-blue-600 text-xl">🔬</span>
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2">Cutting-Edge Research</h4>
                                <p className="text-gray-700 text-sm">Work on innovative projects with global impact</p>
                            </div>
                            <div className="p-4">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-blue-600 text-xl">🤝</span>
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2">Collaborative Environment</h4>
                                <p className="text-gray-700 text-sm">Join a diverse team of world-class researchers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;