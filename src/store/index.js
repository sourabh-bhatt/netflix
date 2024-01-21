import { configureStore } from '@reduxjs/toolkit'

import configReducer from './config.slice'
import gptReducer from './gpt.slice'
import movieReducer from './movie.slice'
import userReducer from './user.slice'

const appStore = configureStore({
  reducer: {
    config: configReducer,
    gpt: gptReducer,
    movies: movieReducer,
    user: userReducer,
  },
})

export default appStore
