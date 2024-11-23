import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Movie from "./components/Movie";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Avengers Endgame",
      image: "https://wallpaperaccess.com/full/7464924.jpg",
    },
    {
      id: 2,
      title: "Spider-Man: No Way Home",
      image: "https://cdn.shopify.com/s/files/1/1057/4964/products/Spider-Man-No-Way-Home-Vintage-Movie-Poster-Original-1-Sheet-27x41_25b5dfd9-d4d0-45f1-ad92-c7a118525092.jpg?v=1663224672",
    },
    {
      id: 3,
      title: "Spider-Man: Into the Spider-Verse",
      image: "https://image.tmdb.org/t/p/original/gwv98uK5J7xEOgJ1Mmij1O22eVR.jpg",
    },
    {
      id: 4,
      title: "Transformers: Rise of the Beasts",
      image: "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2023/05/FwMN-tJaIAAH7d3.jpg",
    },
    {
      id: 5,
      title: "Venom: The Last Dance",
      image: "https://m.media-amazon.com/images/M/MV5BZDMyYWU4NzItZDY0MC00ODE2LTkyYTMtMzNkNDdmYmFhZDg0XkEyXkFqcGc@._V1_.jpg",
    },
    {
      id: 6,
      title: "Black Adam",
      image: "https://de.web.img3.acsta.net/pictures/22/09/08/09/16/4886164.jpg",
    },
    {
      id: 7,
      title: "Don't Breathe 2",
      image: "https://www.dvdsreleasedates.com/posters/800/D/Dont-Breathe-2-2021-movie-poster.jpg",
    },
    {
      id: 8,
      title: "Godzilla x Kong: The New Empire",
      image: "https://image.tmdb.org/t/p/original/21bclfc5wu3W5aQ4KZN9qHPmQri.jpg",
    },
    {
      id: 9,
      title: "Dawn Of The Planet Of The Apes",
      image: "https://picfiles.alphacoders.com/229/229657.jpg",
    },
    {
      id: 10,
      title: "John Wick: Chapter 4",
      image: "https://www.themoviedb.org/t/p/original/h34UytWk6nw91wDt2Ts3UYsRWqe.jpg",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const searchMovie = (query) => {
    setLoading(true);
    fetch(`http://www.omdbapi.com/?s=${query}&apikey=${import.meta.env.VITE_OMDB_API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Search) {
          setMovies(
            data.Search.map((movie) => ({
              id: movie.imdbID,
              title: movie.Title,
              image: movie.Poster,
            }))
          );
        } else {
          setMovies([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };
  

  return (
    <>
    <nav className="navbar" >
     <div className="container-fluid">
      <Header />
      <Search onSearch={searchMovie} />
     </div>
    </nav>
      <h1>Show your favorite Movies</h1>
      <div className="movie-list">
        {loading ? (
          <p>Loading...</p>
        ) : movies.length > 0 ? (
          movies.slice(0, 10).map((movie) => (
            <Movie key={movie.id} image={movie.image} title={movie.title} />
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </>
  );
}

export default App;
