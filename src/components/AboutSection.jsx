import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-12 lg:py-16 px-4 sm:px-6 lg:px-20">
      
      <div className="flex flex-col md:flex-col lg:flex-row gap-10 items-start">

        {/* MOBILE HEADING */}
        <div className="lg:hidden">
          <p className="text-red-600 font-semibold mb-2">About Us</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            About Indrani Automotive & Engineering
          </h2>
        </div>

        {/* IMAGES SECTION */}
        <div className="w-full lg:w-1/2 flex flex-col sm:flex-row gap-6">

          {/* First Image */}
          <div className="w-full md:w-[60%]">
            <img
              src="https://www.indraniauto.com/uploads/library/6855094e4dd52_about-us-1.jpg"
              alt="Factory"
              className="w-full h-[250px] md:h-[400px] object-cover rounded"
            />
          </div>

          {/* Second Image (Hidden Only on Mobile) */}
          <div className="hidden md:flex w-full sm:w-[40%] flex-col gap-4">
            <div className="bg-black text-white text-center py-8">
              <h2 className="text-3xl lg:text-4xl font-bold">35+</h2>
              <p className="mt-2 text-lg">Years Experience</p>
            </div>

            <img
              src="https://www.indraniauto.com/uploads/library/68550958aef35_about-us-2.jpg"
              alt="Manufacturing"
              className="w-full h-[250px] md:h-[300px] object-cover rounded-b"
            />
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="w-full lg:w-1/2 text-left">

          {/* Show heading on iPad + Desktop */}
          <p className="hidden lg:block text-red-600 font-semibold mb-2">
            About Us
          </p>

          <h2 className="hidden lg:block text-2xl lg:text-4xl font-bold mb-4">
            About Indrani Automotive & Engineering
          </h2>

          <h4 className="font-semibold mb-3">Our Journey</h4>

          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            Indrani Automotive & Engineering (IAE) is a leading die casting
            components manufacturing corporation based in India. The ISO-certified
            organization specializes in tool manufacturing, die casting,
            machining, powder coating, painting, assembly and laboratory testing.
          </p>

          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Founded in 1989 with just 8 employees in Delhi, IAE began as a
            high-pressure die casting components manufacturer. Through decades
            of steady growth and strategic expansion, we have evolved into a
            comprehensive manufacturing group operating five state-of-the-art
            facilities across Gurugram and Chennai.
          </p>

          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition duration-300">
            Read more
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;