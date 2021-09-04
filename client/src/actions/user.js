/** All User Related actions */
import APIS from '../utils/apis';
import { PushTo, request } from '../utils/helper';

export const getCurrentUser = (payload) => {
    return (dispatch) => {
        dispatch({
            type: 'GET_USER_PROFILE',
            status: 0
        });
        request(APIS.getUser.url, {
            method: 'GET',
            headers: {}
        })
        .then(rs => {
            const result = rs?.response;
            if(rs.statusCode === 200) {
                dispatch({
                    type: 'SET_USER_PROFILE',
                    response: result,
                    status: 1
                });
            }
            if(rs.statusCode === 401) {
                dispatch({
                    type: 'SET_USER_PROFILE',
                    isError: true
                });
                localStorage.removeItem('auth_token');
                PushTo('/login');
            }
        })
        .catch(err => {
            dispatch({
                type: 'SET_USER_PROFILE',
                response: 'Oops Something bad happened',
                status: -1
            })
        })
    }
}
