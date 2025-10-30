import { createRouter, createWebHistory } from "vue-router"
import HomeComponent from "./components/HomeComponent.vue"
import EmpleadosComponent from "./components/EmpleadosComponent.vue";
import ClientesComponent from "./components/customers_clientes/ClientesComponent.vue";
import CochesComponent from "./components/customers_clientes/CochesComponent.vue";

const routes = [
    { path: "/", component: HomeComponent },
    { path: "/empleados", component: EmpleadosComponent},
    { path: "/customers", component: ClientesComponent},
    { path: "/cars", component: CochesComponent}
]


const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;