import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Code, 
  Rocket, 
  Brain,
  Target,
  Zap,
  Shield,
  Terminal
} from 'lucide-react';

const AboutSection = () => {
  const interests = [
    { icon: <Shield className="h-5 w-5" />, label: 'Cybersecurity', color: 'bg-red-500' },
    { icon: <Terminal className="h-5 w-5" />, label: 'Linux Systems', color: 'bg-green-500' },
    { icon: <Code className="h-5 w-5" />, label: 'Full-Stack Dev', color: 'bg-blue-500' },
    { icon: <Brain className="h-5 w-5" />, label: 'Android Dev', color: 'bg-purple-500' },
    { icon: <Zap className="h-5 w-5" />, label: 'Blockchain', color: 'bg-yellow-500' },
    { icon: <Rocket className="h-5 w-5" />, label: 'JavaScript', color: 'bg-orange-500' },
    { icon: <Target className="h-5 w-5" />, label: 'Kotlin/Dart', color: 'bg-cyan-500' },
    { icon: <Heart className="h-5 w-5" />, label: 'TypeScript', color: 'bg-pink-500' }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content with Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-space">
                About <span className="text-gradient">Naga Sai</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Hello! I'm <strong className="text-foreground">Nuthalapati Veera Venkata Naga Sai</strong>, 
                a passionate cybersecurity expert and Linux specialist currently serving as 
                <strong className="text-primary"> Vice President</strong>.
              </p>
              
              <p>
                My expertise spans across <strong className="text-primary">cybersecurity frameworks</strong>, 
                <strong className="text-primary"> Linux system administration</strong>, and 
                <strong className="text-primary"> cloud technologies</strong> including Google Cloud and Azure. 
                I'm proficient in multiple programming languages with a focus on secure application development.
              </p>
              
              <p>
                As a <strong className="text-accent">Full-Stack Developer</strong>, I've built comprehensive web applications 
                using <strong className="text-primary">JavaScript, TypeScript, EJS</strong>, and modern frameworks. 
                My projects include e-commerce platforms, blockchain-based voting systems, and AI chatbot interfaces.
              </p>
              
              <p>
                In <strong className="text-accent">Android Development</strong>, I specialize in native app development 
                using <strong className="text-primary">Kotlin and Dart/Flutter</strong>. I've created ride-sharing platforms, 
                food delivery apps, and communication tools with real-time features and modern UI/UX design.
              </p>
              
              <p>
                Based in Chennai, Tamil Nadu, I'm passionate about using cutting-edge technologies 
                to tackle complex security challenges. I believe in continuous learning and contributing 
                to the cybersecurity community through innovative solutions and knowledge sharing.
              </p>
            </div>

            {/* Interests */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">What I'm passionate about:</h3>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="flex items-center space-x-2 px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer hover:shadow-lg"
                    >
                      <motion.div 
                        className={`p-1 rounded-full ${interest.color}`}
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      >
                        {interest.icon}
                      </motion.div>
                      <span>{interest.label}</span>
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Visual Element with Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Decorative Elements Outside Container */}
            <div className="absolute -inset-8 pointer-events-none">
              {/* Floating Geometric Shapes */}
              <motion.div
                className="absolute top-0 right-0 w-16 h-16 border-2 border-primary/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-12 h-12 bg-accent/20 rounded-lg rotate-45"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute top-1/2 -left-4 w-8 h-8 bg-primary/20 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute top-1/4 -right-2 w-6 h-6 border-2 border-accent/40 rotate-45"
                animate={{ rotate: [-45, 315] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
              />
            </div>

            {/* Main Image Container */}
            <Card className="card-glow p-8 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent" 
                     style={{
                       maskImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, black 2px, black 4px)',
                       WebkitMaskImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, black 2px, black 4px)'
                     }}
                />
              </div>

              {/* Large Square Image Container */}
              <motion.div
                className="relative group flex justify-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-80 h-80 relative overflow-hidden rounded-3xl card-glow border-4 border-primary/30 group-hover:border-primary/60 transition-all duration-500">
                  {/* Background Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent opacity-50" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-accent/20" />
                  
                  {/* Geometric Design Elements Inside */}
                  <div className="absolute top-4 right-4 w-12 h-12 border-2 border-primary/40 rounded rotate-45 group-hover:rotate-90 transition-transform duration-500" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-accent/30 rounded-full group-hover:scale-125 transition-transform duration-300" />
                  <div className="absolute top-4 left-4 w-6 h-6 bg-primary/20 rotate-45" />
                  <div className="absolute bottom-4 right-4 w-10 h-10 border border-accent/30 rounded-full" />
                  
                  {/* Profile Image */}
                  <motion.img
                    src="/lovable-uploads/5234f0cd-a5b0-4f15-a28c-4fa3d9870ea0.png"
                    alt="NUTHALAPATI VEERA VENKATA NAGA SAI"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    whileHover={{ rotate: 1 }}
                  />
                  
                  {/* Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>

              {/* Floating Elements Around Image */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-primary/30 rounded-full"
                  style={{
                    left: `${15 + i * 10}%`,
                    top: `${15 + (i % 4) * 20}%`,
                  }}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                />
              ))}
            </Card>

            {/* Additional Info Cards */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-primary/5 rounded-lg border border-primary/20"
              >
                <div className="text-2xl font-bold text-primary mb-1">🔒</div>
                <div className="text-sm text-muted-foreground">Security First</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-accent/5 rounded-lg border border-accent/20"
              >
                <div className="text-2xl font-bold text-accent mb-1">🐧</div>
                <div className="text-sm text-muted-foreground">Linux Expert</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;