import { IconButton } from "@mui/material";
import React from "react";
import { AiOutlineFontColors } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  FaExpandAlt,
  FaRegTrashAlt,
  FaRegWindowMinimize,
} from "react-icons/fa";
import { IoMdAttach, IoMdClose, IoMdLink } from "react-icons/io";
import {
  MdOutlineEmojiEmotions,
  MdOutlineImage,
  MdOutlineLockClock,
} from "react-icons/md";
import { RiBallPenLine, RiDriveLine } from "react-icons/ri";

type Props = {
  setOpenComposeForm: React.Dispatch<React.SetStateAction<boolean>>;
};

const ComposeEmailPopover = ({ setOpenComposeForm }: Props) => {
  return (
    <div className="absolute bottom-0 right-16 h-3/4 w-2/5 z-50 bg-white shadow-2xl rounded-t-lg flex flex-col">
      <div className="flex justify-between bg-[#F2F6FC] px-4 items-center rounded-t-lg py-1">
        <h4 className="text-sm font-medium">New Message</h4>
        <div className="text-gray-900">
          <IconButton>
            <FaRegWindowMinimize className="icon h-3 w-3" />
          </IconButton>
          <IconButton>
            <FaExpandAlt className="icon" />
          </IconButton>
          <IconButton onClick={() => setOpenComposeForm(false)}>
            <IoMdClose className="icon h-5 w-5" />
          </IconButton>
        </div>
      </div>

      <div className="flex-grow overflow-auto">
        <div className="flex flex-col space-y-4 pt-4">
          <input
            type="text"
            placeholder="Recipients"
            className="mx-4 border-b-[1px] border-gray-200 outline-none"
          />
          <input
            type="text"
            placeholder="Subject"
            className="mx-4 border-b-[1px] border-gray-200 outline-none"
          />
          <textarea className="mx-4 mb-4 outline-none h-[20rem] overflow-y-scroll scrollbar-hide" />
        </div>
      </div>

      <div className="flex p-4 justify-between items-center">
        <div className="flex">
          <button
            className="bg-blue-700 text-white py-2 w-28 rounded-full hover:shadow-md hover:shadow-blue-300 mr-2"
            onClick={() => setOpenComposeForm(false)}
          >
            Send
          </button>
          <IconButton>
            <AiOutlineFontColors className="compose-email-icon-button" />
          </IconButton>
          <IconButton>
            <IoMdAttach className="compose-email-icon-button" />
          </IconButton>
          <IconButton>
            <IoMdLink className="compose-email-icon-button" />
          </IconButton>
          <IconButton>
            <MdOutlineEmojiEmotions className="compose-email-icon-button" />
          </IconButton>
          <IconButton>
            <RiDriveLine className="compose-email-icon-button" />
          </IconButton>
          <IconButton>
            <MdOutlineImage className="compose-email-icon-button" />
          </IconButton>
          <IconButton>
            <MdOutlineLockClock className="compose-email-icon-button" />
          </IconButton>
          <IconButton>
            <RiBallPenLine className="compose-email-icon-button" />
          </IconButton>
          <IconButton>
            <BsThreeDotsVertical className="compose-email-icon-button" />
          </IconButton>
        </div>
        <div>
          <IconButton onClick={() => setOpenComposeForm(false)}>
            <FaRegTrashAlt className="icon" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ComposeEmailPopover;
