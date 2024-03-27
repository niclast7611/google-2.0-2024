import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const HeaderLogo = (props: Props) => {
  const { theme } = useTheme();
  const router = useRouter();
  return (
    <img
      src={
        theme === "dark"
          ? "https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo.png"
          : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
      }
      alt="Google"
      className="h-10 w-28 cursor-pointer"
      loading="lazy"
      onClick={() => router.push("/")}
    />
  );
};

export default HeaderLogo;
