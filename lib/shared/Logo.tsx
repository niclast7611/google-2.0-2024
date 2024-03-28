import { useTheme } from "next-themes";
import React from "react";

type Props = {};

const Logo = (props: Props) => {
  const { theme } = useTheme();
  return (
    <img
      src={
        theme === "dark"
          ? "https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo.png"
          : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
      }
      alt="Google"
      className="h-28 w-72 object-contain"
      loading="lazy"
    />
  );
};

export default Logo;
