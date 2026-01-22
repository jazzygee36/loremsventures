import { useState, useEffect } from "react";

// Example testimonials
const testimonials = [
  {
    name: "Adeola Johnson",
    role: "Event Organizer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "BAYREMS Concepts delivered my event posters in record time and the quality was amazing. Highly recommended!",
  },
  {
    name: "Chinedu Okafor",
    role: "Small Business Owner",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      "The brochures they printed for my business exceeded my expectations. Excellent service and fast delivery!",
  },
  {
    name: "Funmi Adeyemi",
    role: "Marketing Manager",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    feedback:
      "Professional and reliable. Their printing services really helped our brand stand out.",
  },
  {
    name: "Emeka Nwosu",
    role: "Entrepreneur",
    photo: "https://randomuser.me/api/portraits/men/44.jpg",
    feedback:
      "The team at BAYREMS Concepts is amazing. From design to delivery, everything was seamless!",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-indigo-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-indigo-900 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Hear from our happy clients who trusted BAYREMS Concepts for their
          printing needs.
        </p>

        <div className="relative">
          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center transition duration-500">
            <img
              src={testimonials[current].photo}
              alt={testimonials[current].name}
              className="w-20 h-20 rounded-full mb-4 object-cover shadow-md"
            />
            <p className="text-gray-700 italic mb-4">
              "{testimonials[current].feedback}"
            </p>
            <h3 className="text-lg font-semibold text-indigo-900">
              {testimonials[current].name}
            </h3>
            <p className="text-gray-500 text-sm">
              {testimonials[current].role}
            </p>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, idx) => (
              <span
                key={idx}
                className={`w-3 h-3 rounded-full cursor-pointer transition ${
                  idx === current ? "bg-indigo-900" : "bg-gray-300"
                }`}
                onClick={() => setCurrent(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
