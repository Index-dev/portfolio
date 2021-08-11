import { IsetCurrentComponentNoAction, IsetIsPageChangingAction } from './actionInterface';
import { actions } from './actions';
import { setCurrentComponentNo, setIsPageChanging } from './actionType';

export interface IbaseState {
    currentComponentNo: number;
    titleArray: string[];
    backgroundColorArray: string[];
    isPageChanging: boolean;
}

const baseState: IbaseState = {
    currentComponentNo: 0,
    titleArray: ['Main', 'Intro', 'Why It', 'Skills', 'Career', 'Projects', 'More'],
    backgroundColorArray: ['#757270', '#A5BAA8', '#6A9194', '#b79e6a', '#c68377', '#648ab9', '#C4E3D2'],
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
