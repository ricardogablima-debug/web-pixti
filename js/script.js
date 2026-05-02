const fases = document.querySelectorAll(".fase");
const descripcion = document.getElementById("ciclo-descripcion");

let index = 0;

function activarFase(i) {
  fases.forEach(f => f.classList.remove("activa"));

  fases[i].classList.add("activa");
  descripcion.textContent = fases[i].getAttribute("data-text");
}

// animación automática
setInterval(() => {
  activarFase(index);
  index = (index + 1) % fases.length;
}, 2000);

// interacción manual (no se pierde)
fases.forEach((fase, i) => {
  fase.addEventListener("click", () => {
    index = i;
    activarFase(index);
  });
});
