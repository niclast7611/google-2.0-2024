import { IconButton } from "@mui/material";
import React from "react";
import {
  FaRegTrashAlt,
  FaRegClock,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { HiOutlineArchiveBoxArrowDown } from "react-icons/hi2";
import { RiSpam2Line } from "react-icons/ri";
import { IoMdMore, IoMdArrowBack } from "react-icons/io";
import {
  MdOutlineMarkEmailUnread,
  MdAddTask,
  MdDriveFileMoveOutline,
  MdLabelOutline,
} from "react-icons/md";

type Props = {};

const MailHeader = (props: Props) => {
  return (
    <header className="flex p-4 items-center justify-between">
      <div className="flex">
        <IconButton>
          <IoMdArrowBack className="h-5 w-5 text-zinc-900" />
        </IconButton>

        <span className="flex space-x-3 px-3">
          <IconButton>
            <HiOutlineArchiveBoxArrowDown className="h-4 w-4 text-zinc-900" />
          </IconButton>
          <IconButton>
            <RiSpam2Line className="h-4 w-4 text-zinc-900" />
          </IconButton>
          <IconButton>
            <FaRegTrashAlt className="h-4 w-4 text-zinc-900" />
          </IconButton>
        </span>
        <span className="flex space-x-3 px-3 border-l-[1px] border-gray-200">
          <IconButton>
            <MdOutlineMarkEmailUnread className="h-4 w-4 text-zinc-900" />
          </IconButton>
          <IconButton>
            <FaRegClock className="h-4 w-4 text-zinc-900" />
          </IconButton>
          <IconButton>
            <MdAddTask className="h-4 w-4 text-zinc-900" />
          </IconButton>
        </span>
        <span className="flex space-x-3 px-3 border-l-[1px] border-gray-200">
          <IconButton>
            <MdDriveFileMoveOutline className="h-4 w-4 text-zinc-900" />
          </IconButton>
          <IconButton>
            <MdLabelOutline className="h-4 w-4 text-zinc-900" />
          </IconButton>
          <IconButton>
            <IoMdMore className="h-4 w-4 text-zinc-900" />
          </IconButton>
        </span>
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

export default MailHeader;
