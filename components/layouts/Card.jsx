"use client";

import React, { useState } from "react";

const Card = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <div className="bg-white/10 w-[390px] h-[595px] p-[25px] rounded-[10px]">
      <img src="/assets/card1.svg" alt="" />
      <div className="mt-5">
        <div className="flex justify-between text-white/50">
          <p>@johny</p>
          <p>Price</p>
        </div>
        <div className="flex justify-between text-white font-semibold">
          <p className=" mt-5">Lorem</p>
          <p className="mt-2.5">10€</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-10">
        <div class="con-like">
          <input
            class="like"
            type="checkbox"
            title="like"
            onClick={handleFavoriteClick}
          />
          <div class="checkmark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={isFavorite ? "filled" : ""}
            >
              <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="filled"
              viewBox="0 0 24 24"
            >
              <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="100"
              width="100"
              class="celebrate"
            >
              <polygon class="poly" points="10,10 20,20"></polygon>
              <polygon class="poly" points="10,50 20,50"></polygon>
              <polygon class="poly" points="20,80 30,70"></polygon>
              <polygon class="poly" points="90,10 80,20"></polygon>
              <polygon class="poly" points="90,50 80,50"></polygon>
              <polygon class="poly" points="80,80 70,70"></polygon>
            </svg>
          </div>
          {showNotification && (
            <div className="notification">
              Votre article a été {isFavorite ? "ajouté" : "retiré"} de vos
              favoris
            </div>
          )}
        </div>
        <a className="w-[300px] hover:bg-gradient-to-tl duration-200 hover:shadow-md hover:shadow-[#671AE4] flex justify-center items-center hover:cursor-pointer py-[10px] bg-white/20 border border-white/20 backdrop-blur-lg rounded-[10px] text-white font-semibold hover:bg-[#6C5DD3] hover:duration-200">
          Voir
        </a>
      </div>
    </div>
  );
};

export default Card;
