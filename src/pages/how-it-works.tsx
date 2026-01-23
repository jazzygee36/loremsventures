import { FaUpload, FaCheckCircle, FaPrint, FaTruck } from "react-icons/fa";

const steps = [
  {
    icon: <FaUpload size={32} className="text-cyan-500" />,
    title: "Upload Your Design",
    description:
      "Send us your artwork or request our professional design services for your project.",
  },
  {
    icon: <FaCheckCircle size={32} className="text-yellow-500" />,
    title: "Confirm Specs & Quantity",
    description:
      "Approve the design, choose materials, and finalize the quantity you need.",
  },
  {
    icon: <FaPrint size={32} className="text-pink-500" />,
    title: "Printing & Finishing",
    description:
      "We print with precision using premium materials and apply finishing touches.",
  },
  {
    icon: <FaTruck size={32} className="text-green-500" />,
    title: "Delivery or Pickup",
    description:
      "Get your order delivered fast and safely, or pick it up from our shop.",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-gradient-to-r from-cyan-50 via-white to-pink-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* ===== TITLE ===== */}
        <h2 className="text-4xl font-bold text-gray-900 mb-2">How It Works</h2>

        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-500 rounded-full mb-6"></div>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
          Our printing process is simple, transparent, and hassle-free. Follow
          these easy steps to get premium-quality prints.
        </p>

        {/* ===== STEPS ===== */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-8 shadow-md 
                         transition-all duration-300 hover:scale-105 hover:shadow-xl 
                         cursor-pointer group"
            >
              {/* Gradient glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-500 opacity-0 group-hover:opacity-10 transition duration-300"></div>

              {/* Step number */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-500 text-white text-sm font-bold flex items-center justify-center shadow-md">
                {index + 1}
              </div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-5">{step.icon}</div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-pink-600 transition">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
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

export default HowItWorks;
