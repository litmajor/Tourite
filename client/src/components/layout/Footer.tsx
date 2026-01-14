import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-white">
              TOURITE<br/>COMFORT
            </h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Escape to your paradise with premium safaris, beach holidays, and expeditions across East Africa. Your journey of a lifetime awaits.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link href="/"><a className="hover:text-secondary transition-colors">Home</a></Link></li>
              <li><Link href="/about"><a className="hover:text-secondary transition-colors">About Us</a></Link></li>
              <li><Link href="/tours"><a className="hover:text-secondary transition-colors">Tour Packages</a></Link></li>
              <li><Link href="/fleet"><a className="hover:text-secondary transition-colors">Our Fleet</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-secondary transition-colors">Contact</a></Link></li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4 text-white">Destinations</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-secondary transition-colors">Kenya Safaris</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Tanzania Tours</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Uganda Gorilla Trek</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Zanzibar Beaches</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Rwanda Primate Tours</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4 text-white">Contact Us</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-secondary shrink-0 mt-0.5" />
                <span>P.O.Box 104161 Jamia<br/>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-secondary shrink-0" />
                <span>0723563012 / +254723563012</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-secondary shrink-0" />
                <span>touritecomfortltd@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/60">
          <p>© 2025 TOURITE COMFORT. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
