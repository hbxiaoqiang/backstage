import { combineReducers } from 'redux';
import app from './app';
import hall from './hall';
import home from './home';
import order from './order';
import login from './login';
//import entities from './entities';

const rootReducer = combineReducers({
    app,
    hall,
    home,
    order,
    login
})

export default rootReducer;