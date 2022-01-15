import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Tooltip
} from "@chakra-ui/react";

const Notifications = () => {
  return (
    <Menu autoSelect={false} closeOnSelect={false} >
    <Tooltip label="Notifications" position="bottom" hasArrow>
      <MenuButton className="ml-5">
        <div className="flex py-[11.5px] hover:bg-[#383b41] cursor-pointer transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 mr-4 text-[#B8BABE] hover:text-[#e3e7f0] cursor-pointer transition-all"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
        </div>
      </MenuButton>
      </Tooltip>
      <MenuList
        bgColor="#18181D"
        width="250px"
        border="0"
        shadow="xl"
        bg="#18181D"
        className="text-white"
        color="gray.300"
        fontSize="sm"
      >
        <MenuItem
          className="text-gray-300 flex justify-between"
          rounded="sm"
          width="56"
          marginLeft="3"
          _hover={{
            background: "#404FEC",
            color: "white",
          }}
        >
          Mute Channel
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </MenuItem>
        <div className="bg-gray-700 h-[1px] w-11/12 mx-auto "></div>
        <MenuItem
          className="text-gray-300 flex justify-between"
          rounded="sm"
          width="56"
          marginLeft="3"
          _hover={{
            background: "#404FEC",
            color: "white",
          }}
        >
          <label htmlFor="mute" className="cursor-pointer">
            Use Categoty Default
          </label>
          <input type="radio" id="mute" name="noti" />
        </MenuItem>
        <MenuItem
          className="text-gray-300 flex justify-between"
          rounded="sm"
          width="56"
          marginLeft="3"
          _hover={{
            background: "#404FEC",
            color: "white",
          }}
        >
          <label htmlFor="all" className="cursor-pointer">
            All Messages
          </label>
          <input type="radio" id="all" name="noti" />
        </MenuItem>
        <MenuItem
          className="text-gray-300 flex justify-between"
          rounded="sm"
          width="56"
          marginLeft="3"
          _hover={{
            background: "#404FEC",
            color: "white",
          }}
        >
          <label htmlFor="mention" className="cursor-pointer">
            Only @mentions
          </label>
          <input type="radio" id="mention" name="noti" />
        </MenuItem>
        <MenuItem
          className="text-gray-300 flex justify-between"
          rounded="sm"
          width="56"
          marginLeft="3"
          _hover={{
            background: "#404FEC",
            color: "white",
          }}
        >
          <label htmlFor="nothing" className="cursor-pointer">
            Nothing
          </label>
          <input type="radio" id="nothing" name="noti" />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Notifications;
