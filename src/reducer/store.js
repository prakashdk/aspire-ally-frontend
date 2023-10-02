import { configureStore } from '@reduxjs/toolkit'
import goalReducer from './reducer'

export default configureStore({
  reducer: { goalReducer },
})