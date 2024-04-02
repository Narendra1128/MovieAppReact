import React, { useEffect, useState } from "react";
import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav.jsx";
import Header from "./partials/Header.jsx";
import Dropdown from "./partials/Dropdown.jsx";
import HorizontalCards from "./partials/HorizontalCards.jsx";
import Cards from "./partials/Cards.jsx";
import Loading from "./Loading.jsx";

import axios from "../utils/axios.jsx";

function Home() {
  document.title = "Movie App";
  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setcategory] = useState("all");

  const GetWallpaper = async () => {
    try {
      const response = await axios.get(`/trending/all/day`);
      let num = (Math.random() * response.data.results.length).toFixed();
      setWallpaper(response.data.results[num]);
    } catch (e) {
      console.log("Error", e);
    }
  };
  const GetTrending = async () => {
    try {
      const response = await axios.get(`/trending/${category}/day`);
      setTrending(response.data.results);
    } catch (e) {
      console.log("Error", e);
    }
  };

  useEffect(() => {
    !wallpaper && GetWallpaper();
    GetTrending();
  }, [category]);

      return wallpaper && trending ? (
        <>
        <Sidenav />
        <div className="w-[80%] h-full overflow-y-auto overflow-x-hidden">
          <Topnav />
          <Header data={wallpaper} />
          <div className="w-full mt-2 mb-3 px-5 flex flex-col items-center gap-y-2">
            <div className="w-full flex justify-between">
              <h1 className="text-2xl font-semibold text-zinc-300 my-1">
                Trending
              </h1>
              <Dropdown
                title="Filter"
                options={["Movie", "TV", "ALL", "person"]}
                func={(e) => {
                  setcategory(e.target.value.toLowerCase());
                }}
              />
            </div>

            <HorizontalCards data={trending} />
          </div>
        </div></>
      ) : (
      <Loading />
      );
}

export default Home;
