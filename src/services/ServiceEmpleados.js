import axios from "axios";
import Global from "./../Global";

export default class ServiceEmpleados {


    getEmpleados() {
        return new Promise(function (resolve) {
            let urlEmpleados = Global.urlApiEmpleados;
            let request = "api/Empleados";
            let url = urlEmpleados + request;

            let empleados = [];

            console.log("Obteniendo lista de empleados...");
            axios.get(url).then(response => {
                console.log("Lista de empleados obtenida. Devolviendo de servicio a componente...");
                empleados = response.data;
                resolve(empleados);
            });
        });
    }

    findEmpleadosById(id) {
        return new Promise(function (resolve) {
            let urlEmpleados = Global.urlApiEmpleados;
            let request = "api/Empleados/" + id;
            let url = urlEmpleados + request;

            let empleado = null;

            console.log("Obteniendo empleado por ID...");
            axios.get(url).then(response => {
                console.log("Empleado encontrado. Devolviendo objeto de servicio a componente...");
                empleado = response.data;
                resolve(empleado);
            });
        });
    }
    getOficios() {
        return new Promise(function (resolve) {
            let urlEmpleados = Global.urlApiEmpleados;
            let request = "api/empleados/oficios";
            let url = urlEmpleados + request;

            let oficios = [];

            console.log("Obteniendo lista de oficios...");
            axios.get(url).then(response => {
                console.log("Lista de oficios obtenida. Devolviendo de servicio a componente...");
                oficios = response.data;
                resolve(oficios);
            });
        });
    }
    getEmpleadosByOficio(oficio) {
        return new Promise(function (resolve) {
            let urlEmpleados = Global.urlApiEmpleados;
            let request = "/api/empleados/empleadosoficio/" + oficio;
            let url = urlEmpleados + request;

            let empleados = [];

            console.log("Obteniendo lista de empleados por oficio...");
            axios.get(url).then(response => {
                console.log("Lista de empleados por oficio obtenida. Devolviendo de servicio a componente...");
                empleados = response.data;
                resolve(empleados);
            });
        });
    }
}