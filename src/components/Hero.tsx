import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import leafPattern from '../assets/leaf-pattern.svg';
export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-cream overflow-hidden pt-20">

      <div
        className="absolute inset-0 opacity-90 pointer-events-none"
        style={{
          backgroundImage: `url("${leafPattern}")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '450px 450px',
        }} />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut'
          }}>

          <span className="inline-block py-1 px-3 rounded-full bg-sage/20 text-deepTeal text-sm font-semibold tracking-wider mb-6 border border-sage/30">
            EST. 2020 • OMAHA, NE
          </span>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-deepTeal mb-6 leading-tight">
            Come home to <br />
            <span className="text-teal italic">quality craftsmanship</span>
          </h1>

          <p className="text-xl text-deepTeal/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            We build spaces that tell your story. From custom kitchens to
            whole-home renovations, Elm Grove brings warmth, skill, and
            integrity to every project.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="group bg-deepTeal text-cream px-8 py-4 rounded-lg text-lg font-medium hover:bg-teal transition-all shadow-xl shadow-deepTeal/20 flex items-center">

              Request a Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 rounded-lg text-lg font-medium text-deepTeal hover:bg-deepTeal/5 transition-colors border border-deepTeal/20 hover:border-deepTeal/50">

              View Our Work
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Decorative Border - Wood Grain Suggestion */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-full text-sage/20"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none">

          <path
            fill="currentColor"
            d="M0,60 C240,90 480,30 720,60 C960,90 1200,30 1440,60 L1440,100 L0,100 Z" />

          <path
            fill="rgba(195, 189, 130, 0.3)"
            d="M0,40 C240,70 480,10 720,40 C960,70 1200,10 1440,40 L1440,100 L0,100 Z" />

        </svg>
      </div>
    </section>);

}