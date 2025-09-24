import React, { useState } from "react";
import { BookOpen, Users, Search } from "lucide-react";

export default function Landing() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="relative min-h-screen bg-white text-black">
      {/* Landing Content */}
      <div className={showLogin || showSignup ? "blur-sm" : ""}>
        {/* Navbar */}
        <header className="flex items-center justify-between px-8 py-4 shadow-sm bg-white rounded-xl mx-4 mt-4 border border-gray-200">
          <h1 className="text-2xl font-bold">ScholarLink</h1>
          <div className="flex space-x-2">
            <button
              onClick={() => setShowSignup(true)}
              className="!bg-white !text-black !border !border-black !px-4 !py-2 !rounded-lg !text-sm !transition"
            >
              Sign Up
            </button>

            <button
              onClick={() => setShowLogin(true)}
              className="!bg-white !text-black !border !border-black !px-4 !py-2 !rounded-lg !text-sm !transition"
            >
              Login
            </button>
          </div>
        </header>

        {/* Features Section */}
        <section id="features" className="px-8 py-20 bg-white">
          <h3 className="mb-12 text-center text-3xl font-bold">Why Choose ScholarLink?</h3>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="rounded-xl bg-white p-8 border border-gray-200 shadow-sm hover:shadow-lg transition">
              <BookOpen className="h-10 w-10 mb-4" />
              <h4 className="mb-2 text-lg font-semibold">Extensive Resources</h4>
              <p className="text-sm text-gray-600">
                Access thousands of peer-reviewed journals, conference papers, and academic articles.
              </p>
            </div>
            <div className="rounded-xl bg-white p-8 border border-gray-200 shadow-sm hover:shadow-lg transition">
              <Search className="h-10 w-10 mb-4" />
              <h4 className="mb-2 text-lg font-semibold">Powerful Search</h4>
              <p className="text-sm text-gray-600">
                Quickly find the most relevant research with smart filters and keyword matching.
              </p>
            </div>
            <div className="rounded-xl bg-white p-8 border border-gray-200 shadow-sm hover:shadow-lg transition">
              <Users className="h-10 w-10 mb-4" />
              <h4 className="mb-2 text-lg font-semibold">Collaboration</h4>
              <p className="text-sm text-gray-600">
                Connect with scholars, share your work, and grow your academic network globally.
              </p>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section id="stats" className="bg-white text-black px-8 py-16 text-center rounded-xl mx-4">
          <h3 className="mb-10 text-3xl font-bold">Trusted by Researchers Worldwide</h3>
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
          <h3 className="mb-6 text-3xl font-bold">Start Your Research Journey Today</h3>
          <p className="mb-8 text-lg text-gray-600">
            Create a free account and gain access to thousands of scholarly resources.
          </p>
          <button
            onClick={() => setShowLogin(true)}
            className="!bg-white !text-black !border !border-black !px-6 !py-3 !rounded-lg !transition"
          >
            Get Started
          </button>
        </section>

        {/* Footer */}
        <footer className="mt-12 bg-gray-100 py-6 text-center text-sm text-gray-500 rounded-xl mx-4 mb-4 border border-gray-200">
          © {new Date().getFullYear()} ScholarLink. All rights reserved.
        </footer>
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-black/40 z-50">
          <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl border border-gray-300">
            <h2 className="mb-6 text-center text-3xl font-extrabold text-black">Welcome Back</h2>
            <p className="mb-6 text-center text-sm text-gray-500">
              Login to continue your scholarly journey ✨
            </p>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-black">Email or Username</label>
                <input
                  type="email"
                  placeholder="Enter your Email or Username"
                  className="mt-1 w-full rounded-lg border border-gray-300 p-3 text-sm shadow-sm focus:border-black focus:ring focus:ring-gray-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="mt-1 w-full rounded-lg border border-gray-300 p-3 text-sm shadow-sm focus:border-black focus:ring focus:ring-gray-200"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg !bg-black !text-white py-2 font-semibold shadow-md"
              >
                Login
              </button>
            </form>
            <button
              onClick={() => setShowLogin(false)}
              className="mt-6 w-full rounded-lg !bg-white !text-black !border !border-gray-300 px-4 py-2 text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {showSignup && (
        <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-black/40 z-50">
          <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl border border-gray-300">
            <h2 className="mb-6 text-center text-3xl font-extrabold text-black">Create Account</h2>
            <p className="mb-6 text-center text-sm text-gray-500">
              Sign up to start your scholarly journey ✨
            </p>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-black">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-1 w-full rounded-lg border border-gray-300 p-3 text-sm shadow-sm focus:border-black focus:ring focus:ring-gray-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black">Username</label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="mt-1 w-full rounded-lg border border-gray-300 p-3 text-sm shadow-sm focus:border-black focus:ring focus:ring-gray-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="mt-1 w-full rounded-lg border border-gray-300 p-3 text-sm shadow-sm focus:border-black focus:ring focus:ring-gray-200"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg !bg-black !text-white py-2 font-semibold shadow-md"
              >
                Sign Up
              </button>
            </form>
            <button
              onClick={() => setShowSignup(false)}
              className="mt-6 w-full rounded-lg !bg-white !text-black !border !border-gray-300 px-4 py-2 text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
