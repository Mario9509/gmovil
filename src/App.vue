<template>
  <v-app id="inspire">
    <!-- Navigation Drawer -->
    <v-navigation-drawer v-model="drawer" app>
      <!-- Sidebar Links (solo visibles en pantallas pequeñas) -->
      <v-list v-if="isMobile">
        <v-list-item
          v-for="link in links"
          :key="link"
          link
          
        >
          <v-list-item-title>{{ link }}</v-list-item-title>
        </v-list-item>
      </v-list>
     
   
    ...
 
    </v-navigation-drawer>
    
   

    <!-- Navbar -->
    <v-app-bar flat app>
      <!-- Toggle Drawer Icon (solo visible en pantallas pequeñas) -->
      <v-app-bar-nav-icon v-if="isMobile" @click="drawer = !drawer"></v-app-bar-nav-icon>

      <!-- Application Title (reemplazado por una imagen, visible en todos los tamaños) -->
      <v-app-bar-title class="me-4">
        <img src="/img/gmovil.png" alt="Gmovil Logo" style="height: 32px;">
      </v-app-bar-title>

      <!-- Espaciador para ajustar la alineación en pantallas grandes -->
      <v-spacer></v-spacer>
      

      <!-- Navbar Links con margen derecho (solo visibles en pantallas grandes, alineados a la derecha) -->
      <div v-if="!isMobile" class="d-flex align-center me-4">
        <v-btn
          v-for="link in links"
          :key="link"
          text
          variant="text"
        >
          {{ link }}
        </v-btn>
      </div>
      |<v-btn @click="toggleTheme"> theme</v-btn>
    </v-app-bar>

    <!-- Main Content -->
    <v-main class="bg-grey-lighten-3">
      <!-- Primer contenedor -->
      <v-container>
        <v-row>
          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
              class="pa-0"
            >
              <!-- Slider de imágenes -->
              <v-carousel cycle height="70vh">
                <v-carousel-item
                  v-for="(image, index) in images"
                  :key="index"
                >
                  <img
                    :src="image"
                    alt="Carrusel Image"
                    :class="isMobile ? 'carousel-image-mobile' : 'carousel-image'"
                  >
                </v-carousel-item>
              </v-carousel>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>

      <!-- Segundo contenedor -->
      <v-container>
        <v-row>
          <v-col>
            <v-sheet
              min-height="15vh"
              rounded="lg"
            >
              <!-- Aquí puedes agregar el contenido principal del segundo contenedor -->
              G Móvil es tu nueva compañía de telefonía móvil en México. Formamos parte de Altán Redes, funcionando como un operador móvil virtual de la red compartida, con cobertura de telefonía e internet en todo el país y con acceso a una red móvil de voz y datos 4,5 G LTE. Ofrecemos tarifas atractivas; recargas en línea con la App de Mi Gmovil en App Store y Google Play.
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>

      <!-- Terver contenedor -->
      <v-container>
        <v-row>
          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
              class="pa-0"
            >
              <!-- Slider de imágenes -->
              <v-carousel cycle height="70vh">
                <v-carousel-item
                  v-for="(image, index) in images"
                  :key="index"
                >
                  <img
                    :src="image"
                    alt="Carrusel Image"
                    :class="isMobile ? 'carousel-image-mobile' : 'carousel-image'"
                  >
                </v-carousel-item>
              </v-carousel>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>


      <!-- Cuarto contenedor -->
      <v-container>
        <v-row>
          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
              class="pa-0"
            >
              <!-- Slider de imágenes -->
              <v-carousel cycle height="70vh">
                <v-carousel-item
                  v-for="(image, index) in images"
                  :key="index"
                >
                  <img
                    :src="image"
                    alt="Carrusel Image"
                    :class="isMobile ? 'carousel-image-mobile' : 'carousel-image'"
                  >
                </v-carousel-item>
              </v-carousel>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>

      <!-- Quinto contenedor -->
      <v-container>
        <v-row>
          <v-col>
            <v-sheet
              min-height="15vh"
              rounded="lg"
            >
              <!-- Aquí puedes agregar el contenido principal del segundo contenedor -->
              G Móvil es tu nueva compañía de telefonía móvil en México. Formamos parte de Altán Redes, funcionando como un operador móvil virtual de la red compartida, con cobertura de telefonía e internet en todo el país y con acceso a una red móvil de voz y datos 4,5 G LTE. Ofrecemos tarifas atractivas; recargas en línea con la App de Mi Gmovil en App Store y Google Play.
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>

    <!-- Sexto contenedor -->
      <v-container>
        <v-row>
          <v-col>
            <v-sheet
              min-height="15vh"
              rounded="lg"
            >
              <!-- Aquí puedes agregar el contenido principal del segundo contenedor -->
              G Móvil es tu nueva compañía de telefonía móvil en México. Formamos parte de Altán Redes, funcionando como un operador móvil virtual de la red compartida, con cobertura de telefonía e internet en todo el país y con acceso a una red móvil de voz y datos 4,5 G LTE. Ofrecemos tarifas atractivas; recargas en línea con la App de Mi Gmovil en App Store y Google Play.
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>

      <!-- Septimo contenedor -->
      <v-container>
        <v-row>
          <v-col>
            <v-sheet
              min-height="15vh"
              rounded="lg"
            >
              <!-- Aquí puedes agregar el contenido principal del segundo contenedor -->
              G Móvil es tu nueva compañía de telefonía móvil en México. Formamos parte de Altán Redes, funcionando como un operador móvil virtual de la red compartida, con cobertura de telefonía e internet en todo el país y con acceso a una red móvil de voz y datos 4,5 G LTE. Ofrecemos tarifas atractivas; recargas en línea con la App de Mi Gmovil en App Store y Google Play.
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>

      <!-- Octavo contenedor -->
      <v-container>
        <v-row>
          <v-col>
            <v-sheet
              min-height="15vh"
              rounded="lg"
            >
              <!-- Aquí puedes agregar el contenido principal del segundo contenedor -->
              G Móvil es tu nueva compañía de telefonía móvil en México. Formamos parte de Altán Redes, funcionando como un operador móvil virtual de la red compartida, con cobertura de telefonía e internet en todo el país y con acceso a una red móvil de voz y datos 4,5 G LTE. Ofrecemos tarifas atractivas; recargas en línea con la App de Mi Gmovil en App Store y Google Play.
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
      
      <!-- Noveno contenedor -->
      <v-container>
        <v-row>
          <v-col>
            <v-sheet
              min-height="15vh"
              rounded="lg"
            >
              <!-- Aquí puedes agregar el contenido principal del segundo contenedor -->
              G Móvil es tu nueva compañía de telefonía móvil en México. Formamos parte de Altán Redes, funcionando como un operador móvil virtual de la red compartida, con cobertura de telefonía e internet en todo el país y con acceso a una red móvil de voz y datos 4,5 G LTE. Ofrecemos tarifas atractivas; recargas en línea con la App de Mi Gmovil en App Store y Google Play.
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>

      <!-- Decimo contenedor -->
      <v-container>
        <v-row>
          <v-col>
            <v-sheet
              min-height="15vh"
              rounded="lg"
            >
              <!-- Aquí puedes agregar el contenido principal del segundo contenedor -->
              G Móvil es tu nueva compañía de telefonía móvil en México. Formamos parte de Altán Redes, funcionando como un operador móvil virtual de la red compartida, con cobertura de telefonía e internet en todo el país y con acceso a una red móvil de voz y datos 4,5 G LTE. Ofrecemos tarifas atractivas; recargas en línea con la App de Mi Gmovil en App Store y Google Play.
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>

      <!-- Onceavo contenedor -->
      <v-container>
        <v-row>
          <v-col>
            <v-sheet
              min-height="15vh"
              rounded="lg"
            >
              <!-- Aquí puedes agregar el contenido principal del segundo contenedor -->
              G Móvil es tu nueva compañía de telefonía móvil en México. Formamos parte de Altán Redes, funcionando como un operador móvil virtual de la red compartida, con cobertura de telefonía e internet en todo el país y con acceso a una red móvil de voz y datos 4,5 G LTE. Ofrecemos tarifas atractivas; recargas en línea con la App de Mi Gmovil en App Store y Google Play.
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>

      <!-- Decimo contenedor -->
      <v-container>
        <v-row>
          <v-col>
            <v-sheet
              min-height="15vh"
              rounded="lg"
            >
              <!-- Aquí puedes agregar el contenido principal del segundo contenedor -->
              G Móvil es tu nueva compañía de telefonía móvil en México. Formamos parte de Altán Redes, funcionando como un operador móvil virtual de la red compartida, con cobertura de telefonía e internet en todo el país y con acceso a una red móvil de voz y datos 4,5 G LTE. Ofrecemos tarifas atractivas; recargas en línea con la App de Mi Gmovil en App Store y Google Play.
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>


    </v-main>
   
  </v-app>
  <AppFooter />
 
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import AppFooter from './components/AppFooter.vue';

// Drawer toggle
const drawer = ref(false)

// Links para los botones
const links = ['Inicio', 'Portabilidad', 'Contrata', 'Recarga', 'Soporte',]

// Estado para detectar si es móvil
const isMobile = ref(window.innerWidth <= 600)

const updateScreenSize = () => {
  isMobile.value = window.innerWidth <= 600
}

// Detectar cambios de tamaño de pantalla
onMounted(() => {
  window.addEventListener('resize', updateScreenSize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScreenSize)
})

// Lista de imágenes para el slider
const images = ref([
  '/img/carrousel1.png',
  '/img/carrousel2.png',
  '/img/carrousel3.png',
  '/img/carrousel4.png'
])

import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<style scoped>

/* Asegurar que todos los elementos usen box-sizing consistente */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Resetear márgenes y padding por defecto del body */
body, html {
  margin: 0;
  padding: 0;
}

/* Aplicar estilos personalizados a los contenedores de Vuetify */
.v-container {
  max-width: 100%;  /* Controla el ancho máximo si es necesario */
  margin-right: auto;
  margin-left: auto;
  padding-left: 16px;
  padding-right: 16px;
}

/* Asegurarte de que los contenedores ocupen todo el ancho en pantallas pequeñas */
@media (max-width: 600px) {
  .v-container {
    padding-left: 8px;
    padding-right: 8px;
  }
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Las imágenes cubrirán todo el contenedor en pantallas grandes */
}

.carousel-image-mobile {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Las imágenes se mostrarán completas en pantallas móviles */
}
</style>
