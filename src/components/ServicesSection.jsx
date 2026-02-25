import React from "react";
import { ArrowRight } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="py-24 px-6 lg:px-20 overflow-hidden">
      
      <div className="flex flex-col lg:flex-row gap-20">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-[40%]">
          <p className="text-red-600 font-semibold mb-4 text-lg">
            Services
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Our Best Services
          </h2>

          <p className="text-gray-600 mb-10 leading-relaxed text-base md:text-lg">
            “ Remember Three simple things : know your product better than
            anyone, know your customer, and have a burning desire to succeed.
            Customer satisfaction is our prime focus. ”
          </p>

          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 md:px-10 md:py-4 rounded-full text-base md:text-lg transition duration-300">
            Contact Us
          </button>
        </div>

        {/* ===================== */}
        {/* MOBILE + IPAD SLIDER */}
        {/* ===================== */}
        <div className="lg:hidden flex gap-8 overflow-x-auto no-scrollbar scroll-smooth">

          {/* CARD 1 */}
          <div className="min-w-[85%] sm:min-w-[60%] text-center group">
            <div className="-skew-x-12">
              <img
                src="https://www.indraniauto.com/uploads/library/684030820d720_four-wheeler.jpg"
                alt="Four Wheelers"
                className="mx-auto h-48 object-contain"
              />
            </div>
            <div className="flex justify-center items-center gap-3 mt-6">
              <h4 className="text-lg font-medium">Four Wheelers</h4>
              <div className="bg-red-600 text-white rounded-full p-2">
                <ArrowRight size={16} />
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="min-w-[85%] sm:min-w-[60%] text-center group">
            <div className="-skew-x-12">
              <img
                src="https://www.indraniauto.com/uploads/library/684030308c5db_home_appliences.jpg"
                alt="Home Appliances"
                className="mx-auto h-48 object-contain"
              />
            </div>
            <div className="flex justify-center items-center gap-3 mt-6">
              <h4 className="text-lg font-medium">Home Appliances</h4>
              <div className="bg-red-600 text-white rounded-full p-2">
                <ArrowRight size={16} />
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="min-w-[85%] sm:min-w-[60%] text-center group">
            <div className="-skew-x-12">
              <img
                src="https://www.indraniauto.com/uploads/library/684136dbdd69d_four-wheeler.2.jpg"
                alt="Two Wheelers"
                className="mx-auto h-48 object-contain"
              />
            </div>
            <div className="flex justify-center items-center gap-3 mt-6">
              <h4 className="text-lg font-medium">Two Wheelers</h4>
              <div className="bg-red-600 text-white rounded-full p-2">
                <ArrowRight size={16} />
              </div>
            </div>
          </div>
        </div>

        {/* ===================== */}
        {/* DESKTOP GRID (FULL 3) */}
        {/* ===================== */}
        <div className="hidden lg:grid lg:w-2/3 grid-cols-3 gap-12">

          {/* CARD 1 */}
          <div className="text-center group">
            <div className="-skew-x-12">
              <img
                src="https://www.indraniauto.com/uploads/library/684030820d720_four-wheeler.jpg"
                alt="Four Wheelers"
                className="mx-auto h-52 object-contain transition duration-500 group-hover:scale-110"
              />
            </div>
            <div className="flex justify-center items-center gap-3 mt-6">
              <h4 className="text-xl font-medium">Four Wheelers</h4>
              <div className="bg-red-600 text-white rounded-full p-2 group-hover:translate-x-1 transition">
                <ArrowRight size={16} />
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="text-center group">
            <div className="-skew-x-12">
              <img
                src="https://www.indraniauto.com/uploads/library/684030308c5db_home_appliences.jpg"
                alt="Home Appliances"
                className="mx-auto h-52 object-contain transition duration-500 group-hover:scale-110"
              />
            </div>
            <div className="flex justify-center items-center gap-3 mt-6">
              <h4 className="text-xl font-medium">Home Appliances</h4>
              <div className="bg-red-600 text-white rounded-full p-2 group-hover:translate-x-1 transition">
                <ArrowRight size={16} />
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="text-center group">
            <div className="-skew-x-12">
              <img
                src="https://www.indraniauto.com/uploads/library/684136dbdd69d_four-wheeler.2.jpg"
                alt="Two Wheelers"
                className="mx-auto h-52 object-contain transition duration-500 group-hover:scale-110"
              />
            </div>
            <div className="flex justify-center items-center gap-3 mt-6">
              <h4 className="text-xl font-medium">Two Wheelers</h4>
              <div className="bg-red-600 text-white rounded-full p-2 group-hover:translate-x-1 transition">
                <ArrowRight size={16} />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ServicesSection;