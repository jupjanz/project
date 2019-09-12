import axios from 'axios'
import {loading} from './loading'
export const ADD_USERS = 'ADD_USERS'
export const ADD_ALBUMS = 'ADD_ALBUMS'
export const ADD_TODOS = 'ADD_TODOS'
export const ADD_POSTS = 'ADD_POSTS'

export const addUsers = () => async dispatch => {
    try {
        dispatch(loading(true))
        const result = await axios.get('https://jsonplaceholder.typicode.com/users')
        dispatch({
            type: ADD_USERS,
            users: result.data
        })
        dispatch(loading(false))
    } catch (error) {
        console.log(error)
    }
}

export const addAlbums = (userId) => async dispatch => {
    try {
        dispatch(loading(true))
        const result = await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
        dispatch({
            type: ADD_ALBUMS,
            albums: result.data
        })
        dispatch(loading(false))
    } catch (error) {
        console.log(error)
    }
}

export const addTodos = (userId) => async dispatch => {
    try {
        dispatch(loading(true))
        const result = await axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
        dispatch({
            type: ADD_TODOS,
            todos: result.data
        })
        dispatch(loading(false))
    }catch (error) {
        console.log(error)
    }
}

export const addPosts = (userId) => async dispatch => {
    try {
        dispatch(loading(true))
        const result = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        dispatch({
            type : ADD_POSTS,
            posts: result.data
        })
        dispatch(loading(false))
    }catch (error) {
        console.log(error)
    }
}