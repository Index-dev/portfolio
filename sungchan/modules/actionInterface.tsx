import { setCurrentComponentNo, setIsEnd, setIsPageChanging } from './actionType';

// init
export interface IsetIsEndAction {
    type: typeof setIsEnd;
    payload: boolean;
}

// base
export interface IsetCurrentComponentNoAction {
    type: typeof setCurrentComponentNo;
    payload: number;
}

export interface IsetIsPageChangingAction {
    type: typeof setIsPageChanging;
    payload: boolean;
}
