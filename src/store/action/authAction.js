import { type } from '../types';
import { setStorage } from '../../helper';
import { httpRequst } from '../../config';
import { message } from 'antd';
import history from '../../history';

export const fetchUser = (payload) => (dispatch) => {
    dispatch({ type: type.FETCH_USER_START });
    console.log("START FETCH");
    httpRequst.get('/fetchuser', { headers: { Authorization: `${payload.token}` } })
        .then(response => {
            if (response.data.user) {
                const user = response.data.user;
                dispatch({ type: type.FETCH_USER_SUCCESS, user });
                console.log("FETCH COMPELET");
            } else {
                dispatch({ type: type.FETCH_USER_FAILD });
                message.error(response.data.message || 'Somthing Went Wrong');
            }
        }).catch(error => {
            dispatch({ type: type.FETCH_USER_FAILD });
            console.log(error);
        });
};


export const loginUser = (payload) => (dispatch) => {
    console.log(payload);
    dispatch({ type: type.AUTH_START });
    httpRequst.post('/login', payload)
        .then(response => {
            console.log(response);
            if (response.data) {
                if (response.data.code) {
                    message.error(response.data.messege);
                    dispatch({ type: type.AUTH_FAILD });
                } else {
                    message.success(response.data.messege);
                    setStorage('token', response.data.token);
                    dispatch({ type: type.AUTH_SUCCESS });
                }
            } else {
                dispatch({ type: type.AUTH_FAILD });
                message.error('Something went wrong');
            }
        }).catch(error => {
            message.error(error.messege ? error.messege : 'Prosess Failed');
            dispatch({ type: type.AUTH_FAILD });
        });
};

export const createUser = (payload) => (dispatch) => {
    console.log(payload);
    dispatch({ type: type.CREATE_USER_START });
    httpRequst.post('/createuser', payload)
        .then(response => {
            console.log(response);
            if (response.data) {
                if (response.data.code) {
                    message.error(response.data.messege);
                    dispatch({ type: type.CREATE_USER_FAILD });
                } else {
                    const token = { token: response.data.token };
                    message.success(response.data.messege);
                    setStorage('token', response.data.token);
                    dispatch({ type: type.CREATE_USER_SUCCESS });
                    dispatch(fetchUser(token));
                    history.push('/');
                }
            } else {
                dispatch({ type: type.CREATE_USER_FAILD });
                message.error('Something went wrong');
            }
        }).catch(error => {
            message.error(error.messege ? error.messege : 'Prosess Failed');
            dispatch({ type: type.CREATE_USER_FAILD });
        });
};



