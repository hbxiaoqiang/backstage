import config from '../config';

const parame =(url,data)=>{
    let str = '?'
    Object.entries(data).forEach(function(value,index,arr){
        if(index === (arr.length-1)){
            str +=value[0] +'=' + value[1]; 
        }else{
            str +=value[0] +'=' + value[1]+'&'; 
        }
    })
    return config.serverIp+ 'api/' + url+ str;
}
export default {
    firstOrDefault:(data)=>{
        return parame('User/FirstOrDefault',data);
    },
    signature:(data)=>{
        return parame('wechat/Signature',data);
    },
    user_Count:(data)=>{
        return parame('User/Count',data);
    },
    user_List:(data)=>{
        return parame('User/List',data);
    },
    user_Giving:(data)=>{
        return parame('User/Giving',data);
    },
    user_BigSta:(data)=>{
        return parame('User/BigSta',data);
    },
    user_UserSta:(data)=>{
        return parame('User/UserSta',data);
    },
    user_Login:(data)=>{
        return parame("User/Login",data);
    },
    
    recordCost_PagedList:(data)=>{
        return parame('RecordCost/PagedList',data);
    },

    message_PagedList:(data)=>{
        return parame('Message/PagedList',data);
    },

    order_PagedList:(data)=>{
        return parame('Order/PagedList',data);
    },

    order_Statistics:(data)=>{
        return parame('Order/Statistics',data);
    },

    recordDetails_List:(data)=>{
        return parame('RecordDetails/List',data);
    }
}