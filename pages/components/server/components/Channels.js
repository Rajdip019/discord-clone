import React from "react";
import { Tooltip } from "@chakra-ui/react";

const Channels = ({ name, image }) => {
  return (
    <div className="w-11/12 mx-auto mt-2 flex items-center justify-between hover:bg-[#2d2e2f] p-1 rounded-sm cursor-pointer transition-all group">
    <div className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-[#8E928A] group-hover:text-gray-300 transition-all"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
        />
      </svg>
      <p className="ml-3 text-[#8E928A] font-semibold font-sans group-hover:text-gray-300 transition-all ">{name}</p>

    </div>
    <Tooltip label="Create Invite" hasArrow placement="top" >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-300 group-hover:block hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
</svg>
</Tooltip>
    </div>
  );
};

export default Channels;
