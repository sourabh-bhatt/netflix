import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";

const GPTSearchBar = () => {

  const langKey = useSelector(store => store?.config?.lang)

  const searchText = useRef(null);

  const handleGPTSearchClick = async () => {
    console.log(searchText?.current?.value);

    const gptQuery = "Act as a movie recommendation system and suggest some movies for the query: " + searchText?.current?.value + " Only give me names of 5 movies, comma seperated like the example result given ahead: Example Result: Rebel Moon: Part One - A Child of Fire, Wonka, Leave the World Behind, The Iron Claw , Maestro"

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    console.log(gptResults.choices);
  }

  return (
    <div className="relative">
      <div className="pt-12 md:pt-20 lg:pt-32 flex justify-center absolute top-0 w-full z-10">
        <form onSubmit={(e) => e.preventDefault()} className="bg-black w-full lg:w-1/2 max-w-screen-lg grid grid-cols-1 lg:grid-cols-12 gap-4 border-2 border-green-500">
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
    </div>
  );
};

export default GPTSearchBar;
