import { ORDER_SUCCESS, ORDER_SUCCESS_WITH_GUSET_USER, ORDER_FAIL } from '../constants';
import axios from 'axios';
export const createOrder = (bodyFormData) => async (dispatch, getState) => {
    try {
        const token = JSON.parse(localStorage.getItem('userdata')).userToken;
        try {
            const { data } = await axios({
                method: 'POST',
                url: 'http://127.0.0.1:5000/api/order/create-order',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                data: bodyFormData,
            });
            console.log(data);
            dispatch({
                type: ORDER_SUCCESS,
            });
        } catch (e) {
            dispatch({
                type: ORDER_FAIL,
                payload: e.message,
            });
        }
    } catch (e) {
        try {
            const { data } = await axios({
                method: 'POST',
                url: 'http://127.0.0.1:5000/api/order/create-order',
                data: bodyFormData,
            });
            console.log(data);
            dispatch({
                type: ORDER_SUCCESS_WITH_GUSET_USER,
            });
        } catch (e) {
            dispatch({
                type: ORDER_FAIL,
                payload: e.message,
            });
        }
    }
};
