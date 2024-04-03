import React from "react";

type Props = {
  icon: any;
  title: string;
  selected?: boolean;
};

const SecondaryHeaderButtons = ({ icon, title, selected }: Props) => {
  return (
    <div
      className={`min-w-56 px-2 py-3 hover:bg-gray-100 cursor-pointer dark:hover:bg-neutral-600 ${
        selected
          ? "text-blue-600 border-blue-600 border-b-[3px] dark:text-white dark:border-white"
          : "border-transparent"
      } `}
    >
      <div className="flex items-center px-2 justify-start">
        {icon}
        {title}
      </div>
    </div>
  );
};

export default SecondaryHeaderButtons;
