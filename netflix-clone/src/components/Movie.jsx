import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
const like = false;

const Movie = ({ item, id }) => {
  return (
    <div
      key={id}
      className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[160px] inline-block cursor-pointer relative p-2 "
    >
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
        alt={item.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {item.title}{" "}
        </p>
        <p className="absolute top-3 left-3 ">
          {like ? <FaHeart /> : <FaRegHeart />}
        </p>
      </div>
    </div>
  );
};
export default Movie;
