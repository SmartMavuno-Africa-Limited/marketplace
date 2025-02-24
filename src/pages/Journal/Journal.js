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
          <span className="text-primeColor">Smartavuno</span> - Embrace Innovation and Growth with Cutting-edge Solutions.
        </h1>

        <p className="text-base sm:text-lg text-gray-600 mb-6">
          At Smartavuno, we are committed to providing innovative and effective solutions to help businesses thrive in a rapidly evolving market. Our team of experts works relentlessly to offer customized strategies that drive growth, increase efficiency, and boost profitability.
        </p>

        <p className="text-base sm:text-lg text-gray-600 mb-6">
          Whether you are looking to optimize your operations, enhance customer experiences, or expand your market reach, Smartavuno has the tools and expertise to turn your vision into reality. Let us help you navigate the challenges and opportunities of the digital era.
        </p>

        <Link to="/shop">
          <button className="w-52 h-12 bg-primeColor text-white hover:bg-black duration-300 rounded-md text-lg font-semibold">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Journal;
