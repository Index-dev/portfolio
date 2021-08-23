import {
    setCurrentComponentNo,
    setIndexSubContainerTranslateX,
    setInnerWidth,
    setIsEnd,
    setIsPageChanging,
} from './actionType';

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

export interface IsetInnerWidthAction {
    type: typeof setInnerWidth;
    payload: number;
}

export interface IsetIndexSubContainerTranslateXAction {
    type: typeof setIndexSubContainerTranslateX;
    payload: number;
}
