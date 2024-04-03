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
    <header className="flex p-4 items-center justify-between dark:bg-[#474747]">
      <div className="flex">
        <IconButton onClick={() => router.push("/inbox")}>
          <IoMdArrowBack className="h-5 w-5 text-zinc-900  dark:text-zinc-200" />
        </IconButton>

        <span className="flex space-x-3 px-3">
          <IconButton>
            <HiOutlineArchiveBoxArrowDown className="icon" />
          </IconButton>
          {/* Hide on small screens */}
          <IconButton className="hidden sm:inline-flex">
            <RiSpam2Line className="icon" />
          </IconButton>
          <IconButton>
            <FaRegTrashAlt className="icon" />
          </IconButton>
          {/* Hide on small screens */}
          <IconButton className="hidden sm:inline-flex">
            <FaRegClock className="icon" />
          </IconButton>
        </span>
        <span className="flex space-x-3 sm:px-3 sm:border-l-[1px] sm:border-gray-200 dark:border-slate-200">
          <IconButton>
            <MdOutlineMarkEmailUnread className="icon" />
          </IconButton>
          {/* Hide on small screens */}
          <IconButton className="hidden sm:inline-flex">
            <MdAddTask className="icon" />
          </IconButton>
          {/* Hide on small screens */}
          <IconButton className="hidden sm:inline-flex">
            <MdDriveFileMoveOutline className="icon" />
          </IconButton>
          {/* Hide on small screens */}
          <IconButton className="hidden sm:inline-flex">
            <MdLabelOutline className="icon" />
          </IconButton>
          <IconButton>
            <IoMdMore className="icon" />
          </IconButton>
        </span>
      </div>
      <div className="items-center justify-center space-x-5 hidden sm:inline-flex">
        <p className="text-xs text-gray-400  dark:text-zinc-200">1-20 of 20</p>
        <span className="flex items-center space-x-2">
          {/* Hide on small screens */}
          <IconButton>
            <FaChevronLeft className="text-gray-400 w-3 h-3  dark:text-zinc-200" />
          </IconButton>
          {/* Hide on small screens */}
          <IconButton>
            <FaChevronRight className="text-gray-400 w-3 h-3  dark:text-zinc-200" />
          </IconButton>
        </span>
      </div>
    </header>
  );
};

export default MailHeader;
