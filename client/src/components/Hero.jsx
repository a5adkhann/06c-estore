import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 flex flex-col-reverse lg:flex-row items-center">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Discover the Best Deals on <span className="text-blue-600">Trendy Products</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            Shop from our latest collection with amazing discounts. Fast delivery, secure payments, and 24/7 customer support.
          </p>
          
          {/* Buttons */}
          <div className="flex justify-center lg:justify-start gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Shop Now
            </button>
            <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 mb-10 lg:mb-0">
          <img
            src="https://via.placeholder.com/500x400.png?text=Hero+Image"
            alt="E-commerce banner"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
