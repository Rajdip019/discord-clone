import React from "react";

const LandingInviteOnly = () => {
  return (
      <section className="lg:py-32 py-10 max-w-[1280px] mx-auto">
    <div className="grid lg:grid-cols-2 lg:gap-32">
      <div className="my-auto mr-aut0">
        <img src="assets/inviteOnlyLandingPage.svg" alt="" className=" overflow-x-hidden m-auto lg:scale-125 lg:ml-10" />
      </div>
      <div className="my-auto ml-auto px-8 lg:px-20">
        <h1 className="lg:text-5xl font-Helvetica font-extrabold leading-normal md:text-3xl text-lg">Create an invite-only place where you belong</h1>
        <p className="lg:text-xl mt-8 ">
          Discord servers are organized into topic-based channels where you can
          collaborate, share, and just talk about your day without clogging up a
          group chat.
        </p>
      </div>
    </div>
      </section>
  );
};

export default LandingInviteOnly;
