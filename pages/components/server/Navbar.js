import React from "react";
import Question from "../DashBoardNavbarLeft/Question";
import Inbox from "../DashBoardNavbarLeft/Inbox";
import { Tooltip } from "@chakra-ui/react";
import Notifications from "./components/Notifications";
import Threads from "./components/Threads";
import Pin from "./components/Pin";

const Navbar = ({handleMember}) => {
  return (
    <>
      <div className="bg-[#36393F] w-[calc(100vw-315px)] h-[47px] flex items-center justify-between overflow-hidden cursor-pointer">
        <div className="flex items-center overflow-hidden fixed">
          <div className="flex items-center mx-2 my-1 bg-[#383D43] px-3 py-2  rounded-md cursor-default">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="text-[#8E928A] w-6"
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
            <span className="text-gray-100 ml-4 font-semibold ">Rules</span>
          </div>
          <div className="h-8 my-auto border-l-2 border-[#4d525a]"></div>
          {/* The Add Friend Button */}
          <p className="text-sm text-gray-400 ml-3 md:block hidden">
            Obey the rules and take the community to another level.
          </p>
        </div>

        {/* The Right Side Buttons*/}
        <div className="sm:flex items-center fixed right-0 hidden bg-[#36393F] h-[47px] z-30">
        <Threads />
        <Notifications />
        <Pin />
        <Tooltip label="Hide Member List" placement="bottom">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 mr-4 text-[#B8BABE] hover:text-[#e3e7f0] cursor-pointer transition-all"
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={() => {handleMember()}}
          >
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
          </svg>
          </Tooltip>
          <div className="h-8 my-auto border-r-2 border-[#4d525a]"></div>
          <input
            type="text"
            className="bg-[#212325] ml-2 w-[100px] focus:w-[200px] transition-all ring-0 border-0 focus:ring-0 focus:border-0 px-2"
            placeholder="Search"
          />
          <Inbox />
          <Question />
        </div>
      </div>
      <div className="h-[1px] bg-gray-800"></div>
    </>
  );
};

export default Navbar;
