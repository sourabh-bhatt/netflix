import { useEffect } from "react";
import { API_OPTIONS } from "../utils/contansts"
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = () => {

    const dispatch = useDispatch();
    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/848326/videos?language=en-US', API_OPTIONS)
        const json = await data.json();
        console.log(json);

        // Finding Trailor

        const filterData = json.results.filter(video => video.type === 'Trailer')
        const trailer = filterData.length ? filterData[0] : json.results[0]
        console.log(trailer);
        dispatch(addTrailerVideo(trailer))
    }

    useEffect(() => {
        getMovieVideos()
    }, [])
}

export default useMovieTrailer;