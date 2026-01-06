import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight, Mail, MapPin, Phone, Loader2, Send } from "lucide-react";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/ProductCard";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@shared/routes";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  const { mutate, isPending } = useCreateInquiry();
  const form = useForm({
    resolver: zodResolver(api.inquiries.create.input),
    defaultValues: { name: "", email: "", message: "" }
  });

  const onSubmit = (data: any) => {
    mutate(data, { onSuccess: () => form.reset() });
  };

  const products = [
    {
      title: "EkPage",
      description: "India's own multi-feature social media platform seamlessly integrates 6 features with 6 feeds into a single app.",
      status: "Beta" as const,
      url: "https://www.ekpage.com",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "2True",
      description: "India's first physically verified matrimonial platform, built to eliminate fake profiles and foster trust.",
      status: "Development" as const,
      url: "https://www.2true.in",
      color: "from-rose-500 to-pink-600"
    },
    {
      title: "Upto6",
      description: "A curated e-commerce platform exclusively for children aged 0-6 years, focused on safe, high-quality products.",
      status: "Development" as const,
      url: "https://www.upto6.com",
      color: "from-amber-400 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans scroll-smooth">
      <Navigation />
      
      <main className="flex-grow">
        {/* Home Section */}
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 tech-grid opacity-40 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="lg:w-1/2 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-primary font-semibold text-sm mb-8">
                  Incubated at T-Hub, Hyderabad
                </div>
                <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6">
                  Building the <span className="text-gradient">Future of Tech</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                  Adima Technologies creates next-generation products that solve real-world problems.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <a href="#products" className="px-8 py-4 rounded-xl bg-primary text-white font-semibold flex items-center gap-2">
                    Explore Our Products <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
              <div className="lg:w-1/2 relative">
                <div className="w-full aspect-square max-w-[500px] mx-auto bg-gradient-to-tr from-primary/10 to-accent/10 rounded-3xl blur-3xl animate-pulse" />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold mb-4">Innovating for Impact</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Adima Technologies is a product-based company incubated at T-Hub, Hyderabad.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-display font-bold">Who We Are</h3>
                <p className="text-lg text-muted-foreground">
                  We are a team of visionaries dedicated to building next-generation products across social connectivity, matrimonial, and sustainable mobility.
                </p>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Team" className="w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold mb-4">Our Product Ecosystem</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Addressing market gaps in social media, e-commerce, and mobility.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {products.map((p, i) => <ProductCard key={i} index={i} {...p} />)}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold mb-4">Get in Touch</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-3xl border">
                  <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4"><MapPin className="text-primary" /> <span>T-Hub, Hyderabad</span></div>
                    <div className="flex gap-4"><Mail className="text-primary" /> <span>info@adimatechnologies.com</span></div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-3xl border shadow-xl">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem><FormLabel>Name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem><FormLabel>Email</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="message" render={({ field }) => (
                      <FormItem><FormLabel>Message</FormLabel><FormControl><Textarea {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <button type="submit" disabled={isPending} className="w-full py-4 rounded-xl bg-primary text-white font-bold">
                      {isPending ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
