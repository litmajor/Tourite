import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Users, Shield, Zap, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import pradoImage from "@assets/WhatsApp_Image_2025-12-12_at_20.54.09_(1)_1765562544348.jpeg";
import vehicle1 from "@assets/WhatsApp_Image_2026-01-14_at_13.54.57.jpeg";
import vehicle2 from "@assets/WhatsApp_Image_2026-01-14_at_13.55.00.jpeg";
import vehicle3 from "@assets/WhatsApp_Image_2026-01-14_at_13.55.01.jpeg";
import vehicle4 from "@assets/WhatsApp_Image_2026-01-14_at_13.55.02.jpeg";

export default function Fleet() {
  const vehicles = [
    // Luxury & Safari Vehicles
    {
      id: 1,
      name: "Toyota Prado J-120",
      type: "Safari SUV",
      capacity: "7 Passengers",
      daily_rate: 13000,
      category: "High End",
      featured: true,
      features: ["4x4 Capability", "Excellent Ground Clearance", "Premium Comfort", "AC & Entertainment"]
    },
    {
      id: 2,
      name: "Toyota Prado J-150",
      type: "Luxury SUV",
      capacity: "7 Passengers",
      daily_rate: 15000,
      category: "High End",
      featured: true,
      features: ["Luxury Interior", "Maximum Comfort", "Superior Power", "Executive Experience"]
    },
    {
      id: 3,
      name: "Land Cruiser V8",
      type: "Luxury SUV",
      capacity: "7 Passengers",
      daily_rate: 30000,
      category: "High End",
      features: ["Ultimate Luxury", "Powerful Engine", "Premium Interior", "Advanced Safety"]
    },
    {
      id: 4,
      name: "Range Rover Vogue",
      type: "Ultra Luxury SUV",
      capacity: "7 Passengers",
      daily_rate: 50000,
      category: "High End",
      features: ["Ultra Premium", "State-of-the-Art Tech", "Executive Comfort", "VIP Experience"]
    },
    {
      id: 5,
      name: "Mercedes Benz C-200",
      type: "Luxury Sedan",
      capacity: "5 Passengers",
      daily_rate: 17000,
      category: "High End",
      features: ["German Engineering", "Luxury Interior", "Modern Tech", "Premium Ride"]
    },
    {
      id: 6,
      name: "Mercedes Benz E-200",
      type: "Ultra Luxury Sedan",
      capacity: "5 Passengers",
      daily_rate: 25000,
      category: "High End",
      features: ["Flagship Luxury", "Advanced Features", "Perfect Comfort", "Executive Travel"]
    },

    // Group Transport
    {
      id: 7,
      name: "Toyota Hiace",
      type: "Group Transport",
      capacity: "12+ Passengers",
      daily_rate: 25000,
      category: "SUVs",
      features: ["Spacious Seating", "Long Distance Ready", "Reliable", "Group Travel Specialist"]
    },
    {
      id: 8,
      name: "Tour Cruiser",
      type: "Premium Coach",
      capacity: "8+ Passengers",
      daily_rate: 30000,
      category: "SUVs",
      features: ["Premium Comfort", "Climate Control", "Entertainment System", "Ideal for Tours"]
    },
    {
      id: 9,
      name: "Tour Van",
      type: "Group SUV",
      capacity: "8+ Passengers",
      daily_rate: 20000,
      category: "SUVs",
      features: ["Spacious Interior", "Modern Amenities", "Comfortable Seating", "Group Ready"]
    },
    {
      id: 10,
      name: "Coastee Bus",
      type: "Coach Bus",
      capacity: "12+ Passengers",
      daily_rate: 25000,
      category: "SUVs",
      features: ["Large Capacity", "Long-Distance Comfort", "Professional Transport", "Tour Optimized"]
    },
    {
      id: 11,
      name: "Corporate 14 & 16 Seater",
      type: "Corporate Coach",
      capacity: "14-16 Passengers",
      daily_rate: 20000,
      category: "SUVs",
      features: ["Executive Transport", "Conference Ready", "Professional Setup", "Group Events"]
    },

    // Mid-Range SUVs
    {
      id: 12,
      name: "Rav 4",
      type: "Compact SUV",
      capacity: "5 Passengers",
      daily_rate: 8000,
      category: "Mini SUVs",
      features: ["Reliable", "Fuel Efficient", "Modern Features", "Comfortable"]
    },
    {
      id: 13,
      name: "Vanguard",
      type: "Compact SUV",
      capacity: "5 Passengers",
      daily_rate: 8000,
      category: "Mini SUVs",
      features: ["Family-Friendly", "Good Clearance", "Tech Features", "Daily Driver"]
    },
    {
      id: 14,
      name: "X-Trail",
      type: "Compact SUV",
      capacity: "5 Passengers",
      daily_rate: 8000,
      category: "Mini SUVs",
      features: ["Spacious", "All-Terrain Capable", "Modern Interior", "Smooth Ride"]
    },
    {
      id: 15,
      name: "CX-5",
      type: "Compact SUV",
      capacity: "5 Passengers",
      daily_rate: 8000,
      category: "Mini SUVs",
      features: ["Stylish Design", "Smooth Handling", "Comfortable", "Tech Enabled"]
    },
    {
      id: 16,
      name: "Outlander",
      type: "Compact SUV",
      capacity: "5 Passengers",
      daily_rate: 8000,
      category: "Mini SUVs",
      features: ["Adventure Ready", "Good Performance", "Modern Features", "Daily Rental"]
    },
    {
      id: 17,
      name: "Harrier",
      type: "Mid-Size SUV",
      capacity: "5 Passengers",
      daily_rate: 10000,
      category: "Mini SUVs",
      features: ["Premium Compact", "Upscale Interior", "Advanced Tech", "Smooth Ride"]
    },

    // Sedans
    {
      id: 18,
      name: "Toyota Crown",
      type: "Premium Sedan",
      capacity: "5 Passengers",
      daily_rate: 8000,
      category: "Saloon Classics",
      features: ["Luxury Feel", "Smooth Ride", "Modern Tech", "Executive Travel"]
    },
    {
      id: 19,
      name: "Toyota Mark X",
      type: "Premium Sedan",
      capacity: "5 Passengers",
      daily_rate: 7000,
      category: "Saloon Classics",
      features: ["Sports-Luxury", "Powerful Engine", "Premium Interior", "Dynamic Handling"]
    },
    {
      id: 20,
      name: "Nissan Teana",
      type: "Sedan",
      capacity: "5 Passengers",
      daily_rate: 6000,
      category: "Saloon Classics",
      features: ["Comfortable", "Fuel Efficient", "Reliable", "Daily Driver"]
    },

    // MPVs
    {
      id: 21,
      name: "Alphard",
      type: "Premium MPV",
      capacity: "7-8 Passengers",
      daily_rate: 13000,
      category: "Seven Seaters",
      features: ["Premium Family", "Spacious Luxury", "Advanced Tech", "VIP Transport"]
    },
    {
      id: 22,
      name: "Voxy/Noah",
      type: "Family MPV",
      capacity: "7-8 Passengers",
      daily_rate: 7500,
      category: "Seven Seaters",
      features: ["Family Friendly", "Spacious", "Reliable", "Comfortable"]
    },
    {
      id: 23,
      name: "Wish",
      type: "Compact MPV",
      capacity: "7 Passengers",
      daily_rate: 5500,
      category: "Seven Seaters",
      features: ["Practical", "Good Capacity", "Budget-Friendly", "City Friendly"]
    },

    // Economy Cars
    {
      id: 24,
      name: "Toyota Axio",
      type: "Economy Car",
      capacity: "4-5 Passengers",
      daily_rate: 4000,
      category: "Small Cars",
      features: ["Affordable", "Fuel Efficient", "Reliable", "Daily Rental"]
    },
    {
      id: 25,
      name: "Toyota Fielder",
      type: "Economy Car",
      capacity: "4-5 Passengers",
      daily_rate: 4000,
      category: "Small Cars",
      features: ["Budget-Friendly", "Practical", "Good Storage", "Comfortable"]
    },
    {
      id: 26,
      name: "Toyota Allion",
      type: "Economy Car",
      capacity: "4-5 Passengers",
      daily_rate: 4000,
      category: "Small Cars",
      features: ["Affordable", "Modern Features", "Reliable", "City Car"]
    },
    {
      id: 27,
      name: "Toyota Premio",
      type: "Economy Car",
      capacity: "4-5 Passengers",
      daily_rate: 4000,
      category: "Small Cars",
      features: ["Budget Option", "Well-Maintained", "Comfortable", "Rental Ready"]
    },
    {
      id: 28,
      name: "Toyota Demio",
      type: "Compact Car",
      capacity: "4-5 Passengers",
      daily_rate: 4000,
      category: "Small Cars",
      features: ["Compact", "Agile", "Easy Parking", "City Driving"]
    },
    {
      id: 29,
      name: "Toyota Auris",
      type: "Economy Car",
      capacity: "4-5 Passengers",
      daily_rate: 4000,
      category: "Small Cars",
      features: ["Modern Compact", "Good Features", "Reliable", "Daily Driver"]
    },
    {
      id: 30,
      name: "Toyota Vitz",
      type: "Compact Car",
      capacity: "4-5 Passengers",
      daily_rate: 3500,
      category: "Small Cars",
      features: ["Smallest Option", "Best for Solo", "Very Fuel Efficient", "Budget Best"]
    },
    {
      id: 31,
      name: "Toyota Bodair",
      type: "Economy Car",
      capacity: "4-5 Passengers",
      daily_rate: 3500,
      category: "Small Cars",
      features: ["Budget Friendly", "Practical", "Reliable", "Affordable"]
    },

    // Double Cab
    {
      id: 32,
      name: "Double Cab",
      type: "Double Cab Pickup",
      capacity: "5-6 Passengers",
      daily_rate: 15000,
      category: "SUVs",
      features: ["Versatile", "Off-Road Capable", "Open Back", "Adventure Ready"]
    },

    // High-End Images Shown
    {
      id: 33,
      name: "Premium Safari Vehicle",
      type: "Luxury Explorer",
      capacity: "6 Passengers",
      image: vehicle1,
      daily_rate: 18000,
      category: "High End",
      description: "Experience ultimate comfort with our premium safari vehicle. Equipped with panoramic windows, premium seating, and advanced climate control for extended safari expeditions.",
      features: ["Panoramic Windows", "Premium Comfort Seating", "Advanced AC System", "Excellent Visibility"]
    },
    {
      id: 34,
      name: "Executive Transport",
      type: "Corporate Vehicle",
      capacity: "7 Passengers",
      image: vehicle2,
      daily_rate: 20000,
      category: "High End",
      description: "Perfect for business travelers and VIP tours. Features luxury interiors, smooth ride quality, and modern technology for professional travel experiences.",
      features: ["Luxury Interior", "Smooth Suspension", "Modern Tech", "Professional Service"]
    },
    {
      id: 35,
      name: "Adventure Explorer",
      type: "Off-Road Vehicle",
      capacity: "5 Passengers",
      image: vehicle3,
      daily_rate: 16000,
      category: "High End",
      description: "Built for challenging terrain and exciting adventures. High ground clearance and robust construction ensure safe exploration in remote destinations.",
      features: ["High Ground Clearance", "Rugged Build", "Off-Road Capable", "Adventure Ready"]
    },
    {
      id: 36,
      name: "Deluxe Safari Tour",
      type: "Expedition Vehicle",
      capacity: "8 Passengers",
      image: vehicle4,
      daily_rate: 22000,
      category: "High End",
      description: "Our latest addition for comprehensive safari experiences. Combines spacious seating with premium amenities for unforgettable wildlife viewing adventures.",
      features: ["Spacious Interior", "Premium Amenities", "Wildlife Viewing Optimized", "All-Weather Capable"]
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <div className="bg-linear-to-r from-primary to-primary/80 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Fleet</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Premium vehicles maintained to the highest standards. From budget-friendly daily rentals to luxury safari expeditions.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/fleet">
              <Badge className="bg-secondary text-primary px-4 py-2 text-sm cursor-pointer hover:bg-secondary/90">
                {vehicles.length}+ Vehicles Available
              </Badge>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Car Hire Info Section */}
        <div className="mb-20 bg-primary/5 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">Need a Car Hire?</h2>
              <p className="text-muted-foreground mb-6 max-w-xl">
                Browse all available vehicles with daily rates, compare options, and get instant quotes. 
                Whether you need an economy car or a luxury SUV, we have the perfect vehicle for your needs.
              </p>
              <Link href="/car-hire">
                <Button className="gap-2">
                  <DollarSign size={18} />
                  View Car Hire Prices & Availability
                </Button>
              </Link>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <p className="text-sm text-muted-foreground mb-2">From</p>
              <p className="text-3xl font-bold text-secondary">KSH 3,500</p>
              <p className="text-xs text-muted-foreground">Daily Rate</p>
            </div>
          </div>
        </div>

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
              <h2 className="text-4xl font-serif font-bold text-primary mb-4 mt-2">Toyota Prado J-120</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Our flagship vehicle for safari expeditions. The Toyota Prado combines luxury with rugged capability, 
                featuring pristine interiors, modern air conditioning, and superior ride comfort for those seeking the perfect balance.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Users, label: "7 Passengers", color: "text-secondary" },
                  { icon: Shield, label: "Premium Safety", color: "text-secondary" },
                  { icon: Zap, label: "4x4 Capable", color: "text-secondary" },
                  { icon: DollarSign, label: "KSH 13,000/Day", color: "text-secondary" }
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-3">
                    <item.icon className={`${item.color}`} size={20} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground italic mb-6">Ideal for Safari tours, scenic drives, and family expeditions.</p>
              <Link href="/car-hire">
                <Button>View All Pricing</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Vehicle Grid - High End First */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Premium & Luxury Vehicles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Our high-end collection for executive travel and luxury experiences.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.filter(v => v.category === "High End").slice(0, 6).map((vehicle) => (
              <Card key={vehicle.id} className="border-none shadow-lg hover:shadow-xl transition-all overflow-hidden">
                {vehicle.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-primary mb-1">{vehicle.name}</h3>
                      <p className="text-secondary font-semibold text-sm">{vehicle.type}</p>
                    </div>
                    {vehicle.daily_rate && (
                      <Badge className="bg-secondary text-primary">KSH {(vehicle.daily_rate / 1000).toFixed(0)}k</Badge>
                    )}
                  </div>
                  {vehicle.description && (
                    <p className="text-muted-foreground text-sm mb-4">{vehicle.description}</p>
                  )}
                  <div className="bg-muted/50 px-3 py-2 rounded text-sm font-medium text-center mb-4">
                    {vehicle.capacity}
                  </div>
                  <ul className="space-y-2">
                    {vehicle.features.slice(0, 3).map(feature => (
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

        {/* All Vehicles Summary */}
        <div className="mb-16 bg-primary/5 rounded-2xl p-10">
          <h2 className="text-2xl font-serif font-bold text-primary mb-8 text-center">Complete Vehicle Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {["Small Cars", "Saloon Classics", "Mini SUVs", "Seven Seaters", "SUVs", "High End"].map(category => {
              const count = vehicles.filter(v => v.category === category).length;
              return (
                <Card key={category} className="border-2 border-primary/20 hover:border-primary transition-colors">
                  <CardContent className="p-6 text-center">
                    <p className="text-2xl font-bold text-secondary mb-2">{count}+</p>
                    <p className="font-semibold text-primary text-sm">{category}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary rounded-2xl p-10 md:p-16 text-white text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Ready to Book a Vehicle?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Browse all {vehicles.length}+ vehicles with pricing, book online, or contact us for custom packages and group discounts.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/car-hire">
              <Button className="bg-secondary text-primary hover:bg-secondary/90 px-8">
                View Car Hire Catalog
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8">
                Contact for Custom Quote
              </Button>
            </Link>
          </div>
        </div>

        {/* Why Our Fleet */}
        <div className="mt-16 bg-primary/5 rounded-2xl p-10 md:p-16">
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
              <h3 className="font-bold text-lg mb-2">Expert Drivers</h3>
              <p className="text-muted-foreground">Professional, courteous drivers trained in customer service and road safety.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
