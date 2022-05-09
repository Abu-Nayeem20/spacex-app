import { configureStore } from '@reduxjs/toolkit'
import launchesReducer from './Slices/spaceSlice'

export const store = configureStore({
    reducer: {
      launches: launchesReducer,
    },
  })