<template>
  <h1>Perfil de Usuario</h1>
  <h1>{{userProfile}}</h1>
</template>

<script>
import ServiceAuth from './../services/ServiceAuth'
const service= new ServiceAuth();
export default {
    name:"DetallesUsuarioComponent",
    data(){
        return{
            userProfile:{}
        }
    },methods:{
        getUserProfile(){
            
            service.perfilUsuario(this.$route.params.token).then((result) => {
                this.userProfile=result;
            }).catch((err) => {
               console.log(err); 
            });
        }
    },
    mounted(){
        this.getUserProfile();
    }
}
</script>

<style scoped>

</style>