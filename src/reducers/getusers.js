import { ADD_USERS,ADD_ALBUMS } from '../actions/index'

const initialState = {
    users: [],
    albums: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_USERS:
            return {
                ...state,
                users : action.users
            }
        case ADD_ALBUMS:
            return {
                ...state,
                albums : action.albums
            }
            default : 
            return state
    }
}
