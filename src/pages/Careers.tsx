import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Building2, Briefcase, Search, Clock } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { vacancies, type VacancyItem } from '../data/vacancydata';

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
        <div className="min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader
                    title="Join Our Team"
                    subtitle="Explore career opportunities at MARCH Research Center and be part of our mission to transform maternal healthcare"
                    variant="modern"
                />

                {/* Search and Filters */}
                <Card className="p-6 mb-8">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                        <div className="lg:col-span-2 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gold" size={20} />
                            <input
                                type="text"
                                placeholder="Search by title, location or department..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-dark-blue border border-gold/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-gold"
                            />
                        </div>

                        <select
                            value={locationFilter}
                            onChange={(e) => setLocationFilter(e.target.value)}
                            className="px-4 py-3 bg-dark-blue border border-gold/30 rounded-lg text-white focus:outline-none focus:border-gold"
                        >
                            <option value="All">All Locations</option>
                            {uniqueLocations.map(loc => (
                                <option key={loc} value={loc}>{loc}</option>
                            ))}
                        </select>

                        <select
                            value={departmentFilter}
                            onChange={(e) => setDepartmentFilter(e.target.value)}
                            className="px-4 py-3 bg-dark-blue border border-gold/30 rounded-lg text-white focus:outline-none focus:border-gold"
                        >
                            <option value="All">All Departments</option>
                            {uniqueDepartments.map(dept => (
                                <option key={dept} value={dept}>{dept}</option>
                            ))}
                        </select>

                        <select
                            value={jobTypeFilter}
                            onChange={(e) => setJobTypeFilter(e.target.value)}
                            className="px-4 py-3 bg-dark-blue border border-gold/30 rounded-lg text-white focus:outline-none focus:border-gold"
                        >
                            <option value="All">All Job Types</option>
                            {uniqueJobTypes.map(type => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>
                </Card>

                {/* Vacancies Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filteredVacancies.length > 0 ? (
                        filteredVacancies.map((job) => (
                            <Card key={job.id} className="group hover:transform hover:scale-[1.02] transition-all duration-500">
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${job.vacancyStatus === 'opened'
                                                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                                    : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                                                    }`}>
                                                    {job.vacancyStatus}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gold transition-colors duration-300">
                                                {job.title}
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center gap-2 text-white/70">
                                            <Building2 size={16} />
                                            <span>{job.department}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-white/70">
                                            <MapPin size={16} />
                                            <span>{job.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-white/70">
                                            <Briefcase size={16} />
                                            <span>{job.jobType}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-white/70">
                                            <Clock size={16} />
                                            <span>Apply by: {new Date(job.deadline).toLocaleDateString()}</span>
                                        </div>
                                    </div>

                                    <p className="text-white/80 text-sm mb-6 leading-relaxed">
                                        {job.description}
                                    </p>

                                    <Button
                                        variant="primary"
                                        className="w-full py-3"
                                        onClick={() => handleApply(job.id, job.title)}
                                        disabled={job.vacancyStatus === 'closed'}
                                    >
                                        {job.vacancyStatus === 'opened' ? 'Apply Now' : 'Position Closed'}
                                    </Button>
                                </div>
                            </Card>
                        ))
                    ) : (
                        <Card className="col-span-2 text-center p-12">
                            <div className="text-gold text-6xl mb-4">📋</div>
                            <h3 className="text-2xl font-bold text-white mb-4">No Vacancies Found</h3>
                            <p className="text-white/70 mb-6">
                                {searchTerm || locationFilter !== 'All' || departmentFilter !== 'All' || jobTypeFilter !== 'All'
                                    ? "No vacancies match your current filters. Try adjusting your search criteria."
                                    : "There are currently no open positions. Please check back later for new opportunities."
                                }
                            </p>
                            <Button
                                variant="secondary"
                                onClick={() => {
                                    setSearchTerm('');
                                    setLocationFilter('All');
                                    setDepartmentFilter('All');
                                    setJobTypeFilter('All');
                                }}
                            >
                                Clear Filters
                            </Button>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Careers;