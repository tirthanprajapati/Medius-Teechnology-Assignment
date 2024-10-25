import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const StartPage = () => {
  return (
    <div className="container mx-auto px-4 bg-white text-black">
      {/* Navbar */}
      <nav className="bg-green-800 text-white py-4">
        <div className="flex justify-around">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/start" className="hover:underline">Start</Link>
          <Link href="/mortgage-calculator" className="hover:underline">Mortgage Calculator</Link>
          <Link href="/about-us" className="hover:underline">About Us</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero bg-gray-100 py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Get started with Better Mortgage</h1>
        <p className="text-lg mb-6">Fast, transparent, and backed by superior customer support.</p>
        <button className="bg-green-800 text-white px-8 py-3 rounded-full hover:bg-green-700">
          Start My Approval
        </button>
      </section>

      {/* Steps Section */}
      <section className="steps py-16 px-4 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="step">
            <Image src="/images/step1.png" alt="Step 1" width={100} height={100} className="mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Step 1</h2>
            <p>Get pre-approved in as little as 3 minutes.</p>
          </div>
          <div className="step">
            <Image src="/images/step2.png" alt="Step 2" width={100} height={100} className="mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Step 2</h2>
            <p>Complete your application online with ease.</p>
          </div>
          <div className="step">
            <Image src="/images/step3.png" alt="Step 3" width={100} height={100} className="mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Step 3</h2>
            <p>Get your loan funded quickly and efficiently.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials py-16 px-4 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What our customers are saying</h2>
          <div className="testimonial mb-8">
            <p className="text-lg italic">&quot;Better Mortgage made the process so easy and stress-free. Highly recommend!&quot;</p>
            <p className="mt-4">- John Doe</p>
          </div>
          <div className="testimonial mb-8">
            <p className="text-lg italic">&quot;The best mortgage experience I&apos;ve ever had. Fast and transparent.&quot;</p>
            <p className="mt-4">- Jane Smith</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="faq-item mb-8">
            <h3 className="text-2xl font-semibold mb-2">Why choose Better Mortgage?</h3>
            <p>We provide a fast, transparent digital mortgage experience backed by superior customer support.</p>
          </div>
          <div className="faq-item mb-8">
            <h3 className="text-2xl font-semibold mb-2">Is Better Mortgage a direct lender?</h3>
            <p>Yes, we are. We work with all our borrowers from application through funding of the loan, which creates a seamless and consistent experience.</p>
          </div>
          <div className="faq-item mb-8">
            <h3 className="text-2xl font-semibold mb-2">Will Better service my mortgage?</h3>
            <p>No. Once your loan is funded, Better Mortgage will transfer ownership of your loan to an investor who will provide servicing. During the application process, we will match you to a reputable, quality investor that provides the right type of loan and servicing for your situation.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-100">
        <p>Contact us at: <a href="mailto:hello@better.com" className="text-blue-600">hello@better.com</a></p>
        <p>Visit us at: <a href="https://better.com" className="text-blue-600">better.com</a></p>
      </footer>
    </div>
  );
};

export default StartPage;
