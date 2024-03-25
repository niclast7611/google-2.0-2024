import Avatar from "@/components/Avatar";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import React from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import Footer from "@/components/Footer";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <IconButton className="h-9 w-9">
            <BsFillGrid3X3GapFill />
          </IconButton>
          <Avatar
            url={
              "https://img.buzzfeed.com/buzzfeed-static/complex/images/rrgyzeu7ucbf5styxkuw/drake-21-savage-her-loss-album-cver.jpg?output-format=jpg&output-quality=auto"
            }
          />
        </div>
      </header>

      <form className="flex flex-col items-center flex-grow w-4/5 mt-0 md:mt-16 xl:mt-44">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
          alt="Google"
          className="h-28 w-80"
          loading="lazy"
        />
        <div className="w-full max-w-md sm:max-w-xl lg:max-w-2xl mt-5">
          <OutlinedInput
            fullWidth
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
          <button className="button">Google Search Button</button>
          <button className="button">I&apos;m Feeling Lucky</button>
        </div>
      </form>

      <Footer />
    </div>
  );
};

export default Home;
