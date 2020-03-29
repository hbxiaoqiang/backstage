import { combineReducers } from 'redux';
const initState = {
    userInfo:{}
}

export const types = {
    APP_USERINFO:'APP_USERINFO'
}

export const actions = {

}

export const getUserInfo=(state)=>{
    return state.app.userInfo
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
