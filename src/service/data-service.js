import axios from "axios";

export function getEpisodes() {
    return axios.get("https://three-points.herokuapp.com/api", {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` }
    })
        .then((res) => res.data)
}

export function login(username, password) {
    return axios.post("https://three-points.herokuapp.com/api/login", { username, password })
        .then((res) => res.data)
}