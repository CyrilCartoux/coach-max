import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-dark-500">
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
              <p className="text-gray-300">
                Have a question or feedback? We'd love to hear from you.
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-dark-300 border border-dark-400 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Type your message here..."
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <EnvelopeIcon className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full pl-10 px-4 py-3 rounded-lg bg-dark-300 border border-dark-400 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-primary text-dark-500 font-semibold hover:bg-opacity-90 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
} 