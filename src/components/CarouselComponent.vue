<template>
  <v-container fluid class="carousel-container p-0 m-0">
    <v-row class="p-0 m-0">
      <v-col class="p-0 m-0">
        <v-sheet min-height="70vh" rounded="lg" class="pa-0">
          <v-carousel 
            cycle 
            height="70vh" 
            hide-delimiters 
            show-arrows 
            class="carousel-content"
          >
            <v-carousel-item
              v-for="(image, index) in images"
              :key="index"
              rounded="lg"
            >
              <picture>
                <source
                  media="(max-width: 600px)"
                  :srcset="image.mobile"
                />
                <source
                  media="(min-width: 601px)"
                  :srcset="image.desktop"
                />
                <img
                  :src="image.desktop"
                  alt="Carrusel Image"
                  class="carousel-image"
                />
              </picture>
            </v-carousel-item>
          </v-carousel>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  images: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
/* Contenedor principal del carrusel */
.carousel-container {
  width: 100%;
  height: 70vh; /* Asegura que ocupe toda la pantalla */
  margin: 0;
  padding: 0;
}

/* Contenido del carrusel */
.carousel-content {
  height: 100%;
  background-color: transparent; /* Asegura que no haya fondo negro */
}

/* Imagen del carrusel */
.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block; /* Asegura que se comporte como bloque */
}

/* Asegura que el v-sheet ocupe toda la altura */
.v-sheet {
  height: 70vh;
  margin: 0;
  padding: 0;
}

/* Elimina cualquier padding o margen sobrante */
.v-container, .v-row, .v-col {
  padding: 0 !important;
  margin: 0 !important;
}

</style>
