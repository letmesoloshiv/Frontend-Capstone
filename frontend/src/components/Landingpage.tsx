import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Users, Search } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-4 shadow-sm bg-white">
        <h1 className="text-2xl font-bold text-blue-700">ScholarLink</h1>
        <nav className="space-x-6 text-sm font-medium hidden md:block">
          <a href="#features" className="hover:text-blue-600">
            Features
          </a>
          <a href="#stats" className="hover:text-blue-600">
            Statistics
          </a>
          <a href="#about" className="hover:text-blue-600">
            About
          </a>
          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </nav>
        <Link
          to="/login"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
        >
          Login
        </Link>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-6 py-24 text-center bg-gradient-to-r from-blue-50 to-indigo-100">
        <h2 className="mb-6 text-4xl md:text-5xl font-bold text-gray-900">
          Unlock Knowledge. Empower Research.
        </h2>
        <p className="mb-8 max-w-2xl text-lg text-gray-600">
          ScholarLink connects students, educators, and researchers to a global
          library of scholarly articles, journals, and trusted academic
          resources.
        </p>
        <div className="flex w-full max-w-md items-center rounded-lg border bg-white p-2 shadow-sm">
          <input
            type="text"
            placeholder="Search for papers, authors, or topics..."
            className="w-full px-3 py-2 text-sm outline-none"
          />
          <button className="ml-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Search
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-8 py-20 bg-white">
        <h3 className="mb-12 text-center text-3xl font-bold text-gray-800">
          Why Choose ScholarLink?
        </h3>
        <div className="grid gap-10 md:grid-cols-3">
          <div className="rounded-xl bg-gray-50 p-8 shadow-md hover:shadow-lg transition">
            <BookOpen className="h-10 w-10 text-blue-600 mb-4" />
            <h4 className="mb-2 text-lg font-semibold text-gray-900">
              Extensive Resources
            </h4>
            <p className="text-sm text-gray-600">
              Access thousands of peer-reviewed journals, conference papers, and
              academic articles.
            </p>
          </div>
          <div className="rounded-xl bg-gray-50 p-8 shadow-md hover:shadow-lg transition">
            <Search className="h-10 w-10 text-blue-600 mb-4" />
            <h4 className="mb-2 text-lg font-semibold text-gray-900">
              Powerful Search
            </h4>
            <p className="text-sm text-gray-600">
              Quickly find the most relevant research with smart filters and
              keyword matching.
            </p>
          </div>
          <div className="rounded-xl bg-gray-50 p-8 shadow-md hover:shadow-lg transition">
            <Users className="h-10 w-10 text-blue-600 mb-4" />
            <h4 className="mb-2 text-lg font-semibold text-gray-900">
              Collaboration
            </h4>
            <p className="text-sm text-gray-600">
              Connect with scholars, share your work, and grow your academic
              network globally.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section
        id="stats"
        className="bg-blue-600 text-white px-8 py-16 text-center"
      >
        <h3 className="mb-10 text-3xl font-bold">
          Trusted by Researchers Worldwide
        </h3>
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <p className="text-4xl font-bold">10k+</p>
            <p className="mt-2 text-sm">Research Papers</p>
          </div>
          <div>
            <p className="text-4xl font-bold">2k+</p>
            <p className="mt-2 text-sm">Journals Indexed</p>
          </div>
          <div>
            <p className="text-4xl font-bold">50+</p>
            <p className="mt-2 text-sm">Disciplines Covered</p>
          </div>
          <div>
            <p className="text-4xl font-bold">120+</p>
            <p className="mt-2 text-sm">Countries</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-8 py-20 text-center">
        <h3 className="mb-6 text-3xl font-bold text-gray-900">
          Start Your Research Journey Today
        </h3>
        <p className="mb-8 text-lg text-gray-600">
          Create a free account and gain access to thousands of scholarly
          resources.
        </p>
        <Link
          to="/login"
          className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Get Started
        </Link>
      </section>

      {/* Footer */}
      <footer className="mt-12 bg-gray-100 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ScholarLink. All rights reserved.
      </footer>
    </div>
  );
}
