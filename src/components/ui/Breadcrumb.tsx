import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbProps {
    currentPage: string;
    parentPage?: string;
    parentPath?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
    currentPage,
    parentPage = 'Home',
    parentPath = '/'
}) => {
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        const mainContent = document.querySelector('main');
        if (mainContent) {
            mainContent.style.opacity = '0.7';
            mainContent.style.transition = 'opacity 0.3s ease';
        }

        setTimeout(() => {
            navigate(path);
        }, 300);

        setTimeout(() => {
            if (mainContent) {
                mainContent.style.opacity = '1';
            }
        }, 600);
    };

    return (
        <nav className="flex items-center space-x-2 text-sm mb-8 animate-fadeIn">
            {/* Home Link */}
            <button
                onClick={() => handleNavigation(parentPath)}
                className="flex items-center space-x-1 text-white/70 hover:text-gold transition-all duration-300 group hover:scale-105"
            >
                <Home className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">{parentPage}</span>
            </button>

            {/* Separator */}
            <ChevronRight className="w-4 h-4 text-white/40" />

            {/* Current Page */}
            <span className="text-gold font-semibold flex items-center space-x-1">
                <span>{currentPage}</span>
            </span>
        </nav>
    );
};

export default Breadcrumb;