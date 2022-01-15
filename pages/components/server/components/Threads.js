import React, { useState, useEffect } from "react";
import { Tooltip } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Threads = () => {
  const [animation, setAnimation] = useState(true);
  const [state, setState] = useState("mention");

  const handleAnimation = () => {
    setAnimation(!animation);
  };

  useEffect(() => {
    if (animation === true) {
      setTimeout(() => {
        handleAnimation();
      }, 3000);
    }
  }, [animation]);

  return (
    <Menu>
      <Tooltip label="Threads" position="bottom" hasArrow>
        <MenuButton
          onClick={() => {
            setAnimation(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 ml-4 text-[#B8BABE] hover:text-[#e3e7f0] cursor-pointer transition-all"
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
        </MenuButton>
      </Tooltip>
      <MenuList
        width="600px"
        height="500px"
        className="scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-gray-700 overflow-y-scroll h-[30px] mr-[350px]"
        bgColor="#383D43"
        border="0"
        shadow="xl"
      >
        <div className="">
          <div className="fixed top-0 z-50 py-4 shadow-xl bg-[#212325] w-[600px] px-4 flex items-center">
            <div>
              <div className="flex items-center mx-1 px-2 cursor-default">
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
                <span className="text-gray-100 ml-4 font-semibold ">
                  Threads
                </span>
                <div className="bg-gray-600 w-[1px] h-7 ml-3"></div>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <div>
              <input
                type="radio"
                name="dashBoardNav"
                id="Mentions"
                className=" sr-only peer"
                value="Mentions"
                defaultChecked
                onClick={() => {
                  if (state != "mention") {
                    setAnimation(true);
                  }
                  setState("mention");
                }}
              />
              <label htmlFor="Mentions" className="dashboardNavIcon px-3">
                Active
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="dashBoardNav"
                id="Unread"
                className=" sr-only peer"
                value="Unread"
                onClick={() => {
                  if (state != "unread") {
                    setAnimation(true);
                  }
                  setState("unread");
                }}
              />
              <label htmlFor="Unread" className="dashboardNavIcon">
                Archived
              </label>
            </div>
            <button className="bg-skin-main ml-[140px] px-2 py-1 rounded font-bold text-white hover:bg-[#646edb] transition-all">
              Create
            </button>
          </div>
          {state === "mention" && (
            <>
              {animation ? (
                <div className="h-[500px] w-[600px] flex items-center">
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={{ rotate: 360, scale: 1.5 }}
                    transition={{
                      type: "just",
                      stiffness: 260,
                      damping: 200,
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 1.5,
                    }}
                    className="h-6 w-6 bg-[#7079ff] rounded-sm m-auto "
                  />
                </div>
              ) : (
                <div className=" mt-36">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-24 bg-slate-800 text-gray-500 mx-auto rounded-full p-4"
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
                  <h4 className="text-white text-2xl font-bold text-center mt-8">
                    There are no active threads.
                  </h4>
                  <p className="text-center text-gray-300 text-sm mt-3 ">
                    Stay focused on a conversation with a thread, a temporary
                    text channel. days.
                  </p>
                  <button className="bg-skin-main ml-[240px] mt-2 px-2 py-2 rounded font-bold text-white hover:bg-[#646edb] transition-all">
                    Create Thread
                  </button>
                </div>
              )}
            </>
          )}
          {state === "unread" && (
            <>
              {animation ? (
                <div className="h-[500px] w-[600px] flex items-center">
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={{ rotate: 360, scale: 1.5 }}
                    transition={{
                      type: "just",
                      stiffness: 260,
                      damping: 200,
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 1.5,
                    }}
                    className="h-6 w-6 bg-[#7079ff] rounded-sm m-auto "
                  />
                </div>
              ) : (
                <div className=" mt-36">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-24 bg-slate-800 text-gray-500 mx-auto rounded-full p-4"
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
                  <h4 className="text-white text-2xl font-bold text-center mt-8">
                    There are no archived threads.
                  </h4>
                  <p className="text-center text-gray-300 text-sm mt-3 ">
                    Stay focused on a conversation with a thread, a temporary
                    text channel. days.
                  </p>
                  <button className="bg-skin-main ml-[240px] mt-2 px-2 py-2 rounded font-bold text-white hover:bg-[#646edb] transition-all">
                    Create Thread
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </MenuList>
    </Menu>
  );
};

export default Threads;
