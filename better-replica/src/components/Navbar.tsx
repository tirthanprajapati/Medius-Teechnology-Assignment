// components/Navbar.tsx
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white text-black shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Better Mortgage</h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-700">Home</Link>
          </li>
          <li>
            <Link href="/start" className="hover:text-gray-700">Start</Link>
          </li>
          <li>
            <Link href="/calculator" className="hover:text-gray-700">Calculator</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-700">About Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
