import { combineReducers } from 'redux';

const INITIAL_STATE = {
    usersData: [],
    isFetching: false,
    error: undefined
};

function getUsersDataReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'GET_USERS_LIST_REQUEST':
            return Object.assign({}, state, {
                isFetching: true
            });
        case 'GET_USERS_LIST_SUCCESS':
            return Object.assign({}, state, {
                isFetching: false,
                usersData: action.usersData
            });
        case 'GET_USERS_LIST_FAILURE':
            return Object.assign({}, state, {
                isFetching: false,
                error: action.error
            });
        default:
            return state;
    }
}

export default combineReducers({
    usersData: getUsersDataReducer
});