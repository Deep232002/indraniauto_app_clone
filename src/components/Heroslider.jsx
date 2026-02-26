import { useState, useEffect } from "react";

export default function Herosection() {

 const slides = [
  {
    background: "https://www.indraniauto.com/assets/images/header-img.jpg",
    welcomeText: "Welcome",
    title: "INDRANI AUTOMOTIVE & ENGG.",
    subtitle: "IATF 16949:2016, ISO 9001:2005, ISO 14001:2018",
    buttonLink: "https://www.indraniauto.com/about",
    carImage: "https://www.indraniauto.com/uploads/library/681873063793f_car-img.png",
    products: [
      {
        img: "https://www.indraniauto.com/uploads/library/68e1104eb3d60_EV-Parts.png",
        text: "EV parts"
      },
      {
        img: "https://www.indraniauto.com/uploads/library/68e1109fbd47e_safety-system.png",
        text: "Safety System"
      },
      {
        img: "https://www.indraniauto.com/uploads/library/68e110c30519d_Suspension.png",
        text: "Suspension"
      }
    ]
  },

  {
    background: "https://www.indraniauto.com/assets/images/header-img.jpg",
    welcomeText: "Welcome",
    title: "INDRANI AUTOMOTIVE & ENGG.",
    subtitle: "IATF 16949:2016, ISO 9001:2005, ISO 14001:2018",
    buttonLink: "https://www.indraniauto.com/about",
    carImage: "https://www.indraniauto.com/uploads/library/68e8fe597c9fb_appliance-Image.png",
    products: [
      {
        img: "https://www.indraniauto.com/uploads/library/68e8fe762a6c7_Engine-_-DG-Parts.png",
        text: "Engine-&-DG-Parts"
      },
      {
        img: "https://www.indraniauto.com/uploads/library/68e8fe88862e1_Hinge.png",
        text: "Hinge"
      },
      {
        img: "https://www.indraniauto.com/uploads/library/68e113638656c_Motor.png",
        text: "Motor"
      }
    ]
  },

  {
    background: "https://www.indraniauto.com/assets/images/header-img.jpg",
    welcomeText: "Welcome",
    title: "INDRANI AUTOMOTIVE & ENGG.",
    subtitle: "IATF 16949:2016, ISO 9001:2005, ISO 14001:2018",
    buttonLink: "https://www.indraniauto.com/about",
    carImage: "https://www.indraniauto.com/uploads/library/68e113c7ace58_Bike-image.png",
    products: [
      {
        img: "https://www.indraniauto.com/uploads/library/68e113e8d6f48_Engine-Part.png",
        text: "Engine Part"
      },
      {
        img: "https://www.indraniauto.com/uploads/library/68e114053fede_EV-Parts.png",
        text: "EV Parts"
      },
      {
        img: "https://www.indraniauto.com/uploads/library/68e11422bb3ab_Ignition-_-PT-Tanks.png",
        text: "Ignition-&-PT Tanks"
      }
    ]
  }
];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-gradient-to-r from-gray-50 to-gray-200 py-12 lg:py-20 overflow-hidden">

      {/* SLIDER WRAPPER */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">

            <div className="mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row items-center">

              {/* LEFT CONTENT */}
              <div className="w-full lg:w-[40%] lg:text-left">
                <span className="text-red-600 font-semibold border-b-2 border-red-600 pb-1">
                  Welcome
                </span>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-6 leading-tight">
                  {slide.title}
                </h1>

                <p className="text-gray-600 text-base sm:text-lg mt-6">
                  {slide.subtitle}
                </p>

                <button className="mt-8 bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 rounded-full text-base lg:text-lg transition duration-300 shadow-md">
                  Read More
                </button>
              </div>

              {/* RIGHT IMAGE SECTION */}
              <div className="w-full lg:w-[60%] relative mt-12 lg:mt-0">

                {/* Car */}
                <div className="absolute right-0 bottom-0 w-full flex justify-center lg:justify-end z-10">
                  <img
                    src={slide.carImage}
                    alt="Car"
                    className="w-full max-w-[600px] h-auto object-contain drop-shadow-2xl"
                  />
                </div>

                {/* Floating Products */}
                <div className="relative z-20 flex flex-col gap-1 sm:w-[100%] sm:gap-6">

                  {slide.products.map((item, i) => (
                    <div
  key={i}
  className={`relative flex items-center ${
    [0, 2].includes(i) ? "mx-10" : "mx-3"
  }`}
>

                      <div className="z-20">
                        <img src={item.img} alt="Product" className="w-30" />
                      </div>

                      <div className="absolute left-23 top-3 bg-red-600 
                                      w-[200px] h-9 
                                      flex items-center justify-center
                                      text-white text-lg font-semibold
                                      shadow-lg -rotate-6 -skew-x-12 z-10">
                        <span className="skew-x-12">{item.text}</span>
                      </div>

                    </div>
                  ))}

                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}