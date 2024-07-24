"use client";

import React, { useState } from "react";

const NavbarDesktop = () => {
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isClosingExplore, setIsClosingExplore] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isClosingMore, setIsClosingMore] = useState(false);

  const toggleExplore = () => {
    if (isMoreOpen) {
      setIsMoreOpen(false); // Fermer 'More' si ouvert
      setIsClosingMore(true);
      setTimeout(() => {
        setIsClosingMore(false);
      }, 300);
    }
    setIsExploreOpen(!isExploreOpen);
  };

  const toggleMore = () => {
    if (isExploreOpen) {
      setIsExploreOpen(false); // Fermer 'Explore' si ouvert
      setIsClosingExplore(true);
      setTimeout(() => {
        setIsClosingExplore(false);
      }, 300);
    }
    setIsMoreOpen(!isMoreOpen);
  };

  return (
    <nav className="hidden lg:flex w-full h-[100px] items-center px-10 justify-between z-50">
      <h1 className="font-bold text-2xl text-[#6C5DD3]">Logo</h1>
      <div>
        <div className="ml-10 relative">
          <input
            type="text"
            placeholder="Search Items, Fashion, Collection and Users"
            className="w-[350px] h-[50px] border border-white/10 bg-transparent rounded-full pl-10 pr-4 text-[12px] text-white placeholder:text-white placeholder-ml-4 focus:outline-none"
          />
          <img
            src="/assets/search.svg"
            alt="Search"
            className="absolute left-[10px] top-1/2 transform -translate-y-1/2 w-5 h-5"
          />
        </div>
      </div>
      <div className="text-white flex gap-20 justify-center items-center mx-10">
        <a href="">Home</a>
        <div className="relative">
          <button
            onClick={toggleExplore}
            className="text-white focus:outline-none flex items-center gap-2"
          >
            Explore
            <img
              src="/assets/bottom-arrow.svg"
              alt="Chevron Down"
              className="w-[10px] h-[10px]"
            />
          </button>
          {isExploreOpen && (
            <div
              className={`z-50 flex flex-col gap-2 bg-[#212749ab] border border-white/5 shadow-lg backdrop-blur-lg rounded-[10px] p-2 w-[200px] absolute top-full mt-5 left-1/2 transform -translate-x-1/2 ${
                isClosingExplore ? "zoomOut" : "zoomIn"
              }`}
            >
              <a
                className="border-b border-white/10 mx-2 py-2 hover:text-[#6C5DD3] hover:duration-100 fadeIn deepEffect slideInFromLeft"
                style={{ animationDelay: "0.1s" }}
                href=""
              >
                Fashion
              </a>
              <a
                className="border-b border-white/10 mx-2 py-2 hover:text-[#6C5DD3] hover:duration-100 fadeIn deepEffect slideInFromLeft"
                style={{ animationDelay: "0.2s" }}
                href=""
              >
                Art
              </a>
              <a
                className="border-b border-white/10 mx-2 py-2 hover:text-[#6C5DD3] hover:duration-100 fadeIn deepEffect slideInFromLeft"
                style={{ animationDelay: "0.3s" }}
                href=""
              >
                Music
              </a>
              <a
                className="border-b border-white/10 mx-2 py-2 hover:text-[#6C5DD3] hover:duration-100 fadeIn deepEffect slideInFromLeft"
                style={{ animationDelay: "0.4s" }}
                href=""
              >
                Fashion
              </a>
              <a
                className="border-b border-white/10 mx-2 py-2 hover:text-[#6C5DD3] hover:duration-100 fadeIn deepEffect slideInFromLeft"
                style={{ animationDelay: "0.5s" }}
                href=""
              >
                Art
              </a>
              <a
                className="border-b border-white/10 mx-2 py-2 hover:text-[#6C5DD3] hover:duration-100 fadeIn deepEffect slideInFromLeft"
                style={{ animationDelay: "0.6s" }}
                href=""
              >
                Music
              </a>
              <a
                className="mx-2 py-2 hover:text-[#6C5DD3] hover:duration-100 fadeIn deepEffect slideInFromLeft"
                style={{ animationDelay: "0.7s" }}
                href=""
              >
                Photography
              </a>
            </div>
          )}
        </div>
        <a href="">Personal Collection</a>
        <a href="">Drops</a>
        <div className="relative">
          <button
            onClick={toggleMore}
            className="text-white focus:outline-none flex items-center gap-2"
          >
            More
            <img
              src="/assets/bottom-arrow.svg"
              alt="Chevron Down"
              className="w-[10px] h-[10px]"
            />
          </button>
          {isMoreOpen && (
            <div
              className={` z-50 flex flex-col gap-2 bg-[#212749ab] border border-white/5 shadow-lg backdrop-blur-lg rounded-[10px] p-2 w-[200px] absolute top-full mt-5 left-1/2 transform -translate-x-1/2 ${
                isClosingMore ? "zoomOut" : "zoomIn"
              }`}
            >
              <a
                className="border-b border-white/10 mx-2 py-2 hover:text-[#6C5DD3] hover:duration-100 fadeIn deepEffect slideInFromLeft"
                style={{ animationDelay: "0.1s" }}
                href=""
              >
                Stats
              </a>
              <a
                className="border-b border-white/10 mx-2 py-2 hover:text-[#6C5DD3] hover:duration-100 fadeIn deepEffect slideInFromLeft"
                style={{ animationDelay: "0.2s" }}
                href=""
              >
                Shows
              </a>
              <a
                className="border-b border-white/10 mx-2 py-2 hover:text-[#6C5DD3] hover:duration-100 fadeIn deepEffect slideInFromLeft"
                style={{ animationDelay: "0.3s" }}
                href=""
              >
                About Us
              </a>
              <a
                className="border-b border-white/10 mx-2 py-2 hover:text-[#6C5DD3] hover:duration-100 fadeIn deepEffect slideInFromLeft"
                style={{ animationDelay: "0.4s" }}
                href=""
              >
                Community
              </a>
              <a
                className="border-b border-white/10 mx-2 py-2 hover:text-[#6C5DD3] hover:duration-100 fadeIn deepEffect slideInFromLeft"
                style={{ animationDelay: "0.5s" }}
                href=""
              >
                Creator Studio
              </a>
              <a
                className="border-b border-white/10 mx-2 py-2 hover:text-[#6C5DD3] hover:duration-100 fadeIn deepEffect slideInFromLeft"
                style={{ animationDelay: "0.6s" }}
                href=""
              >
                Edit Profile
              </a>
              <a
                className="mx-2 py-2 hover:text-[#6C5DD3] hover:duration-100 fadeIn slideInFromLeft"
                style={{ animationDelay: "0.7s" }}
                href=""
              >
                Settings
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-5">
        <a
          href="/signup"
          className="text-white flex justify-center items-center border border-white font-semibold rounded-[5px] px-10 py-[10px] hover:bg-[#6C5DD3] hover:duration-300 hover:border-[#7665e4] hover:cursor-pointer"
        >
          Sign Up
        </a>
        <a
          href="/signin"
          className="text-white flex justify-center items-center border border-white font-semibold rounded-[5px] px-10 py-[10px] hover:bg-[#6C5DD3] hover:duration-300 hover:border-[#7665e4] hover:cursor-pointer"
        >
          Sign In
        </a>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
