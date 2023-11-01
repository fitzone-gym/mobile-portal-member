import axios from "axios"

// const baseURL = "https://fitzone-api-98e9a005d7bf.herokuapp.com"
// const baseURL = "http://localhost:5400"
const baseURL = "http://192.168.52.140:5400"

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",

    },
})

export default axiosInstance