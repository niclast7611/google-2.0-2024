import React from "react";

type Props = {
  url: string;
  title: string;
};

const PopoverButton = ({ url, title }: Props) => {
  return (
    <div className="col-span-1 pt-3 pb-1 px-6 hover:bg-gray-100 dark:hover:bg-neutral-700 cursor-pointer rounded-lg">
      <div className="flex flex-col items-center justify-center">
        <img src={url} alt={title} className="h-8 w-8" />
        <p className="text-xs text-gray-500 mt-3 dark:text-zinc-300">{title}</p>
      </div>
    </div>
  );
};

export default PopoverButton;
