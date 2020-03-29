import { combineReducers } from 'redux';
const initState = {
    userInfo:{}
}

export const types = {
    APP_USERINFO:'APP_USERINFO'
}

export const actions = {

}

const userInfo = (state = initState.userInfo, action) =>{
    switch(action.type){
        case types.APP_USERINFO:
            return {...state,...action.userInfo}
        default:
            return state
    }
}

const reducer= combineReducers({userInfo})
export default reducer;
