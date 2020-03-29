import { jsonp as Jsonp } from '../../until/jsonpHelper';
import {user_Login} from '../../until/url';
import { types as appTypes } from '../../redux/modules/app';
//18224242464
const initState={
    userName:'',
    passWord:'',
    status:false,
    isRequset:false,
    tipInfo:''
}

export const types={
    LOGIN_USERNAME:'LOGIN/USERNAME',
    LOGIN_PASSWORD:'LOGIN/USERWORD',
    LOGIN_RES:'LOGIN/RES',
    LOGIN_SUCCESS:'LOGIN/SUCCESS',
    LOGIN_FAILURE:'LOGIN/FAILURE',
    LOGIN_CLEAR_TIP:'LOGIN/CLEAR/TIP'
}

export const actions={
    inputUserName:(userName)=>({
        type:types.LOGIN_USERNAME,
        userName
    }),
    inputPassWord:(passWord)=>({
        type:types.LOGIN_PASSWORD,
        passWord
    }),
    submitData:()=>{
        return (dispatch, getState)=>{
            const { userName, passWord } = getState().login;
            if(userName === '') return dispatch({
                type:types.LOGIN_FAILURE,
                tipInfo:'用户名必须填写'
            })
            if(passWord === '') return dispatch({
                type:types.LOGIN_FAILURE,
                tipInfo:'密码必须填写'
            })

            dispatch({
                type:types.LOGIN_RES
            })
            requsetLogin(dispatch,userName,passWord)
        }
    },
    clearTip:()=>({
        type:types.LOGIN_CLEAR_TIP,
    })
}

const requsetLogin=(dispatch,userName,passWord)=>{
    const data = {
        userName,
        passWord
    }
    Jsonp(user_Login(data)).then(function(json){
        dispatch({
            type:types.LOGIN_SUCCESS,
        })
        dispatch({
            type:appTypes.APP_USERINFO,
            userInfo:json
        })
    },function(err){
        dispatch({
            type:types.LOGIN_FAILURE,
            tipInfo:err
        })
    })
}

export const getUserName = (state)=>{
    return state.login.userName;
}

export const getPassWord = (state)=>{
    return state.login.passWord;
}

export const getTipInfo = (state)=>{
    return state.login.tipInfo;
}

const reducer = (state=initState ,action)=>{
    switch(action.type){
        case types.LOGIN_RES:
            return {...state, isRequset:true}
        case types.LOGIN_SUCCESS:
            return {...state, isRequset:false}
        case types.LOGIN_FAILURE:
            return {...state,tipInfo:action.tipInfo,isRequset:false}
        case types.LOGIN_CLEAR_TIP:
            return {...state,tipInfo:''}
        case types.LOGIN_USERNAME:
            return {...state,userName:action.userName}
        case types.LOGIN_PASSWORD:
            return {...state, passWord:action.passWord}
        default:
            return state;
    }
}

export default reducer;