import React from 'react';
import { motion } from 'framer-motion';
import { Hammer, Paintbrush, Ruler, Home, Trees, Wrench } from 'lucide-react';
const services = [
{
  icon: Hammer,
  title: 'Kitchen Remodels',
  description:
  'The heart of your home, reimagined. Custom cabinetry, islands, and layouts designed for gathering.'
},
{
  icon: Paintbrush,
  title: 'Bathroom Renovations',
  description:
  'Spa-like retreats and functional family bathrooms built with premium materials and waterproofing.'
},
{
  icon: Ruler,
  title: 'Basement Finishing',
  description:
  'Unlock potential square footage. Home theaters, guest suites, and playrooms built to last.'
},
{
  icon: Home,
  title: 'Home Additions',
  description:
  "Expand your living space with seamless additions that respect your home's original architecture."
},
{
  icon: Trees,
  title: 'Outdoor Living',
  description:
  'Decks, pergolas, and porches that extend your living space into the fresh Nebraska air.'
},
{
  icon: Wrench,
  title: 'Whole Home',
  description:
  'Comprehensive renovations coordinating every trade for a cohesive, transformed home.'
}];

export function Services() {
  return (
    <section id="services" className="py-24 bg-sage/10 relative">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#004246 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }} />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sage font-bold tracking-wider text-sm uppercase mb-2 block">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-deepTeal mb-6">
            Expertise in Every Detail
          </h2>
          <p className="text-lg text-deepTeal/70">
            We bring over a decade of experience to every project, ensuring
            that the finished result isn't just beautiful, but built to stand
            the test of time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.1,
              duration: 0.5
            }}
            className="bg-cream p-8 rounded-xl shadow-sm border border-sage/20 hover:shadow-lg hover:shadow-sage/10 hover:border-goldenOlive/50 transition-all group">

              <div className="w-14 h-14 bg-sage/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-goldenOlive/20 transition-colors">
                <service.icon className="h-7 w-7 text-deepTeal" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-deepTeal mb-3">
                {service.title}
              </h3>
              <p className="text-deepTeal/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}