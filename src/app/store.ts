import { configureStore } from '@reduxjs/toolkit'
import deleteReducer from '../features/deleteSlice'

export const store = configureStore({
  reducer: {
    delete: deleteReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>