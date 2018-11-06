import { USER_LOGIN_FAILED, USER_LOGIN_SUCCESSFUL, USER_LOGGED_OUT} from '../actions/social-signin-action';
let INITIALSTATE = {
    'email': '',
    'photoURL': '',
    'displayName': '',
    'uid': ''
};

export default function (state = {}, action) {
    console.log(action)
    switch (action.type) {
        case USER_LOGIN_SUCCESSFUL:
            INITIALSTATE = action.payload;
            state = { ...INITIALSTATE };
            return state;
        case USER_LOGIN_FAILED:
            INITIALSTATE.error  = action.payload;
            state = { ...INITIALSTATE };
            return state;
        case USER_LOGGED_OUT:
            INITIALSTATE = {
                'email': '',
                'photoURL': '',
                'displayName': '',
                'uid': ''
            };
            state = { ...INITIALSTATE };
            return state;
        default:
            return state;
    }
}