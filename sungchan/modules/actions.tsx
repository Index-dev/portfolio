import {
    setCurrentComponentNo,
    setIndexSubContainerTranslateX,
    setInnerWidth,
    setIsEnd,
    setIsPageChanging,
} from './actionType';
import {
    IsetCurrentComponentNoAction,
    IsetIndexSubContainerTranslateXAction,
    IsetInnerWidthAction,
    IsetIsEndAction,
    IsetIsPageChangingAction,
} from './actionInterface';

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

export const setInnerWidthAction = (res: number): IsetInnerWidthAction => {
    return {
        type: setInnerWidth,
        payload: res,
    };
};

export const setIndexSubContainerTranslateXAction = (res: number): IsetIndexSubContainerTranslateXAction => {
    return {
        type: setIndexSubContainerTranslateX,
        payload: res,
    };
};

export type actions =
    | IsetIsEndAction
    | IsetCurrentComponentNoAction
    | IsetIsPageChangingAction
    | IsetInnerWidthAction
    | IsetIndexSubContainerTranslateXAction;
