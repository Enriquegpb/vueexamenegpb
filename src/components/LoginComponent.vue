<template>
  <form  method="post" 
            v-on:submit.prevent="login()"  >
    <div class="mb-3">
      <label class="form-label">Username</label>
      <input type="text" v-model="user.email" class="form-control" name="cajauser" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
      <label class="form-label">Password</label>
      <input type="text" v-model="user.password" class="form-control" name="cajapassword">
    </div>
    <button type="submit" class="btn btn-primary">Logearse</button>
  </form>
</template>

<script>
import ServiceAuth from './../services/ServiceAuth'
const service= new ServiceAuth();
export default {
    name:"LoginComponent",
    data(){return{
        user:{
            email:"",
            password:""
        }
    }
        
    },
    methods:{
        login(){
            console.log(this.user)
            service.login(this.user).then(res=>{
                console.log(res)
                this.$router.push("/detallesusuario/"+res);
            })
        }
    }
}
</script>

<style scoped>

</style>