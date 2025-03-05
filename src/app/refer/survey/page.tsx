'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function SurveyPage() {
  const [fitnessApp, setFitnessApp] = useState('');
  const [otherApp, setOtherApp] = useState('');
  const [likedMaibel, setLikedMaibel] = useState('');
  const [newFeature, setNewFeature] = useState('');
  const [excitement, setExcitement] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 50);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      fitnessApp,
      otherApp,
      likedMaibel,
      newFeature,
      excitement,
    };

    localStorage.setItem('surveyData', JSON.stringify(formData));
    router.push('/refer/signup');
  };

  return (
    <div className="relative w-full h-screen bg-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/refer/signup.jpg"
          alt="Background"
          layout="fill"
          objectFit="contain"
          className="z-0"
        />
        <Image
          src="/refer/signup.jpg"
          alt="Background Mobile"
          layout="fill"
          objectFit="cover"
          className="block md:hidden"
        />
      </div>

      {/* Survey Container - Fixed to the Center */}
      <div
        className={`fixed inset-0 flex justify-center items-center z-10 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        } transition-all duration-1000 ease-out`}
      >
        <div className="bg-black bg-opacity-70 p-8 rounded-lg text-white max-w-md w-full shadow-lg max-h-[50%] overflow-y-auto">
          <h2 className="text-3xl font-bold mb-6">Maibel.ai Feedback Survey</h2>
          <form onSubmit={handleSubmit} id="surveyForm">
            {/* Question 1 */}
            <div className="mb-4">
              <label className="block mb-2" htmlFor="fitnessApp">
                1) Have you seen any other fitness or wellness apps with a similar concept?
              </label>
              <div className="flex gap-4">
                <label>
                  <input
                    type="radio"
                    name="fitnessApp"
                    value="Yes"
                    checked={fitnessApp === 'Yes'}
                    onChange={(e) => setFitnessApp(e.target.value)}
                    required
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="fitnessApp"
                    value="No"
                    checked={fitnessApp === 'No'}
                    onChange={(e) => setFitnessApp(e.target.value)}
                  />
                  No
                </label>
              </div>
              {fitnessApp === 'Yes' && (
                <div className="mt-2">
                  <input
                    type="text"
                    id="otherApp"
                    name="otherApp"
                    placeholder="If yes, please specify"
                    value={otherApp}
                    onChange={(e) => setOtherApp(e.target.value)}
                    className="w-full p-3 bg-gray-800 rounded-md mt-2"
                  />
                </div>
              )}
            </div>

            {/* Question 2 */}
            <div className="mb-4">
              <label className="block mb-2" htmlFor="likedMaibel">
                2) What did you like the most about Maibel.ai?
              </label>
              <select
                name="likedMaibel"
                value={likedMaibel}
                onChange={(e) => setLikedMaibel(e.target.value)}
                required
                className="w-full p-3 bg-gray-800 rounded-md"
              >
                <option value="Choose-your-adventure gameplay">Choose-your-adventure gameplay</option>
                <option value="The K-drama storyline">The K-drama storyline</option>
                <option value="Tracking fitness progress">Tracking fitness progress</option>
                <option value="Building my custom AI coach">Building my custom AI coach</option>
                <option value="Gaining rewards for healthy habits">Gaining rewards for healthy habits</option>
              </select>
            </div>

            {/* Question 3 */}
            <div className="mb-4">
              <label className="block mb-2" htmlFor="newFeature">
                3) What is one new/innovative AI feature you’d like to see for Maibel.ai?
              </label>
              <input
                type="text"
                name="newFeature"
                value={newFeature}
                onChange={(e) => setNewFeature(e.target.value)}
                required
                className="w-full p-3 bg-gray-800 rounded-md"
              />
            </div>

            {/* Question 4 */}
            <div className="mb-4">
              <label className="block mb-2" htmlFor="excitement">
                4) How excited are you for Maibel.ai?
              </label>
              <div className="flex gap-4">
                <label>
                  <input
                    type="radio"
                    name="excitement"
                    value="Yes, I'm in!"
                    checked={excitement === "Yes, I'm in!"}
                    onChange={(e) => setExcitement(e.target.value)}
                    required
                  />
                  Yes, I'm in!
                </label>
                <label>
                  <input
                    type="radio"
                    name="excitement"
                    value="Ok"
                    checked={excitement === 'Ok'}
                    onChange={(e) => setExcitement(e.target.value)}
                  />
                  Ok
                </label>
                <label>
                  <input
                    type="radio"
                    name="excitement"
                    value="Not really"
                    checked={excitement === 'Not really'}
                    onChange={(e) => setExcitement(e.target.value)}
                  />
                  Not really
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full p-4 bg-gradient-to-r from-purple-700 to-pink-500 text-white rounded-full mt-6 transition-opacity duration-300 hover:opacity-80"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
