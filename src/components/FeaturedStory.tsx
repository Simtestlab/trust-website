import { Button } from '@/components/ui/button';
import { Quote, ArrowRight } from 'lucide-react';

const FeaturedStory = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="scroll-reveal">
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-muted to-muted/50 rounded-2xl overflow-hidden shadow-card">
                {/* Placeholder for story image */}
                <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Quote className="w-12 h-12 text-primary" />
                    </div>
                    <p className="text-muted-foreground">Featured Story Image</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Quote */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-soft">
                <Quote className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="scroll-reveal">
            <div className="mb-6">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Impact Story
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              "Education Changed Everything for My Family"
            </h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-muted-foreground text-xl leading-relaxed mb-6">
                When 12-year-old Priya joined our education program three years ago, she could barely read. 
                Today, she's not only excelling in school but also teaching her younger siblings and neighbors.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                "Before Sunai came to our village, I thought education was only for rich families. Now I know 
                that with the right support, any child can learn and succeed. My daughter dreams of becoming 
                a doctor, and I believe she can achieve anything."
              </p>
              
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">P</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Priya's Mother</div>
                  <div className="text-muted-foreground text-sm">Rajasthan Village, India</div>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 rounded-xl p-6 mb-8">
              <h4 className="font-semibold text-foreground mb-4">Program Impact</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">300+</div>
                  <div className="text-muted-foreground text-sm">Students in Village</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">95%</div>
                  <div className="text-muted-foreground text-sm">Literacy Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">15</div>
                  <div className="text-muted-foreground text-sm">Scholarships Awarded</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">3</div>
                  <div className="text-muted-foreground text-sm">Years of Progress</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" className="group">
                Read More Stories
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg">
                Share This Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStory;