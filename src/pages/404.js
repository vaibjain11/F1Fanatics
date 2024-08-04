// pages/404.js

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Head>
        <title>404 - Page Not Found | F1 Fanatics</title>
      </Head>
      <div className="text-center p-8 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg">
        <div className="flex justify-center mb-8">
          <Image
            src="/404.jpg"
            alt="404"
            width={500}
            height={300}
            className="rounded"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">
          Oops! Looks like this track does not exist on our circuit.
        </p>
        <Link href="/teams/2024" className="bg-red-600 text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition duration-300">
          Back to Pit Lane
        </Link>
      </div>
    </div>
  );
};

export default Custom404;