import Link from 'next/link';

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

      <h1 className="text-3xl font-bold text-center mt-6">About Us</h1>
      <p className="mt-4 text-center">
        At Better Mortgage, we are committed to simplifying the mortgage process and making it more transparent.
      </p>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p>
          Our mission is to provide our customers with a fast, hassle-free mortgage experience.
          We believe in complete transparency and dedication to helping our clients navigate the mortgage process.
        </p>
      </section>

      <footer className="text-center mt-10">
        <p>Contact us at: <a href="mailto:hello@better.com" className="text-blue-600">hello@better.com</a></p>
        <p>Visit us at: <a href="https://better.com" className="text-blue-600">better.com</a></p>
      </footer>
    </div>
  );
};

export default AboutUs;
