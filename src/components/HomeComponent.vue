<template>
  <table class="table table-dark table-hover">
    <thead>
        <tr>
            <th>NOMBRE</th>
            <th>MODELO</th>
            <th>MARCA</th>
            <th>COLOR</th>
            <th>IMAGEN</th>
            <th>PRECIO</th>
            <th>VALORACION</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="c in cubos" :key="c.idCubo">
            <td>{{c.nombre}}</td>
            <td>{{c.modelo}}</td>
            <td>{{c.marca}}</td>
            <td>{{c.color}}</td>
            <td><img :src="c.imagen" style="width: 85px; height:0 auto ;"/></td>
            <td>{{c.precio}}</td>
            <td>{{c.valoracion}}</td>
        </tr>
    </tbody>
</table>
</template>

<script>
import ServiceCubo from './../services/ServiceCubo';
const service = new ServiceCubo();
export default {
    name:"HomeComponent",
    data(){
        return{
            cubos:[]
        }
    },
    methods:{
        getCubos(){
            service.getCubos().then((result) => {
                this.cubos=result;
                
            }).catch((err) => {
                console,location(err)
            });
        }
    },
    mounted(){
        this.getCubos();
    }
}
</script>

<style scoped>

</style>