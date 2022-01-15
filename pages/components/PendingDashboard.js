import React from "react";
import dm from "../../database/dm";
import { Avatar } from "@chakra-ui/react";

const PendingDashboard = () => {
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
          Pending - 6
        </h3>
        <div className=" h-[1px] bg-gray-500 my-3"></div>
        {dm.slice(4,6).map((dms) => {
          return (
            <>
            <div className="w-full flex items-center hover:bg-gray-700 px-2 py-2 rounded-lg cursor-pointer transition-all justify-between">
              <div className="flex items-center ">
              <Avatar src={dms.image} size="sm">
                     
                     </Avatar>
                <p className="ml-3 text-[#8E928A] font-semibold font-sans">
                  {dms.name}
                </p>
              </div>
              <div>
              
              <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 text-gray-400 bg-gray-800 p-2 rounded-full mr-3 rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
</svg>
              </div>
            </div>
        <div className=" h-[1px] bg-gray-600 "></div>
        </>
          );
        })}
      </div>
    </div>
   
    )
}

export default PendingDashboard
