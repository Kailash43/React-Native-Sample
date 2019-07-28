import {EMAIL_CHANGED,PASSWORD_CHANGED,LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, ON_LOADING} from './types';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux'

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }   
}

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}

// export const isLoggedIn = () => {
//     return () => {
//         firebase.auth().onAuthStateChanged((user) => {
//             if(user) {
//                 Actions.main()
//             } else {
//                 return  Actions.auth()
//             }
//         });
//     }
//     }

export const onLogin = ({email, password}) => {
    return (dispatch) => {
        dispatch({type: ON_LOADING});
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                user => onLoginUser(dispatch,user)
            )
            .catch(() => {
                
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(user => onLoginUser(dispatch,user))
                .catch(error => {
                    onLoginUserFail(dispatch, error)
                }   
                )
            });
    }
}

const onLoginUserFail = (dispatch, Error) => {
    dispatch({
        type: LOGIN_USER_FAILURE,
        payload: Error
    })
    
}

const onLoginUser = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    })
    Actions.main()
}