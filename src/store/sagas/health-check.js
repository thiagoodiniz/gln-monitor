import { call, put } from 'redux-saga/effects'
import { services } from '../../services'
import { Creators as HealthCheckActions } from '../actions/health-check'

export function* getApoHealthCheckRequest(action){
    try{
        const apohealthcheck = yield call(services.getHealthCheck);
        yield put(HealthCheckActions.hcSuccess(apohealthcheck.Apohealthcheckoutput));
    } catch(err){
        console.log(err)
        yield put(HealthCheckActions.hcError());
    }
} 

