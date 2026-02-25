import React from "react";
import Slider from "react-slick";

const awardsImages = [
  "https://www.indraniauto.com/uploads/library/6980567daf4ee_Award14.jpg",
  "https://www.indraniauto.com/uploads/library/698056b2a553e_award2.jpg",
  "https://www.indraniauto.com/uploads/library/698056ca21ded_award6.jpg",
  "https://www.indraniauto.com/uploads/library/698056ebbc46c_award3.jpg",
  "https://www.indraniauto.com/uploads/library/698056ebbc158_award4.jpg",
  "https://www.indraniauto.com/uploads/library/698056ebbbe31_award5.jpg",
  "https://www.indraniauto.com/uploads/library/698056ebbbb17_award7.jpg",
  "https://www.indraniauto.com/uploads/library/698056ebbb6ec_award8.jpg",
  "https://www.indraniauto.com/uploads/library/698056ebbb275_award9.jpg",
  "https://www.indraniauto.com/uploads/library/698056ebbaf72_award10.jpg",
  "https://www.indraniauto.com/uploads/library/698056ebbac53_award11.jpg",
  "https://www.indraniauto.com/uploads/library/698056ebba834_Award12.jpg",
  "https://www.indraniauto.com/uploads/library/698056ebba27f_Award13.jpg",
  "https://www.indraniauto.com/uploads/library/698056ebb8e1e_award1.jpg",
];

const AwardsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Awards & Achievements
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {awardsImages.map((img, index) => (
            <div key={index} className="px-3">
              
              <div className="bg-white rounded-xl p-6 h-[320px] flex items-center justify-center
                              shadow-sm hover:shadow-lg
                              transition-all duration-300">
                
                <img
                  src={img}
                  alt={`Award ${index + 1}`}
                  className="max-h-full object-contain transition-transform duration-500 hover:scale-105"
                />

              </div>

            </div>
          ))}
        </Slider>

      </div>
    </section>
  );
};

export default AwardsSlider;