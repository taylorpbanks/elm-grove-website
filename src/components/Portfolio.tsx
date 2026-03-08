import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
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
    images: [
      '/assets/kitchen-1/4.png',
      '/assets/kitchen-1/7.png',
      '/assets/kitchen-1/1.png',
      '/assets/kitchen-1/2.png',
      '/assets/kitchen-1/3.png',
      '/assets/kitchen-1/5.png',
      '/assets/kitchen-1/6.png',
      '/assets/kitchen-1/8.png',
    ],
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
    images: [
      '/assets/kitchen-3/8.png',
      '/assets/kitchen-3/1.png',
      '/assets/kitchen-3/2.png',
      '/assets/kitchen-3/3.png',
      '/assets/kitchen-3/4.png',
      '/assets/kitchen-3/5.png',
      '/assets/kitchen-3/6.png',
      '/assets/kitchen-3/7.png',
    ],
  },
  {
    title: 'Dundee Bathroom Spa Retreat',
    type: 'Bathroom',
    description:
    'Converting a jack-and-jill bathroom into a spa-like retreat with a soaking tub, walk-in shower, and custom tilework.',
    images: [
      '/assets/bathroom-3/1.png',
      '/assets/bathroom-3/2.png',
      '/assets/bathroom-3/3.png',
      '/assets/bathroom-3/4.png',
      '/assets/bathroom-3/5.png',
    ]
  },
  {
    title: 'Tiered Backyard Deck',
    type: 'Outdoor Living',
    description:
    'Modern outdoor deck with composite decking, aluminum railings, and a privacy screen designed for relaxing and entertaining.',
    images: [
      '/assets/outdoor-1/1.png',
      '/assets/outdoor-1/2.png',
      '/assets/outdoor-1/3.png',
      '/assets/outdoor-1/4.png',
    ]
  },
  {
    title: 'White Oak Primary Bathroom',
    type: 'Bathroom',
    description:
    'Primary bathroom remodel with heated floors, custom white oak vanities, an oversized walk-in shower, and frameless glass enclosure.',
    images: [
      '/assets/bathroom-4/1.png',
      '/assets/bathroom-4/2.png',
      '/assets/bathroom-4/3.png',
    ],
  },
  {
    title: 'Gretna Gathering Kitchen',
    type: 'Kitchen',
    description:
    'Open, welcoming kitchen in Gretna with a spacious 10-foot island, built-in pantry, and bright, airy finishes designed for family living.',
    images: [
      '/assets/kitchen-4/4.png',
      '/assets/kitchen-4/1.png',
      '/assets/kitchen-4/2.png',
      '/assets/kitchen-4/3.png',
      '/assets/kitchen-4/5.png',
      '/assets/kitchen-4/6.png',
      '/assets/kitchen-4/7.png',
    ],
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
    images: [
      '/assets/bathroom-2/1.png',
      '/assets/bathroom-2/2.png',
      '/assets/bathroom-2/3.png',
      '/assets/bathroom-2/4.png',
    ],
  },
  {
    title: 'Pondside Retreat Deck',
    type: 'Outdoor Living',
    description:
    'Ground-level composite deck built beside the pond, creating a quiet and tranquil space to relax and enjoy the water.',
    images: [
      '/assets/outdoor-3/1.png',
      '/assets/outdoor-3/2.png',
    ]
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
    images: [
      '/assets/bathroom-1/1.JPG',
      '/assets/bathroom-1/2.jpg',
      '/assets/bathroom-1/3.jpg',
      '/assets/bathroom-1/4.JPG',
    ],
  },
  {
    title: 'Garden Entry Pergola',
    type: 'Outdoor Living',
    description:
    'Wood entrance pergola surrounded by garden beds, featuring accent lighting that softly illuminates the walkway.',
    images: [
      '/assets/outdoor-2/1.png',
      '/assets/outdoor-2/2.png',
      '/assets/outdoor-2/3.png',
    ]
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
    images: [
      '/assets/kitchen-2/1.png',
      '/assets/kitchen-2/2.png',
      '/assets/kitchen-2/3.png',
      '/assets/kitchen-2/4.png',
      '/assets/kitchen-2/5.png',
    ],
  },
  {
    title: 'Soaking Tub & Walk-In Shower',
    type: 'Bathroom',
    description:
    'Warm, functional family bathroom with a freestanding soaking tub and custom frameless glass shower for the walkin shower experience.',
    images: [
      '/assets/bathroom-5/1.png',
      '/assets/bathroom-5/2.png',
      '/assets/bathroom-5/3.png',
    ]
  },
  {
    title: 'Westside Basement Finishing',
    type: 'Finished Basement',
    description:
    'Complete basement finish including a newly added bathroom, custom built-ins, and a welcoming entertainment zone.',
    images: [
      '/assets/basement-1/1.png',
      '/assets/basement-1/2.png',
      '/assets/basement-1/3.png',
      '/assets/basement-1/4.png',
    ]
  },
  {
    title: 'Aksarben Bump-Out Kitchen',
    type: 'Kitchen',
    description:
    'Aksarben kitchen remodel with bold custom cabinetry and a 3-foot bump-out that opened up the space and improved functionality.',
    images: [
      '/assets/kitchen-5/1.png',
      '/assets/kitchen-5/2.png',
      '/assets/kitchen-5/3.png',
      '/assets/kitchen-5/4.png',
    ],
  },
  {
    title: 'Basement Living Addition',
    type: 'Finished Basement',
    description:
    'Transformed an unfinished basement into a functional living space with a new office, bedroom, and full bathroom.',
    images: [
      '/assets/basement-2/1.png',
      '/assets/basement-2/2.png',
      '/assets/basement-2/3.png',
      '/assets/basement-2/4.png',
    ]
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