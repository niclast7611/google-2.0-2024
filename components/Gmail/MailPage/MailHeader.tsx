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
import { useRouter } from "next/router";

type Props = {};

const MailHeader = (props: Props) => {
  const router = useRouter();
  return (
    <header className="flex p-4 items-center justify-between">
      <div className="flex">
        <IconButton onClick={() => router.push("/inbox")}>
          <IoMdArrowBack className="h-5 w-5 text-zinc-900" />
        </IconButton>

        <span className="flex space-x-3 px-3">
          <IconButton>
            <HiOutlineArchiveBoxArrowDown className="icon" />
          </IconButton>
          <IconButton>
            <RiSpam2Line className="icon" />
          </IconButton>
          <IconButton>
            <FaRegTrashAlt className="icon" />
          </IconButton>
        </span>
        <span className="flex space-x-3 px-3 border-l-[1px] border-gray-200">
          <IconButton>
            <MdOutlineMarkEmailUnread className="icon" />
          </IconButton>
          <IconButton>
            <FaRegClock className="icon" />
          </IconButton>
          <IconButton>
            <MdAddTask className="icon" />
          </IconButton>
        </span>
        <span className="flex space-x-3 px-3 border-l-[1px] border-gray-200">
          <IconButton>
            <MdDriveFileMoveOutline className="icon" />
          </IconButton>
          <IconButton>
            <MdLabelOutline className="icon" />
          </IconButton>
          <IconButton>
            <IoMdMore className="icon" />
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
