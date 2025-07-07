import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { Button } from '@/components/ui/button';
import { Github, Filter } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    name: 'BLOCK_E_VOTING',
    description: 'Secure blockchain-based electronic voting system built with smart contracts. Features end-to-end encryption, immutable vote recording, zero-knowledge proofs for voter privacy, and comprehensive audit trails. Implements advanced cryptographic protocols to ensure election integrity and transparency while maintaining voter anonymity.',
    language: 'HTML',
    url: 'https://github.com/sirius54817/BLOCK_E_VOTING',
    updatedAt: 'Jul 4, 2025',
    topics: ['blockchain', 'voting', 'web3', 'security', 'cryptography']
  },
  {
    name: 'Dialer',
    description: 'Enterprise-grade Android dialer with advanced security features including call encryption, secure contact management, and real-time threat detection. Built with Kotlin using MVVM architecture, implements OAuth 2.0 authentication, and includes comprehensive logging for security audits.',
    language: 'Kotlin',
    url: 'https://github.com/sirius54817/-Dialer',
    license: 'GPL v3.0',
    updatedAt: 'Jul 1, 2025',
    topics: ['android', 'kotlin', 'mobile', 'security', 'encryption']
  },
  {
    name: 'E-Commerce Shop',
    description: 'Full-stack e-commerce platform with React frontend, Node.js backend, and PostgreSQL database. Features include secure payment processing with Stripe, JWT authentication, OWASP security compliance, SQL injection prevention, XSS protection, and comprehensive admin dashboard with real-time analytics.',
    language: 'JavaScript',
    url: 'https://github.com/sirius54817/shop',
    updatedAt: 'Jun 28, 2025',
    topics: ['ecommerce', 'react', 'nodejs', 'fullstack', 'security']
  },
  {
    name: 'Bus Booking System',
    description: 'College bus booking system for Kalasalingam University',
    language: 'HTML',
    url: 'https://github.com/sirius54817/bus0booking-kalasalingam',
    updatedAt: 'Apr 9, 2025',
    topics: ['booking', 'university', 'transport']
  },
  {
    name: 'Quiz Platform',
    description: 'Interactive quiz platform with real-time scoring',
    language: 'EJS',
    url: 'https://github.com/sirius54817/quiz-platform',
    updatedAt: 'Apr 9, 2025',
    topics: ['education', 'quiz', 'nodejs']
  },
  {
    name: 'LaneMate Provider',
    description: 'Service provider app for LaneMate ride-sharing platform',
    language: 'Dart',
    url: 'https://github.com/sirius54817/LaneMate_Provider',
    updatedAt: 'Apr 9, 2025',
    topics: ['flutter', 'ridesharing', 'mobile']
  },
  {
    name: 'ACHARYA_PATH',
    description: 'Educational platform for spiritual and philosophical content',
    language: 'HTML',
    url: 'https://github.com/sirius54817/ACHARYA_PATH',
    updatedAt: 'Apr 7, 2025',
    topics: ['education', 'spirituality', 'web']
  },
  {
    name: 'Charity Blockchain',
    description: 'Transparent charity platform powered by blockchain technology',
    language: 'JavaScript',
    url: 'https://github.com/sirius54817/Charity-blockchain',
    updatedAt: 'Apr 1, 2025',
    topics: ['blockchain', 'charity', 'web3']
  },
  {
    name: 'ARCH_CLEANUP',
    description: 'System cleanup utility for Arch Linux with automated maintenance',
    language: 'Python',
    url: 'https://github.com/sirius54817/ARCH_CLEANUP',
    updatedAt: 'Mar 25, 2025',
    topics: ['linux', 'system', 'automation']
  },
  {
    name: 'AES-DES Encryption Suite',
    description: 'Advanced web-based cryptographic toolkit implementing AES-256, DES, and hybrid encryption algorithms. Features secure key generation, file encryption/decryption, digital signatures with RSA, and cryptographic hash functions (SHA-256, SHA-512). Includes comprehensive security analysis and performance benchmarking tools.',
    language: 'HTML',
    url: 'https://github.com/sirius54817/AES-DES-URL',
    updatedAt: 'Mar 1, 2025',
    topics: ['cryptography', 'security', 'encryption', 'algorithms']
  },
  {
    name: 'Cyber Security Arsenal',
    description: 'Comprehensive cybersecurity toolkit featuring vulnerability scanners, penetration testing scripts, network security analyzers, and malware detection engines. Includes OWASP Top 10 security checkers, SQL injection testers, XSS vulnerability scanners, and automated security reporting systems.',
    language: 'HTML',
    url: 'https://github.com/sirius54817/Cyber-sec',
    updatedAt: 'Feb 27, 2025',
    topics: ['cybersecurity', 'tools', 'pentesting', 'owasp']
  },
  {
    name: 'Cursor Reset',
    description: 'Utility to reset Cursor AI editor configurations',
    language: 'Python',
    url: 'https://github.com/sirius54817/reset_cursor',
    stars: 1,
    updatedAt: 'Feb 24, 2025',
    topics: ['utility', 'cursor', 'development']
  },
  {
    name: 'Crypton CTF',
    description: 'Capture The Flag challenges focused on cryptography',
    language: 'Python',
    url: 'https://github.com/sirius54817/crypton_ctf',
    updatedAt: 'Feb 22, 2025',
    topics: ['ctf', 'cryptography', 'security']
  },
  {
    name: 'LaneMate Verify',
    description: 'Verification system for LaneMate ride-sharing platform',
    language: 'Dart',
    url: 'https://github.com/sirius54817/Lanemate-Verify',
    updatedAt: 'Feb 17, 2025',
    topics: ['flutter', 'verification', 'mobile']
  },
  {
    name: 'CTS System',
    description: 'Comprehensive tracking system for various applications',
    language: 'JavaScript',
    url: 'https://github.com/sirius54817/CTS',
    updatedAt: 'Feb 5, 2025',
    topics: ['tracking', 'system', 'javascript']
  },
  {
    name: 'ECUB Delivery',
    description: 'Food delivery application with real-time tracking',
    language: 'Dart',
    url: 'https://github.com/sirius54817/ECUB-Delivery',
    updatedAt: 'Jan 25, 2025',
    topics: ['delivery', 'flutter', 'food']
  },
  {
    name: 'Chat Bot Frontend',
    description: 'Modern frontend interface for AI chatbot applications',
    language: 'JavaScript',
    url: 'https://github.com/sirius54817/CHAT-BOT-FRONTEND',
    updatedAt: 'Nov 14, 2024',
    topics: ['chatbot', 'ai', 'frontend']
  },
  {
    name: 'Cyberpunk Cryptography',
    description: 'Cyberpunk-themed cryptography learning platform',
    language: 'HTML',
    url: 'https://github.com/sirius54817/Cyberpunk-crptogrphy',
    updatedAt: 'Nov 14, 2024',
    topics: ['cyberpunk', 'cryptography', 'education']
  },
  {
    name: 'Nebula URL Scanner',
    description: 'Advanced URL scanning tool for security analysis',
    language: 'HTML',
    url: 'https://github.com/sirius54817/nebula-url-sacnner',
    updatedAt: 'Nov 11, 2024',
    topics: ['security', 'scanner', 'url']
  },
  {
    name: 'HashVault',
    description: 'Enterprise-grade password management system built with TypeScript and Node.js. Features military-grade encryption (AES-256-GCM), secure password generation, multi-factor authentication, zero-knowledge architecture, and comprehensive audit logging. Implements PBKDF2 key derivation and secure session management.',
    language: 'TypeScript',
    url: 'https://github.com/sirius54817/HashVault',
    updatedAt: 'Oct 21, 2024',
    topics: ['security', 'password', 'typescript', 'encryption', 'enterprise']
  }
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState('All');
  const languages = ['All', ...Array.from(new Set(projects.map(p => p.language)))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.language === filter);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-space">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing expertise in blockchain, mobile development, 
            web applications, and cybersecurity tools.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {languages.map((lang) => (
            <Button
              key={lang}
              variant={filter === lang ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(lang)}
              className={filter === lang ? "bg-primary text-primary-foreground" : "hover:bg-primary/10"}
            >
              <Filter className="mr-2 h-4 w-4" />
              {lang}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg glow-effect"
            onClick={() => window.open('https://github.com/sirius54817', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;