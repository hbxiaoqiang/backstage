import { jsonp } from '../../until/request';

export const JSONP_REQ = 'JSONP_REQ';
/*
//经过中间件处理的action所具有的标识
JSONP_REQ:{
    types:[start,success,fail]
    api:'',
    tipAutoCancel /5秒后消失错误提醒
    otherData // 其他数据
}

*/
export default store => next => action=> {
    const callReq = action[JSONP_REQ];
    if(typeof callReq === 'undefined'){
        return next(action);
    }
    const {types,api,tipAutoCancel,otherData} = callReq;
    if(!Array.isArray(types) && types.length !== 3){
        throw new Error(' types必须一个长度3的数组')
    }
    if(typeof api !== 'string'){
        throw new Error(' api为字符串类型的URL')
    }
    const [requestType, successType, failureType] = types;
    next({
        type:requestType,
        request:true
    })
    jsonp(api).then(function(data){
        const nextData = {
            type:successType,
            data
        }
        if(typeof otherData !== 'undefined'){
            Object.assign(nextData,{otherData})
        }
        next(nextData)
        next({
            type:requestType,
            request:false
        })
    },function(err){
        next({
            type:failureType,
            msg:err
        })
        if(tipAutoCancel){
            setTimeout(()=>{
                next({
                    type:failureType,
                    msg:''
                })
            },5000);
        }
        next({
            type:requestType,
            request:false
        })
    })
}