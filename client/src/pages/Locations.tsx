import Layout from "@/components/layout/Layout";
import { getDestinationBySlug } from "@/lib/locations";
import { useParams } from "wouter";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MapPin, Waves, TreePine, Building2, MapPinned, ArrowRight, ChevronLeft } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  Island: <MapPin className="w-6 h-6" />,
  Beach: <Waves className="w-6 h-6" />,
  City: <Building2 className="w-6 h-6" />,
  Nature: <TreePine className="w-6 h-6" />,
  Historical: <MapPinned className="w-6 h-6" />,
};

export default function LocationDetail() {
  const { destinationSlug } = useParams<{ destinationSlug: string }>();
  const destination = getDestinationBySlug(destinationSlug || "");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  if (!destination) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold mb-4">Destination Not Found</h1>
            <p className="text-gray-600 mb-8">Sorry, we couldn't find that destination.</p>
            <Link href="/locations">
              <Button>Back to Destinations</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const filteredCategories = selectedCategory
    ? destination.categories.filter((cat) => cat.id === selectedCategory)
    : destination.categories;

  const allLocations = filteredCategories.flatMap((cat) => cat.locations);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={destination.heroImage}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 bg-linear-to-b from-black/60 to-black/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <Link href="/locations">
              <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
                <ChevronLeft className="w-4 h-4 mr-2" /> Back to Destinations
              </Button>
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-4 tracking-tight"
          >
            Discover {destination.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto text-gray-100"
          >
            {destination.heroSubtitle}
          </motion.p>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-12 bg-linear-to-r from-secondary/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {destination.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-700 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter Section */}
      <section className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">Browse by Category</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
              className="rounded-full"
            >
              All Locations
            </Button>
            {destination.categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="rounded-full flex items-center gap-2"
              >
                {categoryIcons[category.category]}
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Grid Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredCategories.map((category) => (
            <div key={category.id} className="mb-16">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-serif font-bold mb-8 flex items-center gap-3"
              >
                {categoryIcons[category.category]}
                {category.name}
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.locations.map((location, index) => (
                  <motion.div
                    key={location.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col group">
                      <div className="relative h-48 overflow-hidden bg-gray-200">
                        <img
                          src={location.image}
                          alt={location.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <Badge className="absolute top-3 right-3 bg-secondary text-primary">
                          {location.type}
                        </Badge>
                      </div>

                      <CardContent className="flex-1 flex flex-col justify-between p-4">
                        <div>
                          <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-secondary transition-colors">
                            {location.name}
                          </h3>
                          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                            {location.region}
                          </p>
                          <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                            {location.description}
                          </p>

                          {/* Highlights */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {location.highlights.slice(0, 3).map((highlight) => (
                              <Badge key={highlight} variant="outline" className="text-xs">
                                {highlight}
                              </Badge>
                            ))}
                            {location.highlights.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{location.highlights.length - 3}
                              </Badge>
                            )}
                          </div>
                        </div>

                        {/* Activity and Cost */}
                        {location.activity && (
                          <div className="mb-3 p-2 bg-blue-50 rounded-md border border-blue-200">
                            <p className="text-xs font-semibold text-blue-900">
                              {location.activity}
                            </p>
                            {location.estimatedCost && (
                              <p className="text-xs text-blue-700">{location.estimatedCost}</p>
                            )}
                          </div>
                        )}

                        {/* Tours Count */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                          <span className="text-xs text-gray-600 font-medium">
                            {location.relatedTours.length} tours available
                          </span>
                          <Link href="/tours">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="text-secondary hover:text-secondary/80"
                            >
                              Explore <ArrowRight className="w-3 h-3 ml-1" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Activities Showcase Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">Popular Activities</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {allLocations
              .filter((loc) => loc.activity)
              .slice(0, 6)
              .map((location) => (
                <motion.div
                  key={location.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-6 h-6 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2">{location.activity}</h3>
                        <p className="text-sm text-gray-600 mb-3">{location.description}</p>
                        <div className="flex items-center justify-between">
                          {location.estimatedCost && (
                            <span className="text-xs font-semibold text-secondary">
                              {location.estimatedCost}
                            </span>
                          )}
                          {location.estimatedDuration && (
                            <span className="text-xs text-gray-600">
                              {location.estimatedDuration}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif font-bold mb-4"
          >
            Ready to Explore?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg mb-8 max-w-2xl mx-auto text-gray-100"
          >
            Browse our curated tour packages and start planning your {destination.name} adventure today
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/tours">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 rounded-full px-8 py-6 font-bold text-lg"
              >
                View Tour Packages <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
