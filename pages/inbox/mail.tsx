import GmailHeader from "@/components/Gmail/GmailHeader";
import MailHeader from "@/components/Gmail/MailPage/MailHeader";
import LeftSidebar from "@/components/Gmail/Sidebars/LeftSidebar";
import RightSidebar from "@/components/Gmail/Sidebars/RightSidebar";
import React from "react";

type Props = {};

const Mail = (props: Props) => {
  return (
    <div className="h-screen overflow-hidden bg-slate-50 dark:bg-zinc-800 w-full">
      <GmailHeader />

      <div className="flex h-full overflow-hidden w-full">
        {/* left sidebar */}
        <LeftSidebar />
        {/* main email */}
        <section className="h-full overflow-auto bg-white rounded-xl mt-2 w-full">
          <MailHeader />
          <div>hello</div>
        </section>
        <RightSidebar />
      </div>
    </div>
  );
};

export default Mail;
