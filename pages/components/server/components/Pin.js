import React from "react";
import { Tooltip } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";

const Pin = () => {
    return (
        <Menu>
      <Tooltip label="Pin" position="bottom" hasArrow>
        <MenuButton className="">
          <svg
              className="w-7 text-[#B8BABE] hover:text-[#e3e7f0] cursor-pointer transition-all mr-4"
              aria-hidden='false'
              viewBox='0 0 24 24'
            >
              <path
                fill='currentColor'
                d='M22 12L12.101 2.10101L10.686 3.51401L12.101 4.92901L7.15096 9.87801V9.88001L5.73596 8.46501L4.32196 9.88001L8.56496 14.122L2.90796 19.778L4.32196 21.192L9.97896 15.536L14.222 19.778L15.636 18.364L14.222 16.95L19.171 12H19.172L20.586 13.414L22 12Z'
              ></path>
            </svg>
        </MenuButton>
      </Tooltip>
      <MenuList
        width="450px"
        height="370px"
        className=" scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-gray-700 overflow-y-scroll h-[30px] mr-80 "
        bgColor="#383D43"
        border="0"
        shadow="xl"
      >
        <div className=" relative bg-[#212325] ">
          <div className="fixed -top-2 z-50 pb-2 shadow-xl bg-[#212325] w-[450px] px-4">
            <p className="text-white text-xl font-bold mb-0.5 pt-3">
              Pinneed Messages
            </p>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" class=" w-48 mx-auto mt-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
        <p className="text-center w-6/12 mx-auto -mt-2 text-gray-300">This Channel doesn't have any pinned messages ... yet.</p>

          <div className="absolute -bottom-2 z-50 pb-2 shadow-xl bg-[#212325] w-[450px] px-4">
            <p className="text-green-600 mx-auto text-center text-lg font-bold mb-0.5 pt-3 uppercase">
              protip:
            </p>
            <p className="text-center w-11/12 mx-auto mb-2 text-gray-400 text-sm">User's with 'Manage Message can pin from the cog menu.'</p>
          </div>
      </MenuList>
    </Menu>
    )
}

export default Pin
