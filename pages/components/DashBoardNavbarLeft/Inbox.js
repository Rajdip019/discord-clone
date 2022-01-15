import React, { useState, useEffect } from "react";
import { Tooltip } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Inbox = () => {
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
      <Tooltip label="Inbox" position="bottom" hasArrow>
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
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            />
          </svg>
        </MenuButton>
      </Tooltip>
      <MenuList
        width="600px"
        height="85vh"
        className="scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-gray-700 overflow-y-scroll h-[30px] mr-12"
        bgColor="#383D43"
        border="0"
        shadow="xl"
      >
        <div className="">
          <div className="sticky z-50 bg-slate-800 p-2 shadow-xl flex w-full -top-10">
            <div>
              <input
                type="radio"
                name="dashBoardNav"
                id="Mentions"
                className=" sr-only peer"
                value="Mentions"
                defaultChecked
                onClick={() => {
                  if(state != "mention"){
                     setAnimation(true);
                  }
                  setState("mention");
                }}
              />
              <label htmlFor="Mentions" className="dashboardNavIcon px-3">
                Mentions
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
                  if(state != "unread"){
                     setAnimation(true);
                  }
                  setState("unread");
                }}
              />
              <label htmlFor="Unread" className="dashboardNavIcon">
                Unread
              </label>
            </div>
          </div>
          {state === "mention" && (
            <>
              {animation ? (
                <div className="h-[70vh] w-[600px] flex items-center">
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
                <div className=" mt-60">
                  <svg
                    x="0"
                    y="0"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="w-24 bg-slate-800 text-gray-500 mx-auto rounded-full p-4"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2C6.486 2 2 6.486 2 12C2 17.515 6.486 22 12 22C14.039 22 15.993 21.398 17.652 20.259L16.521 18.611C15.195 19.519 13.633 20 12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12V12.782C20 14.17 19.402 15 18.4 15L18.398 15.018C18.338 15.005 18.273 15 18.209 15H18C17.437 15 16.6 14.182 16.6 13.631V12C16.6 9.464 14.537 7.4 12 7.4C9.463 7.4 7.4 9.463 7.4 12C7.4 14.537 9.463 16.6 12 16.6C13.234 16.6 14.35 16.106 15.177 15.313C15.826 16.269 16.93 17 18 17L18.002 16.981C18.064 16.994 18.129 17 18.195 17H18.4C20.552 17 22 15.306 22 12.782V12C22 6.486 17.514 2 12 2ZM12 14.599C10.566 14.599 9.4 13.433 9.4 11.999C9.4 10.565 10.566 9.399 12 9.399C13.434 9.399 14.6 10.565 14.6 11.999C14.6 13.433 13.434 14.599 12 14.599Z"
                    ></path>
                  </svg>
                  <h4 className="text-white text-2xl font-bold text-center mt-8">
                    You made it through everything!
                  </h4>
                  <p className="text-center text-gray-300 text-xs mt-3 ">
                    <span className="text-[#3AA15A] uppercase font-bold mr-1">
                      proptip:
                    </span>
                    Whenever someone mentions you it will be saved here for 7
                    days.
                  </p>
                </div>
              )}
            </>
          )}
          {state === "unread" && (
            <>
              {animation ? (
                <div className="h-[70vh] w-[600px] flex items-center">
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
                <div className=" mt-60">
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
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                  <h4 className="text-white text-2xl font-bold text-center mt-8">
                    You don't have any unread messages!
                  </h4>
                  <p className="text-center text-gray-300 text-xs mt-3 ">
                    <span className="text-[#3AA15A] uppercase font-bold mr-1">
                      proptip: 
                    </span>
                     Whenever you have uread messages, it will be saved here for 30
                    days.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </MenuList>
    </Menu>
  );
};

export default Inbox;
