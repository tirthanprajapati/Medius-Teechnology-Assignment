import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
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
        <div className="mt-4 text-sm text-gray-500">4.6 Stars | 3177 Google reviews</div>
      </section>

      {/* Content Sections */}
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
