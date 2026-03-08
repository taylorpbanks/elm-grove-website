import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

import k1_1 from '../assets/kitchen-1/1.png';
import k1_2 from '../assets/kitchen-1/2.png';
import k1_3 from '../assets/kitchen-1/3.png';
import k1_4 from '../assets/kitchen-1/4.png';
import k1_5 from '../assets/kitchen-1/5.png';
import k1_6 from '../assets/kitchen-1/6.png';
import k1_7 from '../assets/kitchen-1/7.png';
import k1_8 from '../assets/kitchen-1/8.png';
import k2_1 from '../assets/kitchen-2/1.png';
import k2_2 from '../assets/kitchen-2/2.png';
import k2_3 from '../assets/kitchen-2/3.png';
import k2_4 from '../assets/kitchen-2/4.png';
import k2_5 from '../assets/kitchen-2/5.png';
import k3_1 from '../assets/kitchen-3/1.png';
import k3_2 from '../assets/kitchen-3/2.png';
import k3_3 from '../assets/kitchen-3/3.png';
import k3_4 from '../assets/kitchen-3/4.png';
import k3_5 from '../assets/kitchen-3/5.png';
import k3_6 from '../assets/kitchen-3/6.png';
import k3_7 from '../assets/kitchen-3/7.png';
import k3_8 from '../assets/kitchen-3/8.png';
import k4_1 from '../assets/kitchen-4/1.png';
import k4_2 from '../assets/kitchen-4/2.png';
import k4_3 from '../assets/kitchen-4/3.png';
import k4_4 from '../assets/kitchen-4/4.png';
import k4_5 from '../assets/kitchen-4/5.png';
import k4_6 from '../assets/kitchen-4/6.png';
import k4_7 from '../assets/kitchen-4/7.png';
import k5_1 from '../assets/kitchen-5/1.png';
import k5_2 from '../assets/kitchen-5/2.png';
import k5_3 from '../assets/kitchen-5/3.png';
import k5_4 from '../assets/kitchen-5/4.png';
import b1_1 from '../assets/bathroom-1/5.jpg';
import b1_2 from '../assets/bathroom-1/2.jpg';
import b1_3 from '../assets/bathroom-1/3.jpg';
import b1_4 from '../assets/bathroom-1/6.jpg';
import b2_1 from '../assets/bathroom-2/1.png';
import b2_2 from '../assets/bathroom-2/2.png';
import b2_3 from '../assets/bathroom-2/3.png';
import b2_4 from '../assets/bathroom-2/4.png';
import b3_1 from '../assets/bathroom-3/1.png';
import b3_2 from '../assets/bathroom-3/2.png';
import b3_3 from '../assets/bathroom-3/3.png';
import b3_4 from '../assets/bathroom-3/4.png';
import b3_5 from '../assets/bathroom-3/5.png';
import b4_1 from '../assets/bathroom-4/1.png';
import b4_2 from '../assets/bathroom-4/2.png';
import b4_3 from '../assets/bathroom-4/3.png';
import b5_1 from '../assets/bathroom-5/1.png';
import b5_2 from '../assets/bathroom-5/2.png';
import b5_3 from '../assets/bathroom-5/3.png';
import o1_1 from '../assets/outdoor-1/1.png';
import o1_2 from '../assets/outdoor-1/2.png';
import o1_3 from '../assets/outdoor-1/3.png';
import o1_4 from '../assets/outdoor-1/4.png';
import o2_1 from '../assets/outdoor-2/1.png';
import o2_2 from '../assets/outdoor-2/2.png';
import o2_3 from '../assets/outdoor-2/3.png';
import o3_1 from '../assets/outdoor-3/1.png';
import o3_2 from '../assets/outdoor-3/2.png';
import bs1_1 from '../assets/basement-1/1.png';
import bs1_2 from '../assets/basement-1/2.png';
import bs1_3 from '../assets/basement-1/3.png';
import bs1_4 from '../assets/basement-1/4.png';
import bs2_1 from '../assets/basement-2/1.png';
import bs2_2 from '../assets/basement-2/2.png';
import bs2_3 from '../assets/basement-2/3.png';
import bs2_4 from '../assets/basement-2/4.png';
const categories = [
'All',
'Kitchen',
'Bathroom',
'Outdoor Living',
'Finished Basement'
];

interface Project {
  title: string;
  type: string;
  description: string;
  images?: string[];
  extraDescription?: string;
  projectDetails?: {
    type?: string;
    duration?: string;
    year?: string;
    location?: string;
  };
  beforeAfter?: {
    before: string;
    after: string;
  };
}
const projects: Project[] = [
  {
    title: 'Mid-Century Modern Kitchen',
    type: 'Kitchen',
    description:
    'Complete kitchen remodel with custom inset cabinetry, beautiful marble countertops, distinctive brass hardware, Venetian plaster hood, panel ready appliances, in a warm mid-century modern style.',
    extraDescription:
      'Our team worked closely with the homeowners to ensure every detail matched their vision. From material selection to the final coat of paint, quality was our top priority.',
    /*projectDetails: {
      type: 'Full renovation',
      duration: '8 Weeks',
      year: '2023',
      location: 'Omaha, NE',
    },*/
    images: [k1_4, k1_7, k1_1, k1_2, k1_3, k1_5, k1_6, k1_8],
  },
  {
    title: 'Golf Course Chef\'s Kitchen',
    type: 'Kitchen',
    description:
    'Complete kitchen remodel featuring an oversized butcher block island, new cabinetry, new pantry, completed with a wetbar designed for cooking and entertaining.',
    /*projectDetails: {
      type: 'Full renovation',
      duration: '8 Weeks',
      year: '2023',
      location: 'Omaha, NE',
    },*/
    images: [k3_8, k3_1, k3_2, k3_3, k3_4, k3_5, k3_6, k3_7],
  },
  {
    title: 'Dundee Bathroom Spa Retreat',
    type: 'Bathroom',
    description:
    'Converting a jack-and-jill bathroom into a spa-like retreat with a soaking tub, walk-in shower, and custom tilework.',
    images: [b3_1, b3_2, b3_3, b3_4, b3_5]
  },
  {
    title: 'Tiered Backyard Deck',
    type: 'Outdoor Living',
    description:
    'Modern outdoor deck with composite decking, aluminum railings, and a privacy screen designed for relaxing and entertaining.',
    images: [o1_1, o1_2, o1_3, o1_4]
  },
  {
    title: 'White Oak Primary Bathroom',
    type: 'Bathroom',
    description:
    'Primary bathroom remodel with heated floors, custom white oak vanities, an oversized walk-in shower, and frameless glass enclosure.',
    images: [b4_1, b4_2, b4_3],
  },
  {
    title: 'Gretna Gathering Kitchen',
    type: 'Kitchen',
    description:
    'Open, welcoming kitchen in Gretna with a spacious 10-foot island, built-in pantry, and bright, airy finishes designed for family living.',
    images: [k4_4, k4_1, k4_2, k4_3, k4_5, k4_6, k4_7],
  },
  {
    title: 'Loveland Walnut Custom Bath',
    type: 'Bathroom',
    description:
      'Elegant bathroom with custom walnut cabinets, a custom tile shower, and frameless glass enclosure.',
    /*projectDetails: {
      type: 'Full renovation',
      duration: '8 Weeks',
      year: '2023',
      location: 'Omaha, NE',
    },*/
    images: [b2_1, b2_2, b2_3, b2_4],
  },
  {
    title: 'Pondside Retreat Deck',
    type: 'Outdoor Living',
    description:
    'Ground-level composite deck built beside the pond, creating a quiet and tranquil space to relax and enjoy the water.',
    images: [o3_1, o3_2]
  },
  {
    title: 'Classic Black & White Bath',
    type: 'Bathroom',
    description:
    'Compact bathroom renovation with a custom penny tile floor, new walk-in shower, and timeless black and white design.',
    /*projectDetails: {
      type: 'Full renovation',
      duration: '8 Weeks',
      year: '2023',
      location: 'Omaha, NE',
    },*/
    images: [b1_1, b1_2, b1_3, b1_4],
  },
  {
    title: 'Garden Entry Pergola',
    type: 'Outdoor Living',
    description:
    'Wood entrance pergola surrounded by garden beds, featuring accent lighting that softly illuminates the walkway.',
    images: [o2_1, o2_2, o2_3]
  },
  {
    title: 'Benson Botanical Kitchen',
    type: 'Kitchen',
    description:
    'A compact kitchen update with warm oak cabinets, new flooring, playful aviary tile backsplash, and modern Bespoke appliances.',
    extraDescription:
      'Our team worked closely with the homeowners to ensure every detail matched their vision. From material selection to the final coat of paint, quality was our top priority.',
    /*projectDetails: {
      type: 'Full renovation',
      duration: '8 Weeks',
      year: '2023',
      location: 'Omaha, NE',
    },*/
    images: [k2_1, k2_2, k2_3, k2_4, k2_5],
  },
  {
    title: 'Soaking Tub & Walk-In Shower',
    type: 'Bathroom',
    description:
    'Warm, functional family bathroom with a freestanding soaking tub and custom frameless glass shower for the walkin shower experience.',
    images: [b5_1, b5_2, b5_3]
  },
  {
    title: 'Westside Basement Finishing',
    type: 'Finished Basement',
    description:
    'Complete basement finish including a newly added bathroom, custom built-ins, and a welcoming entertainment zone.',
    images: [bs1_1, bs1_2, bs1_3, bs1_4]
  },
  {
    title: 'Aksarben Bump-Out Kitchen',
    type: 'Kitchen',
    description:
    'Aksarben kitchen remodel with bold custom cabinetry and a 3-foot bump-out that opened up the space and improved functionality.',
    images: [k5_1, k5_2, k5_3, k5_4],
  },
  {
    title: 'Basement Living Addition',
    type: 'Finished Basement',
    description:
    'Transformed an unfinished basement into a functional living space with a new office, bedroom, and full bathroom.',
    images: [bs2_1, bs2_2, bs2_3, bs2_4]
  },
 ];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.type === activeFilter;
  });
  return (
    <section id="portfolio" className="py-24 bg-cream relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center mb-16">
          <span className="text-sage font-bold tracking-wider text-sm uppercase mb-2 block">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-deepTeal mb-8">
            Our Craftsmanship
          </h2>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) =>
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`relative px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors ${activeFilter === category ? 'text-cream' : 'text-deepTeal hover:text-teal hover:bg-sage/10'}`}>

                {activeFilter === category &&
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-deepTeal rounded-full"
                transition={{
                  type: 'spring',
                  bounce: 0.2,
                  duration: 0.6
                }} />

              }
                <span className="relative z-10">{category}</span>
              </button>
            )}
          </div>
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) =>
            <ProjectCard
              key={project.title}
              title={project.title}
              type={project.type}
              description={project.description}
              image={project.images?.[0]}
              onClick={() => setSelectedProject(project)} />

            )}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 &&
        <div className="text-center py-20 text-deepTeal/50 italic">
            No projects found in this category yet.
          </div>
        }
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject &&
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)} />

        }
      </AnimatePresence>
    </section>);

}