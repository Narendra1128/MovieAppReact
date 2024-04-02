import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-[20%] h-screen border-r-2 border-zinc-700 px-7">
      <h1 className="text-2xl text-white font-semibold flex items-center my-8 ml-2 ">
        <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
        <span className="text-2xl">Explore</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-xl gap-2 mb-5">
        <Link
          to="/trending"
          className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
        >
          <i className="ri-fire-fill"></i> Trending
        </Link>
        <Link
          to="/popular"
          className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
        >
          <i className="mr-2 ri-bard-fill"></i>
          Popular
        </Link>
        <Link
          to="/movie"
          className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
        >
          <i className="mr-2 ri-movie-2-fill"></i>
          Movies
        </Link>
        <Link
          to="/tv"
          className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
        >
          <i className="mr-2 ri-tv-2-fill"></i>
          Tv Shows
        </Link>
        <Link
          to="/person"
          className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
        >
          <i className="mr-2 ri-team-fill"></i>
          People
        </Link>
      </nav>
      <hr className="border-none h-[1px] bg-zinc-400" />
      <nav className="flex flex-col text-zinc-400 text-xl gap-2">
        <h1 className="text-white font-semibold text-lg mt-8 mb-2">
          Website Information
        </h1>
        <Link to="/about" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg text-lg p-2">
          <i className="mr-2 ri-information-fill"></i> About MovieApp
        </Link>
        <Link to="/about" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg text-lg p-2">
          <i className="mr-2 ri-phone-fill"></i>
          Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
