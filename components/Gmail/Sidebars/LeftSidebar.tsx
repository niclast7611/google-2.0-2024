import React, { useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { MdInbox } from "react-icons/md";
import { FaRegStar, FaRegClock } from "react-icons/fa";
import { GoPaperAirplane } from "react-icons/go";
import { IoDocumentOutline, IoChevronDown } from "react-icons/io5";
import SidebarButton from "./SidebarButton";
import { IoMdPerson, IoMdCall } from "react-icons/io";
import { MdVideoChat } from "react-icons/md";
import { IconButton } from "@mui/material";
import ComposeEmailPopover from "../ComposeEmailPopover";

type Props = {};

const LeftSidebar = (props: Props) => {
  const [openComposeForm, setOpenComposeForm] = useState(false);

  return (
    <section className="hidden lg:inline-flex w-1/5 flex-shrink-0 min-w-[20%]">
      <div className="flex flex-col w-full">
        <button
          className="flex p-4 items-center space-x-4 rounded-xl hover:shadow-xl bg-[#C1E7FE] hover:ring-1 ring-[#C1E7FE]/40 ml-3 my-3 w-fit"
          onClick={() => setOpenComposeForm(true)}
        >
          <MdOutlineEdit className="h-5 w-5 mr-4" />
          Compose
        </button>

        <div className="flex flex-col w-full pr-4 mt-1">
          <SidebarButton
            title="Inbox"
            icon={<MdInbox className="h-4 w-4 mr-2" />}
            number={54}
            selected
          />
          <SidebarButton
            title="Starred"
            icon={<FaRegStar className="h-4 w-4 mr-2" />}
            number={54}
          />
          <SidebarButton
            title="Snoozed"
            icon={<FaRegClock className="h-4 w-4 mr-2" />}
            number={54}
          />
          <SidebarButton
            title="Sent"
            icon={<GoPaperAirplane className="h-4 w-4 mr-2" />}
            number={54}
          />
          <SidebarButton
            title="Drafts"
            icon={<IoDocumentOutline className="h-4 w-4 mr-2" />}
            number={54}
          />
          <SidebarButton
            title="More"
            icon={<IoChevronDown className="h-4 w-4 mr-2" />}
            number={54}
          />
        </div>

        <div className="w-full flex justify-center space-x-2 pt-2 text-gray-500">
          <IconButton>
            <IoMdPerson className="w-5 h-5" />
          </IconButton>
          <IconButton>
            <MdVideoChat className="w-5 h-5" />
          </IconButton>
          <IconButton>
            <IoMdCall className="w-5 h-5" />
          </IconButton>
        </div>
      </div>
      {openComposeForm && (
        <ComposeEmailPopover setOpenComposeForm={setOpenComposeForm} />
      )}
    </section>
  );
};

export default LeftSidebar;
