const fases = document.querySelectorAll(".fase");
const descripcion = document.getElementById("ciclo-descripcion");

fases.forEach(fase => {
  fase.addEventListener("click", () => {
    descripcion.textContent = fase.getAttribute("data-text");
  });
});
