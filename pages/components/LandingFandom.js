import React from 'react'

const LandingFandom = () => {
    return (
        <section className="lg:py-32 py-10 max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-2 lg:gap-32">
          <div className="my-auto mr-aut0">
            <img src="assets/fandom_landing.svg" alt="" className=" overflow-x-hidden m-auto lg:scale-125 lg:ml-10 mb-5" />
          </div>
          <div className="my-auto ml-auto px-8 lg:px-20">
            <h1 className="lg:text-5xl font-Helvetica font-extrabold leading-normal md:text-3xl text-lg">From few to a fandom</h1>
            <p className="lg:text-xl mt-8 ">
            Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.
            </p>
          </div>
        </div>
          </section>
    )
}

export default LandingFandom
