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
        <MovieList title={"Trending Movies"} movies={movies?.nowPlayingMovies}/>
        <MovieList title={"Popular Movies"} movies={movies?.popularMovies}/>
        <MovieList title={"Upcoming Movies"} movies={movies?.nowPlayingMovies}/>
        <MovieList title={"Horror Movies"} movies={movies?.nowPlayingMovies}/>

        </div>
        </div>
    )
    </>
  )
}

export default SecondaryContainer