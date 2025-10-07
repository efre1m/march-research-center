import React, { useState, useEffect } from 'react';

interface Slide {
    id: number;
    image: string;
    title: string;
    description: string;
    caption: string;
}

interface ImageSliderProps {
    slides: Slide[];
    autoPlay?: boolean;
    interval?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
    slides,
    autoPlay = true,
    interval = 5000
}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const nextSlide = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
            setIsTransitioning(false);
        }, 500);
    };

    const prevSlide = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
            setIsTransitioning(false);
        }, 500);
    };

    const goToSlide = (index: number) => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentSlide(index);
            setIsTransitioning(false);
        }, 500);
    };

    useEffect(() => {
        if (!autoPlay) return;

        const timer = setInterval(nextSlide, interval);
        return () => clearInterval(timer);
    }, [autoPlay, interval]);

    return (
        <div className="relative w-full h-[600px] rounded-2xl overflow-hidden group">
            {/* Slides */}
            <div className="relative w-full h-full">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide
                            ? 'opacity-100 transform translate-x-0'
                            : 'opacity-0 transform translate-x-full'
                            } ${isTransitioning ? 'transitioning' : ''}`}
                    >
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transform scale-105 group-hover:scale-110 transition-transform duration-7000"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/90 via-dark-blue/50 to-transparent" />

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-0 group-hover:translate-y-[-10px] transition-transform duration-500">
                            <div className="max-w-4xl mx-auto">
                                <div className="inline-block px-4 py-2 bg-gold/20 backdrop-blur-sm rounded-full mb-4">
                                    <span className="text-gold text-sm font-semibold">{slide.caption}</span>
                                </div>
                                <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-white drop-shadow-lg">
                                    {slide.title}
                                </h3>
                                <p className="text-lg text-white/90 max-w-2xl drop-shadow-lg leading-relaxed">
                                    {slide.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-dark-blue/50 hover:bg-dark-blue/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gold transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-dark-blue/50 hover:bg-dark-blue/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gold transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                            ? 'bg-gold w-8'
                            : 'bg-white/50 hover:bg-white/80'
                            }`}
                    />
                ))}
            </div>

            {/* Progress Bar */}
            {autoPlay && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
                    <div
                        className="h-full bg-gold transition-all duration-1000 ease-linear"
                        style={{
                            width: isTransitioning ? '100%' : '0%',
                            transition: isTransitioning ? 'width 5s linear' : 'none'
                        }}
                        key={currentSlide}
                    />
                </div>
            )}
        </div>
    );
};

export default ImageSlider;