import { getDateStr } from '../../until/tools';
import { types as AppTypes } from '../modules/app';
import { JSONP_REQ } from '../middleware/api';
import { user_UserSta } from '../../until/url';
const currentDate= getDateStr.CurDate();

const initState = {
    startTime:currentDate,
    endTime:currentDate,
    RegistCount:0,
    TotalCount:0,
    Records:[],
    diyTime:false
}

export const types = {
    HALL_USER_STA_SUCCESS:'HALL_USER_STA_SUCCESS',
    HALL_TIMECHANGE:'HALL_TIMECHANGE',
    HALL_DIYTIME:'HALL_DIYTIME'
}

export const actions = {
    userSta:(sd,ed)=>{
        return (dispatch,getState) => {
            dispatch({
                type:types.HALL_TIMECHANGE,
                data:{
                    startTime:sd,
                    endTime:ed,
                    diyTime:false
                }
            })
            const url = user_UserSta({
                userName: getState().app.userInfo.UserName,
                userId: getState().app.userInfo.UserId,
                sd: sd+'T00:00:00',
                ed: ed+'T23:59:59',
                gameIds: 3
            })
            dispatch(backUserSta(url));
        }
    },
    diyTime:(diyTime)=>({
        type:types.HALL_DIYTIME,
        diyTime,
    })
}

const backUserSta = (url) =>({
    [JSONP_REQ]:{
        types:[
            AppTypes.APP_LOADING,
            types.HALL_USER_STA_SUCCESS,
            AppTypes.APP_TOP_TIPS
        ],
        api:url,
        tipAutoCancel:true
    }
})

export const getTotalData = (state)=>{
    return {
        registCount:state.hall.RegistCount,
        totalCount:state.hall.TotalCount
    }
}

export const getDateTimer = (state) => {
    return {
        startTime:state.hall.startTime,
        endTime:state.hall.endTime
    }
}

export const getGameRecords = (state) => {
    return state.hall.Records
}

export const getDiyTime = (state) => {
    return state.hall.diyTime
}

const reducer = (state=initState, action)=>{
    switch(action.type){
        case types.HALL_USER_STA_SUCCESS:
            let TotalCount = 0;
            action.data.Records.forEach(val => {
                TotalCount+=val.Count;
            });
            return {...state, ...action.data,TotalCount}
        case types.HALL_TIMECHANGE:
            return {...state,...action.data}
        case types.HALL_DIYTIME:
            return {...state,diyTime:action.diyTime}
        default:
            return state;
    }
}

export default reducer;

