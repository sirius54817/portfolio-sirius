import React from 'react';
import { animate } from 'animejs';

interface LoadingAnimationProps {
  isVisible: boolean;
  onComplete?: () => void;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ isVisible, onComplete }) => {
  React.useEffect(() => {
    if (isVisible) {
      // SVG Loading Animation - Turbulence and Displacement Map
      animate(['#loadingTurbulence', '#loadingDisplacement'], {
        baseFrequency: .05,
        scale: 15,
        alternate: true,
        loop: true,
        duration: 2000
      });

      // Main Loading Polygon Animation
      animate('#loadingPolygon', {
        points: '64 68.64 8.574 100 63.446 67.68 64 4 64.554 67.68 119.426 100',
        alternate: true,
        loop: true,
        duration: 3000,
        ease: 'easeInOutSine'
      });

      // Secondary polygon rotation
      animate('#secondaryPolygon', {
        rotate: '360deg',
        duration: 4000,
        loop: true,
        ease: 'linear'
      });

      // Loading text animation
      animate('.loading-text span', {
        y: [
          { to: '-1rem', ease: 'outExpo', duration: 400 },
          { to: 0, ease: 'outBounce', duration: 600, delay: 50 }
        ],
        delay: (_, i) => i * 100,
        loop: true,
        loopDelay: 1500
      });

      // Auto-complete after 3 seconds if no onComplete provided
      if (onComplete) {
        const timer = setTimeout(() => {
          onComplete();
        }, 3000);
        return () => clearTimeout(timer);
      }
    }
  }, [isVisible, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm">
      <div className="text-center">
        {/* Main Loading SVG */}
        <div className="w-32 h-32 mx-auto mb-8">
          <svg viewBox="0 0 128 128" className="w-full h-full">
            <defs>
              <filter id="loadingTurbulence">
                <feTurbulence 
                  id="loadingTurbulence"
                  baseFrequency="0.02" 
                  numOctaves="3" 
                  result="noise"
                />
                <feDisplacementMap 
                  id="loadingDisplacement"
                  in="SourceGraphic" 
                  in2="noise" 
                  scale="5"
                />
              </filter>
              <linearGradient id="loadingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(265, 85%, 65%)" />
                <stop offset="50%" stopColor="hsl(280, 100%, 70%)" />
                <stop offset="100%" stopColor="hsl(320, 85%, 75%)" />
              </linearGradient>
            </defs>
            
            {/* Main animated polygon */}
            <polygon 
              id="loadingPolygon"
              points="64 68.64 8.574 100 63.446 67.68 64 4 64.554 67.68 119.426 100"
              fill="none"
              stroke="url(#loadingGradient)"
              strokeWidth="2"
              filter="url(#loadingTurbulence)"
              className="drop-shadow-lg"
            />
            
            {/* Secondary rotating polygon */}
            <polygon 
              id="secondaryPolygon"
              points="64 20 20 108 108 108"
              fill="none"
              stroke="hsl(280, 100%, 70%)"
              strokeWidth="1"
              opacity="0.6"
            />
            
            {/* Center dot */}
            <circle 
              cx="64" 
              cy="64" 
              r="3" 
              fill="url(#loadingGradient)"
              className="animate-pulse"
            />
          </svg>
        </div>
        
        {/* Loading Text */}
        <div className="loading-text text-2xl font-bold text-gradient mb-4">
          {'Loading...'.split('').map((char, index) => (
            <span key={index} className="inline-block">
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>
        
        {/* Subtitle */}
        <p className="text-muted-foreground text-sm">
          Initializing Cybersecurity Portfolio
        </p>
      </div>
    </div>
  );
};

export default LoadingAnimation;
