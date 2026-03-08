import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
export function VideoSection() {
  return (
    <section className="py-24 bg-deepTeal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream mb-4">
            Walk Through a Finished Project
          </h2>
          <p className="text-cream/70 max-w-2xl mx-auto text-lg">
            Some projects speak louder than photos. Watch a completed renovation
            from start to finish and see the quality up close.
          </p>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.7
          }}
          className="relative aspect-video max-w-5xl mx-auto bg-black/40 rounded-xl overflow-hidden shadow-2xl shadow-black/50 border border-cream/10">

          {/* Video Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-deepTeal/80 flex items-center justify-center group cursor-pointer">
            <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />

            <motion.div
              whileHover={{
                scale: 1.1
              }}
              className="w-24 h-24 bg-cream/10 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-cream/50 group-hover:bg-cream/20 group-hover:border-cream transition-all shadow-lg">

              <Play className="h-10 w-10 text-cream fill-cream ml-1" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>);

}