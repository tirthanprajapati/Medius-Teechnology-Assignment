"use client";

import Link from 'next/link';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="bg-white text-black p-4">
      {/* Navbar */}
      <nav className="bg-green-800 text-white py-4">
        <div className="flex justify-around">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/start" className="hover:underline">Start</Link>
          <Link href="/mortgage-calculator" className="hover:underline">Mortgage Calculator</Link>
          <Link href="/about-us" className="hover:underline">About Us</Link>
        </div>
      </nav>

      <header className="text-center py-16 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg">At Better Mortgage, we are committed to simplifying the mortgage process and making it more transparent.</p>
      </header>

      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="text-lg mb-6">
          Our mission is to provide our customers with a fast, hassle-free mortgage experience.
          We believe in complete transparency and dedication to helping our clients navigate the mortgage process.
        </p>
        <Image 
          src="https://placehold.co/800x400" 
          alt="Our Mission" 
          width={800} 
          height={400} 
          className="rounded-lg shadow-lg mb-6"
        />
      </section>

      <section className="container mx-auto py-16 px-4 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="team-member text-center">
            <Image 
              src="https://placehold.co/200" 
              alt="Team Member" 
              width={200} 
              height={200} 
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-600">CEO</p>
          </div>
          <div className="team-member text-center">
            <Image 
              src="https://placehold.co/200" 
              alt="Team Member" 
              width={200} 
              height={200} 
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Jane Smith</h3>
            <p className="text-gray-600">CTO</p>
          </div>
          <div className="team-member text-center">
            <Image 
              src="https://placehold.co/200" 
              alt="Team Member" 
              width={200} 
              height={200} 
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Alice Johnson</h3>
            <p className="text-gray-600">CFO</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-6">Our Values</h2>
        <p className="text-lg mb-6">
          We believe in transparency, efficiency, and customer-centricity. Our values guide us in providing the best mortgage experience possible.
        </p>
        <Image 
          src="https://placehold.co/800x400" 
          alt="Our Values" 
          width={800} 
          height={400} 
          className="rounded-lg shadow-lg mb-6"
        />
      </section>

      <footer className="text-center py-6 bg-gray-100">
        <p>Contact us at: <a href="mailto:hello@better.com" className="text-blue-600">hello@better.com</a></p>
        <p>Visit us at: <a href="https://better.com" className="text-blue-600">better.com</a></p>
      </footer>
    </div>
  );
};

export default AboutUs;