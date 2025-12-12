import Layout from "@/components/layout/Layout";
import { tours } from "@/lib/data";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Tours() {
  return (
    <Layout>
      <div className="bg-primary py-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Tour Packages</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Choose from our carefully curated selection of safaris, beach holidays, and adventure treks.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <Link key={tour.id} href={`/tours/${tour.id}`}>
              <Card className="overflow-hidden group cursor-pointer border-none shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                <div className="relative h-64 overflow-hidden shrink-0">
                  <img 
                    src={tour.image} 
                    alt={tour.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-primary font-bold px-3 py-1 rounded-full text-sm">
                    ${tour.price}
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-secondary text-sm font-semibold uppercase tracking-wider">{tour.category}</span>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar size={14} className="mr-1" />
                      {tour.duration}
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-primary mb-3 group-hover:text-secondary transition-colors">{tour.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow">{tour.description}</p>
                  <Button className="w-full group-hover:bg-primary/90">
                    View Itinerary
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
