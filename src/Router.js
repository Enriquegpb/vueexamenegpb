import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue'
import DetallesMarcaComponent from './components/DetallesMarcaComponent.vue'
import LoginComponent from './components/LoginComponent.vue'
import DetallesUsuarioComponent from './components/DetallesUsuarioComponent.vue'

const rutas = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/login", component: LoginComponent
    },
    {
        path: "/detallesusuario/:token", component: DetallesUsuarioComponent
    },
    {
        path: "/detallesmarca/:marca", component: DetallesMarcaComponent
    },
   
]
const router = createRouter({
    history: createWebHistory(),
    routes: rutas
});
export default router;
