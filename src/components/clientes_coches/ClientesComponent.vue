<template>
    <div>
        <h2>Búsqueda de Clientes</h2>
        <form v-on:submit.prevent="hacerBusqueda()">
            <label>Buscar por ID: </label>
            <input type="text" v-model="busqueda" />
            <button>Buscar</button>
        </form>
        <table v-if="cliente != null">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Contacto</th>
                    <th>Título</th>
                    <th>Empresa</th>
                    <th>Dirección</th>
                    <th>Teléfono</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ cliente.CustomerID }}</td>
                    <td>{{ cliente.ContactName }}</td>
                    <td>{{ cliente.ContactTitle }}</td>
                    <td>{{ cliente.CompanyName }}</td>
                    <td>{{ cliente.Address + ", "
                        + cliente.PostalCode + " "
                        + cliente.City + ", "
                        + cliente.Country }}</td>
                    <td>{{ cliente.Phone }}</td>
                </tr>
            </tbody>
        </table>
        <h3 class="text-white">{{ mensaje }}</h3>
        <hr />
        <h2>Lista de Clientes</h2>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Contacto</th>
                    <th>Empresa</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="cliente in clientes" :key="cliente">
                    <td>{{ cliente.CustomerID }}</td>
                    <td>{{ cliente.ContactName }}</td>
                    <td>{{ cliente.CompanyName }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
import Global from '../../Global';

let urlCustomers = Global.urlApiCustomers;



export default {
    name: "ClientesComponentes",
    data() {
        return {
            busqueda: "",
            clientes: [],
            cliente: null,
            mensaje: ""
        }
    },

    methods: {
        loadCustomers() {
            let request = "Customers/";
            let url = urlCustomers + request;

            axios.get(url).then(response => {
                console.log("Cargando lista de clientes");
                this.clientes = response.data.value;
            });
        },
        hacerBusqueda() {
            for (var customer of this.clientes) {
                if (customer.CustomerID == this.busqueda.toUpperCase()) {
                    this.cliente = customer;
                    this.mensaje = "";
                    return;
                }
            }
            this.cliente = null;
            this.mensaje = "No existen clientes coincidentes con el ID introducido";
        }
    },
    mounted() {
        this.loadCustomers();
    },
    watch: {
        actualizarBusqueda() {
            if (this.cliente.ContactID !== this.busqueda) {
                this.hacerBusqueda();
            }
        }
    }
}
</script>

<style scoped>
div {
    padding: 30px;
    max-width: 1400px;
    margin: 0 auto;
    background: darkslategrey;
    min-height: 100vh;
}

form {
    background: darkcyan;
    padding: 25px 30px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
    transition: all 0.3s ease;
}

form:hover {
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.2);
}

label {
    font-weight: 600;
    color: whitesmoke;
    font-size: 1.1em;
}

input[type="text"] {
    flex: 1;
    min-width: 250px;
    padding: 12px 18px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 1em;
    transition: all 0.3s ease;
    outline: none;
}

input[type="text"]:focus {
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    transform: translateY(-1px);
}

button {
    padding: 12px 30px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1em;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    box-shadow: 0 4px 10px rgba(102, 126, 234, 0.3);
}

button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(102, 126, 234, 0.4);
}

button:active {
    transform: translateY(0);
}

hr {
    border: none;
    height: 2px;
    background: linear-gradient(90deg, transparent, #667eea, transparent);
    margin: 40px 0;
}

h2 {
    color: whitesmoke;
    text-align: center;
    font-size: 2.5em;
    margin-bottom: 30px;
    font-weight: 700;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

table {
    width: auto;
    border-collapse: collapse;
    background-color: white;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    overflow: hidden;
    margin: 0 auto;
}

thead {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

th {
    padding: 18px 15px;
    text-align: center;
    font-weight: 700;
    font-size: 1.1em;
    letter-spacing: 0.5px;
    text-transform: uppercase;
}

tbody tr {
    border-bottom: 1px solid #e8e8e8;
    transition: all 0.3s ease;
}

tbody tr:hover {
    background-color: #f8f9ff;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(102, 126, 234, 0.2);
}

tbody tr:last-child {
    border-bottom: none;
}

td {
    padding: 16px 15px;
    color: #444;
    font-size: 0.95em;
    line-height: 1.5;
}

td:first-child {
    font-weight: 600;
    color: #667eea;
}

/* Estilos responsivos */
@media (max-width: 768px) {
    div {
        padding: 15px;
    }

    form {
        padding: 20px;
        flex-direction: column;
        align-items: stretch;
    }

    label {
        font-size: 1em;
    }

    input[type="text"] {
        min-width: 100%;
    }

    button {
        width: 100%;
    }

    table {
        font-size: 0.9em;
    }

    th,
    td {
        padding: 12px 8px;
    }

    h2 {
        font-size: 2em;
    }
}
</style>