<template>
  <v-app id="inspire">
    <!-- Navigation Drawer -->
    



    <v-navigation-drawer v-model="drawer" app>
  <v-list v-if="isMobile">
    <v-list-group
      v-for="(item, index) in menuItems"
      :key="index"
      :prepend-icon="item.icon"
      :value="false"
    >
      <template #activator>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </template>

      <!-- Submenús -->
      <v-list-item
        v-for="(sublink, subIndex) in item.sublinks"
        :key="subIndex"
        link
      >
        <v-list-item-title>{{ sublink }}</v-list-item-title>
      </v-list-item>
    </v-list-group>
  </v-list>
</v-navigation-drawer>

<!-- Navbar -->
<v-app-bar flat app>
  <v-app-bar-nav-icon v-if="isMobile" @click="drawer = !drawer" />
  <v-app-bar-title class="me-4">
    <img src="/img/gmovil.png" alt="Gmovil Logo" style="height: 32px;">
  </v-app-bar-title>

  <v-spacer />

  <!-- Menú con submenús en versión escritorio -->
  <div v-if="!isMobile" class="d-flex align-center me-4">
    <v-menu
      v-for="(item, index) in menuItems"
      :key="index"
      transition="slide-y-transition"
    >
      <template #activator="{ props }">
        <v-btn v-bind="props" text>{{ item.title }}</v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(sublink, subIndex) in item.sublinks"
          :key="subIndex"
          link
        >
          <v-list-item-title>{{ sublink }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</v-app-bar>







    <!-- Main Content -->
    <v-main class="bg-grey-lighten-3">

      <!-- Codigo Carrousel -->
      <v-container fluid>
        <CarouselComponent :images="images" />
      </v-container>

      <!-- Codigo Descripcion -->
      <v-container fluid>
        <v-row>
          <v-col>
            <v-sheet min-height="15vh" rounded="lg" class="pa-6 bg-light">
              <p class="body-text">
                G Móvil es tu nueva compañía de telefonía móvil en México. Formamos parte de 
                Altán Redes, funcionando como un operador móvil virtual de la red compartida, 
                con cobertura de telefonía e internet en todo el país y con acceso a una red 
                móvil de voz y datos 4.5 G LTE. Ofrecemos tarifas atractivas; recargas en línea 
                con la App de Mi Gmovil en App Store y Google play.
              </p>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>

      <!-- Contenedor para Planes Especiales -->
      <v-container>
        <v-row>
          <v-col class="text-center">
            <h1 class="titulo-planes">Planes Especiales</h1>
          </v-col>
        </v-row>

        <!-- Carrusel para Móvil -->
        <v-carousel
          v-if="isMobile"
          hide-delimiters
          show-arrows
          class="carousel-container"
        >
          <v-carousel-item 
            v-for="(card, index) in specialPlans" 
            :key="index"
          >
            <CardPlan :card="card" :index="index" />
          </v-carousel-item>
        </v-carousel>

        <!-- Dos Columnas para Escritorio -->
        <v-row 
          v-else 
          class="justify-center align-center especial-cards-container"
        >
          <v-col 
            cols="12" 
            md="5" 
            lg="4" 
            v-for="(card, index) in specialPlans" 
            :key="index"
          >
            <CardPlan :card="card" :index="index" />
          </v-col>
        </v-row>
      </v-container>


      <!-- Contenedor con 8 planes Cards -->
      <v-container fluid>
        <v-row>
          <v-col class="text-center">
            <h1 class="titulo-planes">Tabla de planes de telefonía</h1>
          </v-col>
        </v-row>

        <!-- Mostrar v-slide-group en PC -->
        <v-slide-group
          v-if="!isMobile"
          show-arrows
          class="mt-4 slide-group-custom"
          center-active
        >
          <v-slide-item 
            v-for="(card, index) in pricingCards" 
            :key="index" 
            class="me-6"
          >
            <CardPlan :card="card" :index="index" />
          </v-slide-item>
        </v-slide-group>

        <!-- Mostrar v-carousel en móvil -->
        <v-carousel
          v-else
          hide-delimiters
          show-arrows
          class="carousel-container"
        >
          <v-carousel-item 
            v-for="(card, index) in pricingCards" 
            :key="index"
          >
            <CardPlan :card="card" :index="index" />
          </v-carousel-item>
        </v-carousel>
      </v-container>

      <!-- Quinto contenedor -->
      <v-container class="contenedor-centrado">
        <v-row align="center" justify="center" class="h-100">
          <v-col cols="12" md="5">
            <v-sheet min-height="40vh" rounded="lg" class="pa-6 bg-light">
              <h2 class="title_quinto mb-4 text-center"> Todos nuestros planes incluyen:</h2>
              <p class="body-text">
                Llamadas y SMS Nacionales, E.U.A. y Canada
              </p>
              <p class="body-text">
                Redes sociales:
              </p>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>

      <!-- Sexto contenedor -->
      <v-container fluid>
        <v-row>
          <v-col>
            <v-sheet min-height="15vh" rounded="lg" class="pa-6 bg-light">
              <p class="body-text-6c">
                * Las tarifas de los planes y/o paquete de G MÓVIL se encuentran inscritas en el Registro Público de Concesiones del Instituto 
                Federal de Telecomunicaciones con los números de folio siguientes: 496873, 496907, 496917, 496930, 496945, 496956, 557498 y podrán 
                consultarse en el hipervínculo correspondiente al buscador de tarifas del Registro Público de Telecomunicaciones del referido 
                Instituto: https://tarifas.ift.org.mx/ift_visor/
              </p>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>


      <!-- Contenedor de la imagen de fondo -->
      <div class="imagen-fondo"></div>


      <!-- Oactavo contenedor Reseñas Clientes-->
      <v-container fluid class="pb-0 mb-10">
        <v-row>
          <v-col>
            <h2 class="text-center mb-2 titulo-reseña">Reseñas de Clientes</h2>
            <v-carousel
              hide-delimiters
              show-arrows
              class="carousel-container"
              >
              <v-carousel-item
                v-for="(group, index) in groupedReviews"
                :key="index"
              >
                <v-row class="justify-space-between align-center">
                  <v-col
                    v-for="review in group"
                    :key="review.name"
                    cols="12" 
                    md="4" 
                    lg="4"
                    class="d-flex flex-column align-center text-center"
                  >
                    <ReviewCard :review="review" />
                  </v-col>
                </v-row>
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
      </v-container>




      <!-- Noveno contenedor -->
      <!-- Espaciador dinámico -->
      <!-- <v-spacer /> -->

      <!-- Noveno Contenedor: Dos columnas al 50% -->
      <v-container fluid>
        <v-row 
          align="stretch" 
          class="equal-height-row flex-wrap"
        >
          <!-- Contenedor Izquierdo -->
          <v-col cols="12" md="6" class="mb-4">
            <v-sheet 
              height="100%" 
              rounded="lg" 
              class="pa-6 bg-white d-flex flex-column justify-center"
            >
              <h2 class="titulo-container">¿Por qué elegir G Móvil?</h2>
              <p class="texto-principal">
                Somos una empresa mexicana que trabaja para ofrecer los mejores servicios 
                de telefonía móvil ¡haz la prueba y cámbiate! Hoy somos tu mejor opción.
              </p>
              <ul class="check-list">
                <li>
                  <v-icon color="green" class="me-2">mdi-check-circle</v-icon>
                  Cámbiate a G MÓVIL sin perder tu número, obtén más navegación y tiempo aire por un precio accesible.
                </li>
                <li>
                  <v-icon color="green" class="me-2">mdi-check-circle</v-icon>
                  Traemos para ti tarifas atractivas, obtén hasta 40 gigas para navegar.
                </li>
                <li>
                  <v-icon color="green" class="me-2">mdi-check-circle</v-icon>
                  Te damos recargas inmediatas, los mejores planes de celular, portabilidad rápida y segura.
                </li>
                <li>
                  <v-icon color="green" class="me-2">mdi-check-circle</v-icon>
                  Cobertura en México, E.U.A, y Canadá.
                </li>
                <li>
                  <v-icon color="green" class="me-2">mdi-check-circle</v-icon>
                  Alta velocidad de descarga.
                </li>
                <li>
                  <v-icon color="green" class="me-2">mdi-check-circle</v-icon>
                  Realiza movimientos y conoce más de tu red desde la app de G Móvil, descárgala en App Store y Google Play.
                </li>
              </ul>
            </v-sheet>
          </v-col>

          <!-- Contenedor Derecho -->
          <v-col cols="12" md="6" class="mb-4">
            <v-sheet height="100%" rounded="lg" class="pa-0 img-full-cont">
              <img 
                src="/img/image-50-full.png" 
                alt="Imagen G Móvil" 
                class="img-full"
              />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>


      <!-- Decimo Contenedor Porque elegir GMOVIL-->
      <v-container fluid>
        <h2 class="titulo-contratar">¿Cómo contratar un Plan G Móvil?</h2>

        <v-row align="stretch" justify="space-between">
          <!-- Columna izquierda -->
          <v-col cols="12" md="6">
            <v-row>
              <v-col cols="12" class="step-container">
                <v-img 
                  src="/img/pasos/icon1.png" 
                  alt="Icono Plan 1"
                  class="img-responsive"
                />
                <div class="text-container">
                  <h3>Elige la modalidad de tu preferencia.</h3>
                  <p>Escoge un <span class="resaltado">plan de telefonía móvil</span> en modalidad prepago o pospago.</p>
                </div>
              </v-col>

              <v-col cols="12" class="step-container">
                <v-img 
                  src="/img/pasos/icon2.png" 
                  alt="Icono Plan 2"
                  class="img-responsive"
                />
                <div class="text-container">
                  <h3>Escoge el plan de telefonía móvil de tu preferencia.</h3>
                  <p>Selecciona el mejor plan para ti.</p>
                </div>
              </v-col>

              <v-col cols="12" class="step-container">
                <v-img 
                  src="/img/pasos/icon3.png" 
                  alt="Icono Plan 3"
                  class="img-responsive"
                />
                <div class="text-container">
                  <h3>Verifica que tu teléfono sea compatible.</h3>
                  <p>Asegúrate de que tu dispositivo sea <span class="resaltado">compatible</span> con nuestra red.</p>
                </div>
              </v-col>
            </v-row>
          </v-col>

          <!-- Columna derecha -->
          <v-col cols="12" md="6">
            <v-row>
              <v-col cols="12" class="step-container">
                <v-img 
                  src="/img/pasos/icon4.png" 
                  alt="Icono Plan 4"
                  class="img-responsive"
                />
                <div class="text-container">
                  <h3>Si no es compatible, adquiere un nuevo equipo.</h3>
                  <p>Compra un equipo nuevo con <span class="resaltado">G Móvil</span>.</p>
                </div>
              </v-col>

              <v-col cols="12" class="step-container">
                <v-img 
                  src="/img/pasos/icon5.png" 
                  alt="Icono Plan 5"
                  class="img-responsive"
                />
                <div class="text-container">
                  <h3>Descarga la App de G Móvil.</h3>
                  <p>Disponible en App Store y Google Play.</p>
                </div>
              </v-col>

              <v-col cols="12" class="step-container">
                <v-img 
                  src="/img/pasos/icon6.png" 
                  alt="Icono Plan 6"
                  class="img-responsive"
                />
                <div class="text-container">
                  <h3>Disfruta de los beneficios de G Móvil.</h3>
                  <p>Navega con alta velocidad y disfruta de nuestra amplia cobertura.</p>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>

      <!-- Contenedor de la imagen de fondo 2 -->
      <div class="imagen-fondo-2"></div>


      <!-- Doceavo Contenedor: Dos columnas al 50% mapa-->
      <v-container fluid>
        <h2 class="titulo-map">Centros de Atención GMÓVIL</h2>

        <v-row align="stretch" class="equal-height-row flex-wrap">
          <!-- Contenedor Izquierdo con Formulario -->
          <v-col cols="12" md="6" class="mb-4">
            <v-sheet 
              height="100%" 
              rounded="lg" 
              class="pa-6 bg-white d-flex flex-column justify-center align-center"
            >
              <h2 class="titulo-container">Encuentra tu Centro de Atención</h2>
              <v-form class="form-container" style="width: 80%; max-width: 400px;">
                <v-select
                  :items="estados"
                  label="Elige el estado"
                  outlined
                  dense
                  class="mb-4"
                ></v-select>

                <v-select
                  :items="ciudades"
                  label="Elige la ciudad"
                  outlined
                  dense
                  class="mb-4"
                ></v-select>

                <v-btn color="primary" rounded block class="btn-buscar">Buscar</v-btn>
              </v-form>
            </v-sheet>
          </v-col>

          <!-- Contenedor Derecho con Mapa -->
          <v-col cols="12" md="6" class="mb-4">
            <v-sheet height="100%" rounded="lg" class="pa-0 img-full-cont-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.0676472392234!2d-99.1824691846859!3d19.432607986883824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff2f15136cb3%3A0xc47d6d14d9d9a104!2sAngel%20of%20Independence!5e0!3m2!1sen!2smx!4v1632757830916!5m2!1sen!2smx"
                width="100%"
                height="100%"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                class="mapa-iframe"
              ></iframe>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
      

      <!-- boton Contenedor -->
      <v-btn
        v-show="showScrollButton"
        @click="scrollToTop"
        icon
        color="primary"
        class="scroll-to-top"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>


    </v-main>
  </v-app>
</template>

<script setup>
import { ref, computed , onMounted, onBeforeUnmount } from 'vue';
import { useScreenSize } from '@/composables/useScreenSize';
import './styles/Porquemovil.css';
import './styles/ComoContratar.css';
import './styles/ContainerMapa.css';
import './styles/Container-img-full.css';
import './styles/Container-img-full2.css';


const { isMobile } = useScreenSize();

// Drawer y Mobile detection
const drawer = ref(false);
const menuItems = ref([
  {
    title: 'Dashboard',
    icon: 'mdi-view-dashboard',
    sublinks: ['Overview', 'Stats', 'Reports'],
  },
  {
    title: 'Messages',
    icon: 'mdi-email',
    sublinks: ['Inbox', 'Sent', 'Drafts'],
  },
  {
    title: 'Profile',
    icon: 'mdi-account',
    sublinks: ['Settings', 'Privacy', 'Logout'],
  },
  {
    title: 'Updates',
    icon: 'mdi-update',
    sublinks: ['Announcements', 'Changelog', 'Roadmap'],
  },
]);

const showScrollButton = ref(false);


// Imágenes del carrusel
const images = ref([
  { desktop: '/img/carrousel1.png', mobile: '/img/carrousel1-mb.png' },
  { desktop: '/img/carrousel2.png', mobile: '/img/carrousel2-mb.png' },
  { desktop: '/img/carrousel3.png', mobile: '/img/carrousel3-mb.png' },
  { desktop: '/img/carrousel4.png', mobile: '/img/carrousel4-mb.png' }
]);

// Datos para las Pricing Cards
const pricingCards = ref([
  { title: 'Paquete Afíliate', price: '$70', description: 'Paquete de 7 días', features: ['3 GB', 'Minutos Ilimitados'] },
  { title: 'Paquete Iníciate', price: '$80', description: 'Paquete de 7 días', features: ['10 GB', 'Minutos Ilimitados'] },
  { title: 'Paquete Enlázate', price: '$129', description: 'Paquete de 15 días', features: ['6 GB', 'Minutos Ilimitados'] },
  { title: 'Paquete Anímate', price: '$160', description: 'Paquete de 30 días', features: ['5 GB', 'Minutos Ilimitados'] },
  { title: 'Paquete Actívate', price: '$229', description: 'Paquete de 30 días', features: ['15 GB', 'Minutos Ilimitados'] },
  { title: 'Paquete Actívate Más', price: '$289', description: 'Paquete de 30 días', features: ['40 GB', 'Minutos Ilimitados'] },
  { title: 'Paquete Reveláte', price: '$2,550', description: 'Paquete de 12 meses', features: ['40 GB', 'Minutos Ilimitados'] },
  { title: 'Paquete Quédate', price: '$2,299', description: 'Paquete de 12 meses', features: ['15 GB', 'Minutos Ilimitados'] },
]);

// Filtrar los planes especiales
const specialPlans = ref(pricingCards.value.filter(plan =>
  plan.title === 'Paquete Afíliate' || plan.title === 'Paquete Anímate'
));

// Datos de las reseñas
const reviews = ref([
  {
    name: 'Laura Soto',
    image: '/img/clientes/cliente1.png',
    comment: 'La atención que me brindó el equipo de ventas fue excelente, estoy contenta.',
    rating: 5,
  },
  {
    name: 'Francisco Robles',
    image: '/img/clientes/cliente2.png',
    comment: 'Me entregaron mi nueva casa junto con una línea G Móvil gratis y tres meses con plan.',
    rating: 5,
  },
  {
    name: 'Juan Ramírez',
    image: '/img/clientes/cliente3.png',
    comment: 'Cambiaron mi línea en minutos, fueron amables y aparte salí con celular nuevo.',
    rating: 5,
  },
  {
    name: 'María Fernanda',
    image: '/img/clientes/cliente4.png',
    comment: 'Excelente servicio, me ayudaron con todas mis dudas rápidamente.',
    rating: 5,
  },
  {
    name: 'Carlos Pérez',
    image: '/img/clientes/cliente5.png',
    comment: 'Un gran servicio, muy recomendable.',
    rating: 4,
  },
]);

// Agrupar las reseñas por el tamaño de pantalla
const groupedReviews = computed(() => {
  const chunkSize = isMobile.value ? 1 : 3; // 1 en móvil, 3 en PC
  const groups = [];
  for (let i = 0; i < reviews.value.length; i += chunkSize) {
    groups.push(reviews.value.slice(i, i + chunkSize));
  }
  return groups;
});

///////////////////////// Codigo para el boton desplazamiento /////////////////////////////
const handleScroll = () => {
  showScrollButton.value = window.scrollY > 200; // Mostrar cuando haya bajado 200px
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll suave hacia arriba
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});


///////////////////////// Codigo para mapa /////////////////////////////
const estados = ref(['Sinaloa', 'Jalisco', 'CDMX', 'Nuevo León']);
const ciudades = ref(['Mazatlán', 'Guadalajara', 'Monterrey', 'CDMX']);

</script>


<style scoped>

 /* Evita el colapso de márgenes */
 .v-container {
  overflow: hidden;
}


/*------------------------- Estilos para los botones de las cards------------------ */
@media (max-width: 600px) {

  ::v-deep(.v-btn--variant-elevated, .v-btn--variant-flat) {
    color: #000000 !important; /* Icono negro */
    background-color: #ffffff !important; /* Fondo blanco */
  }
}

/* Modo PC: Botones negros con íconos blancos */
@media (min-width: 601px) {

  ::v-deep(.v-btn--variant-elevated, .v-btn--variant-flat) {
    color: #ffffff !important; /* Icono blanco */
    background-color: rgba(0, 0, 0, 0.9) !important; /* Fondo negro */
    border-radius: 50%; /* Asegurar botón redondo */
  }

  ::v-deep(.v-btn--variant-elevated:hover, .v-btn--variant-flat:hover) {
    background-color: rgba(0, 0, 0, 0.7) !important; /* Fondo más claro al pasar el ratón */
  }
}

/*------------------------- Estilos para Estilo del segundo contenedor ------------------ */
/* Fondo suave para el sheet */
.bg-light {
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
}

/* Estilo del título */
h2 {
  font-size: 2rem; /* Tamaño más grande para el título */
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #333;
}

/* Estilo del texto */
.body-text {
  font-size: 1.25rem; /* Texto más grande */
  line-height: 1.7;
  text-align: justify;
  color: #4a4a4a;
}


/*-------------------------Css adicional para planes especiales:------------------ */

::v-deep(.v-carousel.carousel-container) {
  height: auto !important; /* Ajusta a la altura de su contenido */
  max-height: 100%; /* Opcional, limita la altura máxima */
}


.especial-cards-container {
  gap: 24px; /* Espacio entre las columnas */
}

@media (max-width: 600px) {
  .carousel-container {
    margin-bottom: 16px;
  }
}

/*-------------------------Sexto ocntainer:-------------------------- */
.body-text-6c{
  font-size: 1rem; /* Texto más grande */
  line-height: 1.7;
  text-align: justify;
  color: #4a4a4a;

}


/*-------------------------Css para el boton de desplazamiento:-------------------------- */ 
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  background-color: #1e88e5;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: opacity 0.3s ease;
}

.scroll-to-top:hover {
  background-color: #1565c0;
}


</style>
