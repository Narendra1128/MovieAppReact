import React from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpeg";

function HorizontalCards({ data, title }) {
  function calculateHeight(title) {
    const titleLength = title.length;
    if (titleLength < 10) {
      return "text-lg";
    } else if (titleLength < 19) {
      return "text-md";
    } else if (titleLength < 28) {
      return "text-sm";
    } else if (titleLength < 35) {
      return "text-xs";
    } else {
      return "text-[11px]";
    }
  }
  return (
    <div className="w-full overflow-x-auto flex gap-x-2 whitespace-nowrap">
      {data.map((d, i) => {
        return (
          <Link
            to={`/${d.media_type || title}/details/${d.id}`}
            key={i}
            className="w-[12vw] h-[32vh] bg-zinc-900 mb-[7px] overflow-hidden rounded-md flex-shrink-0"
          >
            <img
              className="w-full h-[65%] object-cover object-top center"
              src={
                d.backdrop_path || d.poster_path || d.profile_path
                  ? `https://image.tmdb.org/t/p/original${
                      d.backdrop_path || d.poster_path || d.profile_path
                    }`
                  : noimage
              }
              alt=""
            />
            <div className="relative text-zinc-200 pt-2 pl-2 w-[100%] h-[35%] whitespace-normal leading-tight overflow-hidden">
              <h1
                className={`font-semibold w-[95%] ${calculateHeight(
                  d.name || d.title || d.original_name || d.original_title
                )}`}
              >
                {d.name || d.title || d.original_name || d.original_title}
              </h1>
              <span className="absolute bottom-2 text-[12px]">
                <i className="text-yellow-500 ri-megaphone-fill"></i>{" "}
                {d.release_date ||
                  d.first_air_date ||
                  d.known_for_department ||
                  "No Information"}
              </span>
              <p className="absolute font-semibold bottom-2 right-4">
                <i className="ri-star-fill text-[#FFDF00] text-sm font-thin"></i>
                <span className={"text-zinc-100 text-sm ml-1"}>
                  {parseFloat(d.vote_average || d.popularity).toFixed(1)}
                </span>
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default HorizontalCards;
