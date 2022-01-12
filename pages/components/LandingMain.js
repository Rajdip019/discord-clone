import React from "react";

const LandingMain = () => {
  return (
    <>
      <div className=" bg-skin-main lg:bg-landing-bg bg-no-repeat lg:bg-center bg-cover md:bg-landing-right-bg  ">
        <div className="p-8 2xl:w-6/12 xl:w-7/12 lg:w-10/12 md:w-8/12 w-11/12 lg:mx-auto lg:py-52 md:py-48 pt-32 pb-40 relative flex flex-col lg:justify-center lg:items-center justify-start items-start">
          <h1 className="uppercase md:text-7xl text-4xl font-extrabold  text-white lg:text-center font-Helvetica">
            Imagine a place...
          </h1>
          <p className=" text-white lg:text-xl lg:text-center mt-10 font-Helvetica">
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
          <div className="flex lg:justify-center flex-col lg:flex-row  -mb-16 mt-12">
            <button className=" font-Helvetica bg-white px-8 py-3 rounded-full text-lg flex items-center hover:shadow-xl hover:text-skin-main transition-all lg:mx-5 mb-5 lg:mb-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-3 hover:text-skin-main transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download for Windows
            </button>
            <button className="font-Helvetica bg-slate-800 text-white px-8 py-3 rounded-full text-lg flex items-center hover:shadow-xl hover:text-skin-main transition-all lg:mx-5">
              Open Discord in Your Browser
            </button>
          </div>
        </div>
        <div className=" overflow-hidden">
        <img src="assets/homepage1.svg" alt="" className="mx-auto -translate-x-20 block md:hidden overflow-hidden" />
        </div>
      </div>
    </>
  );
};

export default LandingMain;
