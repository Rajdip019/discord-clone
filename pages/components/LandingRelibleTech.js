import React from 'react'

const LandingRelibleTech = () => {
    return (
        <section className=' font-Helvetica bg-[#F7F6F7] lg:py-40 py-20'>
        <div className='max-w-[1024px] mx-auto'>
            <div className='lg:mb-20 w-11/12 mx-auto'>
            <h1 className=" md:text-4xl text-4xl font-black font lg:text-center font-Helvetica">RELIABLE TECH FOR STAYING CLOSE</h1>
            <p className=' lg:text-xl lg:text-center mt-10 font-Helvetica'>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
            </div>
            <div>
<img src="/assets/just_chiling_landing.svg" alt="" className=' xl:scale-125' />
            </div>
            <div className='flex flex-col justify-center items-center lg:mt-20 w-11/12 mx-auto'>
            <h2 className='my-10 font-bold text-3xl'>
            Ready to start your journey?
            </h2>
            <button className=' bg-[#5864F3] text-white py-4 px-8 rounded-full text-xl flex items-center justify-center'>
            <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-3"
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
            </div>

        </div>
        </section>
    )
}

export default LandingRelibleTech
