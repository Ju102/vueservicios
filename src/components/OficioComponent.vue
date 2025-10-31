<template>
    <div class="container p-5 bg-dark">
        <h2 class="mb-5 text-white">Lista de Empleados por Oficio</h2>
        <table v-if="empleados.length != 0" class="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Apellido</th>
                    <th>Oficio</th>
                    <th>Departamento</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="empleado in empleados" :key="empleado">
                    <td>{{ empleado.idEmpleado }}</td>
                    <td>{{ empleado.apellido }}</td>
                    <td>{{ empleado.salario.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' }) }}</td>
                    <td>{{ empleado.departamento }}</td>
                </tr>
            </tbody>
        </table>
        <h4 v-else>No existen empleados con ese oficio</h4>
    </div>
</template>

<script>

import ServiceEmpleados from './../services/ServiceEmpleados';

const service = new ServiceEmpleados();

export default {
    name: "OficioComponent",
    data() {
        return {
            empleados: [],
        }
    },
    mounted() {
        service.getEmpleadosByOficio(this.$route.params.ofi).then(response => {
            this.empleados = response;
        });
    },
    watch: {
        '$route.params.ofi'(nextVal, oldVal) {
            if (nextVal != oldVal) {
                service.getEmpleadosByOficio(this.$route.params.ofi).then(response => {
                    this.empleados = response;
                });
            }
        }
    }
}
</script>

<style></style>