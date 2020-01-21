import { Types } from '../actions/health-check'

const INITIAL_STATE = {
    loading: false,
    error: false,
    apohealthcheck: [],
};

export default function healthCheck(state=INITIAL_STATE, action){
    switch(action.type){
        case Types.GET_HEALTH_CHECK:
            return {
                loading: true,
                error: false,
            }
        
        case Types.SUCCESS:
            return {
                apohealthcheck: action.apohealthcheck,
                loading: false,
                error: false,
            }
            
        case Types.ERROR:
            return {
                error: true,
                apohealthcheck: [],
                loading: false,
            }   
        
        default:
            return state   
    }

}   