<template>
  <div class="text-white pt-5">
    <h1>HOME</h1>
    <h5>{{ mensaje }}</h5>
  </div>
</template>

<script>

// Para usar el servicio, necesitamos una instancia (variable u objeto) de la clase servicio
import ServiceEjemplo from '@/services/ServiceEjemplo';

const service = new ServiceEjemplo();

export default {
  name: "HomeComponent",
  data() {
    return {
      mensaje: ""
    }
  },
  mounted() {
    this.mensaje = service.getSaludo("Julio");
  }
}
</script>

<style></style>