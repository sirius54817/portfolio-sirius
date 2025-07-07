import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Terminal,
  Globe,
  Code2,
  Cpu,
  Database,
  Calendar,
  CheckCircle
} from 'lucide-react';

const timelineData = [
  {
    year: '2024-2025',
    title: 'Advanced Cybersecurity Mastery',
    icon: <Shield className="h-6 w-6" />,
    skills: ['OWASP Top 10', 'Penetration Testing', 'Vulnerability Assessment', 'Security Auditing', 'Threat Modeling', 'Risk Analysis'],
    color: 'from-red-500 to-rose-500',
    description: 'Specialized in enterprise-grade security solutions and threat detection'
  },
  {
    year: '2023-2024',
    title: 'Linux Systems Architecture',
    icon: <Terminal className="h-6 w-6" />,
    skills: ['System Administration', 'Shell Scripting', 'Server Hardening', 'Network Security', 'Process Management'],
    color: 'from-green-500 to-emerald-500',
    description: 'Built robust Linux infrastructure and automated security processes'
  },
  {
    year: '2022-2023',
    title: 'Cloud Security Implementation',
    icon: <Globe className="h-6 w-6" />,
    skills: ['Google Cloud Platform', 'Microsoft Azure', 'Cloud Architecture', 'Identity Management', 'Security Policies'],
    color: 'from-blue-500 to-cyan-500',
    description: 'Deployed secure cloud solutions and managed multi-platform environments'
  },
  {
    year: '2021-2022',
    title: 'Secure Programming Foundations',
    icon: <Code2 className="h-6 w-6" />,
    skills: ['Python Security', 'C Programming', 'Secure Coding', 'API Security', 'Code Reviews'],
    color: 'from-purple-500 to-pink-500',
    description: 'Developed security-first coding practices and vulnerability assessments'
  },
  {
    year: '2020-2021',
    title: 'Network Security Expertise',
    icon: <Cpu className="h-6 w-6" />,
    skills: ['Firewall Configuration', 'IDS/IPS', 'Network Monitoring', 'Traffic Analysis', 'Protocol Security'],
    color: 'from-yellow-500 to-orange-500',
    description: 'Established comprehensive network defense and monitoring systems'
  },
  {
    year: '2020',
    title: 'Security Tools Mastery',
    icon: <Database className="h-6 w-6" />,
    skills: ['Metasploit', 'Wireshark', 'Nmap', 'Burp Suite', 'OWASP ZAP', 'Security Scanners'],
    color: 'from-indigo-500 to-blue-500',
    description: 'Mastered industry-standard security testing and analysis tools'
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-space">
            Security & Technical <span className="text-gradient">Timeline</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey through cybersecurity and Linux systems expertise - from foundations to advanced implementations
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.title}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10 transform md:-translate-x-1/2"
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.2 }}
                />

                {/* Content Card */}
                <motion.div
                  className={`ml-20 md:ml-0 w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary group cursor-pointer">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg`} />
                    
                    {/* Header */}
                    <div className="flex items-center mb-4 relative z-10">
                      <motion.div
                        className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} text-white mr-4`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {item.icon}
                      </motion.div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="text-sm font-mono text-primary font-semibold">{item.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 relative z-10">
                      {item.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 relative z-10">
                      {item.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.3, 
                            delay: index * 0.1 + skillIndex * 0.05 
                          }}
                          whileHover={{ scale: 1.1, y: -2 }}
                        >
                          <Badge 
                            variant="secondary" 
                            className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
                          >
                            <CheckCircle className="h-3 w-3 mr-1" />
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {[
            { label: 'Security Projects', value: '15+', icon: <Shield className="h-8 w-8" /> },
            { label: 'Linux Distros', value: '5+', icon: <Terminal className="h-8 w-8" /> },
            { label: 'Cloud Platforms', value: '3+', icon: <Database className="h-8 w-8" /> },
            { label: 'Years Experience', value: '6+', icon: <Cpu className="h-8 w-8" /> }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <motion.div 
                className="inline-flex p-4 bg-primary/10 rounded-full text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                whileHover={{ rotate: 15 }}
              >
                {stat.icon}
              </motion.div>
              <div className="text-3xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
              <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;