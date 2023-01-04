import { all } from 'redux-saga/effects';

import { watchUser } from './userSaga';

export function* rootSaga() {
    yield all([watchUser()]);
}
