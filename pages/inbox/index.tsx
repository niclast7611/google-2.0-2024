import EmailList from "@/components/Gmail/EmailList/EmailList";
import GmailHeader from "@/components/Gmail/GmailHeader";
import LeftSidebar from "@/components/Gmail/Sidebars/LeftSidebar";
import RightSidebar from "@/components/Gmail/Sidebars/RightSidebar";
import React from "react";

type Props = {};

const Inbox = (props: Props) => {
  return (
    <div className="h-screen overflow-hidden bg-slate-50 dark:bg-zinc-800 relative">
      <GmailHeader />

      <div className="flex h-full overflow-hidden">
        {/* left sidebar */}
        <LeftSidebar />
        {/* main email list */}
        <EmailList />
        {/* right sidebar */}
        <RightSidebar />
      </div>
    </div>
  );
};

export default Inbox;
