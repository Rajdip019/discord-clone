import Link from "next/link";
import React, { useEffect, useState } from "react";
import Document from "./documnent";
import { motion } from "framer-motion";

const Login = () => {
  const [animation, setAnimation] = useState(true);

  const handleAnimation = () => {
    setAnimation(false);
  };

  useEffect(() => {
    setTimeout(() => {
      handleAnimation();
    }, 3000);
  }, []);

  return (
    <>
      <Document />
      <div className=" bg-login h-screen w-screen bg-no-repeat bg-cover bg-center bg-origin-content font-Helvetica hidden sm:block">
        <div className="flex flex-row mx-auto justify-center items-center h-screen">
          {/* For Larger Screen Over Mobile */}
          <div className="flex flex-col w-[450px] bg-[#37393E] justify-center rounded-xl md:rounded-r-none shadow-2xl">
            <div className=" flex-col flex py-10 pl-8 pr-5 shadow-xl">
              <h2 className="text-white text-center font font-bold text-2xl">
                Welocme back!
              </h2>
              <p className="text-[#ABADB1] text-center my-3 text-sm">
                We're so excited to see you again!
              </p>
              <label
                htmlFor="email"
                className="uppercase text-[#B4B7B8] text-xs font-bold my-2 font-Helvetica"
              >
                Email or Phone Number
              </label>
              <input
                type="text"
                name=""
                id="email"
                className="rounded-sm h-9 bg-[#313239] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 ring-1 ring-slate-800 border-slate-700"
              />
              <label
                htmlFor="password"
                className="uppercase text-[#B4B7B8] text-xs font-bold my-2 mt-5 font-Helvetica"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="rounded-sm h-9 bg-[#313239] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 ring-1 ring-slate-800 border-slate-700"
              />
              <a
                href=""
                className="text-[#40b3e4] text-xs font-bold my-3 mb-6 hover:underline"
              >
                Forgot your password?
              </a>
              <button className="bg-[#5964F2] text-gray-100 py-[10px]  rounded text-md font-bold hover:bg-[#575fcc] transition-all font-sans">
                Login
              </button>
              <div className="flex items-center mt-3">
                <p className="text-sm mr-2 text-gray-500">Need an account?</p>
                <Link href="/register">
                  <a className="text-sm text-[#40b3e4] hover:underline font-medium">
                    Register
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-[#37393E] w-[350px] flex flex-col items-center px-10 pt-[71px] justify-center pb-[68px] rounded-r-xl ">
              {animation ? (
                <div className="h-[157px]">
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ rotate: 360, scale: 1.5}}
                  transition={{
                    type: "just",
                    stiffness: 260,
                    damping: 200,
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1.5
                  }}
                  className="h-6 w-6 bg-[#7079ff] m-16 rounded-sm"
                />
                </div>
              ) : (
                <div>
                  <img src="/assets/QR.png" alt="" className="scale-125" />
                </div>
              )}

              <div className="mt-10">
                <h2 className="text-center text-white text-2xl font-bold font-Helvetica my-3">
                  Login with QR Code
                </h2>
                <p className="text-center text-[#B4B7B8] text-sm">
                  Scan this with
                  <span className="font-bold font-Helvetica">
                    Discord mobile app
                  </span>
                  to log in instatntly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#37393E] block sm:hidden">
        <img
          src="/assets/logonavBar.svg"
          alt=""
          className="w-36 mx-auto pt-5"
        />
        <div className=" flex-col flex py-10 px-5 shadow-xl  h-screen">
          <h2 className="text-white text-center font font-bold text-2xl">
            Welocme back!
          </h2>
          <p className="text-[#ABADB1] text-center my-3 text-sm">
            We're so excited to see you again!
          </p>
          <label
            htmlFor="email"
            className="uppercase text-[#B4B7B8] text-xs font-bold my-2 font-Helvetica"
          >
            Email or Phone Number
          </label>
          <input
            type="text"
            name=""
            id="email"
            className="rounded-sm h-9 bg-[#313239] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 ring-1 ring-slate-800 border-slate-700"
          />
          <label
            htmlFor="password"
            className="uppercase text-[#B4B7B8] text-xs font-bold my-2 mt-5 font-Helvetica"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="rounded-sm h-9 bg-[#313239] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 ring-1 ring-slate-800 border-slate-700"
          />
          <a
            href=""
            className="text-[#40b3e4] text-xs font-bold my-3 mb-6 hover:underline"
          >
            Forgot your password?
          </a>
          <button className="bg-[#5964F2] text-gray-100 py-[10px]  rounded text-md font-bold hover:bg-[#575fcc] transition-all font-sans">
            Login
          </button>
          <div className="flex items-center mt-3">
            <p className="text-sm mr-2 text-gray-500">Need and account?</p>
            <a
              href=""
              className="text-sm text-[#40b3e4] hover:underline font-medium"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
