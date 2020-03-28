import fetchJsonp from 'fetch-jsonp';

export const jsonp=(url)=>{
    fetchJsonp(url)
    .then(function(response) {
        return response.json()
    })
}
