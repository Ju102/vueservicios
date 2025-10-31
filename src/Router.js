import { createRouter, createWebHistory } from "vue-router"
import HomeComponent from "./components/HomeComponent.vue"
import EmpleadosComponent from "./components/EmpleadosComponent.vue";
import ClientesComponent from "./components/clientes_coches/ClientesComponent.vue";
import CochesComponent from "./components/clientes_coches/CochesComponent.vue";
import OficioComponent from "./components/OficioComponent.vue";

const routes = [
    { path: "/", component: HomeComponent },
    { path: "/empleados", component: EmpleadosComponent},
    { path: "/customers", component: ClientesComponent},
    { path: "/cars", component: CochesComponent},
    { path: "/oficio/:ofi", component: OficioComponent},
]


const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;