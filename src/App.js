import React, { useState } from 'react';
import Header from './components/Header';
import Movie from './components/Movies';
import movies from './movie.json';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="App text-center min-h-screen  bg-gradient-to-r from-black to-black">
      <nav className=' backdrop-blur-sm flex z-50 gap-36 fixed w-full'>

      <Header />
      {/* ...........  */}
      <input
        type="text"
        placeholder="search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        className='placeholder:italic placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-md py-2 pl-9
         pr-3 shadow-sm focus:outline-none focus:border-sky-500
        focus:ring-sky-500  focus:ring-1 sm:text-sm'
        />
        </nav>
      {/* ...........  */}
      <div className="main flex  justify-between flex-wrap p-[14px] gap-5 pt-24">
        {movies
          .filter((e) => {
            if (searchTerm === '') {
              return true;
            } else if (e.Title.toLowerCase().includes(searchTerm.toLowerCase())) {
              return true;
            }
            return false;
          })
          .map((e, i) => (
            <Movie key={i} title={e.Title} img={e.Poster} />
          ))}
      </div>
    </div>
  );
}

export default App;
