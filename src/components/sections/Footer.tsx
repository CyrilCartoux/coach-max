import Link from 'next/link';

const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Testimonials", href: "#testimonials" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Support Center", href: "/support" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  },
];

const socialLinks = [
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M21.582 7.172a2.513 2.513 0 0 0-1.768-1.768C18.254 5 12 5 12 5s-6.254 0-7.814.404a2.513 2.513 0 0 0-1.768 1.768C2.014 8.733 2 10 2 12c0 2 .014 3.267.418 4.828a2.513 2.513 0 0 0 1.768 1.768C5.746 19 12 19 12 19s6.254 0 7.814-.404a2.513 2.513 0 0 0 1.768-1.768C22 15.267 22 13 22 12c0-2-.014-3.267-.418-4.828zM10 15V9l5.2 3-5.2 3z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark-400 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 pb-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="relative w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="font-bold text-dark-500 text-lg">CM</span>
              </div>
              <span className="font-bold text-xl text-white">CoachMax</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Transform your fitness journey with our AI-powered coaching, personalized workout plans, and nutrition guidance.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, i) => (
                <a 
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-dark-300 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-dark-500 transition-colors duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((column, i) => (
            <div key={i} className="lg:col-span-1">
              <h3 className="font-bold text-white text-lg mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-white text-lg mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Subscribe for the latest features and updates.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-dark-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
              />
              <button
                type="submit"
                className="btn-primary py-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-dark-300 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} CoachMax. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-500 hover:text-gray-400 transition-colors duration-300 mx-3">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-gray-400 transition-colors duration-300 mx-3">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-500 hover:text-gray-400 transition-colors duration-300 mx-3">
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 