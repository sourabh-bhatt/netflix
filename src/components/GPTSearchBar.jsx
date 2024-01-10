import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/contansts";
import { addGptMovieResult } from "../utils/gptSlice";
import { useNavigate } from "react-router-dom";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const langKey = useSelector(store => store?.config?.lang);
  const searchText = useRef(null);

  // Fetching movie:
      const searchMovieTMDB = async(movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API_OPTIONS)

        const json = await data.json();

        return json.results;
      }

  const handleGPTSearchClick = async () => {


    try {
      const gptQuery = "Act as a movie recommendation system and suggest some movies for the query: " + searchText?.current?.value + " Only give me names of 5 movies, comma separated like the example result given ahead: Example Result: Rebel Moon: Part One - A Child of Fire, Wonka, Leave the World Behind, The Iron Claw , Maestro"

      const gptResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });

      if (!gptResults.choices || gptResults.choices.length === 0) {
        navigate('/browser/movieError');
        return;
      }


      console.log(gptResults.choices?.[0]?.message?.content);
      const gptMovies = gptResults.choices?.[0]?.message?.content.split(',')

      const promiseArrray =  gptMovies.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArrray)
      console.log(tmdbResults);

      
      dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}))      

    } catch (error) {
      console.error("Error occurred while fetching data from OpenAI:", error.message);
      navigate('/browse/movieError');
      return;
    }
  }

  return (

    <div className="pt-[39%] md:pt-[10%] flex justify-center">
      <form 
      onSubmit={(e) => e.preventDefault()} 
      className="bg-black w-full md:w-1/2 max-w-screen-lg grid grid-cols-1 lg:grid-cols-12 gap-4 border-2 border-green-500">
             <input
              type="text"
            className="p-3 md:p-4 col-span-12 lg:col-span-9"
            placeholder={lang[langKey]?.gptSearchPlaceholder || 'What would you like to see today!!'}
            ref={searchText}
          />
         <button onClick={handleGPTSearchClick} className="py-2 px-3 md:px-4 col-span-12 lg:col-span-3 bg-red-700 text-white rounded-lg mt-2 lg:mt-0">
            {lang[langKey]?.search}
            </button>
          </form>
    </div>


    // <div className="relative">
    //     <div className="pt-12 md:pt-20 lg:pt-32 flex justify-center absolute top-0 w-full z-10">
    //       <form onSubmit={(e) => e.preventDefault()} className="bg-black w-full lg:w-1/2 max-w-screen-lg grid grid-cols-1 lg:grid-cols-12 gap-4 border-2 border-green-500">
    //         <input
    //           type="text"
    //           className="p-3 md:p-4 col-span-12 lg:col-span-9"
    //           placeholder={lang[langKey]?.gptSearchPlaceholder || 'What would you like to see today!!'}
    //           ref={searchText}
    //         />
    //         <button onClick={handleGPTSearchClick} className="py-2 px-3 md:px-4 col-span-12 lg:col-span-3 bg-red-700 text-white rounded-lg mt-2 lg:mt-0">
    //           {lang[langKey]?.search}
    //         </button>
    //       </form>
    //     </div>
    // </div>
  );
};

export default GPTSearchBar;


// Testing error
// try {
//   const gptResults = await openai.chat.completions.create({
//     messages: [{ role: 'user', content: gptQuery }],
//     model: 'gpt-3.5-turbo',
//   });
  
//   if (!gptResults.choices) {
//     setError('No movie recommendations found. Please try again.');
//     return;
//   }
  
//   console.log(gptResults.choices?.[0]?.message?.content);
  
  
//   return Promise.reject(new Error('Simulated error occurred.'));

// } catch (error) {
//   console.error("Error occurred while fetching data from OpenAI:", error.message);
//   setError('An error occurred while fetching movie recommendations. Please try again later.');
// }