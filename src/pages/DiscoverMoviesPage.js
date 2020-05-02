import React, { useState } from "react";
import "./DiscoverMoviesPage.css";

export default function DiscoverMoviesPage(event) {
  const [searchText, set_searchText] = useState("");
  const [movies, setMovies] = useState([]);

  const search = async () => {
    console.log("Start searching for:", searchText);

    const queryParam = encodeURIComponent(searchText);

    const data = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=92a2cc20&s=${queryParam}`
    ).then((r) => r.json());

    setMovies(data.Search);
  };

  return (
    <div>
      <h2 className="discover">Discover</h2>
      <h1>Catch some movies!</h1>
      <p>
        <input
          value={searchText}
          onChange={(event) => set_searchText(event.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>
      {movies.length
        ? movies.map((movie, index) => {
            return (
              <div className="movies" key={index}>
                <p>Title: {movie.Title}</p>
                <p>Year: {movie.Year}</p>
                <p>Type: {movie.Type}</p>

                <img src={movie.Poster} />
              </div>
            );
          })
        : null}
    </div>
  );
}
