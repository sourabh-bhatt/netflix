// GPTMovieSuggestions.jsx

import { useSelector } from "react-redux";

const GPTMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store?.gpt);

  if (!movieNames || movieNames.length === 0) {
    return null;
  }

  return (
    <div className="bg-gray-900 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg p-6 z-10"> {/* Centered card styling */}
      <h2 className="text-3xl mb-4 text-center">Movie Suggestions</h2>
      <ul className="text-center">
        {movieNames.map((movieName, index) => (
          <li key={index} className="py-2" style={{ listStyle: 'none' }}>{movieName}</li>
        ))}
      </ul>
    </div>
  );
};

export default GPTMovieSuggestions;
