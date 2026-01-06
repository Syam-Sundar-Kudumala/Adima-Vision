import { ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  title: string;
  description: string;
  status: "Live" | "Beta" | "Development" | "Prototype";
  url: string;
  color: string;
  index: number;
}

export function ProductCard({ title, description, status, url, color, index }: ProductCardProps) {
  const statusColors = {
    Live: "bg-green-100 text-green-700 border-green-200",
    Beta: "bg-blue-100 text-blue-700 border-blue-200",
    Development: "bg-amber-100 text-amber-700 border-amber-200",
    Prototype: "bg-purple-100 text-purple-700 border-purple-200",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-3xl p-8 border border-border hover:border-primary/50 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col h-full"
    >
      <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${color} rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      
      <div className="flex justify-between items-start mb-6">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-white font-display font-bold text-2xl shadow-lg`}>
          {title.charAt(0)}
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusColors[status]}`}>
          {status}
        </span>
      </div>

      <h3 className="text-2xl font-bold font-display mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
        {description}
      </p>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 font-semibold text-sm text-foreground hover:text-primary transition-colors mt-auto group/link"
      >
        <span>Visit Website</span>
        <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
      </a>
    </motion.div>
  );
}
