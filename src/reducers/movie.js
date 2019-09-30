
import { LOADING } from '../actions/loading'

const initialState = {
    session_id: ""
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SESSION_ID:
            return {
                session_id: action.session
            }
        default:
            return state
    }
}