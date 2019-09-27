// creates redux store

import { initialState, view, userData } from './reducers'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  form:formReducer, userData, view
})

const store = createStore(rootReducer, initialState)

export default store