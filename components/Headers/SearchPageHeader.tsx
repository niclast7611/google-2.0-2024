import React, { useRef } from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import Avatar from "@/components/Avatar";
import { IconButton } from "@mui/material";
import { IoIosSearch, IoMdClose } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { useRouter } from "next/router";
import HeaderOptions from "./HeaderOptions";

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
    <header className="sticky top-0 bg-white">
      <div className="flex w-full items-center p-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
          alt="Google"
          className="h-10 w-28 cursor-pointer"
          loading="lazy"
          onClick={() => router.push("/")}
        />
        <form
          className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full max-w-3xl items-center"
          // @ts-ignore
          onSubmit={handleSearch}
        >
          <input
            type="text"
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
          />
          <span className="flex items-center divide-x-2 divide-gray-300">
            <IoMdClose className="h-7 w-7 sm:mr-3 text-gray-400 cursor-pointer transition transform duration-100 hover:scale-125" />
            <span className="items-center hidden sm:inline-flex">
              <FaMicrophone className="h-5 w-5 sm:ml-3 text-blue-300 cursor-pointer transition transform duration-100 hover:scale-125" />
              <button type="submit">
                <IoIosSearch className="h-7 w-7 text-blue-300 cursor-pointer transition transform duration-100 hover:scale-125 sm:ml-3" />
              </button>
            </span>
          </span>
        </form>
        <div className="flex sm:space-x-4 items-center ml-auto">
          <IconButton className="h-9 w-9 hidden md:inline-flex">
            <BsFillGrid3X3GapFill />
          </IconButton>
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
