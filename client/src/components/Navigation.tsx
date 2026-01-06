import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#products", label: "Products" },
    { href: "#contact", label: "Contact" },
  ];

  const isActive = (path: string) => false;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-border/50 py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-display font-bold text-xl shadow-lg shadow-primary/25 group-hover:scale-105 transition-transform duration-300">
              A
            </div>
            <span className={`font-display font-bold text-xl tracking-tight transition-colors ${scrolled ? "text-foreground" : "text-foreground"}`}>
              Adima<span className="text-primary">Tech</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary relative py-1 ${
                  isActive(link.href) ? "text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact">
              <button className="px-5 py-2.5 rounded-full bg-foreground text-background font-medium text-sm hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-primary/25 transform hover:-translate-y-0.5">
                Get in Touch
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-xl p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-lg font-medium p-2 rounded-lg transition-colors ${
                isActive(link.href) ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsOpen(false)}>
            <button className="w-full mt-2 px-5 py-3 rounded-lg bg-primary text-white font-medium shadow-md">
              Get in Touch
            </button>
          </a>
        </div>
      )}
    </nav>
  );
}
