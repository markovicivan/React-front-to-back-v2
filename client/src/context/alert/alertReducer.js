import { SET_ALERT, REMOVE_ALERT } from '../types';

export default (state, action) => {
    switch (action.type) {
        case SET_ALERT:
            console.log('SET_ALERT');
            return [...state, action.payload];
        case REMOVE_ALERT:
            console.log('REMOVE_ALERT');
            return state.filter(alert => alert.id !== action.payload);
        default:
            console.log('default');
            return state;
    }
};