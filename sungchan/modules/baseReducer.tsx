import {
    IsetCurrentComponentNoAction,
    IsetIndexSubContainerTranslateXAction,
    IsetInnerWidthAction,
    IsetIsPageChangingAction,
} from './actionInterface';
import { actions } from './actions';
import { setCurrentComponentNo, setIndexSubContainerTranslateX, setInnerWidth, setIsPageChanging } from './actionType';

export interface IbaseState {
    currentComponentNo: number;
    titleArray: string[];
    backgroundColorArray: string[];
    isPageChanging: boolean;
    innerWidth: number;
    indexSubContainerTranslateX: number;
}

const baseState: IbaseState = {
    currentComponentNo: 0,
    titleArray: ['Cover', 'Intro', 'Why It', 'Skills', 'Career', 'Projects', 'More'],
    backgroundColorArray: ['#E3D0B9', '#E1BC91', '#C19277', '#62959C', '#C19277', '#E1BC91', '#E3D0B9'],
    isPageChanging: false,
    innerWidth: 0,
    indexSubContainerTranslateX: 0,
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const baseReducer = (state: IbaseState = baseState, action: actions) => {
    switch (action.type) {
        case setCurrentComponentNo: {
            return {
                ...state,
                currentComponentNo: (action as IsetCurrentComponentNoAction).payload,
            };
        }

        case setIsPageChanging: {
            return {
                ...state,
                isPageChanging: (action as IsetIsPageChangingAction).payload,
            };
        }

        case setInnerWidth: {
            return {
                ...state,
                innerWidth: (action as IsetInnerWidthAction).payload,
            };
        }

        case setIndexSubContainerTranslateX: {
            return {
                ...state,
                indexSubContainerTranslateX: (action as IsetIndexSubContainerTranslateXAction).payload,
            };
        }

        default: {
            return {
                ...state,
            };
        }
    }
};

export default baseReducer;
