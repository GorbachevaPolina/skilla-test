import { combineReducers } from 'redux'
import { filterReducer } from './table-contents'

export const rootReducer = combineReducers({
    table: filterReducer
})