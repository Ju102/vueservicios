<template>
    <div class="container p-5 bg-dark">
        <h2 class="mb-5 text-white">Empleados</h2>
        <form v-on:submit.prevent="hacerBusqueda()">
            <select class="form-select w-75 me-auto ms-auto" v-model="busqueda">
                <option value="-1">-- Seleccione un empleado --</option>
                <option v-for="empleado in empleados" :key="empleado" :value="empleado.idEmpleado">{{ empleado.apellido
                    }}</option>
            </select>
            <button class="btn btn-primary w-25 mt-3 fw-bold">Buscar</button>
        </form>
        <hr v-if="empleado != null" />
        <table class="table table-bordered" v-if="empleado != null">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Apellido</th>
                    <th>Oficio</th>
                    <th>Salario</th>
                    <th>Departamento</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ empleado.idEmpleado }}</td>
                    <td>{{ empleado.apellido }}</td>
                    <td>{{ empleado.oficio }}</td>
                    <td>{{ empleado.salario.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' }) }}</td>
                    <td>{{ empleado.departamento }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import ServiceEmpleados from './../services/ServiceEmpleados';

const servicio = new ServiceEmpleados();

export default {
    name: "EmpleadosComponent",
    data() {
        return {
            busqueda: -1,
            empleados: [],
            empleado: null
        }
    },
    methods: {
        hacerBusqueda() {
            servicio.findEmpleadosById(this.busqueda).then(result => {
                console.log("Empleado cargado.");
                this.empleado = result;
            });
        }
    },
    mounted() {
        servicio.getEmpleados().then(result => {
            console.log("Lista de empleados cargada.");
            this.empleados = result;
        });
    }
}
</script>

<style></style>