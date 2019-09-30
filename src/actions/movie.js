import axios from 'axios'
const SAVE_SESSIONID = 'SAVE_SESSIONID '

export const getSession = async (apikey) => {
    const result = await axios.get(`https://api.themoviedb.org/3/authentication/token/new?api_key=${apikey}`)
    if(result.data.success !== true) {
        return alert('ไม่สำเร็จ')
    }
    return result.data
}

export const saveSessionId = (session) => dispatch => {
    return ({
        type : SAVE_SESSIONID,
        session
    })
}

export const getMovie = async (apikey,keyword) => {
    const result = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=${keyword}`)
    if(result.data == null) {
        return null
    }
    return result.data
}