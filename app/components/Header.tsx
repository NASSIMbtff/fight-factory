"use client";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-black text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold text-red-500 hover:text-red-600">
          Fight Factory
        </Link>
        <nav className="flex space-x-6">
          <Link href="/" className="hover:text-red-500">
            Accueil
          </Link>
          <Link href="/events" className="hover:text-red-500">
            Événements
          </Link>
          <Link href="/contact" className="hover:text-red-500">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
