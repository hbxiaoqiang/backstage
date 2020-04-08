import { combineReducers } from 'redux';
import { storage } from '../../until/tools';
import { firstOrDefault } from '../../until/url';
import { JSONP_REQ } from '../middleware/api';

const initState = {
    userInfo:{
        ...storage.get('UserInfo')
    },
    common:{
        loading:false,
        topTips:''
    }

}

export const types = {
    //userinfo
    APP_FIRSTORDEFAUL_SUCCESS:'APP_FIRSTORDEFAUL_SUCCESS',
    APP_EXIT:'APP_EXIT',
    //loading types;
    APP_LOADING:'APP_LOADING',
    APP_TOP_TIPS:'APP_TOP_TIPS',
}

export const actions = {
    fristOrDefaul:()=>{
        return (dispatch,getState) =>{
            const { UserName } = getState().app.userInfo;
            if(UserName){
                const url =firstOrDefault({
                    userName:UserName
                });
                dispatch(backFristOrdefaul(url));
            }
        }
    },
    exitLogin:()=>({
        type:types.APP_EXIT
    }),
    clearTopTips:()=>({
        type:types.APP_TOP_TIPS,
        msg:''
    })
}

export const getUserInfo=(state)=>{
    return state.app.userInfo;
}

export const getCommon=(state)=>{
    return state.app.common;
}

const backFristOrdefaul=(url)=>({
    [JSONP_REQ]:{
        types:[
            types.APP_LOADING,
            types.APP_FIRSTORDEFAUL_SUCCESS,
            types.APP_TOP_TIPS
        ],
        api:url,
        tipAutoCancel:true
    }
})

const userInfo = (state = initState.userInfo, action) =>{
    switch(action.type){
        case types.APP_FIRSTORDEFAUL_SUCCESS:
            storage.set('UserInfo',action.data);
            return {...state, ...action.data}
        case types.APP_EXIT:
            storage.del('UserInfo');
            return {}
        default:
            return state
    }
}

const common = (state=initState.common, action) => {
    switch(action.type){
        case types.APP_LOADING:
            return {...state,loading:action.request}
        case types.APP_TOP_TIPS:
            return {...state,topTips:action.msg}
        default:
            return state;
    }
}

const reducer= combineReducers({userInfo,common})
export default reducer;
