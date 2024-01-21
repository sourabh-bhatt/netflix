import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { TMDB_API_OPTIONS } from '../app.constants'
import { addTrailerVideo } from '../utils/movieSlice'

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch()

  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo)

  const getMovieVideos = async () => {
    const data = await fetch(
      `${import.meta.env.VITE_TMDB_API_BASE_URL}/movie/${movieId}/videos?language=en-US`,
      TMDB_API_OPTIONS
    )
    const json = await data.json()

    const filterData = json.results.filter((video) => video.type === 'Trailer')
    const trailer = filterData.length ? filterData[0] : json.results[0]
    dispatch(addTrailerVideo(trailer))
  }

  useEffect(() => {
    !trailerVideo && getMovieVideos()
  }, [])
}

export default useMovieTrailer
