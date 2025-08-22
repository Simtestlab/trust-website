import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 transition-smooth">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-impact-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Sunai</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Building Futures</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-smooth">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth">
              About Us
            </a>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-smooth">
                <span>Our Programs</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border-border shadow-card">
                <DropdownMenuItem>
                  <a href="#education" className="w-full">Education</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#health" className="w-full">Health</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#empowerment" className="w-full">Empowerment</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#impact" className="text-foreground hover:text-primary transition-smooth">
              Impact Stories
            </a>
            <a href="#events" className="text-foreground hover:text-primary transition-smooth">
              Events
            </a>
            <a href="#blog" className="text-foreground hover:text-primary transition-smooth">
              Blog
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="hero" size="lg">
              Donate Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-smooth"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-up">
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-foreground hover:text-primary transition-smooth py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-primary transition-smooth py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <div className="py-2">
                <span className="text-muted-foreground text-sm font-medium">Our Programs</span>
                <div className="ml-4 mt-2 space-y-2">
                  <a href="#education" className="block text-foreground hover:text-primary transition-smooth py-1">
                    Education
                  </a>
                  <a href="#health" className="block text-foreground hover:text-primary transition-smooth py-1">
                    Health
                  </a>
                  <a href="#empowerment" className="block text-foreground hover:text-primary transition-smooth py-1">
                    Empowerment
                  </a>
                </div>
              </div>
              <a
                href="#impact"
                className="text-foreground hover:text-primary transition-smooth py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Impact Stories
              </a>
              <a
                href="#events"
                className="text-foreground hover:text-primary transition-smooth py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </a>
              <a
                href="#blog"
                className="text-foreground hover:text-primary transition-smooth py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-smooth py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-4 border-t border-border">
                <Button variant="hero" size="lg" className="w-full">
                  Donate Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;