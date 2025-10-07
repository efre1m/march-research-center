import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gold text-dark-blue rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 group animate-bounce hover:animate-none border-2 border-gold/50"
                    aria-label="Scroll to top"
                >
                    <ChevronUp className="w-6 h-6 transform group-hover:scale-125 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gold rounded-full opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300 animate-pulse"></div>
                    <div className="absolute inset-0 rounded-full border-2 border-gold/30 group-hover:border-gold group-hover:animate-spin transition-all duration-1000"></div>
                </button>
            )}
        </>
    );
};

export default ScrollToTop;