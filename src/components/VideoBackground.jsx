import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {

    // fetching trailer video and updating the store with trailer video data
    const trailerVideo = useSelector(store => store?.movies?.trailerVideo)

    // using custom hook for movie trailer

    useMovieTrailer(movieId);

    return (
        <>
            <iframe 
            width="560" 
            height="315" 
            src={"https://www.youtube.com/embed/" + trailerVideo?.key}
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            ></iframe>
        </>
    )
}

export default VideoBackground