import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  // Calling the custom hook

  useNowPlayingMovies();
  usePopularMovies();

  return (
    <>
    <Header/>
    <MainContainer/>
    <SecondaryContainer/>
    </>
  )
}

export default Browse