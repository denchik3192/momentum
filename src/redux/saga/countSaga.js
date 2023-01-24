import {put, takeEvery, call} from "redux-saga/effects"
import { ASYNC_ADD_SETTINGS,toggleSettingAction } from "../reducers/settings-reducer"

const deley = (ms) => new Promise(res => setTimeout(res, ms))

function* incrementWorker() {
    yield deley(1000)
    yield put(toggleSettingAction())
    
}

function* decrementWorker() {

}

function* fetchUsersWorker() {

}

export function* countWatcher() {
    yield takeEvery(ASYNC_ADD_SETTINGS, incrementWorker )

}