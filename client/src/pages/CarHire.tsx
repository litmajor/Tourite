"use client";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, MapPin, DollarSign } from "lucide-react";
import { Link } from "wouter";

export default function CarHire() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const vehicles = [
    // Small Cars
    { id: 1, name: "Axio", category: "Small Cars", price: 4000, capacity: "4-5", type: "Economy", image: "/cars/axio.jfif" },
    { id: 2, name: "Fielder", category: "Small Cars", price: 4000, capacity: "4-5", type: "Economy", image: "/cars/fielder.jfif" },
    { id: 3, name: "Bodair", category: "Small Cars", price: 3500, capacity: "4-5", type: "Economy" },
    { id: 4, name: "Allion", category: "Small Cars", price: 4000, capacity: "4-5", type: "Economy", image: "/cars/allion.jfif" },
    { id: 5, name: "Premio", category: "Small Cars", price: 4000, capacity: "4-5", type: "Economy", image: "/cars/premio.jfif" },
    { id: 6, name: "Vitz", category: "Small Cars", price: 3500, capacity: "4-5", type: "Compact", image: "/cars/vitz.jfif" },
    { id: 7, name: "Demio", category: "Small Cars", price: 4000, capacity: "4-5", type: "Economy" },
    { id: 8, name: "Auris", category: "Small Cars", price: 4000, capacity: "4-5", type: "Economy" },

    // Saloon Classics
    { id: 9, name: "Crown", category: "Saloon Classics", price: 8000, capacity: "5", type: "Premium Sedan" },
    { id: 10, name: "Mark X", category: "Saloon Classics", price: 7000, capacity: "5", type: "Premium Sedan" },
    { id: 11, name: "Teana", category: "Saloon Classics", price: 6000, capacity: "5", type: "Sedan" },

    // High End
    { id: 12, name: "Prado J-120", category: "High End", price: 13000, capacity: "7", type: "Luxury SUV" },
    { id: 13, name: "Prado J-150", category: "High End", price: 15000, capacity: "7", type: "Luxury SUV" },
    { id: 14, name: "Landcruiser V8", category: "High End", price: 30000, capacity: "7", type: "Luxury SUV" },
    { id: 15, name: "Range Rover Vogue", category: "High End", price: 50000, capacity: "7", type: "Ultra Luxury SUV" },
    { id: 16, name: "Mercedes Benz C-200", category: "High End", price: 17000, capacity: "5", type: "Luxury Sedan" },
    { id: 17, name: "Mercedes Benz E-200", category: "High End", price: 25000, capacity: "5", type: "Ultra Luxury Sedan" },

    // Mini SUVs
    { id: 18, name: "Rav 4", category: "Mini SUVs", price: 8000, capacity: "5", type: "Compact SUV" },
    { id: 19, name: "Vanguard", category: "Mini SUVs", price: 8000, capacity: "5", type: "Compact SUV" },
    { id: 20, name: "X-Trail", category: "Mini SUVs", price: 8000, capacity: "5", type: "Compact SUV" },
    { id: 21, name: "CX-5", category: "Mini SUVs", price: 8000, capacity: "5", type: "Compact SUV" },
    { id: 22, name: "Outlander", category: "Mini SUVs", price: 8000, capacity: "5", type: "Compact SUV" },
    { id: 23, name: "Harrier", category: "Mini SUVs", price: 10000, capacity: "5", type: "Mid-Size SUV" },

    // Seven Seaters
    { id: 24, name: "Alphard", category: "Seven Seaters", price: 13000, capacity: "7-8", type: "Premium MPV" },
    { id: 25, name: "Voxy/Noah", category: "Seven Seaters", price: 7500, capacity: "7-8", type: "Family MPV" },
    { id: 26, name: "Wish", category: "Seven Seaters", price: 5500, capacity: "7", type: "Compact MPV" },

    // SUVs
    { id: 27, name: "Tour Cruiser", category: "SUVs", price: 30000, capacity: "8+", type: "Premium SUV" },
    { id: 28, name: "Tour Van", category: "SUVs", price: 20000, capacity: "8+", type: "Group SUV" },
    { id: 29, name: "Coastee Bus", category: "SUVs", price: 25000, capacity: "12+", type: "Coach Bus" },
    { id: 30, name: "Double Cab", category: "SUVs", price: 15000, capacity: "5-6", type: "Double Cab Pickup" },
    { id: 31, name: "Corporate 14 & 16 Seater", category: "SUVs", price: 20000, capacity: "14-16", type: "Corporate Coach" },
  ];

  const categories = ["all", ...Array.from(new Set(vehicles.map(v => v.category)))];
  const filteredVehicles = selectedCategory === "all" 
    ? vehicles 
    : vehicles.filter(v => v.category === selectedCategory);

  const priceStats = {
    min: Math.min(...vehicles.map(v => v.price)),
    max: Math.max(...vehicles.map(v => v.price)),
    avg: Math.round(vehicles.reduce((sum, v) => sum + v.price, 0) / vehicles.length)
  };

  return (
    <Layout>
      {/* Hero */}
      <div className="bg-linear-to-r from-primary to-primary/80 py-20 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Car Hire Services</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Affordable daily rates (KSH) for all vehicle types. From economy cars to luxury SUVs and group transport solutions.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Price Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="border-2 border-secondary/30">
            <CardContent className="p-6 text-center">
              <p className="text-muted-foreground mb-2">Starting From</p>
              <p className="text-3xl font-bold text-secondary">KSH {priceStats.min.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground mt-2">Daily Rate</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-primary/30">
            <CardContent className="p-6 text-center">
              <p className="text-muted-foreground mb-2">Total Fleet</p>
              <p className="text-3xl font-bold text-primary">{vehicles.length}+</p>
              <p className="text-sm text-muted-foreground mt-2">Vehicle Options</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-secondary/30">
            <CardContent className="p-6 text-center">
              <p className="text-muted-foreground mb-2">Premium Available</p>
              <p className="text-3xl font-bold text-secondary">KSH {priceStats.max.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground mt-2">Daily Rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">Browse by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-white shadow-lg"
                    : "bg-primary/10 text-primary border-2 border-primary hover:bg-primary/20"
                }`}
              >
                {category === "all" ? "All Vehicles" : category}
              </button>
            ))}
          </div>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredVehicles.map(vehicle => (
            <Card key={vehicle.id} className="border-none shadow-lg hover:shadow-xl transition-all overflow-hidden flex flex-col">
              {vehicle.image && (
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <CardHeader className={`${vehicle.image ? '' : 'bg-linear-to-r from-primary/10 to-secondary/10'} pb-4`}>
                <CardTitle className="text-lg text-primary">{vehicle.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4 grow">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">{vehicle.type}</Badge>
                  <Badge className="bg-secondary text-white">KSH {vehicle.price.toLocaleString()}</Badge>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <DollarSign size={16} className="text-secondary" />
                    <span className="font-semibold">Daily Rate (KSH)</span>
                  </div>
                  <p className="text-2xl font-bold text-primary ml-6">KSH {vehicle.price.toLocaleString()}</p>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users size={16} className="text-secondary" />
                  <span>Capacity: {vehicle.capacity} Passengers</span>
                </div>

                <div className="pt-4 border-t space-y-2">
                  <p className="text-xs font-semibold text-muted-foreground uppercase">Category</p>
                  <p className="font-medium text-primary">{vehicle.category}</p>
                </div>

                <Button className="w-full mt-4">Request Quote</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Booking Info */}
        <Card className="border-2 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle>How to Book</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex gap-4">
                <div className="bg-secondary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                <div>
                  <h3 className="font-semibold mb-1">Choose Your Vehicle</h3>
                  <p className="text-sm text-muted-foreground">Select from our wide range of vehicles based on your needs and budget.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-secondary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                <div>
                  <h3 className="font-semibold mb-1">Confirm Dates</h3>
                  <p className="text-sm text-muted-foreground">Specify your pickup date, time, and return details.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-secondary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                <div>
                  <h3 className="font-semibold mb-1">Get Quote & Book</h3>
                  <p className="text-sm text-muted-foreground">Receive instant pricing and book with just a few clicks.</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t flex gap-4">
              <Link href="/contact">
                <Button className="flex-1">Contact Us for Details</Button>
              </Link>
              <Link href="/fleet">
                <Button variant="outline" className="flex-1 border-2 border-primary text-primary">
                  View Full Fleet
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="mt-16 bg-primary/5 rounded-2xl p-10 md:p-16">
          <h2 className="text-3xl font-serif font-bold text-primary mb-8 text-center">Rates Include</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Full Insurance Coverage",
              "24/7 Roadside Assistance",
              "Free Airport Pickup",
              "Unlimited Mileage",
              "Professional Drivers (Optional)",
              "GPS Navigation System",
              "AC & Modern Amenities",
              "Regular Maintenance",
              "Fuel Options (Pay/Included)"
            ].map(item => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
