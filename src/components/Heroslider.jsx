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
        <div className="w-full lg:w-[60%] relative mt-12 lg:mt-0">

  {/* Car Image (Background Layer) */}
  <div className="absolute right-0 bottom-0 w-full flex justify-center lg:justify-end z-10">
    <img
      src="https://www.indraniauto.com/uploads/library/681873063793f_car-img.png"
      alt="Car"
      className="w-full max-w-[600px] h-auto object-contain drop-shadow-2xl"
    />
  </div>

  {/* Floating Product Tags (Front Layer) */}
  <div className="relative z-20 flex flex-col gap-1 sm:w-[100%] sm:gap-6">

    {/* ITEM 1 */}
    <div className="relative flex items-center mx-5">
      <div className="z-20">
        <img
          src="https://www.indraniauto.com/uploads/library/68e113e8d6f48_Engine-Part.png"
          alt="Engine"
          className="w-30"
        />
      </div>

      <div className="absolute left-23 top-3 bg-red-600 
                      w-[200px] h-9 
                      flex items-center justify-center
                      text-white text-lg font-semibold
                      shadow-lg -rotate-6
                      -skew-x-12 z-10">
        <span className="skew-x-12">Engine-&-DG-Parts</span>
      </div>
    </div>

    {/* ITEM 2 */}
    <div className="relative flex items-center">
      <div className="z-20">
        <img
          src="https://www.indraniauto.com/uploads/library/68e113e8d6f48_Engine-Part.png"
          alt="Engine"
          className="w-30"
        />
      </div>

      <div className="absolute left-23 top-3 bg-red-600 
                      w-[200px] h-9 
                      flex items-center justify-center
                      text-white text-lg font-semibold
                      shadow-lg -rotate-6
                      -skew-x-12 z-10">
        <span className="skew-x-12">Engine-&-DG-Parts</span>
      </div>
    </div>

    {/* ITEM 3 */}
    <div className="relative flex items-center mx-5">
      <div className="z-20">
        <img
          src="https://www.indraniauto.com/uploads/library/68e113e8d6f48_Engine-Part.png"
          alt="Engine"
          className="w-30"
        />
      </div>

      <div className="absolute left-23 top-3 bg-red-600 
                      w-[200px] h-9 
                      flex items-center justify-center
                      text-white text-lg font-semibold
                      shadow-lg -rotate-6
                      -skew-x-12 z-10">
        <span className="skew-x-12">Engine-&-DG-Parts</span>
      </div>
    </div>

  </div>

</div>
      </div>
    </section>
  );
}