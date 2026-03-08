import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
const reviews = [
{
  text: 'Elm Grove Renovation did a tremendous job on my kitchen renovation! I LOVE how it turned out! Truly a night and day difference. Elm Grove owner, Jordan Banks, is friendly and knowledgeable. From removing a wall to extending the back of house and all the other big and small details, Jordan communicated quickly and professionally through the remodel process.',
  author: 'Lisa G.',
  project: 'Kitchen Remodel'
},
{
  text: "Jordan does what he says when he says he will do it, a lot of contractors do not. He built our wrap around porch and sun room and we are very happy. Thank you Jordon.",
  author: 'Christine N.',
  project: 'Outdoor living'
},
{
  text: 'Jordan has remodeled two of our bathrooms and we are absolutely obsessed! His work is so thorough and immaculate. He\'s very upfront about pricing and scheduling. He makes the process so simple and straightforward. We actually look forward to home projects because we know we have Elm Grove to lean on. 10/10 recommend!',
  author: 'Mikie H.',
  project: 'Bathroom Renovation'
}];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-deepTeal relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#004246 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }} />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sage font-bold tracking-wider text-sm uppercase mb-2 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-6">
            Trusted by Families
          </h2>
          <p className="text-lg text-cream/70 max-w-2xl mx-auto">
            We don't just build houses; we build relationships. Here's what our
            neighbors have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) =>
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
            className="bg-cream p-8 rounded-xl shadow-md border border-sage/20 relative flex flex-col">

              <Quote className="h-10 w-10 text-goldenOlive/20 absolute top-6 right-6" />

              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) =>
              <Star
                key={i}
                className="h-5 w-5 text-goldenOlive fill-goldenOlive" />

              )}
              </div>

              <blockquote className="text-deepTeal/80 text-lg font-serif italic mb-8 flex-grow leading-relaxed">
                "{review.text}"
              </blockquote>

              <div className="mt-auto border-t border-sage/10 pt-6">
                <div className="font-bold text-deepTeal">{review.author}</div>
                <div className="text-sm text-sage font-medium uppercase tracking-wide">
                  {review.project}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}