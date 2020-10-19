import * as constants from '../constants';

export const initialState = {
    email : '',
    password : '',
    emailError : '',
    passwordError : '',
    isConnected : false,
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case constants.EMAIL_CHANGE:
            var testemail;
            console.log(constants.EMAIL_REGEX.test(state.email))
            if(!constants.EMAIL_REGEX.test(state.email)){
                testemail = 'Email invalide';
            }else{
                testemail = '';
            }
            return { 
                ...state,
                email : action.payload,
                emailError : testemail,
            };
        case constants.PASSWORD_CHANGE:
            var testpassword;
            console.log(constants.PASSWORD_REGEX.test(state.password))
            if(state.password.length < 8){
                testpassword = 'Au moins 8 caractères';
            }
            else{
                if(!constants.PASSWORD_REGEX.test(state.password)){
                    testpassword = 'au moin une lettre et un chiffre';
                }
                else{
                    testpassword = '';
                }
            }
            return { 
                ...state,
                password : action.payload,
                passwordError : testpassword,
            };
        case constants.TRY_LOGIN:
            return { 
                ...state,
                isConnected : action.payload,
            };
                         
        default:
            return state;
    }
}