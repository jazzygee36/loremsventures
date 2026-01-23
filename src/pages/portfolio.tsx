import { useState } from "react";

/* ===== IMAGES ===== */
import SPL from "../assets/work/SPL.png";
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

/* ===== DATA ===== */
const portfolioItems = [
  { img: SPL, title: "Flyers" },
  { img: BagPrinting, title: "Custom Bags" },
  { img: Zenith, title: "Towel" },
  { img: ChurchBill, title: "Handbill" },
  { img: EDH, title: "Card" },
  { img: Award, title: "Award" },
  { img: PlainBags, title: "Plain Bags" },
  { img: Visa, title: "Umbrella" },
  { img: RollUp, title: "Roll-up Banner" },
  { img: TogetherBag, title: "Branded Bag" },
  { img: DnB, title: "Event Branding" },
  { img: Police, title: "School Print" },
  { img: Emma, title: "Shopping Bag" },
  { img: Omolara, title: "School Print" },
  { img: Key, title: "Key Holder" },
  { img: CompCard, title: "Complimentary Card" },
  { img: Biro, title: "Branded Biro" },
  { img: Love, title: "Gift Bag" },
  { img: Quran, title: "Roll Up" },
  { img: CompCard2, title: "Business Card" },
  { img: Starfix, title: "Card" },
];

const PortfolioSection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const half = Math.ceil(portfolioItems.length / 2);
  const topRow = portfolioItems.slice(0, half);
  const bottomRow = portfolioItems.slice(half);

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % portfolioItems.length);
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + portfolioItems.length) % portfolioItems.length,
      );
    }
  };

  return (
    <section
      id="portfolio"
      className="py-24 bg-gradient-to-r from-cyan-50 via-white to-pink-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* ===== HEADER ===== */}
        <h2 className="text-4xl font-bold text-gray-900 mb-2">
          Our Recent Work
        </h2>

        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-500 rounded-full mb-6"></div>

        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          A showcase of our premium printing projects — quality, precision, and
          creativity in every detail.
        </p>

        {/* ===== SCROLLING GALLERY ===== */}
        <div className="space-y-10">
          {/* TOP ROW → RIGHT */}
          <div className="flex w-max gap-4 animate-scroll-right hover:[animation-play-state:paused]">
            {[...topRow, ...topRow].map((item, index) => (
              <div
                key={`top-${index}`}
                className="w-64 h-64 flex-shrink-0 rounded-xl bg-white shadow-md overflow-hidden 
                           cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                onClick={() => setSelectedIndex(index % topRow.length)}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-contain p-3 transition duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* BOTTOM ROW → LEFT */}
          <div className="flex w-max gap-4 animate-scroll-left hover:[animation-play-state:paused]">
            {[...bottomRow, ...bottomRow].map((item, index) => (
              <div
                key={`bottom-${index}`}
                className="w-64 h-64 flex-shrink-0 rounded-xl bg-white shadow-md overflow-hidden 
                           cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                onClick={() =>
                  setSelectedIndex((index % bottomRow.length) + topRow.length)
                }
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-contain p-3 transition duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ===== MODAL VIEW ===== */}
        {selectedIndex !== null && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedIndex(null)}
          >
            <div
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-500 opacity-20 blur-2xl -z-10"></div>

              <img
                src={portfolioItems[selectedIndex].img}
                alt={portfolioItems[selectedIndex].title}
                className="w-full rounded-xl shadow-2xl border border-white/20"
              />

              {/* Close */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-3 right-3 bg-black/60 text-white px-3 py-1 rounded-full"
              >
                ✕
              </button>

              {/* Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full"
              >
                ‹
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full"
              >
                ›
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
