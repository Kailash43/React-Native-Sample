import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, ON_LOADING, LOGIN_USER_FAILURE } from '../Action/types';

initalState = {
    email: '',
    password: '',
    user: '',
    error: '',
    loading: false      
}

export default (state = initalState,action) => {
    console.log(action);
    switch(action.type){
        case EMAIL_CHANGED:
            return {
                ...state,
                email: action.payload
            }
        case PASSWORD_CHANGED:
            return {
                ...state,
                password: action.payload
            }
        case LOGIN_USER_SUCCESS:
                return {
                    ...state,
                    user: action.user,
                    loading:false
                }
        case ON_LOADING:
            return{
                ...state,
                loading: true,
                error: ''
            }
        case LOGIN_USER_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading:false,
                password: ''
            }
        default:
                return state
    }
}