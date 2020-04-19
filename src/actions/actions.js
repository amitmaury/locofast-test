import * as UsersService from '../services/users.service';

export function getUsersList() {
    return function (dispatch) {
        dispatch({
            type: 'GET_USERS_LIST_REQUEST'
        });
        return UsersService.getAllUsers()
            .then((res) => {
                dispatch({
                    type: 'GET_USERS_LIST_SUCCESS',
                    usersData: res
                });
            })
            .catch((err) => {
                dispatch({
                    type: 'GET_USERS_LIST_FAILURE',
                    error: err
                });
            })
    }
}