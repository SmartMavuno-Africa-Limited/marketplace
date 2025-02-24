import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ShoppingCart, Store, HandCoins } from "lucide-react";

const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md"
    onClick={onClick}
  >
    <ChevronRight className="text-gray-700 w-8 h-8" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md"
    onClick={onClick}
  >
    <ChevronLeft className="text-gray-700 w-8 h-8" />
  </button>
);

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-full bg-gray-100 py-16 relative">
      <div className="container mx-auto px-8">
        <Slider {...settings}>
          {/* Slide 1 - Buyers */}
          <div className="h-[500px] flex flex-col items-center justify-between text-center p-10 rounded-lg shadow-lg bg-green-500">
            <div className="flex flex-col items-center">
              <ShoppingCart className="w-16 h-16 text-white mb-4" />
              <h2 className="text-4xl font-extrabold text-white mb-2">Buy Fresh Farm Produce</h2>
              <p className="text-lg text-white leading-relaxed max-w-2xl">
                <strong>Quality and freshness matter!</strong> Get farm produce directly from trusted farmers, ensuring you receive 
                the best organic and fresh products at <em>unbeatable prices</em>. <br /><br />
                🌱 <span className="font-semibold">Support local farmers</span> and enjoy fresh fruits, vegetables, and dairy products.
              </p>
            </div>
            <Link to="/marketplace" className="mb-4 px-6 py-3 bg-green-700 text-white text-lg font-semibold rounded-lg">
              Explore the Marketplace
            </Link>
          </div>

          {/* Slide 2 - Sellers */}
          <div className="h-[500px] flex flex-col items-center justify-between text-center p-10 rounded-lg shadow-lg bg-amber-600">
            <div className="flex flex-col items-center">
              <Store className="w-16 h-16 text-white mb-4" />
              <h2 className="text-4xl font-extrabold text-white mb-2">Sell Your Farm Produce</h2>
              <p className="text-lg text-white leading-relaxed max-w-2xl">
                <strong>Expand your market reach!</strong> Join SmartMavuno and showcase your farm products to a wider audience. <br /><br />
                🚜 <span className="font-semibold">No middlemen, no hidden fees</span>—just direct sales to customers who appreciate quality farm produce.
              </p>
            </div>
            <Link to="/create-shop" className="mb-4 px-6 py-3 bg-amber-800 text-white text-lg font-semibold rounded-lg">
              Get Started Now
            </Link>
          </div>

          {/* Slide 3 - Investors */}
          <div className="h-[500px] flex flex-col items-center justify-between text-center p-10 rounded-lg shadow-lg bg-lime-600">
            <div className="flex flex-col items-center">
              <HandCoins className="w-16 h-16 text-white mb-4" />
              <h2 className="text-4xl font-extrabold text-white mb-2">Invest in Agriculture</h2>
              <p className="text-lg text-white leading-relaxed max-w-2xl">
                <strong>Be part of the agricultural revolution!</strong> Invest in sustainable farming solutions that transform the industry. <br /><br />
                🌾 <span className="font-semibold">Earn profitable returns</span> by funding innovative agritech projects.
              </p>
            </div>
            <a href="https://smartmavuno.com/invest" className="mb-4 px-6 py-3 bg-lime-800 text-white text-lg font-semibold rounded-lg">
              Start Investing Today
            </a>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
