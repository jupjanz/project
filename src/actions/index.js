import axios from 'axios'
export const ADD_USERS = 'ADD_USERS'
export const ADD_ALBUMS = 'ADD_ALBUMS'

export const addUsers = () => async dispatch => {
    try {
        const result = await axios.get('https://jsonplaceholder.typicode.com/users')
        dispatch({
            type: ADD_USERS,
            users: result.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const addAlbums = (userId) => async dispatch => {
    console.log(userId)
    try {
        const result = await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
        dispatch({
            type: ADD_ALBUMS,
            albums: result.data
        })
    } catch (error) {
        console.log(error)
    }
}