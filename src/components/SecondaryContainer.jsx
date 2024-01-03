import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {

    const movies = useSelector((store) => store?.movies);
    console.log(movies);
  return (
    <>
    movies.nowPlayingMovies && (
        <div className=" bg-black">
        <div className="-mt-52  relative z-20">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
        <MovieList title={"Now Trending"} movies={movies?.nowPlayingMovies}/>
        <MovieList title={"Now Showing"} movies={movies?.nowPlayingMovies}/>
        <MovieList title={"Famous"} movies={movies?.nowPlayingMovies}/>
        </div>
        </div>
    )
    </>
  )
}

export default SecondaryContainer