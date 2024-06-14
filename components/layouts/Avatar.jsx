import React from "react";

const Avatar = ({text}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src="/assets/3d.svg" alt="" />
      <p className="text-white text-[28px]">
        {text}
      </p>
    </div>
  );
};

export default Avatar;
