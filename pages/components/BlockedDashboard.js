import React from 'react'

const BlockedDashboard = () => {
    return (
        <div className="bg-[#36393F] h-[95vh] bg-no-online w-full fixed lg:relative">
        <div className="w-[95%] mx-auto mt-3">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search"
            className="w-full rounded h-9 bg-[#212224] focus:outline-0 px-2 text-gray-300 text-sm"
          />
          <h3 className="text-sm font-bold mt-8 text-gray-400 uppercase">
            Blocked - 0
          </h3>
          <div className=" h-[1px] bg-gray-500 my-3"></div>
          <h2 className='text-center font-bold text-gray-300 text-xl mt-16'>No blocked users</h2>
        </div>
      </div>
    )
}

export default BlockedDashboard
