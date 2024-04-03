import React from "react";

type Props = {
  title: string;
  icon: any;
  selected?: boolean;
  number?: number;
};

const SidebarButton = ({ title, icon, selected, number }: Props) => {
  return (
    <button
      className={`flex items-center w-full  rounded-r-full py-1.5 pl-7 font-light hover:bg-gray-200 dark:hover:bg-zinc-700 dark:text-zinc-200 ${
        selected && "font-semibold bg-[#D3E2FD] dark:bg-zinc-700"
      }`}
    >
      <span className="flex items-center text-sm">
        {icon}
        {title}
      </span>
      {number && <span className="ml-auto pr-3 text-xs">{number}</span>}
    </button>
  );
};

export default SidebarButton;
