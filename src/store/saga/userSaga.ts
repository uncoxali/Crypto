import { server } from 'apis/server';
import { call, put, takeEvery } from 'redux-saga/effects';
import { addUser, getUsersSlice } from 'store/reducers/slice';
import { GET_USERS, GET_USERS_ID } from 'store/types';

interface typePropsUserId {
    type: string;
    paylod: number;
}

export function* getUsersSaga(): any {
    const users: any = yield server.getUser();
    yield put(getUsersSlice(users.data));
}

export function* getUsersSagaId(action: typePropsUserId): any {
    const user = yield call(server.getUserById, action.paylod);
    yield put(addUser(user.data));
}

export function* watchUser() {
    yield takeEvery(GET_USERS, getUsersSaga);
    yield takeEvery(GET_USERS_ID, getUsersSagaId);
}
