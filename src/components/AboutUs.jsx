import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="w-screen h-screen bg-zinc-800 flex flex-col items-center">
      <nav className="w-full px-[5%] flex justify-between h-fit py-8 items-center">
        <div className="flex items-center">
          <i className="text-[#6556CD] text-4xl ri-tv-fill mr-3"></i>
          <h2 className="text-3xl text-zinc-200 font-bold">MovieApp</h2>
        </div>

        <div className="w-[30%] flex justify-between text-zinc-200">
          <Link className="text-lg px-3 py-1 bg-zinc-200 text-[#1F1E24] rounded-md hover:bg-zinc-200 hover:text-[#1F1E24]">
            Company
          </Link>
          <Link className="text-lg px-3 py-1 rounded-md hover:bg-zinc-200 hover:text-[#1F1E24]">
            Partners
          </Link>
          <Link className="text-lg px-3 py-1 rounded-md hover:bg-zinc-200 hover:text-[#1F1E24]">
            Press
          </Link>
        </div>
        <a href="#contact" className="px-3 py-2 bg-[#6556CD] rounded-md ">
          Contact Us
        </a>
      </nav>
      <div className="w-full h-fit bg-zinc-800 flex flex-col justify-center items-center gap-y-10 py-20">
        <h1 className="w-[60%] text-7xl text-white font-black text-center">
          BREAKTHROUGH STREAMING
        </h1>
        <p className="w-[60%] text-lg text-white mt-5 text-center">
          Tubi is the most watched free TV and movie streaming service in the
          U.S., dedicated to providing all people access to all the world's
          stories. As a leading ad-supported video-on-demand service, the
          company engages diverse audiences through a personalized experience
          and the world’s largest content library of over 200,000 movies and TV
          episodes, a growing collection of Tubi Originals, and nearly 250 FAST
          channels. Tubi is part of the Tubi Media Group, a division of Fox
          Corporation that oversees the company’s digital businesses.
        </p>
      </div>
      <div id="contact" className="w-full bg-zinc-800">
        <div className="h-[20vh] w-full flex justify-between items-center px-[5%]">
          <div className="flex items-center w-[15%]">
            <i className="text-[#6556CD] text-4xl ri-tv-fill mr-3"></i>
            <h2 className="text-3xl text-zinc-200 font-bold">MovieApp</h2>
          </div>
          <div className="text-3xl gap-x-5 w-[30%] flex justify-center text-zinc-200">
            <a
              target="_blank"
              // href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
            >
              <i className="ri-earth-fill"></i>
            </a>

            <a
              target="_blank"
              // href={`https://www.facebook.com/${info.externalid.facebook_id}`}
            >
              <i className="ri-facebook-circle-fill"></i>
            </a>

            <a
              target="_blank"
              // href={`https://www.instagram.com/${info.externalid.instagram_id}`}
            >
              <i className="ri-instagram-fill"></i>
            </a>
            <a
              target="_blank"
              // href={`https://twitter.com/${info.externalid.twitter_id}`}
            >
              <i className="ri-twitter-x-fill"></i>
            </a>
          </div>
          <div className="w-fit text-zinc-300 text-xl flex justify-start gap-x-3">
            <Link to="/" className="hover:text-zinc-800">
              Home
            </Link>
            <Link to="/" className="hover:text-zinc-800">
              Trending
            </Link>
            <Link to="/" className="hover:text-zinc-800">
              Movies
            </Link>
            <Link to="/" className="hover:text-zinc-800">
              Tv
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
