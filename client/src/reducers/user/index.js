/* eslint-disable default-case */
/** User State Reducer */

const initialState = {
    user_info: {
        data: null,
        status: null
    },
    authState: {
        inProgress: false,
        isError: false,
        message: ''
    },
};

const types = {
    GET_USER_PROFILE: 'GET_USER_PROFILE',
    SET_USER_PROFILE: 'SET_USER_PROFILE',
    USER_AUTH: 'USER_AUTH',
    SET_USER_AUTH: 'SET_USER_AUTH',
    LOGOUT: 'LOGOUT'
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_USER_PROFILE: 
          return Object.assign({}, state, {
            user_info: {
                data: null,
                status: action.status,
            }
        });
        case types.SET_USER_PROFILE:
          return Object.assign({}, state, {
            user_info: {
                data: action.response,
                status: action.status,
            }
        })
        case types.USER_AUTH:
            return Object.assign({}, state, {
                authState: {
                    ...state.authState,
                    inProgress: true,
                    isError: false,
                }
            });
        case types.SET_USER_AUTH:
            return Object.assign({}, state, {
                authState: {
                    ...state.authState,
                    inProgress: false,
                    isError: action.isError,
                    message: action.message
                }
            });
        case types.LOGOUT:
            const stateReset = {
                user_info: {
                    data: null,
                    status: null
                },
                authState: {
                    inProgress: false,
                    isError: false,
                    message: ''
                },
            }
            return Object.assign({}, stateReset);
        default:
            return state;
    }   
 }

 export default userReducer;