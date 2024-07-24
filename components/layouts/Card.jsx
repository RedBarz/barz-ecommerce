import React from "react";

const Card = () => {
  return (
    <div className="border rounded-[35px] p-5 shadow-lg w-[640px]">
      <div>
        <img src="/assets/shoes.svg" alt="" />
      </div>
      <div>
        <div className="my-[47px] pl-5">
          <h2 className="text-[40px]">VSports</h2>
          <h3 className="my-[22px] text-[25px] font-semibold">
            Nuke Sports Shoes
          </h3>
          <p className="text-[18px]">
            So beautiful, So elegent, just like Wow...{" "}
            <span className="text-[#CB6500] hover:cursor-pointer">More</span>
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div className="ml-[30px]">
            <p className=" font-bold text-[50px] flex flex-row items-center">
              300 <span className="text-[18px] pl-[5px]">€</span>
            </p>
            <div className="flex justify-center">
              <p className="font-semibold ">12% discount</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <button className="bg-[#E3D39C] rounded-full flex flex-row items-center px-[45px] py-[10px]">
              <img src="/assets/star.svg" alt="" />
              <p className="text-[40px] ml-4">4.7</p>
            </button>
            <p className="text-[20px]">3k Review</p>
          </div>
        </div>
        <div className="flex justify-between mt-[47px] p-[10px]">
          <button className="border border-[#402000] rounded-full px-[50px] py-[10px] text-[30px] flex items-center justify-center w-[50%] mr-[5px]">
            <img src="/assets/+.svg" alt="" />
            <p className="ml-5">Add</p>
          </button>
          <button className="border border-[#402000] rounded-full px-[50px] py-[10px] text-[30px] flex items-center justify-center w-[50%] ml-[5px]">
            <img src="/assets/chariot.svg" alt="" />
            <p className="ml-5">Buy Now</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
