'use client';

import Head from 'next/head';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function EndPage() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Background Image</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/refer/end/favicon.jpg" />
      </Head>

      {/* Background Image */}
      <div className="relative w-screen h-screen flex justify-center items-center">
        <div className="absolute inset-0">
          {/* Desktop - Contain */}
          <Image
            src="/refer/end.jpg"
            alt="Background Desktop"
            layout="fill"
            objectFit="contain"
            className="hidden md:block"
            priority
          />
          {/* Mobile - Cover */}
          <Image
            src="/refer/end.jpg"
            alt="Background Mobile"
            layout="fill"
            objectFit="cover"
            className="block md:hidden"
            priority
          />
        </div>
      </div>

      {/* Back to Main Page Button */}
      <button
        onClick={() => router.push('/')}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-all duration-300"
      >
        Back to Main Page
      </button>
    </>
  );
}
