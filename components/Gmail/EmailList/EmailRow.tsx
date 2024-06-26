import React from "react";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { Avatar, IconButton } from "@mui/material";
import { useRouter } from "next/router";

type Props = {
  description: string;
  subject: string;
  title: string;
  date: string;
  id: string;
};

const EmailRow = ({ description, subject, title, date, id }: Props) => {
  const router = useRouter();
  return (
    <div
      className="flex w-full items-center p-2 h-20 sm:h-12 border-b-[1px] cursor-pointer hover:shadow-md justify-between sm:flex-row flex-col gap-4 dark:text-white"
      onClick={() =>
        router.push({
          pathname: "/inbox/mail",
          query: { id: id },
        })
      }
    >
      {/* left and center combined for smaller screens, with gap for spacing */}
      <div className="flex flex-col sm:flex-row w-full items-start sm:items-center gap-2">
        <div className="flex items-center justify-between sm:justify-start w-full sm:w-56">
          {/* Icons visible on larger screens */}
          <IconButton className="hidden sm:inline-flex">
            <MdOutlineCheckBoxOutlineBlank className="text-gray-500 w-4 h-4" />
          </IconButton>
          <IconButton className="hidden sm:inline-flex">
            <FaRegStar className="h-4 w-4 text-gray-500" />
          </IconButton>

          {/* Avatar, title, and date (on smaller screens) with spacing */}
          <span className="flex items-center w-full sm:w-auto space-x-2">
            <Avatar className="flex sm:hidden h-8 w-8" />
            <h2 className="text-sm font-semibold flex-1 sm:flex-none">
              {title}
            </h2>
            <p className="sm:hidden text-xs font-semibold">{date}</p>
          </span>
        </div>

        {/* Description aligned with title on smaller screens, with adjusted padding for alignment */}
        <div className="flex flex-1 items-start sm:items-center text-sm w-full sm:w-96">
          <p className="text-sm text-gray-500 pl-10 overflow-hidden text-ellipsis whitespace-nowrap dark:text-zinc-300">
            {subject && (
              <span className="font-semibold hidden sm:inline">
                {subject} -{" "}
              </span>
            )}
            {description}
          </p>
        </div>
      </div>

      {/* Date visible on larger screens */}
      <p className="text-xs font-semibold hidden sm:inline-flex dark:text-zinc-300 w-12">
        {date}
      </p>
    </div>
  );
};

export default EmailRow;
