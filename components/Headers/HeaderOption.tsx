import React from "react";

type Props = {
  selected?: boolean;
  icon: any;
  title: string;
};

const HeaderOption = ({ selected, title, icon }: Props) => {
  return (
    <div
      className={`flex items-center space-x-1 hover:text-blue-500 hover:border-blue-500 dark:hover:text-blue-300 dark:hover:border-blue-300 hover:border-b-4 pb-2 cursor-pointer ${
        selected &&
        "text-blue-500 border-blue-500 dark:text-blue-300 dark:border-blue-300 border-b-4"
      }`}
    >
      {icon}
      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  );
};

export default HeaderOption;
