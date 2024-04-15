import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);
  const sliderRef = useRef(null); // Using useRef to access the slider element

  useEffect(() => {
    axios
      .get(fetchURL)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Failed to fetch movies:", error);
      });
  }, [fetchURL]);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 500; // Scroll left by decreasing the scrollLeft value
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 500; // Scroll right by increasing the scrollLeft value
    }
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          ref={sliderRef} // Using ref to refer to this div in slideLeft and slideRight
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="right-0 bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};

export default Row;
