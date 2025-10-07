import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    onClick,
    className = '',
    type = 'button'
}) => {
    const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105';
    const variantClasses = variant === 'primary'
        ? 'bg-gold text-dark-blue hover:bg-[#e6c200]'
        : 'border-2 border-gold text-gold hover:bg-gold hover:text-dark-blue';

    return (
        <button
            type={type}
            className={`${baseClasses} ${variantClasses} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;