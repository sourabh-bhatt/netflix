import { LOGIN_BG, altText } from "../utils/contansts"
import GPTMovieSuggestions from "./GPTMovieSuggestions"
import GPTSearchBar from "./GPTSearchBar"

const GPTSearch = () => {

  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen w-full object-cover fixed" src={LOGIN_BG} alt={altText} />
      </div>
      {/* pt-[30] md:p-0 */}
      <div className=""> 
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>

    </>
  )
}

export default GPTSearch
