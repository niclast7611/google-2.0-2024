import React from "react";
import { MdInbox, MdOutlinePeopleOutline } from "react-icons/md";
import { GoTag } from "react-icons/go";
import SecondaryHeaderButtons from "./SecondaryHeaderButtons";

type Props = {};

const SecondaryHeader = (props: Props) => {
  return (
    <div className="border-b-[1px] flex overflow-x-scroll scrollbar-hide">
      <SecondaryHeaderButtons
        icon={<MdInbox className="h-4 w-4 mr-3" />}
        title="Primary"
        selected
      />
      <SecondaryHeaderButtons
        icon={<GoTag className="h-4 w-4 mr-3" />}
        title="Promotions"
      />
      <SecondaryHeaderButtons
        icon={<MdOutlinePeopleOutline className="h-4 w-4 mr-3" />}
        title="Social"
      />
    </div>
  );
};

export default SecondaryHeader;
