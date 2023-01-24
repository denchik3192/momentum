import {put, takeEvery, call} from "redux-saga/effects"
import {  FETCH_USERS, fetchUsers, setUsers } from "../reducers/settings-reducer"

const fetchUsersFromApi = () => fetch('url')

function* fetchUsersWorker() {
    const data = yield call(fetchUsersFromApi)
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(setUsers(json))

}

export function* usersWatcher() {
    yield takeEvery(FETCH_USERS, fetchUsers )

}