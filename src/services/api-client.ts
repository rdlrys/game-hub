import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'acb466d89f1246b5ab3056d6b84f2122'
    }
})