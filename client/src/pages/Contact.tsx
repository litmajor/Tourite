import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="bg-primary text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
        <p className="opacity-90 max-w-xl mx-auto">We're here to help you plan the trip of a lifetime.</p>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-8">Get in Touch</h2>
            <p className="text-muted-foreground mb-10 text-lg">
              Have questions about our tours or need a custom itinerary? Reach out to our team in Nairobi.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="bg-secondary/20 p-3 rounded-full text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Our Office</h3>
                  <p className="text-muted-foreground">123 Safari Way, Nairobi, Kenya</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="bg-secondary/20 p-3 rounded-full text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Phone & WhatsApp</h3>
                  <p className="text-muted-foreground">0723563012 / +254723563012</p>
                  <p className="text-sm text-muted-foreground mt-1">Mon-Fri from 8am to 5pm</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-secondary/20 p-3 rounded-full text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">hello@serengetisoul.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Form */}
          <div className="bg-muted/30 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Your Name" />
                <Input placeholder="Your Email" />
              </div>
              <Input placeholder="Subject" />
              <Textarea placeholder="How can we help?" className="min-h-[150px]" />
              <Button className="w-full bg-primary text-white">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
