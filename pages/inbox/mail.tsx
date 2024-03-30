import GmailHeader from "@/components/Gmail/GmailHeader";
import MailHeader from "@/components/Gmail/MailPage/MailHeader";
import LeftSidebar from "@/components/Gmail/Sidebars/LeftSidebar";
import RightSidebar from "@/components/Gmail/Sidebars/RightSidebar";
import React from "react";
import { FiPrinter } from "react-icons/fi";
import { AiOutlineExport } from "react-icons/ai";
import { Avatar, IconButton } from "@mui/material";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { LuReply } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuReplyAll, LuForward } from "react-icons/lu";

type Props = {};

const Mail = (props: Props) => {
  return (
    <div className="h-screen overflow-hidden bg-slate-50 dark:bg-zinc-800">
      <GmailHeader />

      <div className="flex h-full overflow-hidden">
        {/* left sidebar */}
        <LeftSidebar />
        {/* main email */}
        <section className="flex-grow h-full overflow-auto bg-white rounded-xl mt-2 min-w-0">
          <MailHeader />
          <div className="mx-8 my-4 sm:m-4 sm:pl-14 flex flex-col space-y-5">
            <div className="flex justify-between items-center">
              <span>
                <h1 className="text-3xl font-medium">Title</h1>
              </span>
              <div className="flex space-x-2">
                <IconButton>
                  <FiPrinter className="h-5 w-5" />
                </IconButton>
                <IconButton>
                  <AiOutlineExport className="h-5 w-5" />
                </IconButton>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex items-start sm:items-center sm:space-x-2 sm:flex-row flex-col">
                {/* <Avatar /> */}
                <h2 className="font-semibold text-lg">Nic Last</h2>
                <p className="text-xs text-gray-500">
                  &#60;info@gmail.com&#62;
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-xs text-gray-500 pr-2 sm:inline-flex hidden">
                  Dec 12, 2023, 12:00 PM
                </p>
                <IconButton className="hidden sm:inline-flex">
                  <FaRegStar className="h-5 w-5" />
                </IconButton>
                <IconButton className="hidden sm:inline-flex">
                  <MdOutlineEmojiEmotions className="h-5 w-5" />
                </IconButton>
                <IconButton className="hidden sm:inline-flex">
                  <LuReply className="h-5 w-5" />
                </IconButton>
                <IconButton>
                  <BsThreeDotsVertical className="h-5 w-5" />
                </IconButton>
              </div>
            </div>

            <p className="border-b-[1px] border-gray-200 pb-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
              voluptas quam natus iusto quia nulla corrupti illo ducimus beatae,
              ut ab adipisci quae libero molestias odio autem soluta, nostrum
              dolorum. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Rerum voluptas quam natus iusto quia nulla corrupti illo ducimus
              beatae, ut ab adipisci quae libero molestias odio autem soluta,
              nostrum dolorum.
            </p>

            <div className="flex items-center space-x-2 pt-2">
              <button className="mail-page-button">
                <LuReply className="h-5 w-5 mr-3" />
                Reply
              </button>
              <button className="mail-page-button hidden sm:inline-flex">
                <LuReplyAll className="h-5 w-5 mr-3" />
                Reply All
              </button>
              <button className="mail-page-button">
                <LuForward className="h-5 w-5 mr-3" />
                Forward
              </button>
              <button className="p-2 rounded-full border-[1px] border-gray-600 text-gray-600 hover:bg-gray-100">
                <MdOutlineEmojiEmotions className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>
        <RightSidebar />
      </div>
    </div>
  );
};

export default Mail;
