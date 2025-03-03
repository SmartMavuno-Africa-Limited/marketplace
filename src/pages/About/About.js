import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  
  useEffect(() => {
    setPrevLocation(location.state?.data || ""); // Handle case when there's no previous location data
  }, [location]);

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About SmartMavuno Marketplace" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-4">
          <span className="text-primeColor font-semibold text-lg">SmartMavuno Marketplace</span>{" "}
          is the ultimate online platform connecting farmers, agribusinesses, and suppliers. Our marketplace enables agribusinesses to <span className="font-semibold">create their own shops</span> and farmers to <span className="font-semibold">purchase essential farming products</span> with ease.
        </h1>
        <p className="text-base text-lightText mb-4">
          Whether you're looking for high-quality seeds, fertilizers, pesticides, farming tools, or even fresh harvests, SmartMavuno Marketplace brings all agricultural needs into one convenient platform. Our goal is to simplify buying and selling in the agricultural sector while ensuring affordability and accessibility.
        </p>
        <p className="text-base text-lightText mb-6">
          Join thousands of agripreneurs who have set up their online shops to reach more customers and grow their businesses. As a buyer, explore a wide range of farm inputs and produce from verified sellers, ensuring quality and competitive prices. Let's build a thriving agricultural marketplace together!
        </p>
        <div className="flex gap-4">
          <Link to="/create-shop">
            <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
              Create Your Shop
            </button>
          </Link>
          <Link to="/shop">
            <button className="w-52 h-10 bg-black text-white hover:bg-primeColor duration-300">
              Start Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
