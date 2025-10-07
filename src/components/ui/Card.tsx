import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    style?: React.CSSProperties; // <-- add this
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick, style }) => {
    return (
        <div
            className={`
                bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 
                transition-all duration-300 hover:bg-white/15 hover:border-gold/30
                ${className}
            `}
            onClick={onClick}
            style={style} // <-- pass it here
        >
            {children}
        </div>
    );
};

export default Card;
