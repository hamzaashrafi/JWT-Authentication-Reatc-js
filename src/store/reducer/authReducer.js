import { type } from '../types'

let initialState = {
    user: {},
    isLogin: false,
    isUserExist: false,
}

function userReducer(user = initialState, action) {
    switch (action.type) {
        case type.AUTH_START:
            return { ...user, isLogin: true };
        case type.AUTH_SUCCESS:
            return { ...user, isLogin: false, isUserExist: true }
        case type.AUTH_FAILD:
            return { ...user, isLogin: false };

        case type.FETCH_USER_START:
            return { ...user, };
        case type.FETCH_USER_SUCCESS:
            return { ...user, isUserExist: true, user: action.user }
        case type.FETCH_USER_FAILD:
            return { ...user, };

        default:
            return user;
    }
}

export default userReducer;