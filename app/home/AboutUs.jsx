import React from "react";

const AboutUs = () => {
  return (
    <section className="mt-[100px]">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[40px] text-white font-semibold">About Us</h2>
        <p className="text-white/60 text-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="flex justify-center mt-[50px]">
        <div className="w-[50%] flex justify-center ">
          <img src="/assets/picture8.svg" alt="" />
        </div>
        <div className="w-[50%] flex flex-col justify-around">
          <h3 className="text-white text-[36px]">Fashion That Speaks</h3>
          <p className="w-[60%] text-white/50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar.{" "}
          </p>
          <a className="w-40 hover:bg-gradient-to-tl duration-200 hover:shadow-md hover:shadow-[#671AE4] flex justify-center items-center hover:cursor-pointer px-5 py-2 bg-white/20 border border-white/20 backdrop-blur-lg rounded-[10px] text-white font-semibold hover:bg-[#6C5DD3] hover:duration-200">
            Explore Now
          </a>{" "}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
