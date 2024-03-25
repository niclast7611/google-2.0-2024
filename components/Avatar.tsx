import React from "react";

type Props = {
  url: string;
};

const Avatar = ({ url }: Props) => {
  return (
    <img
      loading="lazy"
      src={url}
      alt="Profile"
      className="h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110"
    />
  );
};

export default Avatar;
