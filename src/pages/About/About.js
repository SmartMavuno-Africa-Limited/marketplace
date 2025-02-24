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
      <Breadcrumbs title="About Us" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-4">
          <span className="text-primeColor font-semibold text-lg">SmartMavuno</span>{" "}
          is dedicated to empowering farmers by providing smart, affordable, and accessible solutions to help them grow their businesses. We connect farmers to modern agricultural tools, farm inputs, and market opportunities, aiming to enhance productivity and sustainability across all scales of farming.
        </h1>
        <p className="text-base text-lightText mb-4">
          At SmartMavuno, we believe that technology and innovation can revolutionize agriculture. Our platform enables farmers to access a wide range of products, including quality seeds, fertilizers, farming tools, pest control devices, and much more. Whether you're a smallholder farmer or part of a large agribusiness, we are here to support your journey toward sustainable farming and greater success.
        </p>
        <p className="text-base text-lightText mb-6">
          With our extensive network and partnerships with trusted suppliers, SmartMavuno is helping farmers across the country gain access to the resources they need to succeed. From innovative farming tools to market insights and community-driven support, we’re committed to shaping the future of agriculture.
        </p>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
