import React from "react";

const worldMarkers = [
  { top: "26%", left: "22%", color: "bg-green-600" },
  { top: "15%", left: "52%", color: "bg-green-600" },
  { top: "18%", left: "50%", color: "bg-green-600" },
  { top: "22%", left: "56%", color: "bg-green-600" },
  { top: "62%", left: "34%", color: "bg-green-600" },
  { top: "75%", left: "30%", color: "bg-green-600" },
];

const indiaMarkers = [
  { top: "32%", left: "48%", color: "bg-red-600" },
  { top: "35%", left: "52%", color: "bg-blue-500" },
  { top: "37%", left: "55%", color: "bg-green-600" },
  { top: "37%", left: "45%", color: "bg-yellow-400" },
];

const NetworkSection = () => {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Heading */}
        <p className="text-red-600 text-sm sm:text-base">Network</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12">
          Our Networks
        </h2>

        {/* Maps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* WORLD MAP */}
          <div className="relative w-full max-w-full mx-auto">
            <img
              src="https://www.indraniauto.com/uploads/library/6858fc1c568f8_world-map.jpg"
              alt="World Map"
              className="w-full h-auto object-contain"
            />

            {worldMarkers.map((marker, index) => (
              <div
                key={index}
                className="absolute"
                style={{ top: marker.top, left: marker.left }}
              >
                <span
                  className={`block w-2 h-2 sm:w-3 sm:h-3 rounded-full ${marker.color}`}
                ></span>
              </div>
            ))}
          </div>

          {/* INDIA MAP */}
          <div className="relative w-full max-w-full mx-auto">
            <img
              src="https://www.indraniauto.com/uploads/library/6858fc2665d49_indian-map.jpg"
              alt="India Map"
              className="w-full h-auto object-contain"
            />

            {indiaMarkers.map((marker, index) => (
              <div
                key={index}
                className="absolute"
                style={{ top: marker.top, left: marker.left }}
              >
                <span
                  className={`block w-2 h-2 sm:w-3 sm:h-3 rounded-full ${marker.color}`}
                ></span>
              </div>
            ))}
          </div>

        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10 sm:mt-14 text-xs sm:text-sm font-medium text-center">
          
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 sm:w-5 sm:h-4 bg-red-600"></span>
            Head Office
          </div>

          <div className="flex items-center gap-2">
            <span className="w-4 h-4 sm:w-5 sm:h-4 bg-blue-500"></span>
            Plants
          </div>

          <div className="flex items-center gap-2">
            <span className="w-4 h-4 sm:w-5 sm:h-4 bg-green-700"></span>
            Customers
          </div>

          <div className="flex items-center gap-2">
            <span className="w-4 h-4 sm:w-5 sm:h-4 bg-yellow-400"></span>
            Offices
          </div>

        </div>

      </div>
    </section>
  );
};

export default NetworkSection;