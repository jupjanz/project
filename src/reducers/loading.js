import { LOADING } from '../actions/loading'

const initialState = {
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return {
                loading: action.loading
            }
        default:
            return state
    }
}