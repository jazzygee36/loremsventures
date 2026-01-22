import { FaFileAlt, FaPrint, FaBox, FaTshirt } from "react-icons/fa"; // icons for services

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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-indigo-900 mb-4">
          What We Offer
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          <strong>BAYREMS Concepts</strong> provides premium printing solutions
          for all your needs.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 hover:shadow-2xl transition transform duration-300 group cursor-pointer"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-indigo-900 mb-2 group-hover:text-yellow-500 transition">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
