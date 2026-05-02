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
const translations = {
  es: {
  hero_title: "Entrenamiento desde adentro hacia afuera",
  hero_desc: "Un modelo de entrenamiento basado en la generación y control de resistencia interna mediante oposición neuromuscular.",
  hero_phrase: "La carga se construye desde el propio cuerpo."
},
en: {
  hero_title: "Training from the inside out",
  hero_desc: "A training model based on the generation and control of internal resistance through neuromuscular opposition.",
  hero_phrase: "Load is built from within the body."
}

function setLang(lang) {
  const elements = document.querySelectorAll("[data-key]");
  
  elements.forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}
const translations = {
  es: {
    hero_title: "Entrenamiento desde adentro hacia afuera"
  },
  en: {
    hero_title: "Training from the inside out"
  }
};

function setLang(lang) {
  const elements = document.querySelectorAll("[data-key]");
  
  elements.forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}
