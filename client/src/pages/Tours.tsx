"use client";
import { useState, useMemo } from "react";
import Layout from "@/components/layout/Layout";
import { tours } from "@/lib/data";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Sliders, X, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Tours() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [showFilters, setShowFilters] = useState(false);

  // Extract unique values for filters
  const categories = useMemo(() => [...new Set(tours.map(t => t.category))], []);
  const locations = useMemo(() => [...new Set(tours.map(t => t.location))], []);
  const maxPrice = useMemo(() => Math.max(...tours.map(t => t.price)), []);

  // Filter tours based on selected filters
  const filteredTours = useMemo(() => {
    return tours.filter(tour => {
      const matchesCategory = !selectedCategory || tour.category === selectedCategory;
      const matchesLocation = !selectedLocation || tour.location === selectedLocation;
      const matchesPrice = tour.price >= priceRange[0] && tour.price <= priceRange[1];
      return matchesCategory && matchesLocation && matchesPrice;
    });
  }, [selectedCategory, selectedLocation, priceRange]);

  const resetFilters = () => {
    setSelectedCategory(null);
    setSelectedLocation(null);
    setPriceRange([0, maxPrice]);
  };

  const activeFiltersCount = (selectedCategory ? 1 : 0) + (selectedLocation ? 1 : 0) + 
    (priceRange[0] > 0 || priceRange[1] < maxPrice ? 1 : 0);

  return (
    <Layout>
      <div className="bg-linear-to-r from-primary to-primary/80 py-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Tour Packages</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Choose from our carefully curated selection of safaris, beach holidays, and adventure treks.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Filters Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-serif font-bold text-primary">Tours ({filteredTours.length})</h2>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
            >
              <Sliders size={18} />
              Filters
              {activeFiltersCount > 0 && (
                <Badge className="ml-2 bg-secondary text-white">{activeFiltersCount}</Badge>
              )}
            </button>
          </div>

          {showFilters && (
            <Card className="p-6 border-2 border-primary/20 bg-primary/5">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Category Filter */}
                <div>
                  <h3 className="font-semibold text-primary mb-3">Category</h3>
                  <div className="space-y-2">
                    {categories.map(cat => (
                      <label key={cat} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedCategory === cat}
                          onChange={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                          className="w-4 h-4 rounded border-primary accent-primary"
                        />
                        <span className="text-sm">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Location Filter */}
                <div>
                  <h3 className="font-semibold text-primary mb-3">Location</h3>
                  <div className="space-y-2">
                    {locations.map(loc => (
                      <label key={loc} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedLocation === loc}
                          onChange={() => setSelectedLocation(selectedLocation === loc ? null : loc)}
                          className="w-4 h-4 rounded border-primary accent-primary"
                        />
                        <span className="text-sm">{loc}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div>
                  <h3 className="font-semibold text-primary mb-3">Price Range</h3>
                  <div className="space-y-3">
                    <div>
                      <label htmlFor="min-price" className="text-sm text-muted-foreground">Min: ${priceRange[0]}</label>
                      <input
                        id="min-price"
                        type="range"
                        min="0"
                        max={maxPrice}
                        value={priceRange[0]}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          if (val <= priceRange[1]) setPriceRange([val, priceRange[1]]);
                        }}
                        className="w-full accent-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="max-price" className="text-sm text-muted-foreground">Max: ${priceRange[1]}</label>
                      <input
                        id="max-price"
                        type="range"
                        min="0"
                        max={maxPrice}
                        value={priceRange[1]}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          if (val >= priceRange[0]) setPriceRange([priceRange[0], val]);
                        }}
                        className="w-full accent-primary"
                      />
                    </div>
                  </div>
                </div>

                {/* Reset Button */}
                <div className="flex items-end">
                  {activeFiltersCount > 0 && (
                    <Button
                      onClick={resetFilters}
                      variant="outline"
                      className="w-full border-2 border-secondary text-secondary hover:bg-secondary/10"
                    >
                      <X size={16} className="mr-2" />
                      Reset Filters
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          )}
        </div>

        {/* Tours Grid */}
        {filteredTours.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <div key={tour.id} className="flex flex-col gap-2">
                <Link href={`/tours/${tour.id}`}>
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
                    <CardContent className="p-6 flex flex-col grow">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-secondary text-sm font-semibold uppercase tracking-wider">{tour.category}</span>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar size={14} className="mr-1" />
                          {tour.duration}
                        </div>
                      </div>
                      <h3 className="text-xl font-serif font-bold text-primary mb-3 group-hover:text-secondary transition-colors">{tour.title}</h3>
                      <p className="text-muted-foreground text-sm mb-6 grow">{tour.description}</p>
                      <Button className="w-full group-hover:bg-primary/90">
                        View Itinerary
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
                <Link href={`/tours/compare/${tour.id}`}>
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-secondary text-secondary hover:bg-secondary/10"
                  >
                    <Scale size={16} className="mr-2" />
                    Compare
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground mb-4">No tours found matching your filters.</p>
            <Button onClick={resetFilters} variant="outline">
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
}
