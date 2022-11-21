import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue'
import DetallesMarcaComponent from './components/DetallesMarcaComponent.vue'
const rutas = [
    {
        path: "/", component: HomeComponent
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
