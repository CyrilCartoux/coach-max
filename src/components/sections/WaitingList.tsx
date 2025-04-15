import { BoltIcon } from "@heroicons/react/24/outline";

export default function WaitingList() {
  return (
    <section className="py-20 bg-dark-400">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-dark-300 text-primary mb-6">
            <span className="flex items-center gap-2">
              <BoltIcon className="w-5 h-5" />
              Limited Access
            </span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Our Exclusive Waiting List
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Due to overwhelming demand, we're currently managing access to ensure the best experience for our users. 
            Join our waiting list to be notified when spots become available.
          </p>
          <a
            href="/waiting-list"
            className="inline-block px-8 py-4 rounded-lg bg-primary text-dark-500 font-semibold hover:bg-opacity-90 transition-all duration-300"
          >
            Join Waiting List
          </a>
        </div>
      </div>
    </section>
  );
} 