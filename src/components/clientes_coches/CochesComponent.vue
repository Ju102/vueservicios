<template>
    <div>
        <h2>Lista de Coches</h2>
        <table>
            <thead>
                <tr>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Conductor</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="coche in coches" :key="coche">
                    <td><img :src="coche.imagen" :alt="coche.marca + ' ' + coche.modelo" /></td>
                    <td>{{ coche.marca }} {{ coche.modelo }}</td>
                    <td>{{ coche.conductor }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import ServiceCoches from './../../services/ServiceCoches'

const cochesService = new ServiceCoches();

export default {
    name: "CochesComponent",
    data() {
        return {
            coches: []
        }
    },
    mounted() {
        // Una promesa no es un método, es un objeto
        cochesService.getCoches("Coches").then(result => {
            this.coches = result;
        });
    }
}
</script>

<style scoped>
div {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

h2 {
    color: #2c3e50;
    text-align: center;
    font-size: 2em;
    margin-bottom: 30px;
    font-weight: 600;
}

table {
    width: 100%;
    border-collapse: collapse;
    background-color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
}

thead {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

th {
    padding: 15px;
    text-align: center;
    font-weight: 600;
    font-size: 1.1em;
    letter-spacing: 0.5px;
}

tbody tr {
    border-bottom: 1px solid #e0e0e0;
    transition: all 0.3s ease;
}

tbody tr:hover {
    background-color: #f5f5f5;
    transform: scale(1.01);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

tbody tr:last-child {
    border-bottom: none;
}

td {
    padding: 15px;
    color: #333;
    font-size: 1em;
}

img {
    width: 120px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease;
}

img:hover {
    transform: scale(1.2);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}
</style>