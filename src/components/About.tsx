import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import ownerPhoto from '../assets/owner-photo.png';
export function About() {
  return (
    <section id="about" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}>

            <span className="text-sage font-bold tracking-wider text-sm uppercase mb-2 block">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-deepTeal mb-6">
              Built on Craftsmanship
            </h2>
            <div className="w-20 h-1 bg-goldenOlive mb-8" />

            <div className="space-y-6 text-lg text-deepTeal/80">
              <p>
              Founded in 2020 right here in Omaha, Elm Grove Renovations began with a simple belief: that a home should be built to last, and the process of improving it should reflect the same level of care as the finished result.
              </p>
              <p>
                Owned and operated by Jordan Banks, Elm Grove Renovations is a small, family-run 
                team backed by over a decade of hands-on experience in the construction industry. 
                We don’t just “flip” houses; we restore and enhance them, honoring the original character while introducing modern functionality. 
                Our reputation has grown one project at a time, built on trust and word-of-mouth from happy homeowners.
              </p>
              <p>
                When you work with us, you're not just hiring contractors.
                You're inviting neighbors into your home who care about your
                community as much as you do.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
              '10+ Years Experience',
              'Family Owned',
              'Licensed & Insured',
              'Quality Guaranteed'].
              map((item) =>
              <div
                key={item}
                className="flex items-center space-x-2 text-deepTeal font-medium">

                  <CheckCircle2 className="h-5 w-5 text-goldenOlive" />
                  <span>{item}</span>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="relative">

            <div className="absolute -inset-4 bg-sage/20 rounded-2xl transform rotate-2" />
            <div className="relative h-[500px] bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl overflow-hidden shadow-xl shadow-deepTeal/10">
              {/* Placeholder for Team Photo */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-deepTeal/30 bg-cream/50">
                <img src={ownerPhoto} alt="Jordan Banks" className="mb-4" />
                <span className="font-serif text-xl italic">
                  Jordan Banks, Owner
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}