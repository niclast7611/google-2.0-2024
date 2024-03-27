import GmailHeader from "@/components/Headers/GmailHeader";
import React from "react";

type Props = {};

const Inbox = (props: Props) => {
  return (
    <div className="flex flex-col items-center h-screen justify-center bg-white dark:bg-zinc-800">
      <GmailHeader />

      <section>hello</section>
    </div>
  );
};

export default Inbox;
