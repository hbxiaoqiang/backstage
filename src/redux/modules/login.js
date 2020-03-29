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
        }
    },
    clearTip:()=>({
        type:types.LOGIN_CLEAR_TIP,
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
        case types.LOGIN_FAILURE:
            return {...state,tipInfo:action.tipInfo}
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