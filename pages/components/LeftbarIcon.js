import React from "react";
import Link from "next/link"

const LeftbarIcon = ({ name, image }) => {
  return (
    <Link href={"/dashboard/[sname]"} as={`/dashboard/${name}`}>
    <div className="group flex items-center ml-3">
      <img
        src={image}
        alt=""
        className="w-12 rounded-3xl mx-auto my-2 cursor-pointer hover:rounded-xl transition-all ease-in-out"
      />
      <span className="bg-gray-900 text-gray-100 scale-0 transition-all ml-5 px-4 py-2 rounded-lg font-semibold font-sans group-hover:scale-100 whitespace-nowrap">
        {name}
      </span>
    </div>
    </Link>

  );
};

export default LeftbarIcon;
