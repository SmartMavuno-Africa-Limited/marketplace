import React, { useState } from "react";
import { ImPlus, ImMinus } from "react-icons/im";
import NavTitle from "./NavTitle";

const Category = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);

  const items = [
    {
      _id: 990,
      title: "Sustainable Farming and Technology",
      icons: true,
      subcategories: ["Smart Irrigation", "Precision Farming", "Agri Drones"],
    },
    {
      _id: 991,
      title: "Farm Inputs and Supplies",
      subcategories: ["Fertilizers", "Seeds", "Pesticides"],
    },
    {
      _id: 992,
      title: "Produce and Livestock",
      icons: true,
      subcategories: ["Dairy", "Poultry", "Fresh Produce"],
    },
    {
      _id: 993,
      title: "Farm Equipment and Services",
      subcategories: ["Tractors", "Irrigation Systems", "Farm Tools"],
    },
    {
      _id: 994,
      title: "Agro-Processed and Value-Added Products",
      subcategories: ["Flour & Grains", "Dairy Products", "Preserved Foods"],
    },
  ];

  const handleCategoryToggle = () => {
    setShowCategories(!showCategories);
  };

  const handleSubCategoryToggle = (id) => {
    setOpenCategory(openCategory === id ? null : id);
  };

  return (
    <div className="w-full">
      <div
        className="flex items-center justify-between cursor-pointer pb-2 border-b-[1px] border-b-[#F0F0F0]"
        onClick={handleCategoryToggle}
      >
        <NavTitle title="Shop by Category" icons={false} />
        <span className="text-[10px] lg:text-xs text-gray-400 hover:text-primeColor duration-300">
          {showCategories ? <ImMinus /> : <ImPlus />}
        </span>
      </div>
      {showCategories && (
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676] mt-2">
          {items.map(({ _id, title, icons, subcategories }) => (
            <li key={_id} className="border-b-[1px] border-b-[#F0F0F0] pb-2">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => handleSubCategoryToggle(_id)}
              >
                {title}
                {icons && (
                  <span className="text-[10px] lg:text-xs text-gray-400 hover:text-primeColor duration-300">
                    {openCategory === _id ? <ImMinus /> : <ImPlus />}
                  </span>
                )}
              </div>
              {openCategory === _id && subcategories && (
                <ul className="pl-4 mt-2 text-gray-500">
                  {subcategories.map((sub, index) => (
                    <li key={index} className="pb-1">
                      - {sub}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Category;
