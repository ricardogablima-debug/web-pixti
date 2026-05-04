// ==========================
// ESTADO GLOBAL
// ==========================
const fases = document.querySelectorAll(".fase");
const descripcion = document.getElementById("ciclo-descripcion");

let index = 0;
let currentLang = localStorage.getItem("lang") || "es";

// ==========================
// TRADUCCIONES
// ==========================
const translations = {

  // ==========================
  // ESPAÑOL
  // ==========================
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

    // BOTONES
    btn_explore: "Explorar el método",
    btn_start: "Comenzar ahora",

    // MÉTODO
    metodo_title: "¿Qué es PIxTI?",
    metodo_p1: "PIxTI (Principios Isométricos para la Transformación Isotónica) es un sistema de entrenamiento neuromuscular basado en la generación consciente de tensión interna.",
    metodo_p2: "El método integra activación muscular, control neuromuscular y oposición interna para producir movimiento bajo condiciones de tensión continua.",
    metodo_l1: "Se genera tensión",
    metodo_l2: "Se sostiene la tensión",
    metodo_l3: "El movimiento ocurre dentro de esa tensión",

    // CICLO
    cycle_title: "Cómo funciona PIxTI",

    fase1: "Activación isométrica",
    fase1_desc: "Generación de tensión contra una referencia estable",

    fase2: "Tensión interna",
    fase2_desc: "Acumulación de energía interna sin desplazamiento visible",

    fase3: "Oposición",
    fase3_desc: "Resistencia generada por el propio sistema neuromuscular",

    fase4: "Modulación",
    fase4_desc: "Regulación consciente del esfuerzo durante el movimiento",

    fase5: "Movimiento",
    fase5_desc: "Movimiento generado dentro de un entorno de tensión constante",

    ciclo_interaccion: "Interactuá con cada fase para comprender el proceso.",
    ciclo_frase: "La isometría se transforma en movimiento.",

    // CONCEPTOS
    concepts_title: "Conceptos clave",

    fixed_point_title: "Punto fijo",
    fixed_point_desc: "El punto fijo organiza la dirección y el sentido de la tensión generada.",

    internal_load_title: "Pesa interna",
    internal_load_desc: "El cuerpo actúa como fuente activa de resistencia, sin depender de cargas externas.",

    cocontraction_title: "Co-contracción",
    cocontraction_desc: "La activación simultánea de grupos musculares permite generar estabilidad, control y resistencia interna.",

    // DIFERENCIAL
    diff_title: "Diferencial del método",

    trad_title: "Entrenamiento tradicional",
    trad_l1: "Carga externa",
    trad_l2: "Variación mecánica",
    trad_l3: "Dependencia del equipamiento",

    pixti_title: "PIxTI",
    pixti_l1: "Resistencia interna",
    pixti_l2: "Tensión continua",
    pixti_l3: "Control neuromuscular",

    diff_phrase: "La carga se construye desde el sistema.",

    // VECTOR
    vector_title: "Vector de fuerza: interno vs externo",

    vector_trad: "Modelo tradicional",
    vector_trad_p1: "Carga externa aplicada al cuerpo",
    vector_trad_p2: "La fuerza se origina fuera del sistema",

    vector_pixti: "PIxTI",
    vector_pixti_p1: "Generación de tensión interna",
    vector_pixti_p2: "La fuerza se origina en el sistema",

    vector_phrase: "La carga se construye desde el propio cuerpo.",

    // CIENCIA
    science_title: "Base científica",

    science_p1: "El método PIxTI se fundamenta en principios ampliamente estudiados en la literatura científica:",

    science_l1: "Co-contracción muscular",
    science_l2: "Control neuromuscular",
    science_l3: "Propiocepción",
    science_l4: "Activación isométrica",
    science_l5: "Coordinación intermuscular",

    science_p2: "La evidencia científica muestra que la activación simultánea de múltiples grupos musculales permite regular la estabilidad articular, la producción de fuerza y el control del movimiento.",

    // AUTOR
    author_title: "Autor",
    author_role: "Creador del Método PIxTI"
  },

  // ==========================
  // ENGLISH
  // ==========================
  en: {

    // HERO
    hero_title: "Training from the inside out",
    hero_desc: "A training model based on the generation and control of internal resistance through neuromuscular opposition.",
    hero_phrase: "Load is built from within the body.",

    // MENU
    menu_method: "Method",
    menu_cycle: "Cycle",
    menu_concepts: "Concepts",
    menu_science: "Science",
    menu_author: "Author",

    // BUTTONS
    btn_explore: "Explore the method",
    btn_start: "Start now",

    // METHOD
    metodo_title: "What is PIxTI?",
    metodo_p1: "PIxTI (Isometric Principles for Isotonic Transformation) is a neuromuscular training system based on the conscious generation of internal tension.",
    metodo_p2: "The method integrates muscle activation, neuromuscular control, and internal opposition to produce movement under continuous tension.",
    metodo_l1: "Tension is generated",
    metodo_l2: "Tension is sustained",
    metodo_l3: "Movement occurs within that tension",

    // CYCLE
    cycle_title: "How PIxTI works",

    fase1: "Isometric activation",
    fase1_desc: "Generation of tension against a stable reference",

    fase2: "Internal tension",
    fase2_desc: "Accumulation of internal energy without visible displacement",

    fase3: "Opposition",
    fase3_desc: "Resistance generated by the neuromuscular system itself",

    fase4: "Modulation",
    fase4_desc: "Conscious regulation of effort during movement",

    fase5: "Movement",
    fase5_desc: "Movement generated within a constant tension environment",

    ciclo_interaccion: "Interact with each phase to understand the process.",
    ciclo_frase: "Isometry transforms into movement.",

    // CONCEPTS
    concepts_title: "Key concepts",

    fixed_point_title: "Fixed point",
    fixed_point_desc: "The fixed point defines the direction and orientation of generated tension.",

    internal_load_title: "Internal load",
    internal_load_desc: "The body acts as an active source of resistance without relying on external loads.",

    cocontraction_title: "Co-contraction",
    cocontraction_desc: "Simultaneous activation of muscle groups enables stability, control, and internal resistance.",

    // DIFFERENTIAL
    diff_title: "Method differential",

    trad_title: "Traditional training",
    trad_l1: "External load",
    trad_l2: "Mechanical variation",
    trad_l3: "Equipment dependency",

    pixti_title: "PIxTI",
    pixti_l1: "Internal resistance",
    pixti_l2: "Continuous tension",
    pixti_l3: "Neuromuscular control",

    diff_phrase: "Load is built from the system.",

    // VECTOR
    vector_title: "Force vector: internal vs external",

    vector_trad: "Traditional model",
    vector_trad_p1: "External load applied to the body",
    vector_trad_p2: "Force originates outside the system",

    vector_pixti: "PIxTI",
    vector_pixti_p1: "Generation of internal tension",
    vector_pixti_p2: "Force originates within the system",

    vector_phrase: "Load is built from within the body.",

    // SCIENCE
    science_title: "Scientific basis",

    science_p1: "The PIxTI method is grounded in principles widely studied in scientific literature:",

    science_l1: "Muscle co-contraction",
    science_l2: "Neuromuscular control",
    science_l3: "Proprioception",
    science_l4: "Isometric activation",
    science_l5: "Intermuscular coordination",

    science_p2: "Scientific evidence shows that the simultaneous activation of multiple muscle groups enables regulation of joint stability, force production, and movement control.",

    // AUTHOR
    author_title: "Author",
    author_role: "Creator of the PIxTI Method"
  }

};
// ==========================
// CICLO (LÓGICA)
// ==========================
function activarFase(i) {
  fases.forEach(f => f.classList.remove("activa"));

  if (!fases[i]) return;

  fases[i].classList.add("activa");
  descripcion.textContent = fases[i].getAttribute("data-text");
}

// auto-play
setInterval(() => {
  activarFase(index);
  index = (index + 1) % fases.length;
}, 2000);

// click manual
fases.forEach((fase, i) => {
  fase.addEventListener("click", () => {
    index = i;
    activarFase(index);
  });
});

// ==========================
// CAMBIO DE IDIOMA
// ==========================
function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);

  const elements = document.querySelectorAll("[data-key]");

  elements.forEach(el => {
    const key = el.getAttribute("data-key");

    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }

    // actualizar descripciones del ciclo
    if (el.dataset.textKey && translations[lang][el.dataset.textKey]) {
      el.setAttribute("data-text", translations[lang][el.dataset.textKey]);
    }
  });

// ==========================
// BOTÓN ACTIVO (UI)
// ==========================
document.querySelectorAll(".lang-switch button").forEach(btn => {
  btn.classList.remove("active");

  if (btn.dataset.lang === lang) {
    btn.classList.add("active");
  }
});
  
// ==========================
// HTML LANG (SEO)
// ==========================
document.documentElement.lang = lang;

  // refrescar fase activa
  activarFase(index);
}

// ==========================
// INIT
// ==========================
setLang(currentLang);
activarFase(index);
