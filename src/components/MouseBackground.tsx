import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MouseBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [mouseTrail, setMouseTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const handleMouseMove = (e: MouseEvent) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setMousePosition(newPos);
      setIsMoving(true);
      
      // Add to trail
      setMouseTrail(prev => {
        const newTrail = [...prev, { ...newPos, id: Date.now() }];
        return newTrail.slice(-8); // Keep only last 8 points
      });
      
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsMoving(false), 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  // Clean up old trail points
  useEffect(() => {
    const interval = setInterval(() => {
      setMouseTrail(prev => prev.slice(1));
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Primary gradient that follows mouse */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, hsl(var(--primary) / 0.1) 40%, transparent 70%)',
        }}
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
          scale: isMoving ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
        }}
      />
      
      {/* Secondary gradient with delay */}
      <motion.div
        className="absolute w-64 h-64 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent) / 0.3) 0%, hsl(var(--accent) / 0.1) 40%, transparent 70%)',
        }}
        animate={{
          x: mousePosition.x - 128,
          y: mousePosition.y - 128,
          scale: isMoving ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 30,
          damping: 25,
          delay: 0.1,
        }}
      />
      
      {/* Floating particles that react to mouse */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/40 rounded-full"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 4) * 20}%`,
          }}
          animate={{
            x: (mousePosition.x - window.innerWidth / 2) * 0.02 * (i + 1),
            y: (mousePosition.y - window.innerHeight / 2) * 0.02 * (i + 1),
            scale: isMoving ? 1.5 : 1,
            opacity: isMoving ? 0.8 : 0.4,
          }}
          transition={{
            type: "spring",
            stiffness: 20,
            damping: 30,
            delay: i * 0.05,
          }}
        />
      ))}
      
      {/* Mouse Trail Lines */}
      <svg className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        {mouseTrail.length > 1 && (
          <motion.path
            d={`M ${mouseTrail.map(point => `${point.x},${point.y}`).join(' L ')}`}
            stroke="hsl(var(--primary))"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.9 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              filter: 'drop-shadow(0 0 8px hsl(var(--primary) / 0.8)) drop-shadow(0 0 16px hsl(var(--primary) / 0.4))',
            }}
          />
        )}
      </svg>

      {/* Ripple effect on mouse movement */}
      {isMoving && (
        <motion.div
          className="absolute border-2 border-primary/30 rounded-full"
          style={{
            left: mousePosition.x - 25,
            top: mousePosition.y - 25,
            width: 50,
            height: 50,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      )}
    </div>
  );
};

export default MouseBackground;