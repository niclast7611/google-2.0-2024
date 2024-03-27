import GmailHeader from "@/components/Gmail/GmailHeader";
import Sidebar from "@/components/Gmail/Sidebar";
import React from "react";

type Props = {};

const Inbox = (props: Props) => {
  return (
    <div className=" h-screen  bg-slate-50 dark:bg-zinc-800">
      <GmailHeader />

      <Sidebar />
    </div>
  );
};

export default Inbox;
