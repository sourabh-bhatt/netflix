import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import Header from "./Header"

const Browse = () => {

  // Calling the custom hook

  useNowPlayingMovies();

  return (
    <Header/>
  )
}

export default Browse