import React from "react";

export default function Login() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-white">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
        {/* Title */}
        <h2 className="mb-6 text-center text-3xl font-extrabold text-gray-800">
          Welcome Back
        </h2>
        <p className="mb-6 text-center text-sm text-gray-500">
          Login to continue your scholarly journey ✨
        </p>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email or Useraname
            </label>
            <input
              type="email"
              placeholder="Enter your Email or Username"
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-2 text-white font-semibold shadow-md transition hover:bg-blue-700 hover:shadow-lg"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <hr className="flex-1 border-gray-300" />
          <span className="mx-3 text-sm text-gray-400">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>



        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <a
            href="#"
            className="font-medium text-blue-600 hover:underline hover:text-blue-700"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
