import { FaFileAlt, FaPrint, FaBox, FaTshirt } from "react-icons/fa";

const services = [
  {
    icon: <FaFileAlt size={32} className="text-yellow-500" />,
    title: "Brochures & Flyers",
    description:
      "High-quality brochures and flyers to showcase your brand effectively.",
  },
  {
    icon: <FaPrint size={32} className="text-cyan-500" />,
    title: "Posters & Banners",
    description:
      "Vibrant posters and banners that grab attention and promote your events.",
  },
  {
    icon: <FaBox size={32} className="text-pink-500" />,
    title: "Packaging & Boxes",
    description:
      "Custom packaging designs to make your products stand out on shelves.",
  },
  {
    icon: <FaTshirt size={32} className="text-green-500" />,
    title: "Merch & Apparel",
    description:
      "Personalized T-shirts, bags, and merchandise for branding or events.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">What We Offer</h2>

        <div className="w-20 h-1 mx-auto bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-500 rounded-full mb-6"></div>

        <p className="text-lg text-gray-600 mb-14">
          <strong>BAYREMS Concepts</strong> delivers premium printing solutions
          with precision, creativity, and speed.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition duration-300 -z-10 blur"></div>

              <div className="mb-5 flex justify-center">{service.icon}</div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-pink-600 transition">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
