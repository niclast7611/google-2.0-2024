import React from "react";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex justify-between p-4">
      <div className="flex space-x-4 items-center">
        <span className="flex space-x-1 items-center">
          <MdOutlineCheckBoxOutlineBlank className="text-gray-500 w-4 h-4" />
          <FaCaretDown className="text-gray-500 w-3 h-3" />
        </span>

        <IoMdRefresh className="text-gray-500 w-4 h-4" />
        <SlOptionsVertical className="text-gray-500 w-3 h-3" />
      </div>
    </header>
  );
};

export default Header;
