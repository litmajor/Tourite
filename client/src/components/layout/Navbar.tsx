import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Tour Packages", href: "/tours" },
    { name: "Destinations", href: "/destinations" }, // Optional
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3 border-b border-border/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-serif font-bold text-primary tracking-tighter cursor-pointer">
            Serengeti<span className="text-secondary">Soul</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className={`text-sm font-medium transition-colors hover:text-secondary ${
                  location === link.href
                    ? "text-primary font-semibold"
                    : isScrolled
                    ? "text-foreground"
                    : "text-white drop-shadow-md"
                }`}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <Link href="/booking">
            <Button 
              size="sm" 
              className={`font-semibold ${!isScrolled ? "bg-white text-primary hover:bg-white/90" : ""}`}
            >
              Book Now
            </Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={!isScrolled ? "text-white" : ""}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-10">
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href}>
                    <a className="text-lg font-medium hover:text-primary">
                      {link.name}
                    </a>
                  </Link>
                ))}
                <Link href="/booking">
                  <Button className="w-full">Book a Tour</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
