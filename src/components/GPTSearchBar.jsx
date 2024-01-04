import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GPTSearchBar = () => {

  const langKey = useSelector(store => store?.config?.lang)
  return (
    <div className="relative">
      <div className="pt-12 md:pt-20 lg:pt-32 flex justify-center absolute top-0 w-full z-10">
        <form className="bg-black w-full lg:w-1/2 max-w-screen-lg grid grid-cols-1 lg:grid-cols-12 gap-4 border-2 border-green-500">
          <input
            type="text"
            className="p-3 md:p-4 col-span-12 lg:col-span-9"
            placeholder={lang[langKey]?.gptSearchPlaceholder || 'What would you like to see today!!'}
          />
          <button className="py-2 px-3 md:px-4 col-span-12 lg:col-span-3 bg-red-700 text-white rounded-lg mt-2 lg:mt-0">
            {lang[langKey]?.search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GPTSearchBar;
