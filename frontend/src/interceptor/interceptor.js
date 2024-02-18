import axios from 'axios';

axios.interceptors.request.use(function (config) {
    config.headers.common['Access-Control-Allow-Origin'] = "https://crud-react-redux-tawny.vercel.app"
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});
