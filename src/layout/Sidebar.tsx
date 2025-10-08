import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
    activePage: string;
    onPageChange: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, onPageChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isResearchOpen, setIsResearchOpen] = useState(false);
    const [isNewsEventsOpen, setIsNewsEventsOpen] = useState(false);
    const navigate = useNavigate();

    const menuItems = [
        'Home',
        'Team',
        'Careers',
        'About',
        'Contact'
    ];

    const researchItems = [
        'Projects',
        'Publications'
    ];

    const newsEventsItems = [
        { name: 'News', path: '/news' },
        { name: 'Events', path: '/events' },
        { name: 'Stories', path: '/stories' }
    ];

    const handleNewsEventsNavigation = (itemName: string, path: string) => {
        onPageChange(itemName);
        navigate(path);
        setIsOpen(false);
        setIsNewsEventsOpen(false);
    };

    return (
        <>
            {/* Mobile Menu Button */}
            <div className="lg:hidden fixed top-6 left-6 z-50">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-3 bg-dark-blue border border-gold rounded-xl text-gold shadow-lg"
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
                {/* Logo */}
                <div className="p-8 border-b border-gold/30">
                    <div className="text-3xl font-bold text-gold text-center">
                        MARCH Research Center
                    </div>
                    <div className="text-white/70 text-sm text-center mt-2">
                        Advancing Scientific Frontiers
                    </div>
                </div>

                {/* Navigation Items */}
                <nav className="p-6 space-y-3">
                    {menuItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => {
                                onPageChange(item);
                                setIsOpen(false);
                            }}
                            className={`
                w-full text-left px-6 py-4 rounded-xl transition-all duration-300
                text-lg font-medium
                ${activePage === item
                                    ? 'bg-gold text-dark-blue font-semibold shadow-lg'
                                    : 'text-white hover:bg-gold/10 hover:text-gold'
                                }
              `}
                        >
                            {item}
                        </button>
                    ))}

                    {/* Research Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsResearchOpen(!isResearchOpen)}
                            className={`
                w-full text-left px-6 py-4 rounded-xl transition-all duration-300
                text-lg font-medium flex items-center justify-between
                ${researchItems.includes(activePage)
                                    ? 'bg-gold text-dark-blue font-semibold shadow-lg'
                                    : 'text-white hover:bg-gold/10 hover:text-gold'
                                }
              `}
                        >
                            <span>Research</span>
                            <ChevronDown
                                size={20}
                                className={`transform transition-transform ${isResearchOpen ? 'rotate-180' : ''}`}
                            />
                        </button>

                        {/* Dropdown Menu */}
                        {isResearchOpen && (
                            <div className="mt-2 ml-4 space-y-2 border-l border-gold/20 pl-4">
                                {researchItems.map((item) => (
                                    <button
                                        key={item}
                                        onClick={() => {
                                            onPageChange(item);
                                            setIsOpen(false);
                                        }}
                                        className={`
                        w-full text-left px-4 py-3 rounded-lg transition-all duration-300
                        text-base font-medium
                        ${activePage === item
                                                ? 'bg-gold/20 text-gold border border-gold/30'
                                                : 'text-white/80 hover:bg-gold/10 hover:text-gold'
                                            }
                      `}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* News & Events Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsNewsEventsOpen(!isNewsEventsOpen)}
                            className={`
                w-full text-left px-6 py-4 rounded-xl transition-all duration-300
                text-lg font-medium flex items-center justify-between
                ${newsEventsItems.some(item => item.name === activePage)
                                    ? 'bg-gold text-dark-blue font-semibold shadow-lg'
                                    : 'text-white hover:bg-gold/10 hover:text-gold'
                                }
              `}
                        >
                            <span>What's New</span>
                            <ChevronDown
                                size={20}
                                className={`transform transition-transform ${isNewsEventsOpen ? 'rotate-180' : ''}`}
                            />
                        </button>

                        {/* Dropdown Menu */}
                        {isNewsEventsOpen && (
                            <div className="mt-2 ml-4 space-y-2 border-l border-gold/20 pl-4">
                                {newsEventsItems.map((item) => (
                                    <button
                                        key={item.name}
                                        onClick={() => handleNewsEventsNavigation(item.name, item.path)}
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