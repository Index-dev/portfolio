import { IsetIsEndAction } from './actionInterface';
import { actions } from './actions';
import { setIsEnd } from './actionType';

export interface IinitState {
    isEnd: boolean;
}

const initState: IinitState = {
    isEnd: true,
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const initReducer = (state: IinitState = initState, action: actions) => {
    switch (action.type) {
        case setIsEnd: {
            return {
                ...state,
                isEnd: (action as IsetIsEndAction).payload,
            };
        }

        default: {
            return {
                ...state,
            };
        }
    }
};

export default initReducer;
