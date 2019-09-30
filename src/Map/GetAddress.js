import axios from 'axios'

const API_KEY = 'AIzaSyAThdp0jjkh6Fv6akKKIAesW8vbttDZHW0'

export const getAddress = async (location) => {
    try {
        const result = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location}&key=${API_KEY}`)
        return (
            result.data.results[0].formatted_address
        )
    } catch (error) {
        console.log(error)
    }
}