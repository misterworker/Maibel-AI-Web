// pages/index.tsx
import Navbar from "./components/Navbar";
import FeatureCard from "./components/FeatureCard";

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <header className="bg-pink-100 text-center py-20 px-6">
        <h1 className="text-4xl font-bold text-pink-600">
          Storytelling meets AI-powered habit coaching.
        </h1>
        <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
          Revolutionizing wellness for women with personalized coaching, engaging narratives, and real-world rewards.
        </p>
        <a
          href="https://www.maibel-ai.com/"
          className="mt-6 inline-block bg-pink-500 text-white py-3 px-6 rounded-lg hover:bg-pink-600"
        >
          Join the Waitlist
        </a>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Why Maibel.ai?</h2>
          <p className="text-gray-600 mt-2">Empowering women through AI-driven health coaching.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
          <FeatureCard
            title="Personalized AI Coaching"
            description="Customize your AI health coach for tailored guidance."
            icon="🤖"
          />
          <FeatureCard
            title="Story-Driven Gamification"
            description="Unlock in-app storylines and rewards as you build habits."
            icon="📖"
          />
          <FeatureCard
            title="Women-Centric Design"
            description="Built specifically for women’s unique health needs."
            icon="💖"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-600">
        © 2025 Maibel.ai | <a href="mailto:test@gmail.com" className="text-pink-500">Contact Us</a>
      </footer>
    </div>
  );
}
