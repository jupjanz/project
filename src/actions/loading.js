export const LOADING = 'LOADING'

export const loading = (status) => dispatch => {
    dispatch({
        type : LOADING,
        loading : status
    })
}