import React from "react";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { IconButton } from "@mui/material";
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
      className="flex w-full items-center px-2 h-12 border-b-[1px] cursor-pointer hover:shadow-md justify-between"
      onClick={() =>
        router.push({
          pathname: "/inbox/mail",
          query: { id: id },
        })
      }
    >
      {/* left */}
      <div className="flex items-center">
        <span>
          <IconButton>
            <MdOutlineCheckBoxOutlineBlank className="text-gray-500 w-4 h-4" />
          </IconButton>
        </span>
        <span>
          <IconButton>
            <FaRegStar className="h-4 w-4" />
          </IconButton>
        </span>
        <h2 className="text-sm font-semibold pl-2">{title}</h2>
      </div>
      {/* center */}
      <div className="flex items-center text-sm w-96">
        <span className="font-semibold whitespace-nowrap">{subject}</span>
        <p className="text-sm text-gray-500 pl-2 overflow-hidden text-ellipsis whitespace-nowrap">
          - {description}
        </p>
      </div>
      {/* right */}
      <p className="text-xs font-semibold">{date}</p>
    </div>
  );
};

export default EmailRow;
