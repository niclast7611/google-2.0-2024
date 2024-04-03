import { useRouter } from "next/router";
import React from "react";

type Props = {
  url: string;
  img: string;
  title: string;
};

const PopoverButton = ({ img, title, url }: Props) => {
  const router = useRouter();
  return (
    <div
      className="col-span-1 pt-3 pb-1 px-6 hover:bg-gray-100 dark:hover:bg-neutral-700 cursor-pointer rounded-lg"
      onClick={() => router.push(url)}
    >
      <div className="flex flex-col items-center justify-center">
        <img src={img} alt={title} className="h-8 w-8" />
        <p className="text-xs text-gray-500 mt-3 dark:text-zinc-300">{title}</p>
      </div>
    </div>
  );
};

export default PopoverButton;
