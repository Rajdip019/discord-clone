import { Tooltip } from "@chakra-ui/react";
import React, { useState } from "react";

const User = () => {
  const [isMute, setIsMute] = useState(false);
  const handleMute = () => {
    setIsMute(!isMute);
  };

  return (
    <div className="bg-[#292A2E] absolute bottom-0 p-2 flex w-[240px] items-center justify-between ">
      <div className="flex items-center">
        <img
          src="/Profile Picture.png"
          alt=""
          className="w-8 rounded-full"
        />
        <div className="ml-2">
          <p className="text-sm font-sans font-semibold text-white">
            Rajdeep019
          </p>
          <p className="text-xs font-sans font-semibold text-gray-400">#1234</p>
        </div>
      </div>
      <div className="flex items-center">
        {isMute ? (
          <Tooltip
            label="Mute"
            fontSize="md"
            placement="top"
            bg="gray.900"
            hasArrow
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8  text-gray-400 hover:bg-gray-700 p-2 rounded transition-all cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => {handleMute()}}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              />
            </svg>
          </Tooltip>
        ) : (
          <Tooltip
            label="Unmute"
            fontSize="md"
            placement="top"
            bg="gray.900"
            hasArrow
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
                height="32"
              fill="currentColor"
              class="bi bi-mic-mute text-gray-400 hover:bg-gray-700 p-2 rounded transition-all cursor-pointer"
              viewBox="0 0 16 16"
              onClick={() => {handleMute()}}
            >
              <path d="M13 8c0 .564-.094 1.107-.266 1.613l-.814-.814A4.02 4.02 0 0 0 12 8V7a.5.5 0 0 1 1 0v1zm-5 4c.818 0 1.578-.245 2.212-.667l.718.719a4.973 4.973 0 0 1-2.43.923V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 1 0v1a4 4 0 0 0 4 4zm3-9v4.879l-1-1V3a2 2 0 0 0-3.997-.118l-.845-.845A3.001 3.001 0 0 1 11 3z" />
              <path d="m9.486 10.607-.748-.748A2 2 0 0 1 6 8v-.878l-1-1V8a3 3 0 0 0 4.486 2.607zm-7.84-9.253 12 12 .708-.708-12-12-.708.708z" />
            </svg>
          </Tooltip>
        )}
        <Tooltip
          label="Defan"
          fontSize="md"
          placement="top"
          bg="gray.900"
          hasArrow
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-headphones   text-gray-400 hover:bg-gray-700 p-2 rounded transition-all cursor-pointer"
            viewBox="0 0 16 16"
          >
            <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5z" />
          </svg>
        </Tooltip>
        <Tooltip
          label="User Settings"
          fontSize="md"
          placement="top"
          bg="gray.900"
          hasArrow
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-gear-fill  text-gray-400 hover:bg-gray-700 p-2 rounded transition-all cursor-pointer"
            viewBox="0 0 16 16"
          >
            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
          </svg>
        </Tooltip>
      </div>
    </div>
  );
};

export default User;
