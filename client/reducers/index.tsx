import {ReducersMapObject } from 'redux';
import count from '../reducers/count';

export const reducers: ReducersMapObject = { 
    count: count
};
console.log("reducers exported");