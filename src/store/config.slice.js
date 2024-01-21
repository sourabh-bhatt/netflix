import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  lang: 'en',
}

const configSlice = createSlice({
  name: 'config',
  initialState: INITIAL_STATE,
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload
    },
  },
})

export const { changeLanguage } = configSlice.actions
export default configSlice.reducer
