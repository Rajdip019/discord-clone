import React from 'react'

const ActiveNowDashboard = () => {
    return (
        <div className='bg-[#36393F] h-[95vh] bg-no-online w-[550px] hidden lg:block relative z-10'>
            <h2 className='text-gray-100 text-xl mt-5 font-extrabold ml-5'>Active Now</h2>
            <div className='w-10/12 mx-auto'>
            <p className='text-gray-100 text-center font-bold mt-8'>It's quite for now...</p>
            <p className='text-gray-400 text-sm text-center mt-1'>When a friend starts an activity-like playing a game or hanging out on voice-we'll show it here.</p>
            </div>
        </div>
    )
}

export default ActiveNowDashboard
