import React from "react";
import Header from "./Header/Header";
import SecondaryHeader from "./Header/SecondaryHeader";

type Props = {};

const EmailList = (props: Props) => {
  return (
    <section className="flex-grow h-full overflow-auto bg-white rounded-xl mt-2">
      <Header />
      <SecondaryHeader />
      {/* Email list items here */}
    </section>
  );
};

export default EmailList;
