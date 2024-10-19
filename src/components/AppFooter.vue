<template>
  <footer class="footer">
  <div class="footer-container">
    <div class="footer-top">
      <div class="footer-logo">
        <!-- <img src="riot-logo.png" alt="Riot Games Logo"> -->
      </div>
      <div class="footer-links">
        <a href="#">PRENSA</a>
        <a href="#">SEGURIDAD</a>
        <a href="#">LEGAL</a>
        <a href="#">AVISO DE PRIVACIDAD</a>
        <a href="#">TÉRMINOS DE SERVICIO</a>
        <a href="#">ASISTENCIA AL JUGADOR</a>
        <a href="#">VERIFICAR EN LÍNEA</a>
        <a href="#">ACCESIBILIDAD</a>
      </div>
      <div class="footer-social">
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-instagram"></i></a>
        <a href="#"><i class="fa fa-tiktok"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-youtube"></i></a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>Preferencias de cookies | &copy; 2024 Riot Games, Inc. Todos los derechos reservados.</p>
    </div>
  </div>
</footer>


  
</template>
  
<style scoped>
/* CSS */
/* CSS */
.footer {
  background-color: #1c1c1c;
  color: #fff;
  padding: 20px 0;
  font-family: Arial, sans-serif;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
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
  color: #50a3ea;
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