import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { TMDB_API_OPTIONS } from '../app.constants'
import { addNowPlayingMovies } from '../utils/movieSlice'

const useNowPlayingMovies = () => {
  const dispatch = useDispatch()

  const nowPlayingMovies = useSelector(
    (store) => store?.movies?.nowPlayingMovies
  )

  const getNowPlayingMovies = useCallback(async () => {
    const data = await fetch(
      `${import.meta.env.VITE_TMDB_API_BASE_URL}/movie/now_playing?page=1`,
      TMDB_API_OPTIONS
    )
    const json = await data.json()
    dispatch(addNowPlayingMovies(json.results))
  }, [dispatch])

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies()
  }, [])
}

export default useNowPlayingMovies
