import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Hammer } from 'lucide-react';
interface ProjectCardProps {
  title: string;
  type: string;
  description: string;
  image?: string;
  className?: string;
  onClick?: () => void;
}
export function ProjectCard({
  title,
  type,
  description,
  image,
  className = '',
  onClick
}: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        scale: 0.9
      }}
      animate={{
        opacity: 1,
        scale: 1
      }}
      exit={{
        opacity: 0,
        scale: 0.9
      }}
      whileHover={{
        y: -8,
        transition: {
          duration: 0.2
        }
      }}
      onClick={onClick}
      className={`bg-cream rounded-xl overflow-hidden shadow-lg shadow-deepTeal/10 border border-sage/20 group cursor-pointer flex flex-col h-full ${className}`}>

      {/* Image Placeholder */}
      <div className="h-56 bg-gradient-to-br from-sage/30 to-goldenOlive/30 flex items-center justify-center relative overflow-hidden shrink-0">
        {image ?
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" /> :


        <>
            <div className="absolute inset-0 bg-deepTeal/5 group-hover:bg-deepTeal/0 transition-colors duration-500" />
            <Hammer className="h-12 w-12 text-deepTeal/20" />
          </>
        }

        {/* Badge */}
        <div className="absolute top-4 left-4 bg-lightLime/90 backdrop-blur-sm text-deepTeal text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide border border-sage/20 shadow-sm">
          {type}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-serif font-bold text-deepTeal mb-2 group-hover:text-teal transition-colors">
          {title}
        </h3>
        <p className="text-deepTeal/70 text-sm mb-6 line-clamp-3 flex-grow">
          {description}
        </p>

        <div className="flex items-center text-teal font-medium text-sm group-hover:text-deepTeal transition-colors mt-auto">
          View Gallery
          <ArrowUpRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </motion.div>);

}