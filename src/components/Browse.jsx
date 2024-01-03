import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  // Calling the custom hook

  useNowPlayingMovies();

  return (
    <>
    <Header/>
    <MainContainer/>
    <SecondaryContainer/>
    </>
  )
}

export default Browse