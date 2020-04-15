import { combineReducers } from 'redux';
import app from './app';
import count from './count';
import home from './home';
import hall from './hall';
import order from './order';
import login from './login';
import players from './players';
import gold from './gold';
//import entities from './entities';

const rootReducer = combineReducers({
    app,
    count,
    home,
    hall,
    order,
    login,
    players,
    gold
})

export default rootReducer;