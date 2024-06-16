import React from "react";

const Title = ({title, subTitle}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-[40px] text-white font-semibold">{title}</h2>
      <p className="text-white/60 text-[20px]">
        {subTitle}
      </p>
    </div>
  );
};

export default Title;
