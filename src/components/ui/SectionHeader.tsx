import React, { useState } from 'react';
import Heading from './Heading';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    variant?: 'default' | 'slanted' | 'elegant' | 'modern';
    className?: string;
    onClick?: () => void;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    subtitle,
    variant = 'slanted',
    className = '',
    onClick
}) => {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = () => {
        if (onClick) {
            setIsAnimating(true);
            onClick();
            setTimeout(() => setIsAnimating(false), 1000);
        }
    };

    const variants = {
        default: {
            container: `text-center mb-12 cursor-${onClick ? 'pointer' : 'default'} transition-all duration-500 ${isAnimating ? 'animate-zigzag' : 'hover:scale-105'
                }`,
            title: "text-2xl md:text-3xl font-bold text-white",
            subtitle: "text-white/60 text-base mt-3 max-w-2xl mx-auto",
            border: "border-b border-white/20 pb-6"
        },
        slanted: {
            container: `relative py-8 mb-12 cursor-${onClick ? 'pointer' : 'default'} transition-all duration-500 ${isAnimating ? 'animate-zigzag' : 'hover:scale-105'
                }`,
            title: "text-2xl md:text-3xl font-bold text-white relative z-10",
            subtitle: "text-white/70 text-base mt-3 max-w-2xl",
            border: `
        before:absolute before:inset-0 before:bg-gradient-to-r before:from-gold/5 before:via-transparent before:to-gold/5
        before:skew-y-1 before:rounded-lg before:border before:border-white/20
        after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-gold/10 after:to-transparent
        after:skew-y-[-1deg] after:rounded-lg after:border after:border-white/10
      `
        },
        elegant: {
            container: `text-center relative py-8 mb-12 cursor-${onClick ? 'pointer' : 'default'} transition-all duration-500 ${isAnimating ? 'animate-zigzag' : 'hover:scale-105'
                }`,
            title: "text-2xl md:text-3xl font-light tracking-wide text-white",
            subtitle: "text-white/60 text-base mt-3 max-w-2xl mx-auto font-light",
            border: `
        border-b border-white/20 pb-6
        before:absolute before:left-1/2 before:top-0 before:w-32 before:h-0.5 before:bg-gradient-to-r before:from-transparent before:via-gold before:to-transparent before:transform before:-translate-x-1/2
        after:absolute after:left-1/2 after:bottom-0 after:w-20 after:h-0.5 after:bg-gold after:transform after:-translate-x-1/2
      `
        },
        modern: {
            container: `relative py-8 mb-12 border-l-4 border-gold pl-6 cursor-${onClick ? 'pointer' : 'default'} transition-all duration-500 ${isAnimating ? 'animate-zigzag' : 'hover:scale-105'
                }`,
            title: "text-2xl md:text-3xl font-semibold text-white",
            subtitle: "text-white/60 text-base mt-2 max-w-2xl",
            border: `
        before:absolute before:left-0 before:top-1/2 before:w-3 before:h-12 before:bg-gold/20 before:transform before:-translate-y-1/2 before:rounded-r-full
        after:absolute after:left-0 after:top-1/2 after:w-1 after:h-8 after:bg-gold after:transform after:-translate-y-1/2
      `
        }
    };

    const currentVariant = variants[variant];

    return (
        <div
            className={`${currentVariant.container} ${currentVariant.border} ${className}`}
            onClick={handleClick}
        >
            <Heading level={2} className={currentVariant.title}>
                {title}
            </Heading>
            {subtitle && (
                <p className={currentVariant.subtitle}>
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionHeader;