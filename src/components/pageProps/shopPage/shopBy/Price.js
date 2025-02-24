import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import NavTitle from "./NavTitle";

const Price = () => {
  const [isOpen, setIsOpen] = useState(false);

  const priceList = [
    { _id: 950, priceOne: 0.0, priceTwo: 49.99 },
    { _id: 951, priceOne: 50.0, priceTwo: 99.99 },
    { _id: 952, priceOne: 100.0, priceTwo: 199.99 },
    { _id: 953, priceOne: 200.0, priceTwo: 399.99 },
    { _id: 954, priceOne: 400.0, priceTwo: 599.99 },
    { _id: 955, priceOne: 600.0, priceTwo: 799.99 },
    { _id: 956, priceOne: 800.0, priceTwo: 999.99 },
    { _id: 957, priceOne: 1000.0, priceTwo: 1499.99 },
    { _id: 958, priceOne: 1500.0, priceTwo: 1999.99 },
    { _id: 959, priceOne: 2000.0, priceTwo: 2999.99 },
    { _id: 960, priceOne: 3000.0, priceTwo: 4999.99 },
    { _id: 961, priceOne: 5000.0, priceTwo: 9999.99 },
    { _id: 962, priceOne: 10000.0, priceTwo: 19999.99 },
    { _id: 963, priceOne: 20000.0, priceTwo: 29999.99 },

  ];

  return (
    <div className="cursor-pointer">
      <div className="flex justify-between items-center" onClick={() => setIsOpen(!isOpen)}>
        <NavTitle title="Shop by Price" icons={false} />
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </div>
      {isOpen && (
        <div className="font-titleFont mt-2">
          <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
            {priceList.map((item) => (
              <li
                key={item._id}
                className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
              >
                Ksh {item.priceOne.toFixed(2)} - Ksh {item.priceTwo.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Price;
