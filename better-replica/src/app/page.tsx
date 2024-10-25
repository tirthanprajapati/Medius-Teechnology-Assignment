"use client";

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [reviews, setReviews] = useState<string | null>(null);

  useEffect(() => {
    // Simulate fetching dynamic data
    setReviews("4.6 Stars | 3177 Google reviews");
  }, []);

  return (
    <div className="bg-white text-black">
      <Header />

      {/* Navbar */}
      <nav className="bg-green-800 text-white py-4">
        <div className="container mx-auto flex justify-around">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/start" className="hover:underline">Start</Link>
          <Link href="/mortgage-calculator" className="hover:underline">Mortgage Calculator</Link>
          <Link href="/about-us" className="hover:underline">About Us</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero bg-gray-100 py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">The rate drop you’ve been waiting for</h1>
        <p className="text-lg mb-6">3 min | No credit impact</p>
        <button className="bg-green-800 text-white px-8 py-3 rounded-full hover:bg-green-700">
          Start My Approval
        </button>
        {reviews && <div className="mt-4 text-sm text-gray-500">{reviews}</div>}
      </section>

      {/* Main Content */}
      <section className="main-content py-16 px-4 bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="content-left">
            <h2 className="text-3xl font-bold mb-4">Why Better?</h2>
            <p className="text-lg mb-6">We’re making homeownership simpler, faster — and most importantly, more accessible for all Americans.</p>
            <ul className="list-disc list-inside mb-6">
              <li className="mb-2">No commission, no origination fees, no lender fees.</li>
              <li className="mb-2">A 100% online process backed by real people when you need them.</li>
              <li className="mb-2">Get pre-approved in as little as 3 minutes.</li>
            </ul>
            <button className="bg-green-800 text-white px-8 py-3 rounded-full hover:bg-green-700">
              Learn More
            </button>
          </div>
          <div className="content-right">
            <Image 
              src="/images/home-ownership.jpg" 
              alt="Home Ownership" 
              width={500} 
              height={300} 
              className="rounded-lg shadow-lg" 
              placeholder="blur"
              blurDataURL="/images/placeholder.jpg"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services py-16 px-4 bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="service-card bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-2">One Day Mortgage</h2>
            <p>Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter in a single day.</p>
          </div>
          <div className="service-card bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-2">Better HELOC</h2>
            <p>Access up to 90% of your home equity as cash in as little as 7 days.</p>
          </div>
          <div className="service-card bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-2">Insurance</h2>
            <p>Shop, bundle, and save on insurance coverage for home, auto, life, and more.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}