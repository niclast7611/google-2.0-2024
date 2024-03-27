import { IconButton } from "@mui/material";
import React, { useState, MouseEvent } from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import OptionsPopover from "./OptionsPopover";

type Props = {};

const Popover = (props: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <div>
      <IconButton className="h-9 w-9 dark:text-zinc-300 " onClick={handleClick}>
        <BsFillGrid3X3GapFill />
      </IconButton>
      <OptionsPopover anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </div>
  );
};

export default Popover;
