import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to Better.com Clone</h1>
      <nav className="space-x-4">
        <Link href="/about-us" passHref>
          <a className="text-blue-500 hover:text-blue-700">About Us</a>
        </Link>
        <Link href="/mortgage-calculator" passHref>
          <a className="text-blue-500 hover:text-blue-700">Mortgage Calculator</a>
        </Link>
        <Link href="/start" passHref>
          <a className="text-blue-500 hover:text-blue-700">Get Started</a>
        </Link>
      </nav>
    </div>
  );
}
