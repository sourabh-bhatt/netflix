import { LOGIN_BG, ALT_TEXT } from '../app.constants'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import GPTSearchBar from './GPTSearchBar'

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen w-full object-cover fixed"
          src={LOGIN_BG}
          alt={ALT_TEXT}
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
