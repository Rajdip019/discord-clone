import Link from "next/link";
import React, { useState } from "react";
import Document from "./documnent";

const Login = () => {

    const [checked ,setChecked] = useState(false);
    const handleCheck = (e) => {
        if(e.target.checked === true){
            setChecked(true)
        }else{
            setChecked(false)
        }
    }

  return (
    <>
      <Document />
      <div className=" sm:bg-login h-screen w-screen bg-no-repeat bg-cover bg-center bg-origin-content font-Helvetica bg-[#37393E]">
        <div className="flex flex-row mx-auto justify-center items-center h-screen">
          {/* For Larger Screen Over Mobile */}
          <div className="sm:flex sm:flex-col max-w-[500px] bg-[#37393E] justify-center rounded-xl sm:shadow-2xl">
            <div className=" flex-col flex py-10 px-8 sm:shadow-xl">
              <h2 className="text-white text-center font font-bold text-2xl mb-5">
                Create an Account
              </h2>
              <label
                htmlFor="email"
                className="uppercase text-[#B4B7B8] text-xs font-bold my-2 font-Helvetica"
              >
                Email
              </label>
              <input
                type="text"
                name=""
                id="email"
                className="rounded-sm h-9 bg-[#313239] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 ring-1 ring-slate-800 border-slate-700"
              />
              <label
                htmlFor="name"
                className="uppercase text-[#B4B7B8] text-xs font-bold my-2 mt-5 font-Helvetica"
              >
                Username
              </label>
              <input
                type="text"
                name=""
                id="name"
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
              <label className="uppercase text-[#B4B7B8] text-xs font-bold my-2 mt-5 font-Helvetica">
                Date of Birth
              </label>
              <div>
                <div className="sm:flex sm:justify-between h-10 mb-5">
                  <select
                    name=""
                    id=""
                    className="w-40 rounded bg-[#313239] text-[#676B70] px-2 ring-slate-800 border-slate-700 h-10 mb-3 block "
                  >
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      Select
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                      className=" text-white font-Helvetica text-lg"
                    >
                      January
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      February
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      March
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      April
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      May
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      June
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      July
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      August
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      September
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      October
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      November
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      December
                    </option>
                  </select>
                  <select
                    name=""
                    id=""
                    className="w-28 rounded bg-[#313239] text-[#676B70] px-2 ring-slate-800 border-slate-700 h-10 mb-3 block "
                  >
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      Select
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      1
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      2
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      3
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      4
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      5
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      6
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      7
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      8
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      9
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      10
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      11
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      12
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      13
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      14
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      15
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      16
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      17
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      18
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      19
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      20
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      21
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      22
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      23
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      24
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      25
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      26
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      27
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      28
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      29
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      30
                    </option>
                  </select>
                  <select
                    name=""
                    id=""
                    className="w-32 rounded bg-[#313239] text-[#676B70] px-2 ring-slate-800 border-slate-700 h-10 mb-3 block "
                  >
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      Select
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      1998
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      1999
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      2000
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      2001
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      2002
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      2003
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      2004
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      2005
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      2006
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      2007
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      2008
                    </option>
                    <option
                      value=""
                      className=" text-white font-Helvetica text-lg"
                    >
                      2009
                    </option>
                  </select>
                </div>
              </div>
              <div className="mt-28 sm:mt-auto">
                <div className="flex items-center mb-5">
                  <input
                    type="checkbox"
                    className="transition duration-200 align-top bg-no-repeat bg-center bg-contain indeterminate:bg-gray-300  w-6 h-6 rounded bg-[#313239] ring-1 ring-gray-300 checked:bg-[#949CF7] checked:bg-checked appearance-none cursor-pointer"
                    onChange={(e) => {handleCheck(e)}}

                  />
                  <p className="ml-2 text-xs text-gray-200 opacity-80">
                    I have read and agree to Discord's
                    <span className="text-[#40b3e4] cursor-pointer hover:underline">
                      <a href=""> Terms of Services </a>
                    </span>
                    and
                    <span className="text-[#40b3e4] cursor-pointer hover:underline">
                      <a href=""> Privacy Policy.</a>
                    </span>
                  </p>
                </div>
                {checked ? (

                <button className="w-full bg-[#5964F2] text-gray-100 py-[10px]  rounded text-md font-bold hover:bg-[#575fcc] transition-all font-sans">
                  Register
                </button>


                ) : (
                    <button disabled className="w-full bg-[#545785] text-gray-400 py-[10px]  rounded text-md font-bold  font-sans">
                  Register
                </button>
                )}
                <div className="flex items-center mt-3">
                <Link href="/login">
                  <a
                  
                    className="text-sm text-[#40b3e4] hover:underline font-medium"
                  >
                    Already have and acoount?
                  </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
