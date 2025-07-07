import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { 
  Github, 
  Mail, 
  MapPin, 
  Send,
  MessageCircle,
  ExternalLink
} from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `);
    window.location.href = `mailto:sirius54817@example.com?subject=${subject}&body=${body}`;
  };

  const contactMethods = [
    {
      icon: <Github className="h-6 w-6" />,
      title: 'GitHub',
      description: 'Check out my repositories',
      action: 'View Profile',
      link: 'https://github.com/sirius54817',
      gradient: 'from-gray-500 to-gray-700'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      description: 'Send me a message',
      action: 'Send Email',
      link: 'mailto:sirius54817@example.com',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'Let\'s Connect',
      description: 'Open to collaboration',
      action: 'Get in Touch',
      link: 'https://www.linkedin.com/in/sirius-ar/',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-secondary/10">
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
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can work together 
            to create something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Get in Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to collaborate on interesting projects. Whether you're looking 
                for a full-stack developer, blockchain specialist, or mobile app developer, 
                I'd love to hear from you!
              </p>
              
              {/* Contact Information */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href="mailto:nsai54817@gmail.com" className="hover:text-primary transition-colors">
                    nsai54817@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-foreground">
                  <span className="h-4 w-4 text-primary">📱</span>
                  <span>7670814817 | 9642253613</span>
                </div>
                <div className="flex items-center space-x-3 text-foreground">
                  <span className="h-4 w-4 text-primary">🔗</span>
                  <a 
                    href="https://www.linkedin.com/in/sirius-ar/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <Card className="card-glow p-6 hover-lift group cursor-pointer"
                        onClick={() => {
                          if (method.link.startsWith('#')) {
                            document.querySelector(method.link)?.scrollIntoView({ behavior: 'smooth' });
                          } else {
                            window.open(method.link, '_blank');
                          }
                        }}>
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${method.gradient} text-white`}>
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {method.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Quick Info */}
            <motion.div
              className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center space-x-2 text-primary mb-2">
                <MapPin className="h-4 w-4" />
                <span className="font-medium">Available for Remote Work</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Currently accepting new projects and collaborations worldwide
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="card-glow p-8" id="contact-form">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background/50 border-border focus:border-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background/50 border-border focus:border-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background/50 border-border focus:border-primary resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary-glow text-primary-foreground glow-effect group"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-border text-center">
                <p className="text-sm text-muted-foreground">
                  Prefer email? Reach out directly at{' '}
                  <a 
                    href="mailto:sirius54817@example.com" 
                    className="text-primary hover:text-primary-glow transition-colors"
                  >
                    sirius54817@example.com
                  </a>
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;