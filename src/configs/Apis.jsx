import axios from "axios";

export let endpoints = {
    "register": "/users/",
    "oauth2-info": "/oauth2-info/",
    "login": "/o/token/",
    "current-user": "/users/current-user/",
}

export default axios.create({
    baseURL: "http://127.0.0.1:8000/"
})