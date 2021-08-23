import { combineReducers } from 'redux';
import initReducer, { IinitState } from './initReducer';
import baseReducer, { IbaseState } from './baseReducer';

export interface indexState {
    initReducer: IinitState;
    baseReducer: IbaseState;
}

const indexReducer = combineReducers({
    initReducer,
    baseReducer,
});

export default indexReducer;
