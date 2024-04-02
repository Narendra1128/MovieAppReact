import React from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpeg";

const Cards = ({ data, title }) => {
  return (
    <div className="flex w-full h-100vh bg-[#1F1E24] justify-center mt-5">
      <div className="w-[80%] flex flex-wrap pl-[4%]">
        <Link
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="fixed bottom-[5%] right-[5%] flex justify-center items-center w-[5vh] h-[5vh] bg-[#6556cd] rounded-lg"
        >
          <i className="text-white ri-arrow-up-line text-xl"></i>
        </Link>
        {data.map((c, i) => (
          <Link
            to={`/${c.media_type || title}/details/${c.id}`}
            className="relative w-[25vh] mr-[5%] mb-[3%]"
            key={i}
          >
            <img
              className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover"
              src={
                c.poster_path || c.backdrop_path || c.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      c.poster_path || c.backdrop_path || c.profile_path
                    }`
                  : noimage
              }
              alt=""
            />
            <h1 className="text-lg text-zinc-300 mt-3 font-semibold ">
              {c.name || c.title || c.original_name || c.original_title}
            </h1>

            {c.vote_average && (
              <div className="absolute right-[-10%] bottom-[25%] rounded-full text-sm font-semibold bg-yellow-600 text-white w-[5vh] h-[5vh] flex justify-center items-center">
                <span className="flex items-center">
                  {(c.vote_average * 10).toFixed()} <sup>%</sup>
                </span>
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cards;
