import { FaUpload, FaCheckCircle, FaPrint, FaTruck } from "react-icons/fa";

const steps = [
  {
    icon: <FaUpload size={32} className="text-indigo-600" />,
    title: "Upload Your Design",
    description:
      "Send us your artwork or request custom design services for your project.",
  },
  {
    icon: <FaCheckCircle size={32} className="text-yellow-500" />,
    title: "Confirm Specs & Quantity",
    description:
      "Approve the design, select materials, and finalize the quantity you need.",
  },
  {
    icon: <FaPrint size={32} className="text-pink-500" />,
    title: "Printing & Finishing",
    description:
      "We print your products with precision and add any finishing touches needed.",
  },
  {
    icon: <FaTruck size={32} className="text-green-500" />,
    title: "Delivery or Pickup",
    description:
      "Receive your order fast and securely at your location, or pick it up at our shop.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-cyan-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-indigo-900 mb-4">
          How It Works
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Our printing process is simple and hassle-free. Follow these easy
          steps to get your high-quality prints.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-indigo-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
              <div className="mt-4 w-12 h-1 bg-indigo-300 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
