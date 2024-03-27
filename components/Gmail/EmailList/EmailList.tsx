import React from "react";
import Header from "./Header";

type Props = {};

const EmailList = (props: Props) => {
  return (
    <section className="flex-grow h-full overflow-auto bg-white rounded-xl mt-2">
      <Header />
      {/* Email list items here */}
    </section>
  );
};

export default EmailList;
