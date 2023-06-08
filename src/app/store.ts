import { configureStore } from '@reduxjs/toolkit'
import deleteReducer from '../features/deleteSlice'
import productsReducer from '../features/productsSlice'

export const store = configureStore({
  reducer: {
    delete: deleteReducer,
    products: productsReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>