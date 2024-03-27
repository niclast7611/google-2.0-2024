import React, { useRef } from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import Avatar from "@/components/Avatar";
import { IconButton } from "@mui/material";
import { IoIosSearch, IoMdClose } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { useRouter } from "next/router";
import HeaderOptions from "./HeaderOptions";
import HeaderLogo from "@/lib/shared/HeaderLogo";
import Popover from "../../Popover";

type Props = {};

const SearchPageHeader = (props: Props) => {
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const term = searchInputRef.current?.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
    searchInputRef.current!.value = "";
  };

  return (
    <header className="sticky top-0 z-50 bg-inherit">
      <div className="flex w-full items-center p-6">
        <HeaderLogo />
        <form
          className="flex flex-grow px-6 py-3 ml-10 mr-5 border dark:border-[0.5px] border-gray-200 rounded-full max-w-3xl items-center"
          // @ts-ignore
          onSubmit={handleSearch}
        >
          <input
            type="text"
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none bg-transparent"
          />
          <span className="flex items-center divide-x-2 dark:divide-x-[1px] divide-gray-300 dark:divide-gray-400">
            <IoMdClose className="h-7 w-7 sm:mr-2 text-gray-400 dark:text-zinc-400 cursor-pointer transition transform duration-100 hover:scale-125" />
            <span className="items-center hidden sm:inline-flex">
              <FaMicrophone className="h-5 w-5 sm:ml-3 text-blue-500 dark:text-blue-300 cursor-pointer transition transform duration-100 hover:scale-125" />
              <button type="submit">
                <IoIosSearch className="h-7 w-7 text-blue-500 dark:text-blue-300 cursor-pointer transition transform duration-100 hover:scale-125 sm:ml-3" />
              </button>
            </span>
          </span>
        </form>
        <div className="flex sm:space-x-4 items-center ml-auto">
          <Popover />
          <Avatar
            url={
              "https://img.buzzfeed.com/buzzfeed-static/complex/images/rrgyzeu7ucbf5styxkuw/drake-21-savage-her-loss-album-cver.jpg?output-format=jpg&output-quality=auto"
            }
          />
        </div>
      </div>
      <HeaderOptions />
    </header>
  );
};

export default SearchPageHeader;
