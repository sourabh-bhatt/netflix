import { ALT_TEXT, LOGIN_BG } from '../app.constants'
import GPTMovieSuggestions from '../components/GPTMovieSuggestions'
import GPTSearchBar from '../components/GPTSearchBar'
import Header from '../components/Header'

const BrowsePage = () => {
  return (
    <>
      <Header />
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

export default BrowsePage
