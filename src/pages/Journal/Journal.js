import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Journal = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  useEffect(() => {
    setPrevLocation(location.state?.data || "Home"); // Default to "Home" if no state is provided
  }, [location]);

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Journals" prevLocation={prevLocation} />

      <div className="py-10 max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl text-gray-800 font-semibold mb-4">
          <span className="text-primeColor">SmartMavuno Marketplace</span> - Grow, Sell, and Buy with Ease!
        </h1>

        <p className="text-base sm:text-lg text-gray-600 mb-6">
          Welcome to the SmartMavuno Marketplace, where agribusinesses and farmers connect to sell farm produce, purchase inputs, and access market opportunities. Whether you’re a supplier, a farmer, or a buyer, our platform provides a seamless experience to grow your business.
        </p>

        <p className="text-base sm:text-lg text-gray-600 mb-6">
          Start selling today! Create your shop, list your products, and reach thousands of potential customers. Looking to buy? Browse through our marketplace for seeds, fertilizers, farm tools, harvests, and more – all in one place!
        </p>

        <div className="flex gap-4">
          <Link to="/create-shop">
            <button className="w-52 h-12 bg-primeColor text-white hover:bg-black duration-300 rounded-md text-lg font-semibold">
              Create Shop
            </button>
          </Link>

          <Link to="/shop">
            <button className="w-52 h-12 bg-green-600 text-white hover:bg-green-800 duration-300 rounded-md text-lg font-semibold">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Journal;
