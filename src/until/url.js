import config from '../config';

const parame =(url,data)=>{
    let str = '?'
    if(!url.includes('User/Login')){
        str += 'partnerId=' + config.partnerId + '&';
    }
    Object.entries(data).forEach(function(value,index,arr){
        if(index === (arr.length-1)){
            str +=value[0] +'=' + value[1]; 
        }else{
            str +=value[0] +'=' + value[1]+'&'; 
        }
    })
    return config.serverIp+ 'api/' + url+ str;
}

export const firstOrDefault = (data)=>{
    return parame('User/FirstOrDefault',data);
}
export const signature = (data)=>{
    return parame('wechat/Signature',data);
}

export const user_Count =(data)=>{
    return parame('User/Count',data);
}
export const user_List =(data)=>{
    return parame('User/List',data);
}
export const user_Giving =(data)=>{
    return parame('User/Giving',data);
}
export const user_BigSta =(data)=>{
    return parame('User/BigSta',data);
}
export const user_UserSta =(data)=>{
    return parame('User/UserSta',data);
}
export const user_Login =(data)=>{
    return parame("User/Login",data);
}

export const recordCost_PagedList =(data)=>{
    return parame('RecordCost/PagedList',data);
}

export const message_PagedList =(data)=>{
    return parame('Message/PagedList',data);
}

export const order_PagedList =(data)=>{
    return parame('Order/PagedList',data);
}

export const order_Statistics =(data)=>{
    return parame('Order/Statistics',data);
}

export const recordDetails_List =(data)=>{
    return parame('RecordDetails/List',data);
}
