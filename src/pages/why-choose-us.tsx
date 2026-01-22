import { FaClock, FaStar, FaLeaf, FaBolt } from "react-icons/fa";

const features = [
  {
    icon: <FaStar size={28} className="text-yellow-500" />,
    title: "High Quality Prints",
    description:
      "We deliver crisp, vibrant, and professional-quality prints every time.",
  },
  {
    icon: <FaClock size={28} className="text-indigo-600" />,
    title: "Fast Turnaround",
    description:
      "Get your prints done quickly without compromising quality or accuracy.",
  },
  {
    icon: <FaLeaf size={28} className="text-green-500" />,
    title: "Eco-Friendly Inks",
    description:
      "We use sustainable, non-toxic inks for all our printing services.",
  },
  {
    icon: <FaBolt size={28} className="text-pink-500" />,
    title: "Affordable Pricing",
    description: "Premium printing services at prices that fit your budget.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-indigo-900 mb-4">
          Why Choose Us
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          At <strong>BAYREMS Concepts</strong>, we combine quality, speed, and
          sustainability to provide the best printing experience.
        </p>

        <div className="grid gap-3 md:gap-8 grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-tr from-cyan-50 via-white to-pink-50 rounded-2xl shadow-lg p-3 md:p-6 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-indigo-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
