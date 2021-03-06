import { take, put, select, fork, race } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import store from '../store';

let TARGET_IDS = 0
let TIME_INTERVAL = 1000
let SPAWN_INTERVAL = 2000

function* targetLifeCycle(targetId) {
    while (true) {
        const plsStop = yield select(({ game }) => game.lives <= 0 || !game.isStarted)
        if (plsStop) {
            yield put({ type: 'DELETE_TARGET', id: targetId })
            break
        }
        const target = yield select(({ targets }) => targets.find(({ id }) => id === targetId))
        yield delay(TIME_INTERVAL)
        if (target.value === 0) {
            yield put({ type: 'DELETE_TARGET', id: targetId })
            break
        }
        else {
            yield put({ type: 'UPDATE_TARGET', id: targetId })
        }
    }
}

function* spawnTarget() {
    let id = TARGET_IDS
    yield put({ type: 'ADD_TARGET', payload: TARGET_IDS++})
    const { clicked } = yield race({
        clicked: take(action => action.type === 'CLICK_TILE' && action.id === id),
        timeout: targetLifeCycle(id)
    })
    if (clicked) {
        yield put({ type: 'DELETE_TARGET', id: id })
        yield put({ type: 'INC_SCORE' })
    }
    else {
        yield put({ type: 'LOSE_LIFE' })
    }
}

function* gameSaga() {
    while (true) {    
        yield take('GAME_START_REQUESTED')
        yield put({ type: 'GAME_START' })

        while (yield select(({ game }) => game.lives > 0)){
            yield delay(SPAWN_INTERVAL)
            yield fork(spawnTarget)
        }

        yield put ({type: 'GAME_END'})
    }
}

export default gameSaga