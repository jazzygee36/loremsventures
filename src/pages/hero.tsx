import { useEffect, useState } from "react";
// import EventPrinting from "../assets/eventprinting.jpg";
// import CardPrinting from "../assets/cardprinting.jpeg";
// import BagPrinting from "../assets/bagprinting.jpeg";
// import Umbrella from "../assets/umbrella.jpeg";
import Africa from "../assets/work/africa.png";
import Grooms from "../assets/work/groomsmen.png";
import Bag from "../assets/work/coloeofmul.png";

const images = [Africa, Grooms, Bag];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-r from-cyan-700 via-fuchsia-700 to-neutral-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Premium Printing Solutions for Your Business
          </h1>
          <p className="text-lg md:text-xl">
            Brochures, Flyers, Posters, and Custom Designs — all delivered with
            quality and speed.
          </p>
          <div className="space-x-4">
            {/* <button className="px-6 py-3 bg-yellow-400 text-indigo-900 rounded-lg font-semibold hover:bg-yellow-300 transition">
              Get a Quote
            </button> */}
            <button className="px-6 py-3 border border-white rounded-lg font-semibold hover:bg-white hover:text-indigo-700 transition">
              View Portfolio
            </button>
          </div>
        </div>

        {/* Image Slider */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 relative min-h-[250px] h-[300px] md:h-[400px] overflow-hidden  ">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Printing Work"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
