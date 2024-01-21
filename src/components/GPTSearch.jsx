import { LOGIN_BG, altText } from '../app.constants'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import GPTSearchBar from './GPTSearchBar'

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen w-full object-cover fixed"
          src={LOGIN_BG}
          alt={altText}
        />
      </div>
      <div>
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>
    </>
  )
}

export default GPTSearch
