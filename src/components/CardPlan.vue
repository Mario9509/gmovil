<template>
    <v-card class="pricing-card" rounded="lg" outlined>
      <div :class="`card-header bg-${index % 2 === 0 ? 'primary' : 'secondary'}`">
        <v-card-title class="text-white">{{ card.title }}</v-card-title>
      </div>
      <v-card-subtitle class="mb-2 text-h4 text-center">
        {{ card.price }} <span class="text-body-2">/mo</span>
      </v-card-subtitle>
      <v-card-text class="flex-grow-1 text-center">
        <p>{{ card.description }}</p>
        <h6>Incluye:</h6>
        <v-list dense>
          <v-list-item v-for="(feature, i) in card.features" :key="i">
            <v-list-item-icon>
              <v-icon color="green">mdi-check</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ feature }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card-text>
      <v-card-actions class="card-footer">
        <v-btn class="foo-pc" color="accent" rounded block>¡Más información!</v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script>
  export default {
    props: {
      card: {
        type: Object,
        required: true,
      },
      index: {
        type: Number,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>


/* Encabezado con colores */
/* Contenedor del carrusel */
.carousel-container {
  width: 100%;
  height: 100%;
}

/* Cada card ocupa todo el espacio del carrusel */
.v_carousel_item_mb {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

/* Estilo general de las cards */
.pricing-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 400px;
  width: 100%; /* Ocupa todo el ancho del contenedor */
  max-width: 380px; /* Ajuste máximo para evitar problemas de espacio */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: none;
  border-radius: 12px;
  text-align: center;
  margin: 0 auto; /* Centrar horizontalmente */
  word-wrap: break-word;
}

/* Header dinámico */
.card-header {
  padding: 16px;
  text-align: center;
  margin-bottom: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bg-primary {
  background-color: #1e88e5;
}
.bg-secondary {
  background-color: #43a047;
}

/* Footer oscuro */
.card-footer {
  background-color: #212121;
  padding: 12px;
}

/* Estilos para el slide-group */
.slide-group-custom {
  padding: 0;
  overflow: hidden;
  width: 100%;
}

/* Ajustes para los botones: Redondos y tamaño consistente */
::v-deep(.v-btn--icon) {
  border-radius: 50%; /* Botón redondo */
  min-width: 40px;
  min-height: 40px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}

.foo-pc{
  background-color: #1e88e5;
}

.foo-pc:hover{
  background-color: #333;
}

.titulo-planes {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 16px;
  color: #1e88e5;
}


/* Modo móvil: Botones blancos con íconos negros */
@media (max-width: 600px) {
  .v_carousel_item_mb {
    padding: 0; /* Elimina padding para mayor espacio */
  }

  .pricing-card {
    width: 90%; /* Ocupa el 90% del ancho de la pantalla */
    max-width: none; /* Elimina el límite de ancho */
  }

}

/* Modo PC: Botones negros con íconos blancos */
@media (min-width: 601px) {
  .justify-center {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px; /* Espacio entre las cards */
  }

  ::v-deep(.v-slide-item) {
    flex: 1 1 calc(33.33% - 16px); /* Cada tarjeta ocupa un tercio del ancho */
    margin: 8px;
    max-width: 350px; /* Asegura ancho máximo */
  }

  .pricing-card {
    height: 320px; /* Reducir un poco la altura */
    width: 300px;
  } 
}

  </style>
  