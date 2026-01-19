import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Tours from "@/pages/Tours";
import TourDetails from "@/pages/TourDetails";
import TourComparison from "@/pages/TourComparison";
import Booking from "@/pages/Booking";
import Contact from "@/pages/Contact";
import About from "@/pages/About";
import Fleet from "@/pages/Fleet";
import CarHire from "@/pages/CarHire";
import LocationsIndex from "@/pages/LocationsIndex";
import Locations from "@/pages/Locations";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/locations" component={LocationsIndex} />
      <Route path="/locations/:destinationSlug" component={Locations} />
      <Route path="/tours" component={Tours} />
      <Route path="/tours/:id" component={TourDetails} />
      <Route path="/tours/compare/:tourId" component={TourComparison} />
      <Route path="/fleet" component={Fleet} />
      <Route path="/car-hire" component={CarHire} />
      <Route path="/booking" component={Booking} />
      <Route path="/contact" component={Contact} />
      {/* Optional: Add Destination/Gallery routes if needed later */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
