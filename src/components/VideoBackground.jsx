import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {

    // fetching trailer video and updating the store with trailer video data
    const trailerVideo = useSelector(store => store?.movies?.trailerVideo)

    // using custom hook for movie trailer

    useMovieTrailer(movieId);

    return (
        <>
        <div className="w-screen">
            <iframe 
            className="w-screen aspect-video" 
            src={"https://www.youtube.com/embed/" + trailerVideo?.key + '?&autoplay=1&mute=1&controls=0&showinfo=0'}
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            ></iframe>
        </div>
        </>
    )
}

export default VideoBackground

