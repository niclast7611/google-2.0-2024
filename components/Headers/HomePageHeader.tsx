import React, { MouseEvent, useState } from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import Avatar from "@/components/Avatar";
import { IconButton } from "@mui/material";
import OptionsPopover from "../OptionsPopover";
type Props = {};

const HomePageHeader = (props: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <header className="flex w-full p-5 justify-between text-sm text-gray-700">
      <div className="flex space-x-4 items-center">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>

      <div className="flex space-x-4 items-center">
        <p className="link">Gmail</p>
        <p className="link">Images</p>
        <IconButton className="h-9 w-9" onClick={handleClick}>
          <BsFillGrid3X3GapFill />
        </IconButton>
        <OptionsPopover anchorEl={anchorEl} setAnchorEl={setAnchorEl} />

        <Avatar
          url={
            "https://img.buzzfeed.com/buzzfeed-static/complex/images/rrgyzeu7ucbf5styxkuw/drake-21-savage-her-loss-album-cver.jpg?output-format=jpg&output-quality=auto"
          }
        />
      </div>
    </header>
  );
};

export default HomePageHeader;
