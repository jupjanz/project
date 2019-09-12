import { combineReducers } from 'redux'
import getusers from './getusers'
import loading from './loading'

export const reducer = combineReducers({
    getusers,
    loading
})

export default reducer