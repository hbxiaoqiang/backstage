import fetchJsonp from 'fetch-jsonp';

export const jsonp=(url)=>{
    return fetchJsonp(url)
    .then(function(response) {
        return response.json()
    })
}
