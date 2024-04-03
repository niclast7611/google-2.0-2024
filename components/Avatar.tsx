import React from "react";
import { Avatar as AvatarImg } from "@mui/material";

type Props = {
  url?: string;
};

const Avatar = ({ url }: Props) => {
  return (
    <div>
      {url ? (
        <img
          loading="lazy"
          src={url}
          alt="Profile"
          className="h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110"
        />
      ) : (
        <AvatarImg className="h-10 w-10" />
      )}
    </div>
  );
};

export default Avatar;
