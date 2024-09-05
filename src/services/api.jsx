import axios from "axios";

const baseUrl="https://mdb-server.onrender.com"


export const addMovie = async (data) => {
    return axios.post(`${baseUrl}/movies`,data)
}

export const getMovies = async () => {
    return await axios.get(`${baseUrl}/movies`)
}

export const dltMovie = async (id) => {
    return await axios.delete(`${baseUrl}/movies/${id}`)
}