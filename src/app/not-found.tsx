import { BoltIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-dark-500 flex items-center justify-center px-4">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          {/* Error Code with Animation */}
          <div className="relative mb-8">
            <div className="text-[120px] md:text-[200px] font-bold text-primary/20 overflow-hidden">404</div>
          </div>

          {/* Joke Section */}
          <div className="bg-dark-300 rounded-2xl p-6 md:p-8 mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
              Looks like this page skipped leg day! 🏋️‍♂️
            </h2>
            <p className="text-gray-300 mb-6">
              Don't worry, we'll help you get back on track. This page might be missing, 
              but your fitness journey doesn't have to be!
            </p>
            <div className="flex items-center justify-center gap-2 text-primary">
              <BoltIcon className="w-5 h-5" />
              <span className="text-sm">Work in Progress</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-6 py-3 rounded-lg bg-primary text-dark-500 font-semibold hover:bg-opacity-90 transition-all duration-300"
            >
              Return to Home
            </Link>
            <Link
              href="/waiting-list"
              className="px-6 py-3 rounded-lg bg-dark-300 text-white font-semibold hover:bg-dark-400 transition-all duration-300"
            >
              Join Waiting List
            </Link>
          </div>

          {/* Fun Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-dark-300 rounded-xl p-4">
              <div className="text-2xl font-bold text-primary">404</div>
              <div className="text-sm text-gray-400">Error Code</div>
            </div>
            <div className="bg-dark-300 rounded-xl p-4">
              <div className="text-2xl font-bold text-primary">∞</div>
              <div className="text-sm text-gray-400">Reps to Fix</div>
            </div>
            <div className="bg-dark-300 rounded-xl p-4">
              <div className="text-2xl font-bold text-primary">0</div>
              <div className="text-sm text-gray-400">Excuses</div>
            </div>
            <div className="bg-dark-300 rounded-xl p-4">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-gray-400">Gains</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 