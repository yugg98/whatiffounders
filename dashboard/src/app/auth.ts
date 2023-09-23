
const token = "fwcwjeojiofjewfoiwjeijfjewfuweufweofowejoieofiojfeio"
export const authentication = (email:string,password:string) => {
    if(email=="admin@wif.com"&&password=="admin@startshorts123"){
        return token
    }
    return ""
}
export const checkAuth = () => {
    if(token===window.localStorage.getItem("token")){
        console.log(token)
        return true
    }
    return false
}
