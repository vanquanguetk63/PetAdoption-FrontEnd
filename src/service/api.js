import axios from "axios";
import { message } from "antd";
export const api = {
    get: (api, params) => {
        return axios
            .get(api, {
                params: params,
            })
            .then(function (response) {
                console.log(response.status, response.statusText);
                console.log(response.data.data.records);
                return response.data.data.records;
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
            .get(api, {
                params: params,
            })
            .then(function (response) {
                console.log(response.status, response.statusText);
                console.log(response.data.data.records);
                return response.data.data.records;
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
    put: (api, params) => {
        return axios
            .get(api, {
                params: params,
            })
            .then(function (response) {
                console.log(response.status, response.statusText);
                console.log(response.data.data.records);
                return response.data.data.records;
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
    delete: (api, params) => {
        return axios
            .get(api, {
                params: params,
            })
            .then(function (response) {
                console.log(response.status, response.statusText);
                console.log(response.data.data.records);
                return response.data.data.records;
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
};
