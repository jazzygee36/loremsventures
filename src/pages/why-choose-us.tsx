import { FaClock, FaStar, FaLeaf, FaBolt } from "react-icons/fa";

const features = [
  {
    icon: <FaStar size={28} className="text-yellow-500" />,
    title: "High Quality Prints",
    description:
      "We deliver crisp, vibrant, and professional-quality prints on every job.",
  },
  {
    icon: <FaClock size={28} className="text-cyan-500" />,
    title: "Fast Turnaround",
    description:
      "Get your prints completed quickly without compromising quality or accuracy.",
  },
  {
    icon: <FaLeaf size={28} className="text-green-500" />,
    title: "Eco-Friendly Inks",
    description:
      "We use sustainable, non-toxic inks that are safe and environmentally friendly.",
  },
  {
    icon: <FaBolt size={28} className="text-pink-500" />,
    title: "Affordable Pricing",
    description:
      "Premium printing services at competitive prices that fit your budget.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* ===== TITLE ===== */}
        <h2 className="text-4xl font-bold text-gray-900 mb-2">Why Choose Us</h2>

        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-500 rounded-full mb-6"></div>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
          At <strong>BAYREMS Concepts</strong>, we combine quality, speed,
          affordability, and sustainability to deliver exceptional printing
          solutions.
        </p>

        {/* ===== FEATURES ===== */}
        <div className="grid gap-6 md:gap-10 grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-6 md:p-8 shadow-md 
                         transition-all duration-300 hover:scale-105 hover:shadow-xl 
                         cursor-pointer group"
            >
              {/* Soft brand glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-500 opacity-0 group-hover:opacity-10 transition duration-300"></div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-5">{feature.icon}</div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-pink-600 transition">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>

                <div className="mt-6 w-12 h-1 bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
