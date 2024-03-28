import { IconButton } from "@mui/material";
import React from "react";
import { IoIosAdd } from "react-icons/io";

type Props = {};

const RightSidebar = (props: Props) => {
  return (
    <div className="px-1 pt-4 divide-y-[1px] divide-gray-200 hidden lg:flex lg:flex-col">
      <div className="flex flex-col space-y-5 pb-5">
        <IconButton>
          <img
            src="https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png"
            alt="Calendar"
            className="h-6 w-6"
          />
        </IconButton>

        <IconButton>
          <img
            src="https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png"
            alt="Keep"
            className="h-6 w-6"
          />
        </IconButton>

        <IconButton>
          <img
            src="https://www.gstatic.com/companion/icon_assets/tasks_2021_2x.png"
            alt="Tasks"
            className="h-6 w-6"
          />
        </IconButton>

        <IconButton>
          <img
            src="https://www.gstatic.com/companion/icon_assets/contacts_2022_2x.png"
            alt="Contacts"
            className="h-6 w-6"
          />
        </IconButton>
      </div>
      <div className="pt-5">
        <IconButton>
          <IoIosAdd className="h-7 w-7 text-zinc-900" />
        </IconButton>
      </div>
    </div>
  );
};

export default RightSidebar;
