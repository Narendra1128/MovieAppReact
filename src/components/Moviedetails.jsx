import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadmovie, removemovie } from "../store/actions/movieActions";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import HorizontalCards from "./partials/HorizontalCards";
import Loading from "./Loading";

const Moviedetails = () => {
  document.title = "MovieApp | Movie Details";

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    };
  }, [id]);
  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5), rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-screen h-fit min-h-[100vh] flex justify-center overflow-x-hidden"
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      ></div>

      <div className="w-[80%] z-0">
        {/* {navbar part} */}
        <nav className="h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-xl mb-3">
          <Link
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></Link>
          <a target="_blank" href={info.detail.homepage}>
            <i className="ri-external-link-fill"></i>
          </a>
          <a
            target="_blank"
            href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
          >
            <i className="ri-earth-fill"></i>
          </a>

          <a
            target="_blank"
            href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
          >
            imdb
          </a>
        </nav>

        {/* Part 2 Poster and details */}
        <div className="w-full flex">
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[50vh] object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              info.detail.poster_path || info.detail.backdrop_path
            }`}
            alt=""
          />

          <div className="content ml-[5%] text-white">
            <h1 className="text-5xl font-black ">
              {info.detail.name ||
                info.detail.title ||
                info.detail.original_name ||
                info.detail.original_title}

              <small className="text-2xl font-bold text-zinc-200 ml-2">
                ({info.detail.release_date.split("-")[0]})
              </small>
            </h1>

            <div className="mt-3 mb-5 flex  items-center gap-x-3">
              <span className="rounded-full font-semibold bg-yellow-600 text-white w-[5vh] h-[5vh] flex justify-center items-center">
                <span className="text-sm">
                  {(info.detail.vote_average * 10).toFixed()}{" "}
                </span>
                <sup className="text-[10px]">%</sup>
              </span>
              <h1 className="w-[60px] font-semibold text-2xl leading-6">
                User Score
              </h1>
              <h1>{info.detail.release_date}</h1>
              <h1>{info.detail.genres.map((g) => g.name).join(",")}</h1>
              <h1>{info.detail.runtime}min</h1>
            </div>

            <h1 className="text-xl font-semibold italic text-zinc-200">
              {info.detail.tagline}
            </h1>

            <h1 className="text-2xl mb-3  mt-5">Overview</h1>
            <p>{info.detail.overview}</p>

            <h1 className="text-2xl mb-3  mt-5">Movie Translated</h1>
            <p className="mb-6">{info.translations.join(", ")}</p>

            <Link
              className="px-3 py-2 bg-[#6556CD] rounded-lg flex items-center justify-center w-fit"
              to={`${pathname}/trailer`}
            >
              <i className="text-xl ri-play-fill mr-1 "></i>
              Play Trailer
            </Link>
          </div>
        </div>

        {/* Part 3 Available on Platform */}
        <div className="w-[100%] flex flex-col gap-y-5 mt-10">
          {info.watchproviders && info.watchproviders.flatrate && (
            <div className="flex gap-x-10 items-center text-white">
              <h1>Available on Platfotms</h1>
              {info.watchproviders.flatrate.map((w, i) => (
                <img
                  key={i}
                  title={w.provider_name}
                  className="w-[5vh] h-[5vh] object-cover rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt=""
                />
              ))}
            </div>
          )}

          {info.watchproviders && info.watchproviders.rent && (
            <div className="flex gap-x-10 items-center text-white">
              <h1>Available on Rent</h1>
              {info.watchproviders.rent.map((w, i) => (
                <img
                  key={i}
                  title={w.provider_name}
                  className="w-[5vh] h-[5vh] object-cover rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt=""
                />
              ))}
            </div>
          )}

          {info.watchproviders && info.watchproviders.buy && (
            <div className="flex gap-x-10 items-center text-white">
              <h1>Available to Buy</h1>
              {info.watchproviders.buy.map((w, i) => (
                <img
                  key={i}
                  title={w.provider_name}
                  className="w-[5vh] h-[5vh] object-cover rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt=""
                />
              ))}
            </div>
          )}
        </div>

        {/* Part 4 Recommendations and Similar Stuff */}
        {info.recommendations.length > 0 || info.similar.length > 0 ? (
          <>
            <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />
            <h1 className=" text-3xl font-bold text-white mb-5">
              Recommendations & Similar stuff
            </h1>
            <HorizontalCards
              data={
                info.recommendations.length > 0
                  ? info.recommendations
                  : info.similar
              }
            />
          </>
        ) : null}
        <Outlet />
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Moviedetails;
