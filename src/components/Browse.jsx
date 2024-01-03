import { API_OPTIONS } from "../utils/contansts"
import Header from "./Header"
import { useEffect } from "react";

const Browse = () => {

  // Calling API

  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);

    const json = await data.json();
    console.log(json.results);  
  }

  useEffect(()=>{
    getNowPlayingMovies();
  },[])


  return (
    <Header/>
  )
}

export default Browse