import React, { useState } from 'react';
import Header from './components/Header';
import Movie from './components/Movies';
import movies from './movie.json';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="App text-center min-h-screen  bg-gradient-to-r from-black to-black">
      <Header />
      {/* ...........  */}
      <input
        type="text"
        placeholder="search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {/* ...........  */}
      <div className="main flex justify-between flex-wrap p-[14px] gap-5">
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
