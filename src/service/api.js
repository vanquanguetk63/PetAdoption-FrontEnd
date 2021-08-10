import axios from "axios";
import { message } from "antd";
export const api = {
    get: (api, params) => {
        return axios
            .get(api, {
                params: params,
            })
            .then(function (response) {
                return response.data;
            })
            .catch((error) => {
                if (error.response) {
                    message.error(error.message);
                } else if (error.request) {
                    message.error(error.message);
                } else {
                    message.error(error.message);
                }
            });
    },
    post: (api, params) => {
        return axios
            .post(api, {
                params: params,
            })
            
    },
    
};
