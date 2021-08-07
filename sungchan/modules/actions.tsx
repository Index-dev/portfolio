import { setCurrentComponentNo, setIsEnd, setIsPageChanging } from './actionType';
import { IsetCurrentComponentNoAction, IsetIsEndAction, IsetIsPageChangingAction } from './actionInterface';

// init
export const setIsEndAction = (res: boolean): IsetIsEndAction => {
    return {
        type: setIsEnd,
        payload: res,
    };
};

// base
export const setCurrentComponentNoAction = (res: number): IsetCurrentComponentNoAction => {
    return {
        type: setCurrentComponentNo,
        payload: res,
    };
};

export const setIsPageChangingAction = (res: boolean): IsetIsPageChangingAction => {
    return {
        type: setIsPageChanging,
        payload: res,
    };
};

export type actions = IsetIsEndAction | IsetCurrentComponentNoAction | IsetIsPageChangingAction;
