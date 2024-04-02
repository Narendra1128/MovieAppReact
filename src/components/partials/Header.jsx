import React from "react";
import { Link } from "react-router-dom";

function Header({ data }) {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5), rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[48vh] flex flex-col justify-end items-start p-[5%] relative"
    >
      <div className="absolute bottom-10 text-md">
        <h1 className="w-[70%] text-4xl font-bold text-white">
          {data.name || data.title || data.original_name || data.original_title}
        </h1>
        <p className="w-[50%] mt-2 mb-2 text-white text-sm">
          {data.overview.slice(0, 150)}...
          <Link
            to={`/${data.media_type}/details/${data.id}`}
            className="text-blue-400"
          >
            more
          </Link>
        </p>
        <p className="text-white text-xs mb-5">
          <i className="text-yellow-500 ri-megaphone-fill"></i>{" "}
          {data.release_date || "No Information"}
          <i className="ml-5 text-yellow-500 ri-album-fill"></i>{" "}
          {data.media_type.toUpperCase()}
        </p>
        <Link
          to={`/${data.media_type}/details/${data.id}/trailer`}
          className="bg-[#6556CD] px-2 py-2 rounded text-white"
        >
          Watch Trailer
        </Link>
      </div>
    </div>
  );
}

export default Header;
