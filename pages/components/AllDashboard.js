import React from "react";
import dm from "../../database/dm";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  AvatarBadge,
  Tooltip
} from "@chakra-ui/react";

const AllDashboard = () => {
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
          All Friends - 6
        </h3>
        <div className=" h-[1px] bg-gray-500 my-3"></div>
        {dm.map((dms) => {
          return (
            <>
            <div className="w-full flex items-center hover:bg-gray-700 px-2 py-2 rounded-lg cursor-pointer transition-all justify-between">
              <div className="flex items-center ">
              <Avatar src={dms.image} size="sm">
                      <AvatarBadge boxSize="0.7em" bg="gray.500" />
                    </Avatar>
                <p className="ml-3 text-[#8E928A] font-semibold font-sans flex-col flex">
                  {dms.name} <span className="text-xs">Offline</span>
                </p>
              </div>
              <div>
                <div className="flex items-center">
                <Tooltip label="Message" placement="top" hasArrow>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-9 w-9 text-gray-400 bg-gray-800 p-2 rounded-full mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
                </Tooltip>
                <Menu autoSelect={false}>
                <Tooltip label="More" placement="top" hasArrow>
                  <MenuButton>
                    <svg
                      aria-hidden="false"
                      viewBox="0 0 24 24"
                      className="h-9 w-9 text-gray-400 bg-gray-800 p-2 rounded-full"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path d="M24 0v24H0V0z"></path>
                        <path
                          fill="currentColor"
                          d="M12 16c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm0-6c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm0-6c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2z"
                        ></path>
                      </g>
                    </svg>
                  </MenuButton>
                  </Tooltip>
                  <div className="relative z-20">
                    <MenuList
                      bgColor="#18181D"
                      width="250px"
                      border="0"
                      shadow="xl"
                      bg="#18181D"
                      className="text-white"
                      color="gray.300"
                    >
                      <MenuItem
                        className="text-gray-300"
                        rounded="lg"
                        width="56"
                        marginLeft="3"
                        _hover={{
                          background: "#404FEC",
                          color: "white",
                        }}
                      >
                        Start Video Call
                      </MenuItem>
                      <MenuItem
                        className="text-gray-300"
                        rounded="lg"
                        width="56"
                        marginLeft="3"
                        _hover={{
                          background: "#404FEC",
                          color: "white",
                        }}
                      >
                        Start Voice Call
                      </MenuItem>
                      <MenuItem
                        color="red.500"
                        rounded="lg"
                        width="56"
                        marginLeft="3"
                        _hover={{
                          background: "red.500",
                          color: "white",
                        }}
                      >
                        Remove Friend
                      </MenuItem>
                    </MenuList>
                  </div>
                </Menu>
                </div>
              </div>
            </div>
              <div className=" h-[1px] bg-gray-600 "></div>
              </>
          );
        })}
      </div>
    </div>
  );
};

export default AllDashboard;
