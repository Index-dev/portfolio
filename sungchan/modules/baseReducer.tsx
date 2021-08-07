import { IsetCurrentComponentNoAction, IsetIsPageChangingAction } from './actionInterface';
import { actions } from './actions';
import { setCurrentComponentNo, setIsPageChanging } from './actionType';

export interface IbaseState {
    currentComponentNo: number;
    titleArray: string[];
    isPageChanging: boolean;
}

const baseState: IbaseState = {
    currentComponentNo: 0,
    titleArray: ['Main', 'Intro', 'Why It', 'Skills', 'Career', 'Projects', 'More'],
    isPageChanging: false,
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

        default: {
            return {
                ...state,
            };
        }
    }
};

export default baseReducer;
