import {put, takeEvery, call} from 'redux-saga/effects';
import {FETCH_USERS, setUsersAction} from "../store/userReducer";


const fetchUsersApi = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=10')

function* fetchUsersWorker() {
    const data = yield call(fetchUsersApi)
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(setUsersAction(json))
}

export function* userWatcher() {
    yield takeEvery(FETCH_USERS, fetchUsersWorker)
}
