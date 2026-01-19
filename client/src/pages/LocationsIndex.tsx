import Layout from "@/components/layout/Layout";
import { getAllDestinations } from "@/lib/locations";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

export default function LocationsIndex() {
  const destinations = getAllDestinations();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-linear-to-b from-blue-900 to-blue-700" />
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src={destinations[0]?.heroImage}
            alt="Destinations"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-4 tracking-tight"
          >
            Explore Our Destinations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto text-gray-100"
          >
            Choose your next adventure from our curated collection of amazing travel destinations
          </motion.p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">
            Select a Destination
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/locations/${destination.slug}`}>
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 h-full group cursor-pointer">
                    <div className="relative h-64 overflow-hidden bg-gray-200">
                      <img
                        src={destination.heroImage}
                        alt={destination.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                      
                      {destination.featured && (
                        <div className="absolute top-4 right-4 bg-secondary text-primary px-3 py-1 rounded-full text-xs font-bold">
                          Featured
                        </div>
                      )}
                    </div>

                    <CardContent className="p-6">
                      <h3 className="font-serif text-2xl font-bold mb-2 group-hover:text-secondary transition-colors">
                        {destination.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                        {destination.description}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin className="w-4 h-4 text-secondary" />
                          <span>{destination.categories.length} regions</span>
                        </div>
                        <Button
                          variant="ghost"
                          className="text-secondary hover:text-secondary/80 p-0"
                        >
                          Explore <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {destinations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No destinations available yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Coming Soon Section */}
      {destinations.length < 3 && (
        <section className="py-16 bg-linear-to-r from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-serif font-bold mb-4"
            >
              More Destinations Coming Soon
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-700 mb-8 max-w-2xl mx-auto"
            >
              We're continuously expanding our destinations. Check back soon for Kenya, Uganda, and more amazing locations!
            </motion.p>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif font-bold mb-4"
          >
            Don't See What You're Looking For?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg mb-8 max-w-2xl mx-auto text-gray-100"
          >
            Contact us to plan a custom tour to your dream destination
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 rounded-full px-8 py-6 font-bold text-lg"
              >
                Contact Us <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
