import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Users, Shield, Zap } from "lucide-react";
import pradoImage from "@assets/generated_images/safari_tour_guide_with_jeep.png";

export default function Fleet() {
  const vehicles = [
    {
      id: 1,
      name: "Toyota Prado",
      type: "Safari SUV",
      capacity: "7 Passengers",
      features: ["4x4 Capability", "Excellent Ground Clearance", "Premium Comfort", "AC & Entertainment"]
    },
    {
      id: 2,
      name: "Land Cruiser V8",
      type: "Luxury SUV",
      capacity: "7 Passengers",
      features: ["Luxury Interior", "Maximum Comfort", "Superior Power", "Executive Experience"]
    },
    {
      id: 3,
      name: "Toyota Hiace",
      type: "Group Transport",
      capacity: "12+ Passengers",
      features: ["Spacious Seating", "Long Distance Ready", "Reliable", "Group Travel Specialist"]
    },
    {
      id: 4,
      name: "Hyundai 4x4",
      type: "Adventure SUV",
      capacity: "5 Passengers",
      features: ["Off-Road Ready", "Modern Tech", "Fuel Efficient", "Comfortable Ride"]
    },
    {
      id: 5,
      name: "Mercedes Vans",
      type: "Premium Transport",
      capacity: "8 Passengers",
      features: ["Executive Comfort", "Modern Amenities", "Climate Control", "Scenic Routes"]
    },
    {
      id: 6,
      name: "Mixed Fleet",
      type: "Custom Solutions",
      capacity: "All Sizes",
      features: ["Tailored Options", "Group Flexibility", "Best for Expeditions", "Combo Tours"]
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <div className="bg-primary text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Fleet</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Premium vehicles maintained to the highest standards for your comfort and safety across East Africa.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Featured Vehicle */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 overflow-hidden rounded-xl shadow-xl">
              <img 
                src={pradoImage} 
                alt="Toyota Prado" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-secondary text-primary font-bold px-4 py-2 rounded-full text-sm">
                Featured
              </div>
            </div>
            <div>
              <span className="text-secondary font-bold uppercase tracking-widest text-sm">Premium Fleet</span>
              <h2 className="text-4xl font-serif font-bold text-primary mb-4 mt-2">Toyota Prado</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Our flagship vehicle for safari expeditions. The Toyota Prado combines luxury with rugged capability, 
                featuring pristine interiors, modern air conditioning, and superior ride comfort for those seeking the perfect balance.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Users, label: "7 Passengers", color: "text-secondary" },
                  { icon: Shield, label: "Premium Safety", color: "text-secondary" },
                  { icon: Zap, label: "4x4 Capable", color: "text-secondary" },
                  { icon: CheckCircle2, label: "AC & Tech", color: "text-secondary" }
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-3">
                    <item.icon className={`${item.color}`} size={20} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground italic">Ideal for Safari tours, scenic drives, and family expeditions.</p>
            </div>
          </div>
        </div>

        {/* Vehicle Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Complete Vehicle Options</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">From intimate group journeys to large expedition expeditions, we have the perfect vehicle for your adventure.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.map((vehicle) => (
              <Card key={vehicle.id} className="border-none shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-serif font-bold text-primary mb-1">{vehicle.name}</h3>
                    <p className="text-secondary font-semibold text-sm">{vehicle.type}</p>
                  </div>
                  <div className="bg-muted/50 px-3 py-2 rounded text-sm font-medium text-center mb-4">
                    {vehicle.capacity}
                  </div>
                  <ul className="space-y-2">
                    {vehicle.features.map(feature => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 size={16} className="text-secondary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Our Fleet */}
        <div className="bg-primary/5 rounded-2xl p-10 md:p-16">
          <h2 className="text-3xl font-serif font-bold text-primary mb-8 text-center">Why Choose Our Fleet</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-secondary">
                <Shield size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Safety First</h3>
              <p className="text-muted-foreground">All vehicles are regularly maintained and inspected to the highest safety standards.</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-secondary">
                <Zap size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Modern & Reliable</h3>
              <p className="text-muted-foreground">Newer model vehicles equipped with modern technology and comfort features.</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-secondary">
                <Users size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Experienced Drivers</h3>
              <p className="text-muted-foreground">Professional, courteous drivers trained in customer service and road safety.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
