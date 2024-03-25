import React from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import Avatar from "@/components/Avatar";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import { IoIosSearch, IoMdClose } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
type Props = {};

const SearchPageHeader = (props: Props) => {
  return (
    <header className="sticky top-0 bg-white flex w-full p-5 justify-between text-sm text-gray-700 ">
      <div className="flex w-full items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
          alt="Google"
          className="h-10 w-28"
          loading="lazy"
        />
        <form className="w-4/5 max-w-3xl px-6">
          <OutlinedInput
            fullWidth
            size="small"
            className="rounded-full"
            endAdornment={
              <InputAdornment position="end">
                <div className="flex items-center flex-grow">
                  <IoMdClose className="h-5 w-5 sm:mr-2 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125" />
                  <FaMicrophone className="h-5 w-5 border-l-2 mr-2 hidden sm:inline-flex text-blue-500 pl-4 border-gray-300" />
                  <IoIosSearch className="h-5 w-5 hidden text-blue-500 sm:inline-flex" />
                </div>
              </InputAdornment>
            }
          />
        </form>
      </div>

      <div className="flex sm:space-x-4 items-center">
        <IconButton className="h-9 w-9 hidden sm:inline-flex">
          <BsFillGrid3X3GapFill />
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

export default SearchPageHeader;
