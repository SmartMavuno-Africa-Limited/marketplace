import React from "react";
import { Link } from "react-router-dom";

const Sale = () => {
  return (
    <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
      {/* Bulk Purchases */}
      <div className="w-full md:w-1/2 lg:w-1/4 h-full p-4 border rounded-lg shadow-lg text-center bg-blue-100">
        <h2 className="text-xl font-bold mb-2">Bulk Purchases</h2>
        <p>If you purchase farm fresh produce worth more than 5000 Ksh, you are automatically treated as a bulk buyer and receive a 5% discount.</p>
      </div>

      {/* Post Your Produce */}
      <div className="w-full md:w-1/2 lg:w-1/4 h-full p-4 border rounded-lg shadow-lg text-center bg-green-100">
        <h2 className="text-xl font-bold mb-2">Post Your Produce</h2>
        <p>Create a virtual shop and list your products.</p>
        <Link to="/create-shop" className="mt-4 inline-block px-6 py-2 bg-green-600 text-white rounded-lg">
          Create a Shop
        </Link>
      </div>

      {/* Information Section 1 */}
      <div className="w-full md:w-1/2 lg:w-1/4 h-full p-4 border rounded-lg shadow-lg text-center bg-blue-100">
        <h2 className="text-xl font-bold mb-2">Why SmartMavuno Marketplace?</h2>
        <p>We connect farmers directly with buyers for fair trade.</p>
        <a href="https://smartmavuno.com" className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg">
          Learn More
        </a>
      </div>

      {/* Information Section 2 */}
      <div className="w-full md:w-1/2 lg:w-1/4 h-full p-4 border rounded-lg shadow-lg text-center bg-yellow-100">
        <h2 className="text-xl font-bold mb-2">Support & Resources</h2>
        <p>Get farming tips and industry insights.</p>
        <a href="https://smartmavuno.com" className="mt-4 inline-block px-6 py-2 bg-yellow-600 text-white rounded-lg">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Sale;
