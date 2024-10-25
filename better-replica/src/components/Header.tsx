import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link href="/">Better.com Clone</Link>
        </h1>
        <nav className="flex space-x-4">
          <Link href="/sign-in" className="text-gray-600 hover:text-blue-500">Sign In</Link>
          <Link href="/buy" className="text-gray-600 hover:text-blue-500">Buy</Link>
          <Link href="/refinance" className="text-gray-600 hover:text-blue-500">Refinance</Link>
          <Link href="/heloc" className="text-gray-600 hover:text-blue-500">HELOC</Link>
          <Link href="/rates" className="text-gray-600 hover:text-blue-500">Rates</Link>
          <Link href="/better-plus" className="text-gray-600 hover:text-blue-500">Better+</Link>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700">
            Start My Approval
          </button>
        </nav>
      </div>
    </header>
  );
}
