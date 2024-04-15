import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "../Requests.jsx";

const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(requests.requestPopular)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Failed to fetch movies:", error);
      });
  }, []);

  const movie =
    movies.length > 0
      ? movies[Math.floor(Math.random() * movies.length)]
      : null;
  if (!movie) return <div>Loading movie...</div>; // Placeholder content

  const trunscateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "....";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[700px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>

        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title || "Movie poster"}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold ">{movie?.title}</h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
              Play
            </button>
            <button className="border text-white border-gray-300 py-2 px-5 mx-5">
              Watch Later
            </button>{" "}
          </div>
          <p className="text-gray-400 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:mx-w-[35%] text-gray-200">
            {trunscateString(movie?.overview, 200)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
