import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, ArrowRight, MapPin } from 'lucide-react';

const newsItems = [
  {
    type: 'news',
    title: 'New Education Center Opens in Rural Maharashtra',
    excerpt: 'Our latest education facility will serve 500+ children in underserved communities, featuring modern classrooms and digital learning tools.',
    date: 'March 15, 2025',
    readTime: '3 min read',
    category: 'Education'
  },
  {
    type: 'event',
    title: 'Annual Fundraising Gala - Building Dreams Together',
    excerpt: 'Join us for an evening of inspiration, impact stories, and community building as we raise funds for our 2025 programs.',
    date: 'April 8, 2025',
    location: 'Mumbai Convention Center',
    category: 'Event'
  },
  {
    type: 'news',
    title: 'Healthcare Initiative Reaches 10,000 Milestone',
    excerpt: 'Our mobile healthcare units have now provided essential medical services to over 10,000 individuals across remote villages.',
    date: 'March 10, 2025',
    readTime: '4 min read',
    category: 'Health'
  }
];

const NewsPreview = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Latest News & Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with our latest initiatives, success stories, and upcoming events.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <Card key={index} className="hover-lift scroll-reveal border-0 shadow-card">
              <CardContent className="p-0">
                {/* Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      {item.type === 'event' ? (
                        <Calendar className="w-6 h-6 text-primary" />
                      ) : (
                        <ArrowRight className="w-6 h-6 text-primary" />
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm">{item.category}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {item.category}
                    </span>
                    {item.type === 'event' && (
                      <span className="inline-block px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                        Event
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3 leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {item.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                    {item.readTime && (
                      <span>{item.readTime}</span>
                    )}
                    {item.location && (
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span className="truncate max-w-[120px]">{item.location}</span>
                      </div>
                    )}
                  </div>

                  <Button variant="ghost" className="w-full justify-between group p-0 h-auto font-medium">
                    {item.type === 'event' ? 'Learn More' : 'Read Article'}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center scroll-reveal">
          <Button variant="outline" size="lg" className="group">
            View All News & Events
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsPreview;