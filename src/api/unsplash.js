import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers:{

        Authorization: "Client-ID TcbeKJhtst4wxwB5XsIXBEhmvwv9vjUSZwfMdKA02tI"
    }
})