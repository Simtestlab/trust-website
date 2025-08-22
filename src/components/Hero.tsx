import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Community empowerment and positive change"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-white">
        <div className="max-w-4xl">
          <div className="animate-fade-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
              <span className="block">Listening to</span>
              <span className="block text-accent">Needs,</span>
              <span className="block">Building</span>
              <span className="block text-accent">Futures</span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 max-w-2xl font-light leading-relaxed">
              Empowering communities through education, healthcare, and sustainable development programs that create lasting change.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="lg" className="group">
                Donate Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg" className="border-white/20 text-black hover:bg-white/10 backdrop-blur-sm">
                <Play className="w-5 h-5 mr-2" />
                Watch Our Story
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">50K+</div>
                <div className="text-white/80 text-sm md:text-base">Lives Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">127</div>
                <div className="text-white/80 text-sm md:text-base">Communities Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">15+</div>
                <div className="text-white/80 text-sm md:text-base">Years of Impact</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">98%</div>
                <div className="text-white/80 text-sm md:text-base">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;