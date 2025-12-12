import Layout from "@/components/layout/Layout";
import { useRoute, Link } from "wouter";
import { tours } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Check, X, Clock, Users, ArrowRight } from "lucide-react";

export default function TourDetails() {
  const [, params] = useRoute("/tours/:id");
  const tourId = params?.id;
  const tour = tours.find(t => t.id === tourId) || tours[0];

  if (!tour) return <div>Tour not found</div>;

  return (
    <Layout>
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px]">
        <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-end">
          <div className="container mx-auto px-4 pb-12 text-white">
            <span className="bg-secondary text-primary font-bold px-3 py-1 text-sm rounded uppercase tracking-wider mb-4 inline-block">
              {tour.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">{tour.title}</h1>
            <div className="flex flex-wrap gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Clock className="text-secondary" />
                <span>{tour.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-secondary" />
                <span>Kenya & Tanzania</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="text-secondary" />
                <span>Small Groups</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            <section>
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">Tour Overview</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {tour.description} Experience the raw beauty of East Africa on this carefully crafted journey. 
                From the vast savannahs teeming with wildlife to the vibrant local cultures, every moment is designed 
                to leave you in awe. Our expert guides will take you off the beaten path to ensure an exclusive 
                and intimate connection with nature.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">Itinerary Highlights</h2>
              <div className="space-y-8 relative border-l-2 border-muted pl-8 ml-4">
                {[1, 2, 3].map((day) => (
                  <div key={day} className="relative">
                    <span className="absolute -left-[41px] top-0 flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-primary font-bold text-sm">
                      {day}
                    </span>
                    <h3 className="text-xl font-bold mb-2">Day {day}: Exploration & Adventure</h3>
                    <p className="text-muted-foreground">
                      Morning game drive to spot the Big 5. Lunch at a scenic picnic spot overlooking the river. 
                      Afternoon visit to a local Maasai village to learn about their traditions. 
                      Evening sundowner drinks and dinner under the stars.
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                  <Check size={20} /> What's Included
                </h3>
                <ul className="space-y-2">
                  {["All park fees & taxes", "Full board accommodation", "Professional safari guide", "4x4 Land Cruiser transport", "Airport transfers", "Bottled water"].map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-green-700">
                      <Check size={16} className="mt-0.5 shrink-0 opacity-70" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                  <X size={20} /> What's Not Included
                </h3>
                <ul className="space-y-2">
                  {["International flights", "Visas", "Travel insurance", "Tips & gratuities", "Alcoholic beverages", "Personal items"].map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-red-700">
                      <X size={16} className="mt-0.5 shrink-0 opacity-70" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
              <div className="bg-primary p-6 text-white text-center">
                <p className="text-sm opacity-80 uppercase tracking-widest mb-1">Starting From</p>
                <p className="text-4xl font-serif font-bold">${tour.price}</p>
                <p className="text-xs opacity-80 mt-1">Per Person Sharing</p>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="space-y-4">
                  <Button className="w-full h-12 text-lg font-bold bg-secondary text-primary hover:bg-secondary/90">
                    Book This Tour
                  </Button>
                  <Button variant="outline" className="w-full h-12 text-lg">
                    Download Itinerary
                  </Button>
                </div>

                <div className="pt-6 border-t border-border">
                  <h4 className="font-bold mb-4 text-center">Need Help?</h4>
                  <div className="flex flex-col gap-3">
                    <Button variant="ghost" className="justify-start gap-3 h-auto py-3">
                      <div className="bg-primary/10 p-2 rounded-full text-primary">
                        <MapPin size={20} />
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-sm">Call Us</div>
                        <div className="text-xs text-muted-foreground">+254 700 123 456</div>
                      </div>
                    </Button>
                    <Button variant="ghost" className="justify-start gap-3 h-auto py-3">
                      <div className="bg-primary/10 p-2 rounded-full text-primary">
                        <ArrowRight size={20} />
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-sm">WhatsApp Us</div>
                        <div className="text-xs text-muted-foreground">Chat with an expert</div>
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
