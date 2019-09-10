import { ADD_USERS } from '../actions/index'

const initialState = {
    users: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_USERS:
            return {
                users: action.user
            }
            
            default : 
            return state
    }
}