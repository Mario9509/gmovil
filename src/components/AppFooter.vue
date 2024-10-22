<template>
  <footer class="footer">
  <div class="footer-container">
    <div class="footer-top">
      <div class="footer-logo">
         <img :src="logoFooter" alt="Gmovil Logo" />
      </div>
      <div class="footer-links">
      <!--   <a href="#">NOSOTROS</a> -->
        <a href="#">ACERCA DE GMOVIL</a>
        <a href="#">BLOG</a>
        <a href="#">AVISO DE PRIVACIDAD</a>
        <a href="#">TÉRMINOS DE SERVICIO</a>
        <a href="#">FACTURACION</a>
        <a href="#">PORTABILIDAD</a>
        <a href="#">CONTACTANOS</a>
      
      </div>
      <div class="footer-social">
     <v-row class="apoco">
    <v-col>
      <a href="https://x.com/gmoviloficial">
        <v-icon>mdi-twitter</v-icon>
      </a>
    </v-col>
    <v-col>
      <a href="#">
        <v-icon>mdi-instagram</v-icon>
      </a>
    </v-col>

    <v-col>
      <a href="https://www.linkedin.com/company/gmoviloficialmx">
        <v-icon>mdi-linkedin</v-icon>
      </a>
    </v-col>
    <v-col>
      <a href="https://www.facebook.com/gmovil.oficialmx">
        <v-icon>mdi-facebook</v-icon>
      </a>
    </v-col>
    <v-col>
      <a href="#">
        <v-icon>mdi-youtube</v-icon>
      </a>
    </v-col>
    <v-col>
      <a href="https://api.whatsapp.com/send?phone=5216693834182">
        <v-icon>mdi-whatsapp</v-icon>
      </a>
    </v-col>
  </v-row>
      </div>
    </div>
    <div class="footer-bottom">
      <p>Preferencias de cookies | &copy; 2024 Gmovil, Inc. Todos los derechos reservados.</p>
    </div>
  </div>
</footer>


  
</template>

<script setup>
import logoFooter from '../assets/logo_gmovil_footer.webp'
import '@fortawesome/fontawesome-free/css/all.css'


</script>
  
<style scoped>
/* CSS */
/* CSS */
.footer {
  background-color: #1c1c1c;
  color: #fff;
  padding: 3rem;
  font-family: Arial, sans-serif;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.footer-logo img {
  height: 50px;
}

.footer-links {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding-bottom: 1rem;
}

.footer-links a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

.footer-links a:hover {
  color: #ff8610;
}

.footer-social {
  display: flex;
  gap: 15px;
}

.footer-social a {
  color: #fff;
  font-size: 18px;
  text-decoration: none;
}

.footer-social a:hover {
  color: #ff8610;
}

.footer-bottom {
  text-align: center;
  border-top: 1px solid #333;
  padding-top: 10px;
}

.footer-bottom p {
  margin: 0;
  font-size: 14px;
}


</style>