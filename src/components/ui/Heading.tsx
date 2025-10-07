import React, { type JSX } from 'react';

interface HeadingProps {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    children: React.ReactNode;
    className?: string;
}

const Heading: React.FC<HeadingProps> = ({ level = 1, children, className = '' }) => {
    const baseClasses = 'font-bold text-gold';
    const levelClasses = {
        1: 'text-4xl md:text-5xl lg:text-6xl mb-6',
        2: 'text-3xl md:text-4xl lg:text-5xl mb-4',
        3: 'text-2xl md:text-3xl lg:text-4xl mb-3',
        4: 'text-xl md:text-2xl lg:text-3xl mb-2',
        5: 'text-lg md:text-xl lg:text-2xl mb-2',
        6: 'text-base md:text-lg lg:text-xl mb-1'
    };

    const Tag = `h${level}` as keyof JSX.IntrinsicElements;

    return (
        <Tag className={`${baseClasses} ${levelClasses[level]} ${className}`}>
            {children}
        </Tag>
    );
};

export default Heading;