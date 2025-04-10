'use client'

import Navbar from "./components/Navbar";
import FeatureCard from "./components/FeatureCard";
import { useEffect, useRef } from "react";
import Footer from "./components/Footer";

export default function Home() {
  const aiCoachVideoRef = useRef<HTMLVideoElement | null>(null);
  const storyModeVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (aiCoachVideoRef.current) {
      aiCoachVideoRef.current.playbackRate = 1.25;
    }
    if (storyModeVideoRef.current) {
      storyModeVideoRef.current.playbackRate = 1.25;
    }
  }, []);

  return (
    <div className="font-serif">
      <Navbar />

      {/* Hero Section */}
      <header className="bg-[#f6f2ea] text-center py-20 px-6">
        <h1 className="text-5xl font-bold text-[#512260] leading-tight">
          The Future of Women's Wellness Starts Here.
        </h1>
        <p className="mt-4 text-[#382a40] text-lg max-w-3xl mx-auto">
          Sick of confusing fitness apps? Maibel.ai is changing the game with
          <strong> AI-powered coaching</strong>, <strong> engaging storytelling</strong>, and
          <strong> real-life rewards</strong> - built <strong> by women, for women</strong>.
        </p>
        {/* <a
          href="/refer"
          className="mt-6 inline-block bg-[#512260] text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#382a40] shadow-md"
        >
          Join the Waitlist
        </a> */}
        <a
          href="https://www.yacpb.sg/home?project_id=80837647-8dbb-4762-b4ab-65a3ff3f5522"
          className="mt-6 inline-block bg-[#512260] text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#382a40] shadow-md"
        >
          Cast Your Vote
        </a>
      </header>

      {/* Social Proof / Problem Statement */}
      <section className="bg-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#382a40]">
          “I've tried a thousand wellness apps… but nothing sticks.”
        </h2>
        <p className="text-[#512260] mt-2 max-w-3xl mx-auto">
          Women make up <strong>60% of all fitness app users</strong>, yet most apps are
          <strong> built by men</strong>, lacking the <strong>personalization, motivation, and support</strong> that women need.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <div className="bg-[#c5aded] text-[#382a40] font-semibold px-4 py-2 rounded-lg shadow-md">
            85% of surveyees want to try Maibel.ai
          </div>
          <div className="bg-[#c5aded] text-[#382a40] font-semibold px-4 py-2 rounded-lg shadow-md">
            140+ women on our waitlist
          </div>
          <div className="bg-[#c5aded] text-[#382a40] font-semibold px-4 py-2 rounded-lg shadow-md">
            74% of users abandon wellness apps within 10 uses
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <div 
        className="max-w-5xl mx-auto"
        style={{
          backgroundImage: "url('/images/space.jpg')",
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          padding: '2rem'
        }}
      >
  
        {/* Centered Heading */}
        <h3 className="text-2xl font-bold text-white mb-6 text-center">See Maibel.ai in Action</h3>

        {/* Video Grid with Virtual Phone */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
          {/* AI Coach Video */}
          <div className="relative w-44 md:w-64 aspect-[9.18/18] bg-black rounded-[2rem] shadow-lg border-4 border-gray-900 overflow-hidden">
            <video
              ref={aiCoachVideoRef}
              className="w-full h-full object-cover translate-y-[5px]"
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
          <div className="relative w-44 md:w-64 aspect-[9.18/18] bg-black rounded-[2rem] shadow-lg border-4 border-gray-900 overflow-hidden">
            <video
              ref={storyModeVideoRef}
              className="w-full h-full object-cover translate-y-[5px]"
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

      {/* Embedded YouTube Video */}
      <div className="relative w-full pb-[56.25%] mt-6">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/E-VUrLCHc2E?si=fmiXP3WMvbY5YRhw"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>


      {/* Features Section */}
      <section id="features" className="py-20 bg-[#f6f2ea]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#382a40] px-6 sm:px-10">Why Women Love Maibel.ai</h2>
          <p className="text-[#512260] mt-2 px-6 sm:px-10">
            Built for real women - supporting habit-building, motivation, and fun.
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
      <section className="text-center py-16 bg-[#c5aded] px-6 sm:px-10">
        <h2 className="text-3xl font-bold text-[#382a40]">Be Part of the Wellness Revolution</h2>
        <p className="mt-4 text-[#512260] text-lg max-w-2xl mx-auto">
          We're on a mission to help women build <strong>lasting habits</strong> with motivation that actually works.
          Be the first to experience Maibel.ai and start your journey.
        </p>
        <a
          href="/refer"
          className="mt-6 inline-block bg-[#512260] text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#382a40] shadow-md"
        >
          Join the Waitlist Now
        </a>
      </section>

      <Footer />
    </div>
  );
}
