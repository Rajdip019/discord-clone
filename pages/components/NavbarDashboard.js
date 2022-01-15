import React from "react";
import DM from "./DashBoardNavbarLeft/DM";
import Question from "./DashBoardNavbarLeft/Question";
import Inbox from "./DashBoardNavbarLeft/Inbox";

const NavbarDashboard = ({hadleState}) => {
  return (
    <>
      <div className="bg-[#36393F] w-[calc(100vw-315px)] h-[47px] flex items-center justify-between overflow-hidden">
        <div className="flex items-center overflow-hidden fixed">
          <div className="flex items-center mx-2 my-1 bg-[#383D43] px-3 py-2  rounded-md cursor-default">
            <svg
              aria-hidden="false"
              className="text-[#8E928A] w-6"
              viewBox="0 0 24 24"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="currentColor"
                  fill-rule="nonzero"
                  d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z"
                  transform="translate(2 4)"
                ></path>
                <path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"></path>
              </g>
            </svg>
            <span className="text-gray-100 ml-4 font-semibold ">Friends</span>
          </div>
          <div className="h-8 my-auto border-l-2 border-[#4d525a]"></div>
          {/* The Radio Buttons Start */}
          <div>
            <input
              type="radio"
              name="dashBoardNav"
              id="Online"
              className=" sr-only peer"
              value="Online"
              onClick={() => {hadleState("online")}}
              defaultChecked
            />
            <label htmlFor="Online" className="dashboardNavIcon ml-3">
              Online
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="dashBoardNav"
              id="All"
              className=" sr-only peer"
              value="All"
              onClick={() => {hadleState("all")}}
              
            />
            <label htmlFor="All" className="dashboardNavIcon px-3" >
              All
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="dashBoardNav"
              id="Pending"
              className=" sr-only peer"
              value="Pending"
              onClick={() => {hadleState("pending")}}
            />
            <label htmlFor="Pending" className="dashboardNavIcon">
              Pending
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="dashBoardNav"
              id="Suggestions"
              className=" sr-only peer"
              value="Suggestions"
              onClick={() => {hadleState("suggestion")}}
            />
            <label htmlFor="Suggestions" className="dashboardNavIcon">
              Suggestions
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="dashBoardNav"
              id="Blocked"
              className=" sr-only peer"
              value="Blocked"
              onClick={() => {hadleState("blocked")}}
            />
            <label htmlFor="Blocked" className="dashboardNavIcon">
              Blocked
            </label>
          </div>
          {/* The Radio Buttons Start */}
          {/* The Add Friend Button */}
          <button className="dashboardNavIcon bg-[#3BA55D] text-white hover:bg-[#3BA55D] py-0.5 focus:bg-[#3BA55D]" onClick={() => {hadleState("add")}}>
            Add Friend
          </button>
        </div>

        {/* The Right Side Buttons*/}
        <div className="sm:flex items-center fixed right-0 hidden bg-[#36393F] h-[47px] z-30">
          <DM />
          <div className="h-8 my-auto border-l-2 border-[#4d525a]"></div>
          <Inbox />
          <Question />
        </div>
      </div>
        <div className='h-[1px] bg-gray-800'></div>
    </>
  );
};

export default NavbarDashboard;
