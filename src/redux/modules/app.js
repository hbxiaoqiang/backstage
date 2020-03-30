import { combineReducers } from 'redux';
import { storage } from '../../until/tools';
const initState = {
    userInfo:{
        UserName:storage.get('userName')
    }
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
            if(!state.UserName) storage.set('userName',action.userInfo.UserName);
            return {...state,...action.userInfo}
        default:
            return state
    }
}

const reducer= combineReducers({userInfo})
export default reducer;
