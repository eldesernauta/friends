import axios from "axios";

export function getEpisodes() {
    return axios.get("https://three-points.herokuapp.com/api", {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` }
    })
        .then((response) => response.data)
}

export function getEpisode(id) {
    return axios.get(`http://localhost:3000/episodes/${id}`, {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` }
    }).then((response) => response.data)
}

export function login(username, password) {
    return axios.post("https://three-points.herokuapp.com/api/login", { username, password })
        .then((response) => response.data)
}