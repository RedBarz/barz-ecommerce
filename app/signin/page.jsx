import React from "react";
import Avatar from "@/components/layouts/Avatar";

const SignIn = () => {
  return (
    <section className="bg-[#181E41] w-screen h-screen flex justify-around items-center">
      <div className="flex  justify-center items-center">
        <Avatar text="Explore the world of meta fashion"/>
      </div>
      <div className="bg-white/20 border border-white/20 rounded-[10px] py-5 px-[35px]">
        <div className="flex justify-between">
          <h1 className="text-white text-[30px]">Sign In</h1>
          <a className="text-white/50 hover:text-[#B75CFF] duration-200 active:opacity-10 text-[30px]" href="/">Home</a>
        </div>
        <div className="flex gap-[10px] mt-[50px]">
          <p className="text-white">New User ?</p>
          <a
            className="text-[#6C5DD3] hover:text-[#B75CFF] duration-200 active:opacity-10"
            href="/signup"
          >
            {" "}
            Create an account
          </a>
        </div>
        <div className=" flex flex-col gap-5 py-5">
          <div className="w-full">
            <input
              type="email"
              className="border-b border-white bg-transparent w-full outline-none text-white pb-[10px]"
              placeholder="Email Adress"
            />
          </div>
          <div>
            <input
              type="password"
              className="border-b border-white bg-transparent w-full outline-none text-white pb-[10px]"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button className="hover:bg-gradient-to-tl duration-200 hover:shadow-md hover:shadow-[#671AE4] flex justify-center items-center hover:cursor-pointer px-5 py-2 bg-white/20 border border-white/20 backdrop-blur-lg rounded-full text-white font-semibold hover:bg-[#6C5DD3] hover:duration-200 max-w-32">
            Continue
          </button>
        </div>
        <div className="flex justify-center my-10">
          <p className="text-white">Or</p>
        </div>
        <div className="flex flex-col gap-6">
          <button className="active:opacity-10 hover:opacity-60 duration-200 text-white flex gap-5 items-center justify-center border border-white/50 rounded-full w-[450px] h-[70px] ">
            <img src="/assets/google.svg" alt="" />
            Continue With Google
          </button>
          <button className="active:opacity-10 duration-200 hover:opacity-60 text-white flex gap-5 items-center justify-center bg-[#1877F2] rounded-full w-[450px] h-[70px] ">
            <img src="/assets/facebook.svg" alt="" />
            Continue With Facebook
          </button>
          <button className="active:opacity-10 duration-200 hover:opacity-60 text-white flex gap-5 items-center justify-center rounded-full w-[450px] h-[70px]  bg-[#1d1d1d]">
            <img src="/assets/apple.svg" alt="" />
            Continue With Apple
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
