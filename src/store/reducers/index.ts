import { combineReducers } from 'redux';

import slice from './slice';

const applicationReducer = combineReducers({
    user: slice,
});
const rootReducers = (state: any, action: any) => {
    return applicationReducer(state, action);
};

export default rootReducers;
