import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navigation />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="pt-32 pb-16 px-4 bg-slate-50 border-b border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Innovating for <span className="text-primary">Impact</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Adima Technologies Pvt. Ltd. is a product-based company incubated at T-Hub, Hyderabad - the world's largest incubation centre.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 space-y-6">
                <h2 className="text-3xl font-display font-bold text-foreground">Who We Are</h2>
                <div className="w-20 h-1.5 bg-primary rounded-full" />
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We are a team of visionaries, engineers, and problem-solvers dedicated to building next-generation products. 
                  Our focus spans across multiple domains including social connectivity, trusted relationships, specialized e-commerce, and sustainable mobility.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  By leveraging cutting-edge technology and human-centric design, we aim to solve real-world problems and enhance the quality of digital and physical life for millions of Indians.
                </p>
              </div>
              
              <div className="order-1 md:order-2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-primary/20 z-10 mix-blend-multiply" />
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
                    alt="Team collaborating in modern office" 
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision/Mission */}
        <section className="py-20 bg-foreground text-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                <h3 className="text-2xl font-display font-bold mb-4 text-primary">Our Vision</h3>
                <p className="text-lg opacity-80 leading-relaxed">
                  To become India's leading product innovation hub, creating solutions that define the future of how people connect, shop, and move.
                </p>
              </div>
              <div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                <h3 className="text-2xl font-display font-bold mb-4 text-primary">Our Mission</h3>
                <p className="text-lg opacity-80 leading-relaxed">
                  To eliminate inefficiencies and build trust through technology. Whether it's verifying profiles or engineering electric bikes, integrity and utility are at our core.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location / T-Hub */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-8">Incubated at T-Hub</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              Being part of the world's largest incubation centre gives us access to a vibrant ecosystem of mentors, investors, and fellow innovators, fueling our growth and vision.
            </p>
            <div className="rounded-3xl overflow-hidden shadow-xl border border-border">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80" 
                alt="Modern architecture representing T-Hub" 
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
