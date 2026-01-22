import { useState, useEffect } from "react";

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
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="py-20 bg-indigo-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <h2 className="text-4xl font-bold text-indigo-900 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Trusted by individuals and businesses who rely on{" "}
          <strong>BAYREMS Concepts</strong> for premium printing services.
        </p>

        {/* Testimonial Card */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 flex flex-col items-center transition-all duration-500">
            <img
              src={activeTestimonial.photo}
              alt={activeTestimonial.name}
              className="w-20 h-20 rounded-full mb-5 object-cover shadow-md"
            />

            <p className="text-gray-700 italic text-lg mb-6 max-w-2xl">
              “{activeTestimonial.feedback}”
            </p>

            <h3 className="text-lg font-semibold text-indigo-900">
              {activeTestimonial.name}
            </h3>
            <p className="text-sm text-gray-500">{activeTestimonial.role}</p>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-indigo-900 scale-110"
                    : "bg-gray-300 hover:bg-indigo-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
