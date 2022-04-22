import axios from "axios";
import qs from "qs";

const defaultClient = {
    client: axios.create({
        baseURL: "https://jsonplaceholder.typicode.com",
        maxContentLength: 20000,
        timeout: 180000,
        headers: {
            "Content-Type": "application/json",
        },
        paramsSerializer: function(params) {
            return qs.stringify(params, { arrayFormat: "brackets" })
        }
    }),
    options: {
        interceptors: {
            request: [
                (_, req) => {
                    req.params = {
                        ...req.params
                    },
                    req.url = "https://jsonplaceholder.typicode.com" + req.url
                    return req
                }
            ],
            response: []
        }
    }
}

export default defaultClient