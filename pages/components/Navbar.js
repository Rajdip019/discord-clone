import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <div className="absolute w-screen flex md:justify-evenly justify-around items-center py-10 lg:px-32 z-50 font-Helvetica">
        <div>
          <img src="/assets/logonavBar.svg" alt="" className="w-32" />
        </div>
        <div className=" text-white hidden md:block">
          <a
            href="/"
            className="mx-4 font-semibold hover:underline transition-all text-md"
          >
            Download
          </a>
          <a
            href="/"
            className="mx-4 font-semibold hover:underline transition-all text-md"
          >
            Nitro
          </a>
          <a
            href="/"
            className="mx-4 font-semibold hover:underline transition-all text-md"
          >
            Safety
          </a>
          <a
            href="/"
            className="mx-4 font-semibold hover:underline transition-all text-md"
          >
            Support
          </a>
          <a
            href="/"
            className="mx-4 font-semibold hover:underline transition-all text-md"
          >
            Blog
          </a>
          <a
            href="/"
            className="mx-4 font-semibold hover:underline transition-all text-md"
          >
            Carrers
          </a>
        </div>
        <div className=" flex flex-row">
        <div >
          <button className="bg-white px-4 py-2 rounded-full text-sm hover:shadow-xl transition-all hover:text-skin-main">
            Open Discord
          </button>
        </div>
        <div className="md:hidden ml-3">
          <button ref={btnRef} onClick={onOpen} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9 "
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinejoin="round"
                strokeWidth={4}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
            size="xs"
          >
            <DrawerOverlay />
            <DrawerContent className="rounded-xl">
              <DrawerCloseButton autoFocus={false} />
              <DrawerHeader>
                <img
                  src="/assets/DiscordLogoDark.svg"
                  alt=""
                  className="w-32 mt-3"
                />
              </DrawerHeader>

              <DrawerBody>
                <hr />
                <div className="pt-4">
                  <div className="px-4 py-2 bg-gray-50 rounded-lg text-blue-400">
                    <a href="/" className="text-md">
                      Home
                    </a>
                  </div>
                  <div className="px-4 py-2 rounded-xl">
                    <a href="/" className="">
                      Download
                    </a>
                  </div>
                  <div className="px-4 py-2 rounded-xl">
                    <a href="/" className="">
                      Nitro
                    </a>
                  </div>
                  <div className="px-4 py-2 rounded-xl">
                    <a href="/" className="flex items-center">
                      Safety
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-2 "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="px-4 py-2 rounded-xl">
                    <a href="/" className="flex items-center">
                      Mod Academy
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-2 "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="px-4 py-2 rounded-xl">
                    <a href="/" className="">
                      Support
                    </a>
                  </div>
                  <div className="px-4 py-2 rounded-xl">
                    <a href="/" className="">
                      Blog
                    </a>
                  </div>
                  <div className="px-4 py-2 rounded-xl">
                    <a href="/" className="">
                      Careers
                    </a>
                  </div>
                </div>
                <div>
                  <button className="bg-[#5864F3] bottom-5 w-10/12 text-white py-2 rounded-full absolute text-sm flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Download for Windows
                  </button>
                </div>
              </DrawerBody>

              <DrawerFooter></DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;
