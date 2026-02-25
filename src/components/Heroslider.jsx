export default function Herosection() {
  return (
    <section className="w-full bg-gradient-to-r from-gray-50 to-gray-200 py-12 lg:py-20 overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row items-center">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-[40%] lg:text-left">
          <span className="text-red-600 font-semibold border-b-2 border-red-600 pb-1">
            Welcome
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-6 leading-tight">
            INDRANI AUTOMOTIVE <br /> & ENGG.
          </h1>

          <p className="text-gray-600 text-base sm:text-lg mt-6">
            IATF 16949:2016, ISO 9001:2005, ISO 14001:2018
          </p>

          <button className="mt-8 bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 rounded-full text-base lg:text-lg transition duration-300 shadow-md">
            Read More
          </button>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="w-full lg:w-[60%] relative flex justify-center lg:justify-between mt-12 lg:mt-0">

          {/* Floating Product Tags */}
          <div className="flex flex-col z-10 gap-6 lg:gap-0">

            {/* Tag 1 */}
            <div className="flex relative px-3">
              <img
                src="https://www.indraniauto.com/uploads/library/68e113e8d6f48_Engine-Part.png"
                alt="Engine Part"
                className="w-20 sm:w-24 lg:w-32 z-20"
              />

              <div
                className="absolute top-6 left-16 sm:left-20 lg:left-30
                  w-[120px] sm:w-[140px] lg:w-[150px]
                  bg-gradient-to-r from-red-700 to-red-500
                  text-white px-4 lg:px-8 py-1 lg:py-2 text-xs sm:text-sm font-medium
                  rotate-[-4deg] shadow-lg -skew-x-10">
                EV Parts
              </div>
            </div>

            {/* Tag 2 */}
            <div className="flex relative">
              <img
                src="https://www.indraniauto.com/uploads/library/68e113e8d6f48_Engine-Part.png"
                alt="Engine Part"
                className="w-20 sm:w-24 lg:w-32 z-20"
              />

              <div
                className="absolute top-6 left-16 sm:left-20 lg:left-30
                  w-[120px] sm:w-[140px] lg:w-[150px]
                  bg-gradient-to-r from-red-700 to-red-500
                  text-white px-4 lg:px-8 py-1 lg:py-2 text-xs sm:text-sm font-medium
                  rotate-[-4deg] shadow-lg -skew-x-10">
                Safety System
              </div>
            </div>

            {/* Tag 3 */}
            <div className="flex relative p-3">
              <img
                src="https://www.indraniauto.com/uploads/library/68e113e8d6f48_Engine-Part.png"
                alt="Engine Part"
                className="w-20 sm:w-24 lg:w-32 z-20"
              />

              <div
                className="absolute top-8 left-16 sm:left-20 lg:left-30
                  w-[120px] sm:w-[140px] lg:w-[150px]
                  bg-gradient-to-r from-red-700 to-red-500
                  text-white px-4 lg:px-8 py-1 lg:py-2 text-xs sm:text-sm font-medium
                  rotate-[-4deg] shadow-lg -skew-x-10">
                Suspension
              </div>
            </div>

          </div>

          {/* Car Image */}
          <img
            src="https://www.indraniauto.com/uploads/library/681873063793f_car-img.png"
            alt="Car"
            className="w-full max-w-xs sm:max-w-md lg:max-w-lg drop-shadow-2xl"
          />

        </div>
      </div>
    </section>
  );
}