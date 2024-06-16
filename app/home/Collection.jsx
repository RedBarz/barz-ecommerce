import React from "react";
import Title from "@/components/layouts/Title";
import Card from "@/components/layouts/Card";

const Collection = () => {
  return (
    <section className="mt-[100px]">
      <Title
        title="All Collection"
        subTitle="World First Layer 2 Fashion Marketplace"
      />
      <div>
        <div className="flex gap-52 justify-center mt-[50px]">
          <div className="flex flex-col justify-center items-center">
            <img className="w-20 h-20" src="/assets/sales.svg" alt="" />
            <p className="text-white text-[15px] font-semibold mt-1.5">
              No Gas Fees
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="w-20 h-20" src="/assets/nft.svg" alt="" />
            <p className="text-white text-[15px] font-semibold mt-1.5">
              Carbon Natural NFTs
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="w-20 h-20" src="/assets/trade.svg" alt="" />
            <p className="text-white text-[15px] font-semibold mt-1.5">
              Fast and easy transactions
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-[150px]">
          <div className="flex justify-center gap-4">
            {" "} 
            <a className="w-52 hover:bg-gradient-to-tl duration-200 hover:shadow-md hover:shadow-[#671AE4] flex justify-center items-center hover:cursor-pointer py-1 bg-white/20 border border-white/20 backdrop-blur-lg rounded-[10px] text-white font-semibold hover:bg-[#6C5DD3] hover:duration-200">
              All Collections
            </a>
            <a className="w-52 hover:bg-gradient-to-tl duration-200 hover:shadow-md hover:shadow-[#671AE4] flex justify-center items-center hover:cursor-pointer py-1 bg-white/20 border border-white/20 backdrop-blur-lg rounded-[10px] text-white font-semibold hover:bg-[#6C5DD3] hover:duration-200">
              Verified Brands
            </a>
            <a className="w-52 hover:bg-gradient-to-tl duration-200 hover:shadow-md hover:shadow-[#671AE4] flex justify-center items-center hover:cursor-pointer py-1 bg-white/20 border border-white/20 backdrop-blur-lg rounded-[10px] text-white font-semibold hover:bg-[#6C5DD3] hover:duration-200">
              Verified Artists
            </a>
            <a className="w-52 hover:bg-gradient-to-tl duration-200 hover:shadow-md hover:shadow-[#671AE4] flex justify-center items-center hover:cursor-pointer py-1 bg-white/20 border border-white/20 backdrop-blur-lg rounded-[10px] text-white font-semibold hover:bg-[#6C5DD3] hover:duration-200">
              New Drops
            </a>
            <a className="w-52 hover:bg-gradient-to-tl duration-200 hover:shadow-md hover:shadow-[#671AE4] flex justify-center items-center hover:cursor-pointer py-1 bg-white/20 border border-white/20 backdrop-blur-lg rounded-[10px] text-white font-semibold hover:bg-[#6C5DD3] hover:duration-200">
              Live Shows
            </a>
          </div>
        </div>
        <div>
            <Card/>
        </div>
      </div>
    </section>
  );
};

export default Collection;
