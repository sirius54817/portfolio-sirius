import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Shield, Terminal } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import { animate } from 'animejs';

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  // Initialize anime.js animations after component mounts
  React.useEffect(() => {
    // SVG Loading Animation - Turbulence and Displacement Map
    animate(['feTurbulence', 'feDisplacementMap'], {
      baseFrequency: .05,
      scale: 15,
      alternate: true,
      loop: true,
      duration: 2000
    });

    // SVG Polygon Animation
    animate('polygon', {
      points: '64 68.64 8.574 100 63.446 67.68 64 4 64.554 67.68 119.426 100',
      alternate: true,
      loop: true,
      duration: 3000,
      ease: 'easeInOutSine'
    });

    // Animate the first line "Cybersecurity & Linux"
    animate('.cyber-text span', {
      // Property keyframes
      y: [
        { to: '-2.75rem', ease: 'outExpo', duration: 600 },
        { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
      ],
      // Property specific parameters
      rotate: {
        from: '-1turn',
        delay: 0
      },
      delay: (_, i) => i * 50, // Function based value
      ease: 'inOutCirc',
      loopDelay: 1000,
      loop: true
    });

    // Animate the second line "Full-Stack Developer"
    animate('.fullstack-text span', {
      // Property keyframes
      y: [
        { to: '-2.75rem', ease: 'outExpo', duration: 600 },
        { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
      ],
      // Property specific parameters
      rotate: {
        from: '1turn',
        delay: 0
      },
      delay: (_, i) => i * 50 + 500, // Function based value with offset
      ease: 'inOutCirc',
      loopDelay: 1000,
      loop: true
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-primary/10" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* SVG Loading Animation */}
        <div className="absolute top-20 right-20 w-32 h-32 opacity-70">
          <svg viewBox="0 0 128 128" className="w-full h-full">
            <defs>
              <filter id="turbulence">
                <feTurbulence 
                  baseFrequency="0.02" 
                  numOctaves="3" 
                  result="noise"
                />
                <feDisplacementMap 
                  in="SourceGraphic" 
                  in2="noise" 
                  scale="5"
                />
              </filter>
            </defs>
            <polygon 
              points="64 68.64 8.574 100 63.446 67.68 64 4 64.554 67.68 119.426 100"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              filter="url(#turbulence)"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(265, 85%, 65%)" />
                <stop offset="100%" stopColor="hsl(280, 100%, 70%)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Additional Loading Shapes */}
        <div className="absolute bottom-32 left-16 w-24 h-24 opacity-60">
          <svg viewBox="0 0 128 128" className="w-full h-full">
            <polygon 
              points="64 8 8 120 120 120"
              fill="none"
              stroke="hsl(280, 100%, 70%)"
              strokeWidth="1.5"
              opacity="0.8"
            />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="flex items-center justify-center mb-4">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary font-mono text-sm">
              🛡️ Welcome! I'm NUTHALAPATI VEERA VENKATA NAGA SAI
            </span>
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 font-space"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="cyber-text text-white font-bold" style={{ color: 'white', fontSize: 'inherit' }}>
            {'Cybersecurity & Linux'.split('').map((char, index) => (
              <span key={index} className="inline-block text-white">
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </div>
          <br />
          <div className="fullstack-text text-foreground">
            {'Full-Stack Developer'.split('').map((char, index) => (
              <span key={index} className="inline-block">
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </div>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Vice President | Specializing in cybersecurity, Linux systems, 
          and full-stack development. Building secure digital solutions with modern technologies.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-6 text-lg glow-effect group hover:scale-105 transition-all duration-300"
            onClick={scrollToProjects}
          >
            <Shield className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            View My Work
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg group hover:scale-105 transition-all duration-300"
            onClick={() => window.open('https://github.com/sirius54817', '_blank')}
          >
            <Terminal className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Linux & Security
          </Button>
        </motion.div>

        {/* Floating Animation Badge */}
        <motion.div
          className="absolute -bottom-20 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-8 h-8 border-2 border-primary rounded-full flex items-center justify-center">
            <motion.div
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;