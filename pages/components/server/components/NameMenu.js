import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from "@chakra-ui/react";

const NameMenu = ({activeServer}) => {
    return (
        <Menu autoSelect={false}>
          <MenuButton className="ml-5">
            <div className="flex py-[11.5px] hover:bg-[#383b41] cursor-pointer transition-all">
              <h2 className="text-gray-100 text-center mx-auto font-semibold  flex items-center ">
                {activeServer.name} Community
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </h2>
            </div>
          </MenuButton>
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
              Server Boost <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
</svg>
            </MenuItem>
            <div className="bg-gray-700 h-[1px] w-11/12 mx-auto"></div>
            <MenuItem
            color="purple.500"
              rounded="sm"
              width="56"
              marginLeft="3"
              _hover={{
                background: "#404FEC",
                color: "white",
              }}
              className="flex justify-between"
            >
              Invite People
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
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            </MenuItem>
            <div className="bg-gray-700 h-[1px] w-11/12 mx-auto"></div>
            <MenuItem
              rounded="sm"
              width="56"
              marginLeft="3"
              _hover={{
                background: "#404FEC",
                color: "white",
              }}
              className="flex justify-between"
            >
              Notification Settings <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
</svg>
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
              Privacy Settings <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
</svg>
            </MenuItem>
            <div className="bg-gray-700 h-[1px] w-11/12 mx-auto"></div>
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
              Edit Server Profile <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
</svg>
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
              Hide Muted Channels <input type="checkbox" />
            </MenuItem>
            <div className="bg-gray-700 h-[1px] w-11/12 mx-auto"></div>
            <MenuItem
              color="red.500"
              rounded="sm"
              width="56"
              marginLeft="3"
              _hover={{
                background: "red.500",
                color: "white",
              }}
              className="flex justify-between"
            >
              Leave Server
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 -mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </MenuItem>
          </MenuList>
        </Menu>
    )
}

export default NameMenu
