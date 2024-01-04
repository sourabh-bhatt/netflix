import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {

    // fetching trailer video and updating the store with trailer video data
    const trailerVideo = useSelector(store => store?.movies?.trailerVideo)

    // using custom hook for movie trailer

    useMovieTrailer(movieId);

    return (
        <>
            <div className="w-full h-full aspect-video ">
                <iframe
                    className="w-screen aspect-video"
                    width="100%" 
    height="100%"
                    src={"https://www.youtube.com/embed/" + trailerVideo?.key + '?&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0'}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>

            </div>

            {/* <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
                <div className="absolute border-2  border-green-500 top-0 left-0 w-full h-12 bg-white z-10 opacity-50"></div>
                <iframe
                    className=" absolute top-0 left-0 border-2 border-green-500 w-full h-full"
                    src={"https://www.youtube.com/embed/" + trailerVideo?.key + '?&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0'}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
            </div> */}

        </>
    )
}

export default VideoBackground

