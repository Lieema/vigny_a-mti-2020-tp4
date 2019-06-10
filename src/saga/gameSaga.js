import { take, put } from 'redux-saga/effects'


function* gameSaga() {
    yield take('GAME_START_REQUESTED')

    console.log('game started !')

    yield put({ type: 'GAME_START' })
}

export default gameSaga