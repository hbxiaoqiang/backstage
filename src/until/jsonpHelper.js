import fetchJsonp from 'fetch-jsonp';

export const jsonp=(url)=>{
    return fetchJsonp(url)
    .then(function(response) {
        return response.json()
    }).then(function(res){
        if(!res.Code){
            return Promise.resolve(res.Data.Data);
        }else{
            return Promise.reject(res.Data)
        }
    })
}
