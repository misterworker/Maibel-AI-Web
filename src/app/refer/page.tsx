'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const startJourney = () => {
    document.body.classList.add('flash');
    setTimeout(() => {
      window.location.href = '/refer/survey';
    }, 300);
  };

  return (
    <div className="relative flex items-center justify-center w-full h-screen bg-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/refer/Start.jpg"
          alt="Background"
          layout="fill"
          objectFit="contain"
          className="hidden md:block"
        />
        <Image
          src="/refer/Start.jpg"
          alt="Background Mobile"
          layout="fill"
          objectFit="cover"
          className="block md:hidden"
        />
      </div>

      {/* Buttons - Fixed to the Bottom */}
      <div className="absolute bottom-10 w-full flex justify-between px-6">
        {/* Start Journey Button - Fixed to the Right */}
        <button
          className="px-6 py-3 text-lg font-bold text-white rounded-full bg-gradient-to-r from-purple-700 to-pink-500 shadow-lg transition-transform transform hover:scale-105 fixed bottom-10 right-6"
          onClick={startJourney}
        >
          Start the Journey
        </button>

        {/* Question Button - Fixed to the Left */}
        <button
          className="w-12 h-12 flex items-center justify-center text-lg font-bold text-white bg-gradient-to-r from-blue-500 to-teal-400 rounded-full shadow-md transition-transform transform hover:scale-110 fixed bottom-10 left-6"
          onClick={() => setIsModalOpen(true)}
        >
          ?
        </button>
      </div>

      {/* Modal - Always Rendered */}
      <div
        className={`fixed inset-0 flex justify-center items-center z-40 transition-transform duration-500 ease-in-out ${
          isModalOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{
          backgroundColor: isModalOpen ? 'rgba(0,0,0,0.6)' : 'transparent',
        }}
        onClick={() => setIsModalOpen(false)}
      >
        <div
          className="bg-white w-full max-w-lg p-6 rounded-t-2xl z-50"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white bg-black rounded-full"
            onClick={() => setIsModalOpen(false)}
          >
            ✕
          </button>

          {/* Modal Content */}
          <h2 className="text-xl font-semibold text-gray-800">
            What is 'Maibel.ai'?
          </h2>
          <p className="mt-4 text-gray-600">
            This is an interactive fitness game that puts you at the heart of a thrilling Korean mystery.
            <br /><br />
            With your AI companion as your guide, you'll tackle fitness challenges as missions in the story.
            <br /><br />
            Stay committed to your healthy habits and immerse yourself in the story.
          </p>
        </div>
      </div>
    </div>
  );
}
