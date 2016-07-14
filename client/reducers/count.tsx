import * as ActionTypes from '../consts/ActionTypes';
import {INCREASE, DECREASE} from '../consts/ActionTypes';

const initialState = {
    number: 1
}

export default function update(state = initialState, action: any) {
    if(action.type === INCREASE) {
        return {number: state.number + action.amount}
    } else if(action.type === DECREASE) {
        return {number: state.number - action.number}
    }
    return state;
}