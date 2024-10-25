export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center space-y-4">
          <div className="text-sm">
            Better Mortgage’s One Day Mortgage™ promotion offers qualified customers...
          </div>
          <p>&copy; {new Date().getFullYear()} Better.com Clone. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  