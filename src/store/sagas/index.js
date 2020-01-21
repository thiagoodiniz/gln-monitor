import {takeLatest, all } from 'redux-saga/effects'
import { Types as HealthCheckActions } from '../actions/health-check'
import { getApoHealthCheckRequest } from './health-check'

export default function* rootSaga() {
        return yield all([
            takeLatest(HealthCheckActions.GET_HEALTH_CHECK, getApoHealthCheckRequest),
        ])
}