import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="Farm Fresh Vegetables"
          price="235.00"
          color="Blank and White"
          badge={true}
          des="Get Farm Fresh Vegetable from us at affordable prices, order now"
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="Pest Detection Device"
          price="1080.00"
          color="Gray"
          badge={false}
          des="Control pest and crop diseases at your phone click"
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Farm Fresh Onions"
          price="25.00"
          color="Mixed"
          badge={true}
          des="Safe and fresh oniona from most trusted farmers, order now"
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Corns"
          price="220.00"
          color="Mixed"
          badge={false}
          des="Missed on Corns??..Here they're."
        />
      </div>
    </div>
  );
};

export default BestSellers;
