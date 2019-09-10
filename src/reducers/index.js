import { combineReducers } from 'redux'
import users from './getusers'

export const reducer = combineReducers({
    users,
})

export default reducer