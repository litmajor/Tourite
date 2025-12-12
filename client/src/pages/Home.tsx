import Layout from "@/components/layout/Layout";
import { tours, testimonials } from "@/lib/data";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, MapPin, Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/african_savanna_with_elephants_at_golden_hour.png";

export default function Home() {
  const featuredTours = tours.filter(t => t.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="African Savanna" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight drop-shadow-lg"
          >
            Escape to Your <span className="text-secondary italic">Paradise</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 font-light text-gray-100 drop-shadow-md"
          >
            Experience untamed wilderness, pristine beaches, and authentic cultures with our premium curated safaris.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/tours">
              <Button size="lg" className="text-lg px-8 py-6 rounded-full bg-secondary hover:bg-secondary/90 text-primary font-bold shadow-xl border-none">
                Explore Packages
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-2 border-white text-white hover:bg-white/20 backdrop-blur-sm shadow-xl">
                Plan Your Trip
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Your Best Options</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Featured Travel Packages</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/tours/${tour.id}`}>
                  <Card className="overflow-hidden group cursor-pointer border-none shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={tour.image} 
                        alt={tour.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-primary font-bold px-3 py-1 rounded-full text-sm">
                        ${tour.price}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-secondary text-sm font-semibold uppercase tracking-wider">{tour.category}</span>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar size={14} className="mr-1" />
                          {tour.duration}
                        </div>
                      </div>
                      <h3 className="text-xl font-serif font-bold text-primary mb-3 group-hover:text-secondary transition-colors">{tour.title}</h3>
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{tour.description}</p>
                      <div className="flex items-center text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
                        View Details <ArrowRight size={16} className="ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
             <Link href="/tours">
               <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                 View All Packages
               </Button>
             </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        {/* Abstract pattern overlay could go here */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Why Choose TOURITE</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">We Make Your Dreams Reality</h2>
              <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
                TOURITE COMFORT is committed to providing unforgettable travel experiences with the best hotels, great restaurants, efficient bus access, and expertly organized expeditions. Your satisfaction is our guarantee.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Best Hotel Partnerships",
                  "Great Restaurant Access",
                  "Reliable Bus Service",
                  "Expert Expeditions",
                  "24/7 Customer Care",
                  "Special Discounts Available"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-secondary/20 p-2 rounded-full text-secondary">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/20 rounded-2xl transform translate-x-4 translate-y-4" />
              <img 
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop" 
                alt="Safari Guide" 
                className="rounded-2xl shadow-2xl relative z-10 w-full object-cover h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-serif font-bold text-primary mb-4">Guest Reviews</h2>
             <p className="text-muted-foreground max-w-2xl mx-auto">Discover what travelers love about their TOURITE COMFORT experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <Card key={t.id} className="border-none shadow-md bg-white">
                <CardContent className="p-8">
                  <div className="flex gap-1 text-secondary mb-4">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-foreground/80 italic mb-6">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                      {t.name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-primary">{t.name}</h4>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold text-primary mb-6">Ready to Start Your Adventure?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Contact our travel experts today to begin planning your dream safari itinerary tailored specifically to your preferences.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 h-14 rounded-full text-lg shadow-lg">
              Get a Free Quote
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
