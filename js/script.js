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
    // HERO
    hero_title: "Entrenamiento desde adentro hacia afuera",
    hero_desc: "Un modelo de entrenamiento basado en la generación y control de resistencia interna mediante oposición neuromuscular.",
    hero_phrase: "La carga se construye desde el propio cuerpo.",

    // MENÚ
    menu_method: "Método",
    menu_cycle: "Ciclo",
    menu_concepts: "Conceptos",
    menu_science: "Ciencia",
    menu_author: "Autor",

    // MÉTODO
    metodo_title: "¿Qué es PIxTI?",
    metodo_p1: "PIxTI (Principios Isométricos para la Transformación Isotónica) es un sistema de entrenamiento neuromuscular basado en la generación consciente de tensión interna.",
    metodo_p2: "El método integra activación muscular, control neuromuscular y oposición interna para producir movimiento bajo condiciones de tensión continua.",
    metodo_l1: "Se genera tensión",
    metodo_l2: "Se sostiene esa tensión",
    metodo_l3: "Se produce movimiento dentro de esa tensión",

    // CONCEPTOS
    concepts_title: "Conceptos clave",
    fixed_point_title: "Punto fijo",
    fixed_point_desc: "El punto fijo organiza la dirección de la tensión.",
    internal_load_title: "Pesa interna",
    internal_load_desc: "El cuerpo genera su propia resistencia.",
    cocontraction_title: "Co-contracción",
    cocontraction_desc: "La resistencia se organiza a nivel del sistema."
  },

  en: {
    // HERO
    hero_title: "Training from the inside out",
    hero_desc: "A training model based on the generation and control of internal resistance through neuromuscular opposition.",
    hero_phrase: "Load is built from within the body.",

    // MENÚ
    menu_method: "Method",
    menu_cycle: "Cycle",
    menu_concepts: "Concepts",
    menu_science: "Science",
    menu_author: "Author",

    // MÉTODO
    metodo_title: "What is PIxTI?",
    metodo_p1: "PIxTI (Isometric Principles for Isotonic Transformation) is a neuromuscular training system based on the conscious generation of internal tension.",
    metodo_p2: "The method integrates muscle activation, neuromuscular control, and internal opposition to produce movement under continuous tension.",
    metodo_l1: "Tension is generated",
    metodo_l2: "Tension is sustained",
    metodo_l3: "Movement occurs within that tension",

    // CONCEPTOS
    concepts_title: "Key concepts",
    fixed_point_title: "Fixed point",
    fixed_point_desc: "The fixed point organizes the direction of tension.",
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
  // guardar idioma
  localStorage.setItem("lang", lang);

  const elements = document.querySelectorAll("[data-key]");
  
  elements.forEach(el => {
    const key = el.getAttribute("data-key");

    // texto visible
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }

    // descripciones del ciclo
    if (el.dataset.textKey && translations[lang][el.dataset.textKey]) {
      el.setAttribute("data-text", translations[lang][el.dataset.textKey]);
    }
  });

  // actualizar descripción activa del ciclo
  if (fases[index]) {
    descripcion.textContent = fases[index].getAttribute("data-text");
  }
}
// idioma inicial
const savedLang = localStorage.getItem("lang") || "es";
setLang(savedLang);
cycle_title: "Cómo funciona PIxTI",
  cycle_title: "How PIxTI works",
  // DIFERENCIAL
diff_title: "Method differential",

trad_title: "Traditional training",
trad_l1: "External load",
trad_l2: "Mechanical variation",
trad_l3: "Equipment dependency",

pixti_l1: "Internal resistance",
pixti_l2: "Continuous tension",
pixti_l3: "Neuromuscular control",

diff_phrase: "Load is built from the system",

// VECTOR
vector_title: "Force vector: internal vs external",

vector_trad: "Traditional model",
vector_trad_p1: "External load applied to the body",
vector_trad_p2: "Force comes from outside",

vector_pixti_p1: "Generation of internal tension",
vector_pixti_p2: "Force originates within the system",

vector_phrase: "Load is built from within the body",

// CIENCIA
science_title: "Scientific basis",

science_p1: "The PIxTI method is based on principles widely studied in scientific literature:",

science_l1: "Muscle co-contraction",
science_l2: "Neuromuscular control",
science_l3: "Proprioception",
science_l4: "Isometric activation",
science_l5: "Intermuscular coordination",

science_p2: "Studies have shown that simultaneous activation of multiple muscle groups allows regulation of joint stability, force production, and movement control."
