import React from "react";
import Avatar from "@/components/layouts/Avatar";

const SignUp = () => {
  return (
    <section className="bg-[#181E41] w-screen h-screen flex justify-around items-center">
      <div className="flex  justify-center items-center">
        <Avatar text="Begin your meta fashion journey here" />
      </div>
      <div className="bg-white/20 border border-white/20 rounded-[10px] py-5 px-[35px]">
        <div>
          <h1 className="text-white text-[30px]">Sign Up</h1>
        </div>
        <div className="flex gap-[10px] mt-[50px]">
          <p className="text-white">Already a Member ?</p>
          <a
            className="text-[#6C5DD3] hover:text-[#B75CFF] duration-200 active:opacity-10"
            href="/signin"
          >
            {" "}
            Sign In
          </a>
        </div>
        <div className="flex flex-col gap-5 py-5">
          <div className="w-full">
            <input
              type="email"
              className="border-b border-white bg-transparent outline-none text-white w-[459px] pb-[10px]"
              placeholder="Email Adress"
            />
          </div>
          <div className="flex justify-between">
            {" "}
            <input
              type="text"
              className="border-b border-white bg-transparent outline-none text-white pb-[10px]"
              placeholder="Full Name"
            />{" "}
            <input
              type="text"
              className="border-b border-white bg-transparent outline-none text-white pb-[10px]"
              placeholder="Last Name"
            />
          </div>
          <div>
            <input
              type="password"
              className="border-b border-white bg-transparent w-full outline-none text-white pb-[10px]"
              placeholder="Password"
            />
          </div>
          <div className="mt-5">
            <p className="text-white/80">Date of Birth</p>
            <div className="flex justify-between mt-5">
              <input
                type="text"
                className="border-b border-white bg-transparent w-[30%] outline-none text-white pb-[5px]"
                placeholder="Jour"
              />
              <select
                className="border-b  border-white bg-transparent w-[30%] outline-none text-white pb-[5px] appearance-none"
                defaultValue=""
              >
                <option
                  value=""
                  disabled
                  selected
                  hidden
                >
                  Mois
                </option>
                <option value="1">Janvier</option>
                <option value="2">Février</option>
                <option value="3">Mars</option>
                <option value="4">Avril</option>
                <option value="5">Mai</option>
                <option value="6">Juin</option>
                <option value="7">Juillet</option>
                <option value="8">Août</option>
                <option value="9">Septembre</option>
                <option value="10">Octobre</option>
                <option value="11">Novembre</option>
                <option value="12">Décembre</option>
              </select>
              <input
                type="text"
                className="border-b border-white bg-transparent w-[30%] outline-none text-white pb-[10px]"
                placeholder="Année"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-5">
          <button className="hover:bg-gradient-to-tl duration-200 hover:shadow-md hover:shadow-[#671AE4] flex justify-center items-center hover:cursor-pointer px-5 py-2 bg-white/20 border border-white/20 backdrop-blur-lg rounded-full text-white font-semibold hover:bg-[#6C5DD3] hover:duration-200 max-w-46">
            Create Account
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
