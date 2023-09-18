const token = "nefninerifninefiniefninfvinifvinfn"
export const authentication = (email:string,password:string) => {
    if(email=="admin@wif.com"&&password=="admin@startshorts123"){
        return token
    }
    return ""
}
export const checkAuth = (token:any) => {
    if(token==token){
        return true
    }
    else {
        return false
    }
}
