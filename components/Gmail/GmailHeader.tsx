import React from "react";
import Popover from "../Popover";
import Avatar from "../Avatar";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch, IoMdNotifications } from "react-icons/io";
import { IconButton } from "@mui/material";
import { IoMdOptions } from "react-icons/io";

type Props = {};

const GmailHeader = (props: Props) => {
  return (
    <header className="flex w-full px-3 justify-between text-sm text-gray-700 items-center">
      <div className="flex sm:space-x-4 items-center">
        <IconButton className="dark:text-zinc-300 hidden sm:inline-flex">
          <GiHamburgerMenu className="h-5 w-5" />
        </IconButton>
        <img
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt="Gmail"
          className="h-[4.5rem] w-28 cursor-pointer"
        />
      </div>
      <form className="flex flex-grow px-3 sm:ml-10 mx-4 sm:mr-5 max-w-xl items-center h-12 bg-[#E9F1FB] dark:bg-[#474747] rounded-full ">
        <IconButton className="sm:mr-3">
          <IoIosSearch className="h-5 w-5 dark:text-zinc-300 " />
        </IconButton>
        <input
          type="text"
          placeholder="Search mail"
          className="flex-grow w-full focus:outline-none bg-transparent "
        />
        <IconButton className="sm:ml-3 hidden sm:inline-flex">
          <IoMdOptions className="h-5 w-5 dark:text-zinc-300 " />
        </IconButton>
      </form>

      <div className="flex space-x-2 items-center ">
        <Popover />
        <IconButton className="dark:text-zinc-300 hidden sm:inline-flex">
          <IoMdNotifications className="h-5 w-5" />
        </IconButton>
        <Avatar />
      </div>
    </header>
  );
};

export default GmailHeader;
