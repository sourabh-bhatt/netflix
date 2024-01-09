// GPTMovieSuggestions.jsx

import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store?.gpt);

  if (!movieNames || movieNames.length === 0) {
    return null;
  }

  return (
    
    
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
      { movieNames.map((movieName, index) => (<MovieList key={movieName} title={movieName} movies={movieResults[index]} />)) }
      </div>
    </div>
  
  );
};

export default GPTMovieSuggestions;

    // <div className="bg-gray-900 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg p-6 z-10"> 
    {/* <h2 className="text-3xl mb-4 text-center">Movie Suggestions</h2>
      <ul className="text-center">
        {movieNames.map((movieName, index) => (
          <li key={index} className="py-2" style={{ listStyle: 'none' }}>{movieName}</li>
        ))}
      </ul> */}
    // </div>