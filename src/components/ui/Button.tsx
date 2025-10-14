import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    onClick,
    className = '',
    type = 'button',
    disabled = false
}) => {
    const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105';
    const variantClasses = variant === 'primary'
        ? 'bg-gold text-dark-blue hover:bg-[#e6c200]'
        : 'border-2 border-gold text-gold hover:bg-gold hover:text-dark-blue';

    const disabledClasses = disabled
        ? 'opacity-50 cursor-not-allowed transform-none hover:scale-100'
        : '';

    return (
        <button
            type={type}
            className={`${baseClasses} ${variantClasses} ${disabledClasses} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;