'use client'

import Navbar from "./components/Navbar";
import FeatureCard from "./components/FeatureCard";
import { useEffect, useRef } from "react";

export default function Home() {
  const aiCoachVideoRef = useRef<HTMLVideoElement | null>(null);
  const storyModeVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (aiCoachVideoRef.current) {
      aiCoachVideoRef.current.playbackRate = 1.25; // Speed up AI coach video
    }
    if (storyModeVideoRef.current) {
      storyModeVideoRef.current.playbackRate = 1.25; // Speed up story mode video
    }
  }, []);

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <header className="bg-pink-100 text-center py-20 px-6">
        <h1 className="text-5xl font-bold text-pink-600 leading-tight">
          The Future of Women's Wellness Starts Here.
        </h1>
        <p className="mt-4 text-gray-700 text-lg max-w-3xl mx-auto">
          74% of users abandon wellness apps within 10 uses. Maibel.ai is changing the game with 
          <strong> AI-powered coaching</strong>, <strong> engaging storytelling</strong>, and 
          <strong> real-life rewards</strong>—built <strong> by women, for women</strong>.
        </p>
        <a
          href="/refer"
          className="mt-6 inline-block bg-pink-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-pink-600 shadow-md"
        >
          Join the Waitlist - Be the First to Try
        </a>
      </header>

      {/* Social Proof / Problem Statement */}
      <section className="bg-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          “I've tried a thousand wellness apps… but nothing sticks.”
        </h2>
        <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
          Women make up <strong>60% of all fitness app users</strong>, yet most apps are 
          <strong> built by men</strong>, lacking the <strong>personalization, motivation, and support</strong> that women need.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <div className="bg-pink-200 text-pink-800 font-semibold px-4 py-2 rounded-lg shadow-md">
            85% of surveyed users want to try Maibel.ai
          </div>
          <div className="bg-pink-200 text-pink-800 font-semibold px-4 py-2 rounded-lg shadow-md">
            140+ women on our waitlist
          </div>
        </div>

        {/* Video Showcase */}
        <div className="mt-10 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">See Maibel.ai in Action</h3>

          {/* Video Grid with Virtual Phone */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {/* AI Coach Video */}
            <div className="relative w-44 md:w-64 aspect-[9/16] bg-black rounded-[2rem] shadow-lg border-4 border-gray-900 overflow-hidden">
              <video
                ref={aiCoachVideoRef}
                className="w-full h-full object-contain"
                controls
                loop
                autoPlay
                muted
              >
                <source src="/videos/coach_chat.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Notch (Fake Phone Look) */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-3 bg-gray-800 rounded-full"></div>
            </div>

            {/* Story Mode Video */}
            <div className="relative w-44 md:w-64 aspect-[9/16] bg-black rounded-[2rem] shadow-lg border-4 border-gray-900 overflow-hidden">
              <video
                ref={storyModeVideoRef}
                className="w-full h-full object-contain"
                controls
                loop
                autoPlay
                muted
              >
                <source src="/videos/stories.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Notch (Fake Phone Look) */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-3 bg-gray-800 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Why Women Love Maibel.ai</h2>
          <p className="text-gray-600 mt-2">
            Built for real women—supporting habit-building, motivation, and fun.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
          <FeatureCard
            title="Your AI Coach, Your Way"
            description="Customize your AI health coach to match your personality, habits, and goals."
            icon="🤖"
          />
          <FeatureCard
            title="Story-Driven Gamification"
            description="Healthy habits unlock new storylines and real-world rewards."
            icon="📖"
          />
          <FeatureCard
            title="Designed for Women"
            description="A wellness experience tailored to women's unique needs, not a one-size-fits-all app."
            icon="💖"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-pink-100">
        <h2 className="text-3xl font-bold text-pink-600">Be Part of the Wellness Revolution</h2>
        <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
          We're on a mission to help women build <strong>lasting habits</strong> with motivation that actually works.
          Be the first to experience Maibel.ai and start your journey.
        </p>
        <a
          href="/refer"
          className="mt-6 inline-block bg-pink-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-pink-600 shadow-md"
        >
          Join the Waitlist Now
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-600">
        © 2025 Maibel.ai | <a href="mailto:theteammaibel@gmail.com" className="text-pink-500">Contact Us</a>
      </footer>
    </div>
  );
}
