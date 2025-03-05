// /src/app/refer/end/page.tsx
'use client';

import Head from 'next/head';
import { useRouter } from 'next/navigation';

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
      <div
        className="w-screen h-screen flex justify-center items-center relative"
        style={{
          backgroundImage: "url('/refer/end.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <button
          onClick={() => router.push('/')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-all duration-300"
        >
          Back to Main Page
        </button>
      </div>
    </>
  );
}
