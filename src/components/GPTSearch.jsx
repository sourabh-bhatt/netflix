import { LOGIN_BG, altText } from "../utils/contansts"
import GPTMovieSuggestions from "./GPTMovieSuggestions"
import GPTSearchBar from "./GPTSearchBar"

const GPTSearch = () => {
  return (
    <>
        <h1>
        <div className="-z-10" style={{ position: 'absolute', top: 0, left: 0 }}>
                <img
                    src={LOGIN_BG} alt={altText}
                    style={{ width: '100%', height: '100%' }}
                />
            </div>
            <GPTSearchBar/>
            <GPTMovieSuggestions/>
        </h1>
    </>
  )
}

export default GPTSearch