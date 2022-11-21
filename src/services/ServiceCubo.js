import Global from "@/Global";
import axios from "axios";
export default class ServiceCubo{
    getCubos(){
        return new Promise(function(resolve){
            var request="/api/Cubos";
            var url=Global.urlApiCubos+request;
            axios.get(url).then(res=>{
                resolve(res.data);
            })
        })
    }
    getMarcas(){
        return new Promise(function(resolve){
            var request="/api/Cubos/Marcas";
            var url=Global.urlApiCubos+request;
            
            axios.get(url).then(res=>{
                
                resolve(res.data);
            })
        })
    }
    getCubosMarca(marca){
        return new Promise(function(resolve){
            var request="/api/Cubos/CubosMarca/"+marca;
            var url=Global.urlApiCubos+request;
            
            axios.get(url).then(res=>{
                console.log(res.data)
                resolve(res.data);
            })
        })
    }
    getComentarios(idCubo){
        return new Promise(function(resolve){
            var request="/api/ComentariosCubo/GetComentariosCubo/"+idCubo;
            var url=Global.urlApiCubos+request;
            
            axios.get(url).then(res=>{
                console.log(res.data)
                resolve(res.data);
            })
        })
    }
}