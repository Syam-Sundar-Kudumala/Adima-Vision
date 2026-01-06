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
      description: "India's own multi-feature social media platform seamlessly integrates 6 features with 6 feeds into a single app to enable meaningful and authentic digital engagement.",
      status: "Beta" as const,
      url: "https://www.ekpage.com",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "2True",
      description: "India's first physically verified matrimonial platform, built to eliminate fake profiles and foster trust, authenticity, and genuine connections.",
      status: "Development" as const,
      url: "https://www.2true.in",
      color: "from-rose-500 to-pink-600"
    },
    {
      title: "Upto6",
      description: "A curated e-commerce platform exclusively for children aged 0-6 years, focused on safe, age-appropriate, parent-friendly, and high-quality products.",
      status: "Development" as const,
      url: "https://www.upto6.com",
      color: "from-amber-400 to-orange-500"
    },
    {
      title: "Bejdo",
      description: "A next-generation classifieds platform offering a safe, verified, and user-friendly marketplace for buyers and sellers.",
      status: "Development" as const,
      url: "https://www.bejdo.in",
      color: "from-teal-400 to-emerald-500"
    },
    {
      title: "11thOne",
      description: "An electric mobility venture developing India's first naked & adventure EV bike, engineered for both on-road and off-road performance.",
      status: "Prototype" as const,
      url: "https://www.11thone.com",
      color: "from-slate-700 to-slate-900"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans scroll-smooth">
      <Navigation />
      
      <main className="flex-grow">
        {/* Home Section */}
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 tech-grid opacity-40 pointer-events-none" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10 blur-3xl" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="lg:w-1/2 text-center lg:text-left"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-primary font-semibold text-sm mb-8 shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Incubated at T-Hub, Hyderabad
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6">
                  Building the <br />
                  <span className="text-gradient">Future of Tech</span>
                </h1>
                
                <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Adima Technologies creates next-generation products that solve real-world problems. 
                  From social media to electric mobility, we are shaping India's digital future.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a href="#products" className="px-8 py-4 rounded-xl bg-primary text-white font-semibold text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                    Explore Our Products
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a href="#contact" className="px-8 py-4 rounded-xl bg-white border-2 border-border text-foreground font-semibold text-lg hover:border-primary hover:text-primary hover:bg-blue-50/50 transition-all duration-300">
                    Partner With Us
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:w-1/2 relative"
              >
                <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse" />
                  <div className="relative z-10 grid grid-cols-2 gap-4 p-6 glass-card rounded-3xl rotate-3 hover:rotate-0 transition-transform duration-700">
                     <div className="col-span-2 h-32 rounded-2xl bg-gradient-to-r from-slate-100 to-slate-200 animate-pulse" />
                     <div className="h-32 rounded-2xl bg-primary/10" />
                     <div className="h-32 rounded-2xl bg-accent/10" />
                     <div className="col-span-2 p-6">
                        <div className="h-4 w-3/4 bg-slate-200 rounded mb-2" />
                        <div className="h-4 w-1/2 bg-slate-200 rounded" />
                     </div>
                  </div>
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us / Features */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Why Choose Adima?</h2>
              <p className="text-muted-foreground text-lg">We combine innovation with execution to deliver products that matter.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation First",
                  desc: "We don't just follow trends; we set them with ground-breaking solutions.",
                  icon: "💡"
                },
                {
                  title: "User Centric",
                  desc: "Every product is crafted with the end-user's experience as the top priority.",
                  icon: "👥"
                },
                {
                  title: "Scalable Tech",
                  desc: "Built on robust architectures designed to scale with India's growing needs.",
                  icon: "🚀"
                }
              ].map((feature, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-border hover:border-primary/30 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold font-display mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold mb-4">Innovating for Impact</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Adima Technologies Pvt. Ltd. is a product-based company incubated at T-Hub, Hyderabad - the world's largest incubation centre.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-display font-bold text-foreground">Who We Are</h3>
                <div className="w-20 h-1.5 bg-primary rounded-full" />
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We are a team of visionaries, engineers, and problem-solvers dedicated to building next-generation products. 
                  Our focus spans across multiple domains including social connectivity, trusted relationships, specialized e-commerce, and sustainable mobility.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  By leveraging cutting-edge technology and human-centric design, we aim to solve real-world problems and enhance the quality of digital and physical life for millions of Indians.
                </p>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
                  alt="Team collaborating in modern office" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 mt-20">
              <div className="p-8 border border-border rounded-2xl bg-slate-50">
                <h3 className="text-2xl font-display font-bold mb-4 text-primary">Our Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To become India's leading product innovation hub, creating solutions that define the future of how people connect, shop, and move.
                </p>
              </div>
              <div className="p-8 border border-border rounded-2xl bg-slate-50">
                <h3 className="text-2xl font-display font-bold mb-4 text-primary">Our Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To eliminate inefficiencies and build trust through technology. Whether it's verifying profiles or engineering electric bikes, integrity and utility are at our core.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
                Our Product <span className="text-primary">Ecosystem</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We are building a diverse portfolio of products addressing key market gaps in social media, 
                ecommerce, matrimony, and electric mobility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  index={index}
                  {...product}
                />
              ))}
              
              <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 text-white flex flex-col justify-center items-center text-center shadow-lg transform transition-transform hover:-translate-y-1">
                <h3 className="text-2xl font-bold font-display mb-4">Have an Idea?</h3>
                <p className="mb-8 text-white/90">
                  We are always looking for the next big problem to solve. Partner with us to bring your vision to life.
                </p>
                <a href="#contact" className="px-6 py-3 bg-white text-primary rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-md">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Get in Touch</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We welcome visionary collaborators, strategic partners, and forward-thinking investors to join us.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
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

                <div className="h-64 rounded-3xl overflow-hidden bg-slate-200 border border-border shadow-inner relative">
                  <img 
                    src="https://pixabay.com/get/g6fd9c15ceb10348bbeff50a2d2bc75fb7120f7f9448fba850d6d2da0ba717680ba6d499033b85127925ac9d851311cbf94123179d75b138003514d791be56b5a_1280.jpg" 
                    alt="Hyderabad City Map Location" 
                    className="w-full h-full object-cover opacity-60 grayscale"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="px-4 py-2 bg-white/90 backdrop-blur rounded-lg shadow text-sm font-semibold">
                      Located at T-Hub, Hyderabad
                    </div>
                  </div>
                </div>
              </div>

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
                            <Input placeholder="John Doe" {...field} className="h-12 rounded-xl bg-slate-50" />
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
                            <Input placeholder="john@example.com" {...field} className="h-12 rounded-xl bg-slate-50" />
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
                            <Textarea placeholder="Tell us how we can help..." {...field} className="min-h-[150px] rounded-xl bg-slate-50 resize-none" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <button
                      type="submit"
                      disabled={isPending}
                      className="w-full py-4 rounded-xl font-bold text-white bg-primary shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-all"
                    >
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
