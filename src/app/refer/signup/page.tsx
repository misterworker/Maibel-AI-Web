// /src/app/refer/signup/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const router = useRouter();

  // Form fields state
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [goal, setGoal] = useState<string[]>([]);
  const [otherGoal, setOtherGoal] = useState('');
  const [level, setLevel] = useState('');

  // UI state
  const [isContainerVisible, setIsContainerVisible] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Data from survey stored in localStorage
  const [surveyData, setSurveyData] = useState<any>({});

  useEffect(() => {
    // Animate container visibility
    setTimeout(() => {
      setIsContainerVisible(true);
    }, 50);

    // Load survey data (if any)
    const storedSurvey = localStorage.getItem('surveyData');
    if (storedSurvey) {
      setSurveyData(JSON.parse(storedSurvey));
    }
  }, []);

  const handleGoalChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = Array.from(e.target.selectedOptions, (option) => option.value);
    setGoal(selected);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Show confirmation popup
    setIsPopupVisible(true);
  };

  const handleConfirm = async () => {
    setIsPopupVisible(false);
    setIsProcessing(true);

    // Get recaptcha response
    const recaptchaResponse = (window as any).grecaptcha?.getResponse();
    if (!recaptchaResponse) {
      alert('Please complete the CAPTCHA.');
      setIsProcessing(false);
      return;
    }

    // Prepare form data. For "goal", if "Other" is selected, append the otherGoal value.
    const formData = {
      name,
      age,
      email,
      goal: goal.includes('Other')
        ? [...goal.filter((g) => g !== 'Other'), otherGoal].join(', ')
        : goal.join(', '),
      level,
    };

    // Merge survey data from local storage with signup data
    const combinedData = { ...formData, ...surveyData };

    try {
      const response = await fetch(
        'https://roadshow-signup-78306345447.asia-southeast1.run.app/submit-form',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(combinedData),
        }
      );
      setIsProcessing(false);
      if (response.ok) {
        alert('Signed up successfully!');
        router.push('/refer/end'); // Redirect to end page (adjust route as needed)
      } else {
        alert('Failed to sign up. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
      setIsProcessing(false);
    }
  };

  const handleCancel = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="relative flex items-center justify-center w-full h-screen bg-white">
      {/* Load Font Awesome and Google reCAPTCHA */}
      <Script src="https://kit.fontawesome.com/615f206e39.js" crossOrigin="anonymous" />
      <Script src="https://www.google.com/recaptcha/api.js" async defer />

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

      {/* Signup Container */}
      <div
        className={`bg-black bg-opacity-70 p-8 rounded-lg text-white max-w-md w-full shadow-lg transition-all duration-1000 ease-out ${
          isContainerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <form id="signupForm" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Name */}
            <div className="relative">
              <i className="fa-solid fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-lg text-white/70"></i>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-md bg-white/20 text-white placeholder-white/70"
              />
            </div>

            {/* Age */}
            <div className="relative">
              <i className="fa-solid fa-cake-candles absolute left-3 top-1/2 transform -translate-y-1/2 text-lg text-white/70"></i>
              <select
                id="age"
                name="age"
                required
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-md bg-white/20 text-white"
              >
                <option value="" disabled>
                  Age
                </option>
                <option value="<=17">17 and below</option>
                <option value="18-24">18-24</option>
                <option value="25-34">25-34</option>
                <option value="35-44">35-44</option>
                <option value="45-54">45-54</option>
                <option value=">=55">55 and above</option>
              </select>
            </div>

            {/* Email */}
            <div className="relative">
              <i className="fa-solid fa-at absolute left-3 top-1/2 transform -translate-y-1/2 text-lg text-white/70"></i>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-md bg-white/20 text-white placeholder-white/70"
              />
            </div>

            {/* Goal (Multiple Select) */}
            <div className="relative">
              <i className="fa-solid fa-dumbbell absolute left-3 top-1/2 transform -translate-y-1/2 text-lg text-white/70"></i>
              <select
                id="goal"
                name="goal"
                multiple
                required
                value={goal}
                onChange={handleGoalChange}
                className="w-full pl-10 pr-4 py-2 rounded-md bg-white/20 text-white"
              >
                <option value="Lose Weight">Lose weight</option>
                <option value="Get Stronger">Get Stronger</option>
                <option value="Build Muscle">Build Muscle</option>
                <option value="General Health">General Health</option>
                <option value="Flexibility">Flexibility</option>
                <option value="Cardiovascular Endurance">Cardiovascular Endurance</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Other Goal (conditionally rendered) */}
            {goal.includes('Other') && (
              <div className="relative">
                <i className="fa-solid fa-question absolute left-3 top-1/2 transform -translate-y-1/2 text-lg text-white/70"></i>
                <input
                  type="text"
                  id="otherGoal"
                  name="otherGoal"
                  placeholder="Please specify"
                  required
                  value={otherGoal}
                  onChange={(e) => setOtherGoal(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-md bg-white/20 text-white placeholder-white/70"
                />
              </div>
            )}

            {/* Fitness Level */}
            <div className="relative">
              <i className="fa-solid fa-running absolute left-3 top-1/2 transform -translate-y-1/2 text-lg text-white/70"></i>
              <select
                id="level"
                name="level"
                required
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-md bg-white/20 text-white"
              >
                <option value="" disabled>
                  Fitness Levels
                </option>
                <option value="newbie">Newbie</option>
                <option value="casual">Casual</option>
                <option value="regular">Regular</option>
              </select>
            </div>

            {/* Google reCAPTCHA */}
            <div
              className="g-recaptcha"
              data-sitekey="6LeQlLcqAAAAAAwP0rVmDugX1mFqZTPxX3IfM6zu"
            ></div>

            {/* Submit Button */}
            <button
              type="submit"
              id="submitBtn"
              className="w-full py-3 rounded-md bg-gradient-to-r from-purple-700 to-pink-500 mt-4 transition-opacity duration-300 hover:opacity-80"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>

      {/* Processing Popup */}
      {isProcessing && (
        <div
          id="processingPopup"
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
        >
          <div className="bg-white p-6 rounded-md text-black text-center">
            <h3 className="text-lg font-bold mb-4">Processing...</h3>
            <i className="fa-solid fa-spinner fa-spin text-2xl"></i>
          </div>
        </div>
      )}

      {/* Confirmation Popup */}
      {isPopupVisible && (
        <div
          id="popup"
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
        >
          <div className="bg-white p-6 rounded-md text-black text-center w-72">
            <h3 className="text-lg font-bold mb-4">
              Are you sure the information is correct?
            </h3>
            <div className="flex justify-around">
              <button
                className="bg-green-600 text-white px-4 py-2 rounded-md"
                onClick={handleConfirm}
              >
                Yes, Submit
              </button>
              <button
                className="bg-red-600 text-white px-4 py-2 rounded-md"
                onClick={handleCancel}
              >
                No, Go Back
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
