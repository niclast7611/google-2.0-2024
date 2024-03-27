import React, { useRef } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import HomePageHeader from "@/components/Headers/HomePageHeader";
import { useTheme } from "next-themes";
import Logo from "@/lib/shared/Logo";

type Props = {};

const Home = (props: Props) => {
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const term = searchInputRef.current?.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
    searchInputRef.current!.value = "";
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center bg-white dark:bg-zinc-800">
      <HomePageHeader />
      <form
        className="flex flex-col items-center flex-grow w-4/5  mt-16 "
        // @ts-ignore
        onSubmit={handleSearch}
      >
        <Logo />
        <div className="flex px-6 py-3 ml-10 mr-5 border-[0.5px] border-gray-200 rounded-full hover:shadow-lg hover:ring-gray-100 max-w-3xl items-center w-full sm:max-w-xl lg:max-w-2xl mt-5">
          <IoIosSearch className="h-5 w-5 mr-3 text-gray-400" />
          <input
            type="text"
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none bg-transparent"
          />
          <FaMicrophone className="h-4 w-4 text-gray-400" />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 md:space-y-0 md:flex-row md:space-x-4">
          <button className="button" type="submit">
            Google Search Button
          </button>
          <button className="button" type="submit">
            I&apos;m Feeling Lucky
          </button>
        </div>
      </form>

      <Footer />
    </div>
  );
};

export default Home;
