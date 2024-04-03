import { Popover } from "@mui/material";
import React from "react";
import PopoverButton from "./PopoverButton";
import ThemeSwitcher from "./ThemeSwitcher";
import { useTheme } from "next-themes";

type Props = {
  anchorEl: HTMLButtonElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLButtonElement | null>>;
};

const OptionsPopover = ({ anchorEl, setAnchorEl }: Props) => {
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const { theme } = useTheme();

  const themeStyles = () => ({
    "& .MuiPaper-root": {
      boxShadow:
        theme === "dark"
          ? "0px 4px 20px rgba(0, 0, 0, 0.5)"
          : "0px 4px 20px rgba(0, 0, 0, 0.25)",
      borderRadius: "16px",
      backgroundColor: theme === "dark" ? "#18181b" : "#FFFFFF",
      color: theme === "dark" ? "#FFFFFF" : "#000000",
      border: theme === "dark" ? "10px solid #27272a" : "",
    },
  });

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      sx={themeStyles}
    >
      <div className="my-8 overflow-hidden w-72 text-center flex flex-wrap justify-evenly">
        <ThemeSwitcher />
        <PopoverButton
          img={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
          }
          title={"Gmail"}
          url="/inbox"
        />
        <PopoverButton
          img={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Google_Docs_logo_%282014-2020%29.svg/1481px-Google_Docs_logo_%282014-2020%29.svg.png"
          }
          title={"Docs"}
          url="/"
        />
      </div>
    </Popover>
  );
};

export default OptionsPopover;
