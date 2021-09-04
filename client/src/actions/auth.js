/** All Auth Related actions */
import APIS from '../utils/apis';
import { request, PushTo } from '../utils/helper'
import toast, { useToasterStore } from 'react-hot-toast';



export const login = (payload) => {
    return (dispatch) => {
        dispatch({
            type: 'USER_AUTH',
        });
        request(APIS.login.url, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(payload)   
        })
        .then(rs => {
            if(rs.statusCode === 200) {
                dispatch({
                    type: 'SET_USER_AUTH',
                    isError: false,
                    message: 'Successfully Logged in'
                });
    
                const result = rs?.response;
                localStorage.setItem('auth_token', result.token);
                toast.success('Logged In')
                PushTo('/')
            } else {
                dispatch({
                    type: 'SET_USER_AUTH',
                    isError: true,
                    message: rs.message
                })
            }
        })
        .catch(err => {
            console.log({err});
            const message = err?.response?.data?.response || 'Oops Something bad happened';
            dispatch({
                type: 'SET_USER_AUTH',
                message,
                isError: true,
            })
        })
    }
}

export const register = (payload) => {
    return (dispatch) => {
        dispatch({
            type: 'USER_AUTH',
        });
        request(APIS.signUp.url, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(payload)   
        })
        .then(rs => {
            console.log({rs});
            if(rs.statusCode === 200) {
                dispatch({
                    type: 'SET_USER_AUTH',
                    isError: false,
                    message: 'Successfully Registered in'
                });
    
                const result = rs?.response;
                console.log({result})
                localStorage.setItem('auth_token', result.token);
                toast.success('Successfully registered!')
                PushTo('/');
            }
            else {
                dispatch({
                    type: 'SET_USER_AUTH',
                    isError: true,
                    message: rs.message
                })
            }
        })
        .catch(err => {
            console.log({err});
            const message = err?.response?.data?.response || 'Oops Something bad happened';
            dispatch({
                type: 'SET_USER_AUTH',
                message,
                isError: true,
            })
        })
    }
}

export const resetState = () => {
    return (dispatch) => {
        dispatch({
            type: 'USER_AUTH',
        });
    }
}

export const logOut = () => {
    return (dispatch) => {
        dispatch({
            type: 'LOGOUT'
        })
        dispatch({
            type: "RESET"
        });

        localStorage.clear();
        PushTo('/login');
    }
}