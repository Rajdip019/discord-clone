import React from "react";
import LeftbarIcon from "./LeftbarIcon";
import servers from "../../database/servers";
import Link from "next/link";

const LeftBarDashboard = () => {
  return (
    <div>
      <div className="h-screen w-[75px] bg-[#212224]">
        <div className="flex items-center">
          <div className="w-2 bg-white h-10 rounded-r-lg"></div>
          <Link href="/dashboard">
          <div className="pt-5 ml-3 group flex items-center">
            <img
              src="/discord.ico"
              alt=""
              className="w-12 mx-auto cursor-pointer"
            />
            <span className="bg-gray-900 text-gray-100 scale-0 transition-all ml-5 px-4 py-2 rounded-lg font-semibold font-sans group-hover:scale-100">
              Home
            </span>
          </div>
          </Link>
        </div>
        <hr className="w-8/12 mx-auto my-3 divide-y-3 divide-gray-800" />
        {servers.map((server) => {
          return <LeftbarIcon name={server.name} image={server.image} />;
        })}
        <div className="flex items-center">
          <div className="w-2 bg-white h-10 rounded-r-lg"></div>
          <div className="pt-5 ml-3 group flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 p-3 rounded-3xl hover:rounded-xl transition-all cursor-pointer ease-in-out text-[#3A9758] bg-[#36383E] hover:text-white hover:bg-[#3A9758]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span className="bg-gray-900 text-gray-100 scale-0 transition-all ml-5 px-4 py-2 rounded-lg font-semibold font-sans group-hover:scale-100 whitespace-nowrap">
              Add a Server
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-2 bg-white h-10 rounded-r-lg"></div>
          <div className="pt-5 ml-3 group flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 p-3 rounded-3xl hover:rounded-xl transition-all cursor-pointer ease-in-out text-[#3A9758] bg-[#36383E] hover:text-white hover:bg-[#3A9758]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
              />
            </svg>
            <span className="bg-gray-900 text-gray-100 scale-0 transition-all ml-5 px-4 py-2 rounded-lg font-semibold font-sans group-hover:scale-100 whitespace-nowrap">
              Explore Public Servers
            </span>
          </div>
        </div>
        <hr className="w-8/12 mx-auto my-5"/>
        <div className="flex items-center">
          <div className="w-2 bg-white h-10 rounded-r-lg"></div>
          <div className="ml-3 group flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 p-3 rounded-3xl hover:rounded-xl transition-all cursor-pointer ease-in-out text-[#3A9758] bg-[#36383E] hover:text-white hover:bg-[#3A9758]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span className="bg-gray-900 text-gray-100 scale-0 transition-all ml-5 px-4 py-2 rounded-lg font-semibold font-sans group-hover:scale-100 whitespace-nowrap">
              Download Apps
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBarDashboard;
