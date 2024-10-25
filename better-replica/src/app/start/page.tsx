import React from 'react';
import Link from 'next/link';

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

      <header className="py-6 text-center">
        <h1 className="text-3xl font-bold">Welcome to Better Mortgage</h1>
        <p className="mt-2 text-gray-600">
          Better Mortgage Corporation is a direct lender dedicated to providing a fast, transparent digital mortgage experience backed by superior customer support.
        </p>
      </header>
      
      <section className="faq-section mt-8">
        <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
        <div className="faq-item mt-4">
          <h3 className="font-bold">Why choose Better Mortgage?</h3>
          <p>
            When you work with us, you get a team that’s committed to providing a fast, transparent digital mortgage experience backed by superior customer support.
            <ul className="list-disc ml-5">
              <li>Industry-leading rates quoted in as few as 3 seconds</li>
              <li>Pre-approval in as few as 3 minutes</li>
              <li>100% online application process</li>
              <li>0% loan officer commission</li>
              <li>A team that provides support, not sales</li>
            </ul>
          </p>
        </div>

        <div className="faq-item mt-4">
          <h3 className="font-bold">Is Better Mortgage a direct lender?</h3>
          <p>Yes, we are. We work with all our borrowers from application through funding of the loan, which creates a seamless and consistent experience.</p>
        </div>

        <div className="faq-item mt-4">
          <h3 className="font-bold">Will Better service my mortgage?</h3>
          <p>No. Once your loan is funded, Better Mortgage will transfer ownership of your loan to an investor who will provide servicing. During the application process, we will match you to a reputable, quality investor that provides the right type of loan and servicing for your situation.</p>
        </div>

        {/* Add more FAQs as needed */}
      </section>

      <footer className="py-6 text-center">
        <p>Contact us at: <a href="mailto:hello@better.com" className="text-blue-600">hello@better.com</a></p>
        <p>Visit us at: <a href="https://better.com" className="text-blue-600">better.com</a></p>
      </footer>
    </div>
  );
};

export default StartPage;
