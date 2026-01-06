import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans overflow-hidden">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
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
                  <Link href="/products">
                    <button className="px-8 py-4 rounded-xl bg-primary text-white font-semibold text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                      Explore Our Products
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                  <Link href="/contact">
                    <button className="px-8 py-4 rounded-xl bg-white border-2 border-border text-foreground font-semibold text-lg hover:border-primary hover:text-primary hover:bg-blue-50/50 transition-all duration-300">
                      Partner With Us
                    </button>
                  </Link>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:w-1/2 relative"
              >
                {/* Abstract geometric composition representing innovation */}
                <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse" />
                  
                  {/* Floating cards simulation */}
                  <div className="relative z-10 grid grid-cols-2 gap-4 p-6 glass-card rounded-3xl rotate-3 hover:rotate-0 transition-transform duration-700">
                     <div className="col-span-2 h-32 rounded-2xl bg-gradient-to-r from-slate-100 to-slate-200 animate-pulse" />
                     <div className="h-32 rounded-2xl bg-primary/10" />
                     <div className="h-32 rounded-2xl bg-accent/10" />
                     <div className="col-span-2 p-6">
                        <div className="h-4 w-3/4 bg-slate-200 rounded mb-2" />
                        <div className="h-4 w-1/2 bg-slate-200 rounded" />
                     </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
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

        {/* Call to Action */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-top-left scale-110" />
          <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Ready to shape the future?</h2>
            <p className="text-xl text-muted-foreground mb-10">
              Join us as a collaborator, partner, or investor in our journey of innovation.
            </p>
            <Link href="/contact">
              <button className="px-10 py-4 rounded-full bg-primary text-white font-bold text-lg shadow-xl shadow-primary/30 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Let's Talk Business
              </button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
