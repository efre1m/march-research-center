import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
    activePage: string;
    onPageChange: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, onPageChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
    const navigate = useNavigate();

    // Professional page order with logical grouping
    const whatWeDoItems = [
        { name: 'Research Areas', path: '/research-areas' },
        { name: 'Projects', path: '/projects' },
        { name: 'Publications', path: '/publications' },
        { name: 'Resources', path: '/resources' },
        { name: 'Team', path: '/team' },
        { name: 'Leadership', path: '/leadership' }
    ];

    const mediaCenterItems = [
        { name: 'News', path: '/news' },
        { name: 'Events', path: '/events' },
        { name: 'Stories', path: '/stories' },
        { name: 'In The Media', path: '/media' },
        { name: 'Careers', path: '/careers' }
    ];

    const handleNavigation = (itemName: string, path?: string) => {
        onPageChange(itemName);
        if (path) {
            navigate(path);
        }
        setIsOpen(false);
        setHoveredDropdown(null);
    };

    return (
        <>
            {/* Mobile Menu Button */}
            <div className="lg:hidden fixed top-6 left-6 z-50">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-3 bg-dark-blue border border-gold rounded-xl text-gold shadow-lg hover:bg-gold/10 transition-colors duration-300"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Sidebar */}
            <div className={`
                fixed inset-y-0 left-0 z-40 w-80 bg-dark-blue border-r border-gold/30 
                transform transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                lg:translate-x-0 lg:static lg:inset-auto
            `}>
                {/* Logo Section */}
                <div className="border-b border-gold/30">
                    <img
                        src="/images/logo/LOGO.jpg"
                        alt="MARCH Research Center"
                        className="w-full h-auto"
                    />
                </div>

                {/* Navigation Items */}
                <nav className="p-6 space-y-3">
                    {/* Home */}
                    <button
                        onClick={() => handleNavigation('Home', '/')}
                        className={`
                            w-full text-left px-6 py-4 rounded-xl transition-all duration-300
                            text-lg font-medium
                            ${activePage === 'Home'
                                ? 'bg-gold text-dark-blue font-semibold shadow-lg'
                                : 'text-white hover:bg-gold/10 hover:text-gold'
                            }
                        `}
                    >
                        Home
                    </button>

                    {/* About */}
                    <button
                        onClick={() => handleNavigation('About', '/about')}
                        className={`
                            w-full text-left px-6 py-4 rounded-xl transition-all duration-300
                            text-lg font-medium
                            ${activePage === 'About'
                                ? 'bg-gold text-dark-blue font-semibold shadow-lg'
                                : 'text-white hover:bg-gold/10 hover:text-gold'
                            }
                        `}
                    >
                        About
                    </button>

                    {/* Where We Work */}
                    <button
                        onClick={() => handleNavigation('Where We Work', '/where-we-work')}
                        className={`
                            w-full text-left px-6 py-4 rounded-xl transition-all duration-300
                            text-lg font-medium
                            ${activePage === 'Where We Work'
                                ? 'bg-gold text-dark-blue font-semibold shadow-lg'
                                : 'text-white hover:bg-gold/10 hover:text-gold'
                            }
                        `}
                    >
                        Where We Work
                    </button>

                    {/* What We Do Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setHoveredDropdown('whatWeDo')}
                        onMouseLeave={() => setHoveredDropdown(null)}
                    >
                        <button
                            onClick={() => setHoveredDropdown(hoveredDropdown === 'whatWeDo' ? null : 'whatWeDo')}
                            className={`
                                w-full text-left px-6 py-4 rounded-xl transition-all duration-300
                                text-lg font-medium flex items-center justify-between
                                ${whatWeDoItems.some(item => item.name === activePage)
                                    ? 'bg-gold text-dark-blue font-semibold shadow-lg'
                                    : 'text-white hover:bg-gold/10 hover:text-gold'
                                }
                            `}
                        >
                            <span>What We Do</span>
                            <ChevronDown
                                size={20}
                                className={`transform transition-transform duration-300 ${hoveredDropdown === 'whatWeDo' ? 'rotate-180' : ''
                                    }`}
                            />
                        </button>

                        {/* Dropdown Menu - Shows on hover (desktop) and click (mobile) */}
                        {(hoveredDropdown === 'whatWeDo' || (window.innerWidth < 1024 && hoveredDropdown === 'whatWeDo')) && (
                            <div
                                className="mt-2 ml-4 space-y-2 border-l border-gold/20 pl-4 animate-fadeIn"
                                onMouseEnter={() => setHoveredDropdown('whatWeDo')}
                                onMouseLeave={() => setHoveredDropdown(null)}
                            >
                                {whatWeDoItems.map((item) => (
                                    <button
                                        key={item.name}
                                        onClick={() => handleNavigation(item.name, item.path)}
                                        className={`
                                            w-full text-left px-4 py-3 rounded-lg transition-all duration-300
                                            text-base font-medium
                                            ${activePage === item.name
                                                ? 'bg-gold/20 text-gold border border-gold/30'
                                                : 'text-white/80 hover:bg-gold/10 hover:text-gold'
                                            }
                                        `}
                                    >
                                        {item.name}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Media Center Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setHoveredDropdown('media')}
                        onMouseLeave={() => setHoveredDropdown(null)}
                    >
                        <button
                            onClick={() => setHoveredDropdown(hoveredDropdown === 'media' ? null : 'media')}
                            className={`
                                w-full text-left px-6 py-4 rounded-xl transition-all duration-300
                                text-lg font-medium flex items-center justify-between
                                ${mediaCenterItems.some(item => item.name === activePage)
                                    ? 'bg-gold text-dark-blue font-semibold shadow-lg'
                                    : 'text-white hover:bg-gold/10 hover:text-gold'
                                }
                            `}
                        >
                            <span>Media Center</span>
                            <ChevronDown
                                size={20}
                                className={`transform transition-transform duration-300 ${hoveredDropdown === 'media' ? 'rotate-180' : ''
                                    }`}
                            />
                        </button>

                        {/* Dropdown Menu */}
                        {(hoveredDropdown === 'media' || (window.innerWidth < 1024 && hoveredDropdown === 'media')) && (
                            <div
                                className="mt-2 ml-4 space-y-2 border-l border-gold/20 pl-4 animate-fadeIn"
                                onMouseEnter={() => setHoveredDropdown('media')}
                                onMouseLeave={() => setHoveredDropdown(null)}
                            >
                                {mediaCenterItems.map((item) => (
                                    <button
                                        key={item.name}
                                        onClick={() => handleNavigation(item.name, item.path)}
                                        className={`
                                            w-full text-left px-4 py-3 rounded-lg transition-all duration-300
                                            text-base font-medium
                                            ${activePage === item.name
                                                ? 'bg-gold/20 text-gold border border-gold/30'
                                                : 'text-white/80 hover:bg-gold/10 hover:text-gold'
                                            }
                                        `}
                                    >
                                        {item.name}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Impact */}
                    <button
                        onClick={() => handleNavigation('Our Impact', '/impacts')}
                        className={`
                            w-full text-left px-6 py-4 rounded-xl transition-all duration-300
                            text-lg font-medium
                            ${activePage === 'Our Impact'
                                ? 'bg-gold text-dark-blue font-semibold shadow-lg'
                                : 'text-white hover:bg-gold/10 hover:text-gold'
                            }
                        `}
                    >
                        Our Impact
                    </button>

                    {/* Contact */}
                    <button
                        onClick={() => handleNavigation('Contact', '/contact')}
                        className={`
                            w-full text-left px-6 py-4 rounded-xl transition-all duration-300
                            text-lg font-medium
                            ${activePage === 'Contact'
                                ? 'bg-gold text-dark-blue font-semibold shadow-lg'
                                : 'text-white hover:bg-gold/10 hover:text-gold'
                            }
                        `}
                    >
                        Contact
                    </button>
                </nav>

                {/* Footer */}
                <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gold/30">
                    <div className="text-white/50 text-sm text-center">
                        © 2024 MARCH Research Center
                    </div>
                </div>
            </div>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

export default Sidebar;