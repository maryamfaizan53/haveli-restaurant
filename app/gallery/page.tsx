'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryImages = [
  '/r1.jpg',
  '/r2.jpg',
  '/r3.jpg',
  '/r4.jpg',
  '/r5.jpg',
  '/r6.jpg',
  '/r3.jpg',
  '/r4.jpg',
  '/r5.jpg',
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#222] to-black opacity-30 pointer-events-none z-0" />

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-8 text-center relative z-10"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#c19d60] relative">
          Our Gallery
          <span className="block w-20 h-1 bg-[#FFD700] mx-auto mt-2 rounded"></span>
        </h1>
        <p className="mt-2 text-base font-bold sm:text-lg md:text-xl text-gray-100">
          A glimpse into the elegance of our restaurant
        </p>
      </motion.header>

      {/* Gallery Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
        className="max-w-7xl mx-auto px-4 py-8 sm:py-12 relative z-10"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              layoutId={image}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-2xl hover:shadow-yellow-500/50 transition-shadow duration-300"
              whileHover={{ scale: 1.05, rotate: 0.5 }}
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image}
                alt={`Restaurant image ${index + 1}`}
                width={400}
                height={300}
                className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-[#FFD700] bg-black bg-opacity-60 px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition duration-300 text-lg font-semibold">
                  Click to Enlarge
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <div className="text-center mt-12 mb-12 relative z-10">
        <button className="bg-[#FFD700] text-black px-6 py-3 rounded-lg text-lg font-bold hover:bg-white transition duration-300">
          Reserve a Table
        </button>
      </div>

      {/* Modal with smooth animation */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 px-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              layoutId={selectedImage}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Selected restaurant image"
                width={1200}
                height={800}
                className="w-full h-[calc(100vh-100px)] object-contain rounded-lg"
              />
              <button
                className="absolute  top-2 right-4 mx-2 text-[#FFD700] text-3xl font-bold"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
