
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Scroll to top button */}
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="lg"
            className="rounded-full w-12 h-12 p-0 hover-glow group"
          >
            <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
          </Button>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/akashsinghtkd"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover-glow transition-all duration-300"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/akash-singh-37878a146/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover-glow transition-all duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:akashonlineweb@gmail.com"
              className="p-3 rounded-full glass hover-glow transition-all duration-300"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-muted-foreground">
            <p className="flex items-center justify-center space-x-2">
              <span>© 2024 Akash Singh. Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>and lots of coffee</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
