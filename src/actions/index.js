import axios from 'axios'
export const ADD_USERS = 'ADD_USERS'

export const addUsers = () => async dispatch => {
    try {
        const result = await axios.get('https://jsonplaceholder.typicode.com/users')
        return ({
            type : ADD_USERS,
            user : result
        })
    } catch (error) {
        console.log(error)
    }
}