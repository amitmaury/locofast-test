import axios from 'axios';
const BASE_URL = "https://jsonplaceholder.typicode.com/";

export const getAllUsers = () => {

    return axios(BASE_URL + 'users', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        }
    })
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
};
export const getUserData = (id) => {

    return axios(BASE_URL + 'users/' + id, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        }
    })
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
};
