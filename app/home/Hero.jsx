"use client"

import React, { useEffect } from "react";
import { gsap } from 'gsap';
import Caroussel from "@/components/layouts/Caroussel";

const Hero = () => {
  useEffect(() => {
    const imgRefs = document.querySelectorAll('img');

    imgRefs.forEach((imgRef) => {
      gsap.set(imgRef, { transformPerspective: 800, transformStyle: "preserve-3d" });

      const handleMouseMove = (event) => {
        const rect = imgRef.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        const rotationY = 0.2 * x;
        const rotationX = -0.2 * y;

        gsap.to(imgRef, { rotationY, rotationX, scale: 1.05, duration: 0.5 });
      };

      const handleMouseLeave = () => {
        gsap.to(imgRef, { rotationY: 0, rotationX: 0, scale: 1, duration: 0.5 });
      };

      imgRef.addEventListener('mousemove', handleMouseMove);
      imgRef.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        imgRef.removeEventListener('mousemove', handleMouseMove);
        imgRef.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, []);

  return (
    <section>
      <div className="flex justify-center items-center my-[100px] gap-[50px] relative">
        <button className="w-[200px] h-[55px] bg-white/20 border border-white/20 backdrop-blur-lg rounded-full text-white font-semibold hover:bg-[#6C5DD3] hover:duration-200">
          Main Collection
        </button>
        <div className="line"></div>
        <button className="w-[200px] h-[55px] bg-white/20 border border-white/20 backdrop-blur-lg rounded-full text-white font-semibold hover:bg-[#6C5DD3] hover:duration-200">
          Creators Market
        </button>
      </div>
      <div className="flex justify-around items-center mb-[100px] mx-[150px]">
        <div className="w-[40%]">
          <div className="flex flex-col items-start">
            <h1 className="text-[60px] text-white text-shadow">
              Clothes are the <br /> Spirit of Fashion
            </h1>
            <p className="text-white/80 mt-[30px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestiae placeat eveniet, dolorum voluptatibus aliquam at harum
              neque nostrum ut quis
            </p>
            <div className="flex justify-start items-center gap-[20px] mt-[30px]">
              <a className="hover:bg-gradient-to-tl duration-200 hover:shadow-md hover:shadow-[#671AE4] flex justify-center items-center hover:cursor-pointer px-5 py-2 bg-white/20 border border-white/20 backdrop-blur-lg rounded-[10px] text-white font-semibold hover:bg-[#6C5DD3] hover:duration-200">
                Explore Now
              </a>
              <a className="hover:bg-gradient-to-tl duration-200 hover:shadow-md hover:shadow-[#671AE4] flex justify-center items-center hover:cursor-pointer px-5 py-2 bg-white/20 border border-white/20 backdrop-blur-lg rounded-[10px] text-white font-semibold hover:bg-[#6C5DD3] hover:duration-200">
                Create
              </a>
            </div>
            <div className="flex justify-between items-center w-full mt-12">
              <div className="flex flex-col items-center">
                <p className="text-white text-[30px]">+100</p>
                <p className="text-white/70">Brands</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-white text-[30px]">20k+</p>
                <p className="text-white/70">Fashion Designer</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-white text-[30px]">60+</p>
                <p className="text-white/70">Fashion Shows</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[40%] ">
          <div className="flex flex-col flex-wrap h-[517px]">
            <div className="flex flex-col justify-between flex-wrap gap-[10px]">
              <img src="/assets/picture1.svg" alt="" />
              <img src="/assets/picture2.svg" alt="" />
              <img
                className="relative top-[-27px]"
                src="/assets/picture7.svg"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between flex-wrap gap-[10px]">
              <img src="/assets/picture3.svg" alt="" />
              <img src="/assets/picture4.svg" alt="" />
              <img src="/assets/picture5.svg" alt="" />
            </div>
            <div className="flex h-full justify-center items-center">
              <img src="/assets/picture6.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-[150px]">
        <Caroussel />
      </div>
    </section>
  );
};

export default Hero;
