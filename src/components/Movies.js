import React from "react";


const Movie = (props) => {

  return (
    <>

      <div className="movie  outline-none p-2 rounded-xl">
        <img
          src={props.img}
          className="h-64 w-72 rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer"
          alt=""
        />
        <p className="text-gray-200 text-xl font-semibold capitalize z-[100] cursor-pointer hover:text-cyan-900 ">
          {props.title}
        </p>
      </div>
    </>
  );
};

export default Movie;
