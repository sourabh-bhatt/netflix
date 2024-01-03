import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"

const MainContainer = () => {

    const movies = useSelector(store => store?.movies?.nowPlayingMovies)

    // early return 

    if(movies === null) return;  // if(!movies) return;

    const mainMovie = movies[0];
    console.log(mainMovie);

    // Creating video title

    const {original_title, overview} = mainMovie;
    

  return (
    <>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground/>
    </>
  )
}

export default MainContainer