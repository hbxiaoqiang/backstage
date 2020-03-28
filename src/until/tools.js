export const storage={
    get(key,isSession){
        return isSession?window.sessionStorage.getItem(key):
        window.localStorage.getItem(key);
    },
    set(key,value,isSession){
        isSession?window.sessionStorage.setItem(key,value):
        window.localStorage.setItem(key,value);
    }
}