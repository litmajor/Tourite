import Layout from "@/components/layout/Layout";
import { CheckCircle2 } from "lucide-react";
import guideImage from "@assets/generated_images/safari_tour_guide_with_jeep.png";

export default function About() {
  return (
    <Layout>
      <div className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full z-0" />
                <img 
                  src={guideImage} 
                  alt="Our Guide" 
                  className="rounded-2xl shadow-xl relative z-10 w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg z-20 max-w-xs hidden md:block">
                  <p className="font-serif font-bold text-primary text-xl mb-1">15+ Years</p>
                  <p className="text-sm text-muted-foreground">Of creating unforgettable African adventures.</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Our Story</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Passion for the Wild</h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Serengeti Soul Safaris was born out of a deep love for the African continent. Founded in 2010 by local guides, we set out with a simple mission: to share the magic of our home with the world while protecting it for future generations.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We believe that travel should be transformative. It’s not just about seeing animals; it’s about understanding the delicate balance of the ecosystem, meeting the people who call this land home, and finding a moment of peace in the wild.
              </p>
              
              <div className="space-y-4">
                <h3 className="font-bold text-xl font-serif">Our Values</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   {["Eco-Friendly Practices", "Supporting Local Communities", "Safety First", "Transparent Pricing"].map(val => (
                     <div key={val} className="flex items-center gap-2">
                       <CheckCircle2 size={18} className="text-secondary" />
                       <span className="font-medium">{val}</span>
                     </div>
                   ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
