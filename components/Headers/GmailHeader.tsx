import React from "react";
import Popover from "../Popover";
import Avatar from "../Avatar";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch, IoMdNotifications } from "react-icons/io";
import { IconButton } from "@mui/material";
import { FaCaretDown } from "react-icons/fa";

type Props = {};

const GmailHeader = (props: Props) => {
  return (
    <header className="flex w-full p-5 justify-between text-sm text-gray-700 items-center absolute top-0">
      <div className="flex space-x-4 items-center">
        <IconButton className="dark:text-zinc-300">
          <GiHamburgerMenu className="h-5 w-5" />
        </IconButton>
        <img
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt="Gmail"
          className="h-full w-28 cursor-pointer"
        />
      </div>
      <form className="flex flex-grow px-6 ml-10 mr-5 max-w-xl items-center h-12 bg-gray-100">
        <button type="submit">
          <IoIosSearch className="h-5 w-5 dark:text-zinc-300 cursor-pointer transition transform duration-100 hover:scale-125 sm:mr-3" />
        </button>
        <input
          type="text"
          placeholder="Search mail"
          className="flex-grow w-full focus:outline-none bg-transparent"
        />
        <FaCaretDown className="h-5 w-5 dark:text-zinc-300 cursor-pointer transition transform duration-100 hover:scale-125 sm:ml-3" />
      </form>

      <div className="flex space-x-2 items-center ">
        <Popover />
        <IconButton className="dark:text-zinc-300 ">
          <IoMdNotifications className="h-5 w-5" />
        </IconButton>
        <Avatar
          url={
            "https://img.buzzfeed.com/buzzfeed-static/complex/images/rrgyzeu7ucbf5styxkuw/drake-21-savage-her-loss-album-cver.jpg?output-format=jpg&output-quality=auto"
          }
        />
      </div>
    </header>
  );
};

export default GmailHeader;
