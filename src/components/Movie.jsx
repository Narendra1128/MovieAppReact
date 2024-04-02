import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Movie = () => {
  document.title = "MovieApp | Movies";
  const navigate = useNavigate();
  const [category, setcategory] = useState("now_playing");
  const [movie, setMovie] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const GetMovie = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      
      if (data.results.length > 0) {
        setMovie((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const refershHandler = () => {
    if (movie.length === 0) {
      GetMovie();
    } else {
      setpage(1);
      setMovie([]);
      GetMovie();
    }
  };

  useEffect(() => {
    refershHandler();
  }, [category]);

  return movie.length > 0 ? (
    <div className="w-screen h-screen mt-3">
      <div className=" px-[5%] w-full flex items-center justify-between ">
        <h1 className=" text-2xl font-semibold text-zinc-400 ">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>{" "}
          Movies
          <small className="ml-2 text-sm text-zinc-600">({category})</small>
        </h1>
        <div className="flex items-center w-[80%] ">
          <Topnav />
          <Dropdown
            title="Category"
            options={["popular", "top_rated", "upcoming", "now_playing"]}
            func={(e) => {
              setcategory(e.target.value);
            }}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={movie.length}
        next={GetMovie}
        hasMore={hasMore}
        loader={
          <h1 className="bg-[#1F1E24] text-white flex justify-center">
            Loading...
          </h1>
        }
      >
        <Cards data={movie} title="movie" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Movie;
