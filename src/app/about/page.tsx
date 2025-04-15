import { BoltIcon, HeartIcon, LightBulbIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-dark-500">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-400 to-dark-500 opacity-50"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              About Coach Max
            </h1>
            <p className="text-xl text-gray-300">
              We're revolutionizing personal fitness through AI-powered coaching, making professional-grade training accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-dark-400">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Our Story
            </h2>
            <div className="space-y-6 text-gray-300">
              <p>
                Coach Max was born from a simple observation: while technology has transformed many aspects of our lives, 
                personal fitness coaching remained inaccessible to most people. We set out to change that.
              </p>
              <p>
                Founded by a team of fitness professionals, AI experts, and tech enthusiasts, we combined our expertise 
                to create something truly revolutionary. Our mission was clear: make professional-grade fitness coaching 
                available to everyone, everywhere.
              </p>
              <p>
                Today, Coach Max stands at the intersection of cutting-edge AI technology and proven fitness methodologies. 
                We're not just another fitness app – we're your personal AI coach, available 24/7 to guide, motivate, 
                and help you achieve your fitness goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-dark-500">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              To democratize access to professional fitness coaching through AI technology, making it personalized, 
              affordable, and effective for everyone.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-dark-300 rounded-2xl p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <HeartIcon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Personalized Coaching</h3>
                <p className="text-gray-300">
                  Tailored workout plans and nutrition guidance based on your goals, fitness level, and preferences.
                </p>
              </div>

              <div className="bg-dark-300 rounded-2xl p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <LightBulbIcon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">AI-Powered Insights</h3>
                <p className="text-gray-300">
                  Advanced algorithms analyze your progress and adapt your training in real-time for optimal results.
                </p>
              </div>

              <div className="bg-dark-300 rounded-2xl p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <UserGroupIcon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Community Support</h3>
                <p className="text-gray-300">
                  Connect with like-minded individuals, share progress, and stay motivated together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-dark-400">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Our Values
            </h2>
            
            <div className="space-y-8">
              <div className="bg-dark-300 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
                <p className="text-gray-300">
                  We constantly push the boundaries of what's possible in fitness technology, 
                  always seeking new ways to improve your experience.
                </p>
              </div>

              <div className="bg-dark-300 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">Accessibility</h3>
                <p className="text-gray-300">
                  We believe everyone deserves access to quality fitness coaching, 
                  regardless of their location, schedule, or budget.
                </p>
              </div>

              <div className="bg-dark-300 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">Results</h3>
                <p className="text-gray-300">
                  We're committed to delivering real, measurable results through 
                  science-backed training methods and continuous optimization.
                </p>
              </div>

              <div className="bg-dark-300 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">Community</h3>
                <p className="text-gray-300">
                  We foster a supportive environment where members can share their journey, 
                  celebrate achievements, and motivate each other.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-500">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Your Fitness Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of others who are transforming their lives with Coach Max.
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
    </main>
  );
} 