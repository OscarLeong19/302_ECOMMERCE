import { ORDER_SUCCESS, ORDER_SUCCESS_WITH_GUSET_USER, ORDER_FAIL } from '../constants';

export default (state, action) => {
    switch (action.type) {
        case ORDER_SUCCESS:
            return {
                detial: action.payload,
            };
        case ORDER_SUCCESS_WITH_GUSET_USER:
            return {
                detial: action.payload,
            };
        case ORDER_FAIL:
            return {
                detial: action.payload,
            };
        default:
            return {
                ...state,
            };
    }
};
