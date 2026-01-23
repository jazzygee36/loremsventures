const ContactWhatsApp = () => {
  // WhatsApp number with country code (Nigeria = 234, no leading 0)
  const whatsappNumber = "2349012421053";
  const message =
    "Hello BAYREMS Concepts! I would like to get a quote for printing services.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-indigo-50 via-white to-cyan-50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-indigo-900 mb-4">
          Get in Touch on WhatsApp
        </h2>

        <p className="text-lg text-gray-600 mb-12">
          Have a printing project in mind? Chat with{" "}
          <strong>BAYREMS Concepts</strong> on WhatsApp and get a quick
          response.
        </p>

        {/* WhatsApp Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-green-500 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg text-lg transition-all duration-300 hover:bg-green-600 hover:scale-105"
        >
          {/* WhatsApp Icon */}
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M20.52 3.48a11.94 11.94 0 00-16.97 0 11.97 11.97 0 00-3.5 8.49c.04 2.03.67 4.01 1.82 5.78L1 23l5.33-1.38a11.94 11.94 0 005.78 1.82 11.97 11.97 0 008.49-3.5 11.94 11.94 0 000-16.96zM12 20.15a8.12 8.12 0 01-4.1-1.12l-.29-.17-3.08.8.82-3.01-.19-.3a8.07 8.07 0 0111.25-11.25 8.12 8.12 0 015.75 13.49A8.07 8.07 0 0112 20.15zm4.57-6.3c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.12-.57.13-.17.25-.65.81-.8.98-.14.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.44.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.37-.78-1.87-.2-.49-.41-.43-.57-.44l-.48-.01c-.16 0-.42.06-.64.31-.23.25-.88.86-.88 2.08s.9 2.41 1.03 2.58c.12.17 1.79 2.74 4.35 3.84.61.26 1.08.42 1.45.54.61.2 1.16.17 1.6.1.49-.08 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29z" />
          </svg>
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default ContactWhatsApp;
