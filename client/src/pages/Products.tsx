import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { useInView } from "react-intersection-observer";
import { useLocation } from "wouter";
import { useEffect } from "react";

export default function Products() {
  const [, setLocation] = useLocation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      const timeout = setTimeout(() => {
        setLocation("/contact");
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [inView, setLocation]);

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
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Our Product <span className="text-primary">Ecosystem</span>
            </h1>
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
            
            {/* Call to action card */}
            <div ref={ref} className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 text-white flex flex-col justify-center items-center text-center shadow-lg transform transition-transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold font-display mb-4">Have an Idea?</h3>
              <p className="mb-8 text-white/90">
                We are always looking for the next big problem to solve. Partner with us to bring your vision to life.
              </p>
              <a href="/contact" className="px-6 py-3 bg-white text-primary rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-md">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
