import React from "react";
import { Tooltip } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";
import dm from "../../../database/dm";

const DM = () => {
  return (
    <Menu>
      <Tooltip label="New Group DM" position="bottom" hasArrow>
        <MenuButton className="">
          <svg
            aria-hidden="false"
            viewBox="0 0 24 24"
            fill="none"
            className="w-7 text-[#B8BABE] hover:text-[#e3e7f0] cursor-pointer transition-all mx-4"
          >
            <path
              fill="currentColor"
              d="M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z"
            ></path>
          </svg>
        </MenuButton>
      </Tooltip>
      <MenuList
        width="450px"
        height="350px"
        className="px-4 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-gray-700 overflow-y-scroll h-[30px] mr-28 "
        bgColor="#383D43"
        border="0"
        shadow="xl"
      >
        <div className=" relative ">
          <div className="sticky -top-2 z-50 bg-[#383D43] pb-2 shadow-xl">
            <p className="text-white text-xl font-bold mb-0.5 pt-3">
              Select Friends
            </p>
            <p className="text-xs text-gray-400 font-semibold mb-5">
              You can add 9 more friends
            </p>
            <input
              type="text"
              name=""
              id=""
              placeholder="Type the Username of a friend"
              className="w-full rounded h-9 bg-[#17181b] focus:outline-0 px-2 text-gray-300 text-sm"
            />
          </div>
          <div className="mb-16">
            {dm.map((dms) => {
              return (
                <div className="w-full mt-1 flex items-center hover:bg-[#2d2e2f] px-2 py-1 rounded cursor-pointer transition-all justify-between">
                  <div className="flex items-center ">
                    <Avatar src={dms.image} size="sm">
                      <AvatarBadge boxSize="0.7em" bg="gray.500" />
                    </Avatar>
                    <p className="ml-3 text-[#8E928A] font-semibold font-sans">
                      {dms.name}
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    className="transition duration-200 align-top bg-no-repeat bg-center bg-contain indeterminate:bg-gray-300  w-5 h-5 rounded bg-[#313239] ring-1 ring-gray-500 checked:bg-[#949CF7] checked:bg-checked appearance-none cursor-pointer"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-[#383D43] p-3 absolute bottom-0 w-9/12">
          <button className="bg-[#5964F2] text-white w-full px-4 py-2 rounded font-semibold hover:bg-[#4952ca] transition-all">
            Create Group DM
          </button>
        </div>
      </MenuList>
    </Menu>
  );
};

export default DM;
