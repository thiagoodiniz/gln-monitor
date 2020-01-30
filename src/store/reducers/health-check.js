import { Types } from '../actions/health-check'
import { sortCards } from '../../core/healthCheck-config-db';

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
            const sortedApohealthheck = sortCards(action.apohealthcheck);
            return {
                apohealthcheck: sortedApohealthheck,
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