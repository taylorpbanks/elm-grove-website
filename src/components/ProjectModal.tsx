import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ChevronLeft,
  ChevronRight,
  GripVertical,
  Image as ImageIcon,
  SplitSquareHorizontal } from
'lucide-react';
interface ProjectModalProps {
  project: {
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
  };
  onClose: () => void;
}
export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<'gallery' | 'beforeAfter'>(
    'gallery'
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  // Use placeholder images if none provided
  const images = project.images || [];
  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  // Handle escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);
  const handleDrag = (e: React.MouseEvent | React.TouchEvent) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x =
    'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const position = (x - rect.left) / rect.width * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };
  const handleMouseDown = () => {
    isDragging.current = true;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current || !sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const position = (e.clientX - rect.left) / rect.width * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };
  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4 md:p-6">
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        exit={{
          opacity: 0
        }}
        onClick={onClose}
        className="absolute inset-0 bg-deepTeal/60 backdrop-blur-sm" />


      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95,
          y: 20
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0
        }}
        exit={{
          opacity: 0,
          scale: 0.95,
          y: 20
        }}
        className="relative w-full sm:max-w-5xl h-full sm:h-auto sm:max-h-[90vh] bg-cream rounded-none sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-sage/20 bg-cream z-10">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="bg-sage/20 text-deepTeal text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide border border-sage/20">
                {project.type}
              </span>
              {project.beforeAfter &&
              <div className="flex bg-cream border border-sage/30 rounded-lg p-1">
                  <button
                  onClick={() => setActiveTab('gallery')}
                  className={`px-3 py-1 rounded-md text-xs font-bold transition-colors flex items-center gap-1 ${activeTab === 'gallery' ? 'bg-deepTeal text-cream' : 'text-deepTeal/60 hover:text-deepTeal hover:bg-sage/10'}`}>

                    <ImageIcon className="w-3 h-3" />
                    Gallery
                  </button>
                  <button
                  onClick={() => setActiveTab('beforeAfter')}
                  className={`px-3 py-1 rounded-md text-xs font-bold transition-colors flex items-center gap-1 ${activeTab === 'beforeAfter' ? 'bg-deepTeal text-cream' : 'text-deepTeal/60 hover:text-deepTeal hover:bg-sage/10'}`}>

                    <SplitSquareHorizontal className="w-3 h-3" />
                    Before & After
                  </button>
                </div>
              }
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-deepTeal">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-sage/20 text-deepTeal transition-colors">

            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content - Scrollable */}
        <div className="overflow-y-auto flex-grow">
          <div className="p-6">
            {/* Main Visual Area */}
            <div className="aspect-[3/4] sm:aspect-video bg-sage/10 rounded-none sm:rounded-xl overflow-hidden mb-6 relative group select-none">
              {activeTab === 'gallery' ?
              <>
                  <AnimatePresence mode="wait">
                    <motion.img
                    key={currentImageIndex}
                    src={images[currentImageIndex]}
                    alt={`${project.title} view ${currentImageIndex + 1}`}
                    initial={{
                      opacity: 0
                    }}
                    animate={{
                      opacity: 1
                    }}
                    exit={{
                      opacity: 0
                    }}
                    transition={{
                      duration: 0.3
                    }}
                    className="w-full h-full object-contain" />

                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-cream/80 text-deepTeal hover:bg-cream shadow-lg opacity-0 group-hover:opacity-100 transition-all">

                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-cream/80 text-deepTeal hover:bg-cream shadow-lg opacity-0 group-hover:opacity-100 transition-all">

                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                    {currentImageIndex + 1} / {images.length}
                  </div>
                </> :

              <div
                ref={sliderRef}
                className="relative w-full h-full cursor-col-resize touch-none"
                onMouseDown={handleMouseDown}
                onTouchMove={handleDrag}
                onClick={handleDrag}>

                  {/* After Image (Base) */}
                  <img
                  src={project.beforeAfter!.after}
                  alt="After renovation"
                  className="absolute inset-0 w-full h-full object-cover" />

                  <div className="absolute top-4 right-4 bg-deepTeal/90 text-cream text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    AFTER
                  </div>

                  {/* Before Image (Overlay) */}
                  <div
                  className="absolute inset-0 overflow-hidden"
                  style={{
                    width: `${sliderPosition}%`
                  }}>

                    <img
                    src={project.beforeAfter!.before}
                    alt="Before renovation"
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    style={{
                      width: sliderRef.current?.offsetWidth
                    }} />

                    <div className="absolute top-4 left-4 bg-cream/90 text-deepTeal text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      BEFORE
                    </div>
                  </div>

                  {/* Slider Handle */}
                  <div
                  className="absolute top-0 bottom-0 w-1 bg-cream cursor-col-resize shadow-[0_0_10px_rgba(0,0,0,0.3)]"
                  style={{
                    left: `${sliderPosition}%`
                  }}>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-cream rounded-full flex items-center justify-center shadow-lg text-deepTeal">
                      <GripVertical className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              }
            </div>

            {/* Thumbnails (Gallery Mode Only) */}
            {activeTab === 'gallery' &&
            <div className="flex gap-3 overflow-x-auto pb-6 scrollbar-hide">
                {images.map((img, idx) =>
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`relative flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden transition-all ${currentImageIndex === idx ? 'ring-2 ring-deepTeal ring-offset-2 ring-offset-cream' : 'opacity-70 hover:opacity-100'}`}>

                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover" />

                  </button>
              )}
              </div>
            }

            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-sage/20 pt-6">
              <div className="md:col-span-2">
                <h3 className="text-lg font-serif font-bold text-deepTeal mb-3">
                  About the Project
                </h3>
                <p className="text-deepTeal/80 leading-relaxed">
                  {project.description}
                </p>
                {project.extraDescription && (
                  <p className="text-deepTeal/80 leading-relaxed mt-4">
                    {project.extraDescription}
                  </p>
                )}
              </div>
              {(() => {
                const d = project.projectDetails;
                if (!d) return null;
                const hasAny =
                  (d.type != null && d.type !== '') ||
                  (d.duration != null && d.duration !== '') ||
                  (d.year != null && d.year !== '') ||
                  (d.location != null && d.location !== '');
                if (!hasAny) return null;
                return (
                <div className="bg-sage/10 rounded-xl p-6">
                  <h3 className="text-sm font-bold text-deepTeal uppercase tracking-wider mb-4">
                    Project Details
                  </h3>
                  <ul className="space-y-3 text-sm text-deepTeal/80">
                    {d.type != null && d.type !== '' && (
                      <li className="flex justify-between border-b border-sage/10 pb-2">
                        <span>Type</span>
                        <span className="font-medium">{d.type}</span>
                      </li>
                    )}
                    {d.duration != null && d.duration !== '' && (
                      <li className="flex justify-between border-b border-sage/10 pb-2">
                        <span>Duration</span>
                        <span className="font-medium">{d.duration}</span>
                      </li>
                    )}
                    {d.year != null && d.year !== '' && (
                      <li className="flex justify-between border-b border-sage/10 pb-2">
                        <span>Year</span>
                        <span className="font-medium">{d.year}</span>
                      </li>
                    )}
                    {d.location != null && d.location !== '' && (
                      <li className="flex justify-between">
                        <span>Location</span>
                        <span className="font-medium">{d.location}</span>
                      </li>
                    )}
                  </ul>
                </div>
                );
              })()}
            </div>
          </div>
        </div>
      </motion.div>
    </div>);

}