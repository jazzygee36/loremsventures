import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">BAYREMS Concepts</h3>
          <p className="text-gray-300 mb-5 leading-relaxed">
            Premium printing services for brochures, flyers, banners, posters,
            and custom designs. We deliver quality, speed, and reliability.
          </p>

          <div className="space-y-1 text-gray-400 text-sm">
            <p>📍 21, Alade Street, Shomolu, Lagos, Nigeria</p>
            <p>✉️ info@bayremsconcepts.com</p>
            <p>📞 0806 871 4127, 0901 242 1053</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <a
                href="#services"
                className="hover:text-yellow-400 transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="hover:text-yellow-400 transition-colors"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className="hover:text-yellow-400 transition-colors"
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-yellow-400 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <p className="text-gray-300 mb-4">
            Stay connected and see our latest works.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-3 rounded-full bg-indigo-800 hover:bg-yellow-400 hover:text-indigo-900 transition-all"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="p-3 rounded-full bg-indigo-800 hover:bg-yellow-400 hover:text-indigo-900 transition-all"
            >
              <FaTwitter size={18} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-3 rounded-full bg-indigo-800 hover:bg-yellow-400 hover:text-indigo-900 transition-all"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-full bg-indigo-800 hover:bg-yellow-400 hover:text-indigo-900 transition-all"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-indigo-800 py-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} BAYREMS Concepts. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
