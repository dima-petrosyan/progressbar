import { combineReducers, createStore } from 'redux'
import progressReducer from './progressReducer.js'

const reducers = combineReducers({
	progress: progressReducer
})

const store = createStore(reducers)

export default store