import { ADD_USERS,ADD_ALBUMS,ADD_TODOS,ADD_POSTS } from '../actions/index'

const initialState = {
    users: [],
    albums: [],
    todos: [],
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
        case ADD_TODOS:
            return {
                ...state,
                todos : action.todos
            }
        case ADD_POSTS:
            return {
                ...state,
                posts : action.posts
            }
            default : 
            return state
    }
}
