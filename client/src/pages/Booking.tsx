import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { tours } from "@/lib/data";

const bookingSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(5, "Phone is required"),
  tour: z.string().min(1, "Please select a tour"),
  travelers: z.string().min(1, "Number of travelers is required"),
  date: z.string().min(1, "Preferred date is required"),
  message: z.string().optional(),
});

type BookingForm = z.infer<typeof bookingSchema>;

export default function Booking() {
  const { toast } = useToast();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<BookingForm>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = (data: BookingForm) => {
    console.log(data);
    toast({
      title: "Booking Request Sent!",
      description: "We have received your request and will contact you shortly.",
    });
  };

  return (
    <Layout>
      <div className="bg-muted/30 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">Book Your Adventure</h1>
              <p className="text-muted-foreground">Fill out the form below and our travel experts will get back to you within 24 hours.</p>
            </div>

            <Card className="shadow-xl border-none">
              <CardContent className="p-8 md:p-10">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input id="fullName" placeholder="John Doe" {...register("fullName")} />
                      {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName.message}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" {...register("email")} />
                      {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone / WhatsApp</Label>
                      <Input id="phone" placeholder="+1 234 567 8900" {...register("phone")} />
                      {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="travelers">Number of Travelers</Label>
                      <Select onValueChange={(val) => setValue("travelers", val)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, "7+"].map((num) => (
                            <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.travelers && <p className="text-red-500 text-xs">{errors.travelers.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                      <Label htmlFor="tour">Interested Tour</Label>
                      <Select onValueChange={(val) => setValue("tour", val)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a tour..." />
                        </SelectTrigger>
                        <SelectContent>
                          {tours.map(t => (
                            <SelectItem key={t.id} value={t.id}>{t.title}</SelectItem>
                          ))}
                          <SelectItem value="custom">Custom / Not Sure</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.tour && <p className="text-red-500 text-xs">{errors.tour.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Travel Date</Label>
                      <Input id="date" type="date" {...register("date")} />
                      {errors.date && <p className="text-red-500 text-xs">{errors.date.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Special Requests / Notes</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your preferences, dietary requirements, or any questions..." 
                      className="min-h-[120px]"
                      {...register("message")} 
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full h-12 text-lg font-bold bg-primary hover:bg-primary/90">
                    Submit Booking Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
