import { Popover } from "@mui/material";
import React from "react";
import PopoverButton from "./PopoverButton";

type Props = {
  anchorEl: HTMLButtonElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLButtonElement | null>>;
};

const OptionsPopover = ({ anchorEl, setAnchorEl }: Props) => {
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <div className="my-8 mx-6 overflow-hidden w-fit text-center flex flex-wrap justify-evenly">
        <PopoverButton
          url={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
          }
          title={"Gmail"}
        />
        <PopoverButton
          url={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Google_Docs_logo_%282014-2020%29.svg/1481px-Google_Docs_logo_%282014-2020%29.svg.png"
          }
          title={"Docs"}
        />
        <PopoverButton
          url={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Google_Docs_logo_%282014-2020%29.svg/1481px-Google_Docs_logo_%282014-2020%29.svg.png"
          }
          title={"Docs"}
        />
      </div>
    </Popover>
  );
};

export default OptionsPopover;
