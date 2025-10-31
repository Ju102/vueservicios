<template>
    <nav class="navbar navbar-expand-lg py-4 fw-bold" style="background-color: darkcyan;">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">SERVICIOS</a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link text-white" to="/">Home</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link text-white" to="/empleados">Empleados</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link text-white" to="/customers">Clientes</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link text-white" to="/cars">Coches</router-link>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Oficios
                        </a>
                        <ul class="dropdown-menu bg-dark">
                            <li v-for="oficio in oficios" :key="oficio">
                                <router-link class="nav-link text-white" :to='"/oficio/" + oficio'>{{ oficio
                                    }}</router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>

import ServiceEmpleados from './../services/ServiceEmpleados';

const service = new ServiceEmpleados();

export default {
    name: "MenuComponent",
    data() {
        return {
            oficios: []
        }
    },
    mounted() {
        service.getOficios().then(result => {
            console.log("Lista de oficios cargada.");
            this.oficios = result;
        })
    }
}
</script>

<style></style>