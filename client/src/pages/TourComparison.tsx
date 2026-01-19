"use client";
import { useParams, useRoute } from "wouter";
import Layout from "@/components/layout/Layout";
import { tours } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function TourComparison() {
  const params = useParams();
  const tourId = params?.tourId as string;
  
  const [comparisonTourId, setComparisonTourId] = useState<string | null>(null);

  const baseTour = tours.find(t => t.id === tourId);
  const comparisonTour = comparisonTourId ? tours.find(t => t.id === comparisonTourId) : null;

  if (!baseTour) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-serif font-bold text-primary mb-4">Tour Not Found</h1>
          <p className="text-muted-foreground mb-8">The tour you're looking for doesn't exist.</p>
          <Link href="/tours">
            <Button>
              <ArrowLeft size={16} className="mr-2" />
              Back to Tours
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const comparisonTours = tours.filter(t => t.id !== tourId);

  return (
    <Layout>
      {/* Header */}
      <div className="bg-linear-to-r from-primary to-primary/80 py-12 text-white">
        <div className="container mx-auto px-4">
          <Link href="/tours">
            <Button variant="ghost" className="text-white hover:text-white/80 mb-4">
              <ArrowLeft size={16} className="mr-2" />
              Back to Tours
            </Button>
          </Link>
          <h1 className="text-4xl font-serif font-bold">Compare Tours</h1>
          <p className="text-lg opacity-90 mt-2">Choose another tour to compare side-by-side</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Base Tour Selection */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">Base Tour</h2>
          <Card className="border-2 border-secondary/30 bg-secondary/5">
            <CardHeader>
              <CardTitle className="text-xl">{baseTour.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Category</p>
                  <p className="font-semibold text-lg">{baseTour.category}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-semibold text-lg">{baseTour.location}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-semibold text-lg">{baseTour.duration}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Price</p>
                  <p className="font-semibold text-lg text-secondary">${baseTour.price}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Comparison Tour Selection */}
        {!comparisonTour ? (
          <div>
            <h2 className="text-2xl font-serif font-bold text-primary mb-6">Select Tour to Compare</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {comparisonTours.map(tour => (
                <Card key={tour.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border-2 border-transparent hover:border-primary">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={tour.image} 
                      alt={tour.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-primary mb-2 line-clamp-2">{tour.title}</h3>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-semibold text-secondary uppercase">{tour.category}</span>
                      <Badge variant="outline">${tour.price}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{tour.location} • {tour.duration}</p>
                    <Button 
                      onClick={() => setComparisonTourId(tour.id)}
                      className="w-full"
                    >
                      Compare with This Tour
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <div>
            {/* Comparison View */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-serif font-bold text-primary">Comparison</h2>
              <Button 
                onClick={() => setComparisonTourId(null)}
                variant="outline"
                className="border-2 border-primary text-primary"
              >
                Change Comparison Tour
              </Button>
            </div>

            {/* Comparison Table */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Base Tour Column */}
              <Card className="border-2 border-secondary/30">
                <CardHeader className="bg-secondary/10">
                  <CardTitle>{baseTour.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <ComparisonRow label="Category" value={baseTour.category} />
                  <ComparisonRow label="Location" value={baseTour.location} />
                  <ComparisonRow label="Duration" value={baseTour.duration} />
                  <ComparisonRow label="Price" value={`$${baseTour.price}`} highlight="secondary" />
                  <ComparisonRow label="Meal Plan" value={baseTour.mealPlan || 'N/A'} />
                  <ComparisonRow label="Featured" value={baseTour.featured ? "Yes" : "No"} />
                  <div className="pt-4 border-t">
                    <p className="text-sm font-semibold mb-2">Description</p>
                    <p className="text-sm text-muted-foreground">{baseTour.description}</p>
                  </div>
                  <Link href={`/tours/${baseTour.id}`}>
                    <Button className="w-full mt-4">View Full Details</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Comparison Tour Column */}
              <Card className="border-2 border-primary/30">
                <CardHeader className="bg-primary/10">
                  <CardTitle>{comparisonTour.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <ComparisonRow label="Category" value={comparisonTour.category} />
                  <ComparisonRow label="Location" value={comparisonTour.location} />
                  <ComparisonRow label="Duration" value={comparisonTour.duration} />
                  <ComparisonRow label="Price" value={`$${comparisonTour.price}`} highlight="secondary" />
                  <ComparisonRow label="Meal Plan" value={comparisonTour.mealPlan || 'N/A'} />
                  <ComparisonRow label="Featured" value={comparisonTour.featured ? "Yes" : "No"} />
                  <div className="pt-4 border-t">
                    <p className="text-sm font-semibold mb-2">Description</p>
                    <p className="text-sm text-muted-foreground">{comparisonTour.description}</p>
                  </div>
                  <Link href={`/tours/${comparisonTour.id}`}>
                    <Button className="w-full mt-4">View Full Details</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Price Difference Analysis */}
            <Card className="mt-8 border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg">Price Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground">{baseTour.title}</p>
                    <p className="text-2xl font-bold text-secondary">${baseTour.price}</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2">Price Difference</p>
                      <p className={`text-2xl font-bold ${comparisonTour.price > baseTour.price ? 'text-red-500' : 'text-green-500'}`}>
                        {comparisonTour.price > baseTour.price ? '+' : ''} ${Math.abs(comparisonTour.price - baseTour.price)}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {((Math.abs(comparisonTour.price - baseTour.price) / baseTour.price) * 100).toFixed(1)}%
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">{comparisonTour.title}</p>
                    <p className="text-2xl font-bold text-secondary">${comparisonTour.price}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </Layout>
  );
}

// Helper component for comparison rows
function ComparisonRow({ 
  label, 
  value, 
  highlight 
}: { 
  label: string; 
  value: string; 
  highlight?: 'primary' | 'secondary' 
}) {
  return (
    <div className="flex justify-between items-center py-2 border-b">
      <span className="text-sm font-semibold text-muted-foreground">{label}</span>
      <span className={`font-semibold ${highlight === 'secondary' ? 'text-secondary' : highlight === 'primary' ? 'text-primary' : ''}`}>
        {value}
      </span>
    </div>
  );
}
