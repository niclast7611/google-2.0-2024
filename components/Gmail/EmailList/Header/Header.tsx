import React from "react";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { FaCaretDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import { IconButton } from "@mui/material";

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

      <div className="flex items-center justify-center space-x-5">
        <p className="text-xs text-gray-400">1-20 of 20</p>
        <span className="flex items-center space-x-2">
          <IconButton>
            <FaChevronLeft className="text-gray-400 w-3 h-3" />
          </IconButton>
          <IconButton>
            <FaChevronRight className="text-gray-400 w-3 h-3" />
          </IconButton>
        </span>
      </div>
    </header>
  );
};

export default Header;
