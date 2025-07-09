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
    // Animate the first line "Cybersecurity & Linux"
    animate('.cyber-text span', {
      y: [
        { to: '-2.75rem', ease: 'outExpo', duration: 600 },
        { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
      ],
      rotate: {
        from: '-1turn',
        delay: 0
      },
      delay: (_, i) => i * 100,
      ease: 'inOutCirc',
      loopDelay: 3000,
      loop: true
    });

    // Animate the second line "Full-Stack Developer"
    animate('.fullstack-text span', {
      y: [
        { to: '-2.75rem', ease: 'outExpo', duration: 600 },
        { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
      ],
      rotate: {
        from: '1turn',
        delay: 0
      },
      delay: (_, i) => i * 120 + 1000, // Offset to create a wave effect
      ease: 'inOutCirc',
      loopDelay: 3000,
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
          <div className="cyber-text text-gradient">
            {'Cybersecurity & Linux'.split('').map((char, index) => (
              <span key={index} className="inline-block">
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