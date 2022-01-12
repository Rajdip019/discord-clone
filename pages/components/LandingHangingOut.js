import React from "react";

const LandingHangingOut = () => {
  return (
    <>
      <section className="bg-[#F7F6F7] hidden lg:block overflow-hidden">
        <div className="lg:py-32 py-10 max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 lg:gap-32 grid-">
            <div className="my-auto ml-auto px-8 lg:px-20">
              <h1 className="lg:text-5xl font-Helvetica font-extrabold leading-normal md:text-3xl text-lg">
                Where hanging out is easy
              </h1>
              <p className="lg:text-xl mt-8 ">
                Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.
              </p>
            </div>
            <div className="my-auto mr-aut0">
              <img
                src="assets/hanging_out_easy_landing.svg"
                alt=""
                className=" overflow-x-hidden m-auto lg:scale-125 lg:mr-10"
              />
            </div>
          </div>
        </div>
      </section>


      <section className="bg-[#F7F6F7] block lg:hidden">
        <div className="lg:py-32 py-10 max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 lg:gap-32 grid-">
            <div className="my-auto mr-aut0">
              <img
                src="assets/hanging_out_easy_landing.svg"
                alt=""
                className=" overflow-x-hidden m-auto lg:scale-125"
              />
            </div>
            <div className="my-auto ml-auto px-8 lg:px-20">
              <h1 className="lg:text-5xl font-Helvetica font-extrabold leading-normal md:text-3xl text-lg">
                Where hanging out is easy
              </h1>
              <p className="lg:text-xl mt-8 ">
                Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingHangingOut;
