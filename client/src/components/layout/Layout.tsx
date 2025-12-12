import Navbar from "./Navbar";
import Footer from "./Footer";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/254748255064" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 animate-bounce-slow"
      >
        <Button 
          size="icon" 
          className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] shadow-lg border-2 border-white"
        >
          <MessageCircle className="h-7 w-7 text-white" />
        </Button>
      </a>
    </div>
  );
}
