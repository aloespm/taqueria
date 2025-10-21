document.addEventListener("DOMContentLoaded", () => {
  const ofertasScreen = document.getElementById("ofertas-screen");
  const mainContainer = document.getElementById("main-container");
  const progressCircle = document.querySelector(".progress-circle");
  const timerDisplay = document.querySelector(".timer");

  let mostrarOfertas = true;
  let tiempoRestante = 10;

  function actualizarTemporizador() {
    if (tiempoRestante <= 0) {
      tiempoRestante = 10;
    }

    timerDisplay.textContent = tiempoRestante;
    tiempoRestante--;
  }

  function cambiarPantalla() {
    if (mostrarOfertas) {
      ofertasScreen.style.display = "none";
      mainContainer.classList.remove("hidden");
    } else {
      ofertasScreen.style.display = "flex";
      mainContainer.classList.add("hidden");

      progressCircle.style.animation = "none";
      void progressCircle.offsetWidth;
      progressCircle.style.animation = "rotateCircle 10s linear infinite";
    }

    mostrarOfertas = !mostrarOfertas;
  }


  actualizarTemporizador();

  // Luego continuar con la cuenta cada segundo
  setInterval(actualizarTemporizador, 1000);

  // Mostrar pantalla de ofertas al inicio
  ofertasScreen.style.display = "flex";
  mainContainer.classList.add("hidden");

  setInterval(cambiarPantalla, 10000);
});
