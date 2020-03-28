import { combineReducers } from 'redux';
import adminCash from './admin_cash';
import consume from './consume';
import fangkaRecode from './fangkaRecode';
import gather from './gather';
import loginInfo from './loginInfo';
import packet from './packet';
import players from './players';
import statistucs from './statistics';
import userSta from './userSta';

const rootReducer = combineReducers({
    adminCash,
    consume,
    fangkaRecode,
    gather,
    loginInfo,
    packet,
    players,
    statistucs,
    userSta
})

export default rootReducer;