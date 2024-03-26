import React from "react";
import HeaderOption from "./HeaderOption";
import { CiSearch } from "react-icons/ci";
import { CiImageOn } from "react-icons/ci";
import { CiVideoOn } from "react-icons/ci";
import { IoNewspaperOutline } from "react-icons/io5";
import { LiaMapSolid } from "react-icons/lia";
import { BsThreeDotsVertical } from "react-icons/bs";

type Props = {};

const HeaderOptions = (props: Props) => {
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-48 border-b-[1px]">
      <div className="flex space-x-6">
        <HeaderOption
          icon={<CiSearch className="h-5 w-5" />}
          title="All"
          selected
        />
        <HeaderOption icon={<CiImageOn className="h-5 w-5" />} title="Images" />
        <HeaderOption icon={<CiVideoOn className="h-5 w-5" />} title="Videos" />
        <HeaderOption
          icon={<IoNewspaperOutline className="h-5 w-5" />}
          title="News"
        />
        <HeaderOption icon={<LiaMapSolid className="h-5 w-5" />} title="Maps" />
        <HeaderOption
          icon={<BsThreeDotsVertical className="h-5 w-5" />}
          title="More"
        />
      </div>

      <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
};

export default HeaderOptions;
