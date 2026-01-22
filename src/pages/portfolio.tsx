import { useState } from "react";

// Import your images
import SPL from "../assets/work/SPL.png";
// import CardPrinting from "../assets/work/";
import BagPrinting from "../assets/work/bag-benson.png";
import PlainBags from "../assets/work/plain-bags.png";
import Zenith from "../assets/work/zenith.png";
import ChurchBill from "../assets/FlyerPrinting.jpeg";
import EDH from "../assets/EH&D.jpeg";
import Award from "../assets/work/award.png";
import Visa from "../assets/work/visa-umbrella.png";
import RollUp from "../assets/roll-up.jpeg";
import TogetherBag from "../assets/together.jpeg";
import DnB from "../assets/DnB.jpeg";
import Police from "../assets/police.jpeg";
import Omolara from "../assets/omolara.jpeg";
import Key from "../assets/key-holder.jpeg";
import Emma from "../assets/emmanuelbag.jpeg";
import CompCard from "../assets/EH&D.jpeg";
import CompCard2 from "../assets/EH&D2.jpeg";
import Biro from "../assets/biro.jpeg";
import Love from "../assets/love.jpeg";
import Quran from "../assets/quran.jpeg";
import Starfix from "../assets/startfix.jpeg";

const portfolioItems = [
  { img: SPL, title: "Flyers" },
  { img: BagPrinting, title: "Custom Bags" },
  { img: Zenith, title: "Towel" },
  { img: ChurchBill, title: "Hand bill" },
  { img: EDH, title: "Card" },
  { img: Award, title: "Award" },
  { img: PlainBags, title: "Plain Bags" },
  { img: Visa, title: "Umbrella" },
  { img: RollUp, title: "rollup banner" },
  { img: TogetherBag, title: "bag" },
  { img: DnB, title: "dnb" },
  { img: Police, title: "School" },
  { img: Emma, title: "Bag" },
  { img: Omolara, title: "School" },
  { img: Key, title: "Key holder" },
  { img: CompCard, title: "Card" },
  { img: Biro, title: "Biro" },
  { img: Love, title: "bag" },
  { img: Quran, title: "roll up" },
  { img: CompCard2, title: "Card" },
  { img: Starfix, title: "Card" },
];

const PortfolioSection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + portfolioItems.length) % portfolioItems.length,
      );
    }
  };

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % portfolioItems.length);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-cyan-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-indigo-900 mb-4">
          Our Recent Work
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          A showcase of our premium printing projects. Quality and precision in
          every detail.
        </p>

        {/* Thumbnail Grid */}
        <div className="grid gap-2 md:gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {portfolioItems.slice(0, 8).map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl  cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* "View All" Button */}
        {portfolioItems.length > 6 && (
          <button
            className="mt-8 px-6 py-3 bg-indigo-900 text-white rounded-lg hover:bg-indigo-700 transition"
            onClick={() => setSelectedIndex(0)}
          >
            View All
          </button>
        )}

        {/* Modal Carousel */}
        {selectedIndex !== null && (
          <div
            className="fixed inset-0 bg-white bg-opacity-70 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedIndex(null)}
          >
            <div
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
            >
              <img
                src={portfolioItems[selectedIndex].img}
                alt={portfolioItems[selectedIndex].title}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              {/* Close button */}
              <button
                className="absolute top-2 right-2 text-white bg-gray-800 bg-opacity-50 hover:bg-opacity-70 rounded-full p-2"
                onClick={() => setSelectedIndex(null)}
              >
                ✕
              </button>
              {/* Prev / Next Buttons */}
              <button
                className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 hover:bg-opacity-70 rounded-full p-2"
                onClick={prevImage}
              >
                ‹
              </button>
              <button
                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 hover:bg-opacity-70 rounded-full p-2"
                onClick={nextImage}
              >
                ›
              </button>
              {/* Image title */}
              <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white font-semibold bg-black bg-opacity-40 px-4 py-1 rounded">
                {portfolioItems[selectedIndex].title}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
