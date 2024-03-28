import React from "react";

type Props = {
  icon: any;
  title: string;
  selected?: boolean;
};

const SecondaryHeaderButtons = ({ icon, title, selected }: Props) => {
  return (
    <div
      className={`min-w-56 px-4 py-3 hover:bg-gray-100 cursor-pointer ${
        selected
          ? "text-blue-600 border-blue-600 border-b-[3px]"
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
