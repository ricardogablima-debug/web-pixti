// ==========================
// CICLO PIxTI
// ==========================
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

// interacción manual
fases.forEach((fase, i) => {
  fase.addEventListener("click", () => {
    index = i;
    activarFase(index);
  });
});

// ==========================
// TRADUCCIONES
// ==========================
const translations = {

  es: {
    hero_title: "Entrenamiento desde adentro hacia afuera",
    hero_desc: "Un modelo de entrenamiento basado en la generación y control de resistencia interna mediante oposición neuromuscular.",
    hero_phrase: "La carga se construye desde el propio cuerpo.",

    menu_method: "Método",
    menu_cycle: "Ciclo",
    menu_concepts: "Conceptos",
    menu_science: "Ciencia",
    menu_author: "Autor",

    metodo_title: "¿Qué es PIxTI?",
    metodo_p1: "PIxTI es un sistema de entrenamiento neuromuscular basado en la generación consciente de tensión interna.",
    metodo_p2: "Integra activación, control neuromuscular y oposición interna para producir movimiento bajo tensión continua.",

    concepts_title: "Conceptos clave",
    fixed_point_title: "Punto fijo",
    fixed_point_desc: "Organiza la dirección de la tensión.",
    internal_load_title: "Pesa interna",
    internal_load_desc: "El cuerpo genera su propia resistencia.",
    cocontraction_title: "Co-contracción",
    cocontraction_desc: "La resistencia se organiza a nivel del sistema."
  },

  en: {
    hero_title: "Training from the inside out",
    hero_desc: "A neuromuscular training model based on internally generated resistance.",
    hero_phrase: "The body generates its own resistance.",

    menu_method: "Method",
    menu_cycle: "Cycle",
    menu_concepts: "Concepts",
    menu_science: "Science",
    menu_author: "Author",

    metodo_title: "What is PIxTI?",
    metodo_p1: "PIxTI is a neuromuscular training system based on the conscious generation of internal tension.",
    metodo_p2: "It integrates activation, neuromuscular control, and internal opposition to produce movement under continuous tension.",

    concepts_title: "Key concepts",
    fixed_point_title: "Fixed point",
    fixed_point_desc: "Organizes the direction of tension.",
    internal_load_title: "Internal load",
    internal_load_desc: "The body generates its own resistance.",
    cocontraction_title: "Co-contraction",
    cocontraction_desc: "Resistance is organized at the system level."
  }

};

// ==========================
// CAMBIO DE IDIOMA
// ==========================
function setLang(lang) {

  localStorage.setItem("lang", lang);

  const elements = document.querySelectorAll("[data-key]");
  
  elements.forEach(el => {
    const key = el.getAttribute("data-key");

    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }

    if (el.dataset.textKey && translations[lang][el.dataset.textKey]) {
      el.setAttribute("data-text", translations[lang][el.dataset.textKey]);
    }
  });

  // actualizar ciclo
  if (fases[index]) {
    descripcion.textContent = fases[index].getAttribute("data-text");
  }

  // botón activo
  document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.classList.remove("active");
  });

  document
    .querySelector(`.lang-switch button[onclick="setLang('${lang}')"]`)
    ?.classList.add("active");
}

// idioma inicial
const savedLang = localStorage.getItem("lang") || "es";
setLang(savedLang);
