
import Movie from '../components/Movie';
import React from "react";
import logo from '../logo.svg';
import styles from "./Home.module.css";

function Home() {

    const getMovies = async() =>{
        const jsonData = await ( await fetch('https://yts.mx/api/v2/list_movies.json')).json();
        console.log(jsonData);
        setMovies(jsonData.data.movies);
        setMoviesCount(jsonData.data.movie_count);
    }

    const [loading, setLoading] = React.useState(true);
    const [movies, setMovies] = React.useState([]);
    const [moviesCount, setMoviesCount] = React.useState([]);

    React.useEffect( () => {
    setTimeout(() => {
        setLoading(false);
        getMovies();
    }, 500);
    }, []);
    
    return (
        <div className={styles.container}>
        { loading ? 
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> Edit <code>src/App.js</code> and save to reload. this is a Loading...</p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" > Learn React</a>
        </header> : null
        } 
        <main className={styles.movies}>
          <h1>Movie List ({moviesCount})</h1>
          <div>
              { movies.map((movie) => (
                  <Movie id={movie.id} title={movie.title} image={movie.medium_cover_image} summary={movie.summary} genres={movie.genres} />
                ))
              }
           </div>
        </main>
      </div>
  );
}

export default Home;