import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { api } from "@shared/routes";
import { Mail, MapPin, Phone, Loader2, Send } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Client-side schema derived from the API definition
const formSchema = api.inquiries.create.input;
type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const { mutate, isPending } = useCreateInquiry();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = (data: FormValues) => {
    mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We welcome visionary collaborators, strategic partners, and forward-thinking investors to join us.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Contact Info */}
            <div className="space-y-10">
              <div className="bg-slate-50 p-8 rounded-3xl border border-border">
                <h3 className="text-2xl font-display font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center text-primary shadow-sm shrink-0">
                      <MapPin />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Visit Us</h4>
                      <p className="text-muted-foreground">
                        Adima Technologies Pvt. Ltd.<br />
                        T-Hub, Hyderabad<br />
                        Telangana, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center text-primary shadow-sm shrink-0">
                      <Mail />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Email Us</h4>
                      <a href="mailto:info@adimatechnologies.com" className="text-muted-foreground hover:text-primary transition-colors">
                        info@adimatechnologies.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center text-primary shadow-sm shrink-0">
                      <Phone />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Call Us</h4>
                      <p className="text-muted-foreground">+91 (123) 456-7890</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-64 rounded-3xl overflow-hidden bg-slate-200 border border-border shadow-inner relative">
                {/* Hyderabad city skyline abstract */}
                <img 
                  src="https://pixabay.com/get/g6fd9c15ceb10348bbeff50a2d2bc75fb7120f7f9448fba850d6d2da0ba717680ba6d499033b85127925ac9d851311cbf94123179d75b138003514d791be56b5a_1280.jpg" 
                  alt="Hyderabad City Map Location" 
                  className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="px-4 py-2 bg-white/90 backdrop-blur rounded-lg shadow text-sm font-semibold">
                    Located at T-Hub, Hyderabad
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-border shadow-xl shadow-black/5">
              <h3 className="text-2xl font-display font-bold mb-2">Send us a Message</h3>
              <p className="text-muted-foreground mb-8">Fill out the form below and we'll get back to you shortly.</p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Doe" 
                            {...field} 
                            className="h-12 rounded-xl bg-slate-50 border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="john@example.com" 
                            {...field} 
                            className="h-12 rounded-xl bg-slate-50 border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us how we can help..." 
                            {...field} 
                            className="min-h-[150px] rounded-xl bg-slate-50 border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-primary to-primary/80 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
