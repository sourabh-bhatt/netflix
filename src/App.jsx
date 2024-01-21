import { Provider } from 'react-redux'

import Routes from './Routes'
import appStore from './store'

function App() {
  return (
    <Provider store={appStore}>
      <Routes />
    </Provider>
  )
}

export default App
