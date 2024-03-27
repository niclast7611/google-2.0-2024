import EmailList from "@/components/Gmail/EmailList/EmailList";
import GmailHeader from "@/components/Gmail/GmailHeader";
import Sidebar from "@/components/Gmail/Sidebar";
import React from "react";

type Props = {};

const Inbox = (props: Props) => {
  return (
    <div className="h-screen overflow-hidden bg-slate-50 dark:bg-zinc-800">
      <GmailHeader />
      <div className="flex h-full overflow-hidden">
        <Sidebar />
        <EmailList />
      </div>
    </div>
  );
};

export default Inbox;
