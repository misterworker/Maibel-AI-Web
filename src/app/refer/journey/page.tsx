// /src/app/refer/journey/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function JourneyPage() {
  const router = useRouter();

  // Array of image paths (ensure these files are in your public/ folder)
  const images = [
    '/refer/1.jpg',
    '/refer/2.jpg',
    '/refer/3.jpg',
    '/refer/4.jpg',
    '/refer/5.jpg',
    '/refer/6.jpg',
    '/refer/7.jpg',
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [flashVisible, setFlashVisible] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  // Preload images using the global Image constructor
  useEffect(() => {
    images.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  const changeBackground = () => {
    if (currentImage < images.length - 1) {
      // Flash effect before changing image
      setFlashVisible(true);
      setTimeout(() => {
        setFlashVisible(false);
        setCurrentImage((prev) => prev + 1);
      }, 200);
    } else {
      // Last image: flash, then zoom and navigate to the end page
      setFlashVisible(true);
      setTimeout(() => {
        setIsZoomed(true);
        setTimeout(() => {
          router.push('/refer/end'); // Adjust route if needed
        }, 1000);
      }, 1000);
    }
  };

  const changePrev = () => {
    if (currentImage > 0) {
      // Flash effect before moving to the previous image
      setFlashVisible(true);
      setTimeout(() => {
        setFlashVisible(false);
        setCurrentImage((prev) => prev - 1);
      }, 200);
    }
  };

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden flex justify-center items-center">
      {/* Background Container */}
      <div
        id="backgroundContainer"
        className="w-full h-full flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat p-5 relative"
      >
        {/* Background for Desktop */}
        <Image
          src={images[currentImage]}
          alt="Background"
          layout="fill"
          objectFit="contain"
          className="z-0"
        />

        {/* Background for Mobile */}
        <Image
          src={images[currentImage]}
          alt="Background Mobile"
          layout="fill"
          objectFit="cover"
          className="block md:hidden"
        />

        {/* Flash Overlay */}
        <div
          id="flash"
          className={`absolute inset-0 bg-white transition-opacity duration-200 ease-in-out ${
            flashVisible ? 'opacity-100' : 'opacity-0'
          }`}
        ></div>

        {/* Image Break / Zoom Overlay */}
        <div
          id="imageBreak"
          className="absolute inset-0 bg-black transition-all duration-1000 ease-out"
          style={{
            opacity: isZoomed ? 1 : 0,
            transform: isZoomed ? 'scale(4)' : 'scale(0)',
          }}
        ></div>
      </div>

      {/* Prev Button (Fixed to Bottom Left) */}
      <button
        id="prevButton"
        className="fixed bottom-16 left-8 px-8 py-2 bg-pink-600 text-white rounded-full text-base cursor-pointer shadow-lg transition-all duration-300 hover:bg-pink-400 hover:scale-110"
        onClick={changePrev}
        disabled={currentImage === 0}
      >
        Prev
      </button>

      {/* Next Button (Fixed to Bottom Right) */}
      <button
        id="nextButton"
        className="fixed bottom-16 right-8 px-8 py-2 bg-pink-600 text-white rounded-full text-base cursor-pointer shadow-lg transition-all duration-300 hover:bg-pink-400 hover:scale-110"
        onClick={changeBackground}
      >
        Next
      </button>
    </div>
  );
}
