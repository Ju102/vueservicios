import axios from "axios";
import Global from "./../Global";

export default class ServiceCoches {

    getCoches(param1) {
        return new Promise(function (resolve) {
            let request = "webresources/coches/";
            let url = Global.urlApiCoches + request;

            let coches = [];

            console.log("Obteniendo lista de " + param1 );

            axios.get(url).then(response => {
                console.log("Lista de coches obtenida. Devolviendo de servicio a componente...");
                coches = response.data;
                resolve(coches);
            });
        });
    }
}