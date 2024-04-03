import React, { MouseEvent, useState } from "react";
import Avatar from "@/components/Avatar";
import Popover from "../../Popover";
import { useRouter } from "next/router";
type Props = {};

const HomePageHeader = (props: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const router = useRouter();
  return (
    <header className="flex w-full p-5 justify-between text-sm text-gray-700">
      <div className="flex space-x-4 items-center">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>

      <div className="flex space-x-4 items-center">
        <p className="link" onClick={() => router.push("/inbox")}>
          Gmail
        </p>
        <p className="link">Images</p>
        <Popover />

        <Avatar />
      </div>
    </header>
  );
};

export default HomePageHeader;
