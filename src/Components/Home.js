import React, { useState, useEffect } from 'react';
import '../component_css/Home.css';

export default function MovieSearch() {
  const [searchTerm, setSearchTerm] = useState("all"); // Default search term set to 'all'
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  // Handle input field change
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Fetch movie data from OMDb API
  const fetchMovieData = async (term) => {
    if (!term) return; // Don't fetch if search term is empty
    setLoading(true); // Start loading

    const apiKey = "5f731a6c"; // Replace with your OMDb API key
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${term}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === "True") {
        setMovies(data.Search); // Set movie data to state if the response is successful
      } else {
        setMovies([]); // Clear movies if no results found
        console.error(data.Error);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // End loading
    }
  };

  // Use useEffect to fetch default movies when component mounts
  useEffect(() => {
    fetchMovieData(searchTerm); // Fetch data with the default term "all"
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // This runs only once on mount

  return (
    <div>
      {/* Search Bar */}
      <div className="search-bar-container">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search for movies..."
          className="search-bar-input"
        />
        <button onClick={() => fetchMovieData(searchTerm)} className="search-bar-btn">
          Search
        </button>
      </div>

      {/* Loading Indicator */}
      {loading && <p>Loading...</p>}

      {/* Movie Results */}
      <div className="movies-container">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.imdbID} className="movie-card">
              <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
              <div className="movie-details">
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
              </div>
            </div>
          ))
        ) : (
          !loading && <p>No results found</p>
        )}
      </div>
    </div>
  );
}
