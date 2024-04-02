import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpeg";

function Topnav() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState([]);
  const GetApi = async () => {
    try {
      const response = await axios.get(`/search/multi?query=${query}`);
      setSearch(response.data.results);
    } catch (e) {
      console.log("Error", e);
    }
  };
  useEffect(() => {
    GetApi();
  }, [query]);

  return (
    <div className="relative w-[100%] h-[6vh] flex justify-start items-center gap-x-2 ml-[10%] my-1">
      <i className="text-zinc-400 text-xl ri-search-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[50%] bg-transparent text-zinc-200 px-2 text-lg outline-none border-none"
        type="text"
        placeholder="search anything.."
      />

      {query.length > 0 && (
        <i
          onClick={(e) => setQuery("")}
          className=" text-zinc-400 text-xl ri-close-fill right-0"
        ></i>
      )}

      <div className="absolute top-[100%] w-[52%] max-h-[40vh] ml-[4%] items-center overflow-auto z-10 bg-[#1F1E24]">
        {search.length > 0 &&
          search.map((s, i) => {
            return (
              <Link
                key={i}
                to={`/${s.media_type || title}/details/${s.id}`}
                className="font-semibold flex rounded-md justify-start items-center  text-zinc-600 hover:text-zinc-300 hover:bg-zinc-800 duration-300 p-2 px-4"
              >
                <img
                  className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg "
                  src={
                    s.backdrop_path || s.profile_path
                      ? `https://image.tmdb.org/t/p/original/${
                          s.backdrop_path || s.profile_path
                        }`
                      : noimage
                  }
                  alt=""
                />
                <span>
                  {s.name || s.title || s.original_name || s.original_title}
                </span>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default Topnav;
