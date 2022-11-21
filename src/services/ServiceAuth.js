
import Global from "@/Global";
import axios from "axios";

export default class ServiceAuth{
    login(user){
        var json=JSON.stringify(user);
        var header={
            "Content-Type": "application/json",
            "responseType": "json"
        }

        return new Promise(function(resolve){
            var request="api/Manage/Login";
            var url=Global.urlApiCubos+request;
            axios.post(url,json,{headers:header}).then((res)=>{
                resolve(res.data);
                localStorage.setItem('token',res);
            })
        })
    }
    singUp(user){
        var json=JSON.stringify(user);
        var header={
            "Content-Type": "application/json",
            "responseType": "json"
        }

        return new Promise(function(resolve){
            var request="/api/Manage/Login";
            var url=Global.urlApiCubos+request;
            axios.post(url,json,{headers:header}).then((res)=>{
                resolve(res.data);
                
            })
        })
    }
    //------------------------------------------------------------------------------------------------
    //No recuperar el token en el push. Se Podría intertar con params( metodo muy inserguro).
    comprasUsuario(token){
        const header={Authorization:"bearer "+token}
        return new Promise(function(resolve){
            var request="/api/Compra/ComprasUsuario";
            var url=Global.urlApiCubos+request;
            axios.get(url,{headers:header}).then((res)=>{
                resolve(res.data);
            })
        })
    }
    perfilUsuario(token){
        const header={Authorization:"bearer "+token}
        return new Promise(function(resolve){
            var request="/api/Manage/PerfilUsuario";
            var url=Global.urlApiCubos+request;
            axios.get(url,{headers:header}).then((res)=>{
                resolve(res.data);
            })
        })
    }
}