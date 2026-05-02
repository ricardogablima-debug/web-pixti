const fases = document.querySelectorAll(".fase");
const descripcion = document.getElementById("ciclo-descripcion");

fases.forEach(fase => {
  fase.addEventListener("click", () => {

    // reset visual
    fases.forEach(f => f.classList.remove("activa"));

    // activar la seleccionada
    fase.classList.add("activa");

    // cambiar texto
    descripcion.textContent = fase.getAttribute("data-text");
  });
});
