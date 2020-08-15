import axios from 'axios';
const BASE_URL = "https://jsonplaceholder.typicode.com/";

export const getAllUsers = () => {

    return axios(`${process.env.REACT_APP_TEST_VAR}users`, {
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

    return axios(`${process.env.REACT_APP_TEST_VAR}users/${id}`, {
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
export const getUsersPost = (id) => {

    return axios(`${process.env.REACT_APP_TEST_VAR}posts?userId=${id}`, {
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
export const getUsersComments = (id) => {

    return axios(`${process.env.REACT_APP_TEST_VAR}comments?postId=${id}`, {
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
