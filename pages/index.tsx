import { InputAdornment, OutlinedInput } from "@mui/material";
import React, { useRef } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import HomePageHeader from "@/components/Headers/HomePageHeader";

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
    <div className="flex flex-col items-center h-screen justify-center">
      <HomePageHeader />
      <form
        className="flex flex-col items-center flex-grow w-4/5 mt-0 md:mt-16 xl:mt-44"
        // @ts-ignore
        onSubmit={handleSearch}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
          alt="Google"
          className="h-28 w-80"
          loading="lazy"
        />
        <div className="w-full max-w-md sm:max-w-xl lg:max-w-2xl mt-5">
          <OutlinedInput
            fullWidth
            inputRef={searchInputRef}
            className="rounded-full"
            startAdornment={
              <InputAdornment position="start">
                <IoIosSearch className="h-5 w-5 ml-3" />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <FaMicrophone className="h-4 w-4 mr-3" />
              </InputAdornment>
            }
          />
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
