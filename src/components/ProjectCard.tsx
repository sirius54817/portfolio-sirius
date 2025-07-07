import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';

interface Project {
  name: string;
  description?: string;
  language: string;
  url: string;
  stars?: number;
  isForked?: boolean;
  license?: string;
  topics?: string[];
  updatedAt: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const getLanguageColor = (language: string) => {
  const colors: { [key: string]: string } = {
    JavaScript: 'bg-yellow-500',
    TypeScript: 'bg-blue-500',
    Python: 'bg-green-500',
    HTML: 'bg-orange-500',
    Kotlin: 'bg-purple-500',
    Dart: 'bg-blue-400',
    EJS: 'bg-red-500',
  };
  return colors[language] || 'bg-gray-500';
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Card className="card-glow p-6 h-full flex flex-col hover-lift relative overflow-hidden">
        {/* Hover Effect Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Header */}
        <div className="flex items-start justify-between mb-4 relative z-10">
          <div className="flex items-center space-x-2">
            <motion.div
              className="p-2 bg-primary/10 rounded-lg"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Github className="h-5 w-5 text-primary" />
            </motion.div>
            <div>
              <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                {project.name.replace(/-/g, ' ').replace(/_/g, ' ')}
              </h3>
              {project.isForked && (
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <GitFork className="h-3 w-3" />
                  <span>Forked</span>
                </div>
              )}
            </div>
          </div>
          
          {project.stars && project.stars > 0 && (
            <div className="flex items-center space-x-1 text-yellow-500">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm">{project.stars}</span>
            </div>
          )}
        </div>

        {/* Description */}
        {project.description && (
          <p className="text-muted-foreground mb-4 flex-grow leading-relaxed relative z-10">
            {project.description}
          </p>
        )}

        {/* Topics */}
        {project.topics && project.topics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4 relative z-10">
            {project.topics.slice(0, 3).map((topic) => (
              <Badge key={topic} variant="secondary" className="text-xs">
                {topic}
              </Badge>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border relative z-10">
          <div className="flex items-center space-x-4">
            {/* Language */}
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${getLanguageColor(project.language)}`} />
              <span className="text-sm text-muted-foreground">{project.language}</span>
            </div>
            
            {/* Updated */}
            <span className="text-xs text-muted-foreground">
              Updated {project.updatedAt}
            </span>
          </div>

          {/* Actions */}
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="p-2 h-8 w-8 hover:bg-primary/10 hover:text-primary"
              onClick={() => window.open(project.url, '_blank')}
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* License */}
        {project.license && (
          <div className="absolute top-4 right-4 relative z-10">
            <Badge variant="outline" className="text-xs">
              {project.license}
            </Badge>
          </div>
        )}
      </Card>
    </motion.div>
  );
};

export default ProjectCard;