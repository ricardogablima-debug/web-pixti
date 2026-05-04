// ==========================
// MOTOR LÓGICO PIxTI
// ==========================
const fases = document.querySelectorAll(".fase");
const descripcion = document.getElementById("ciclo-descripcion");
let index = 0;
let autoPlay = true;

const translations = {
  es: {
    hero_title: "PIxTI — Entrenamiento de Resistencia Interna",
    hero_desc: "Modelo neuromuscular basado en la tensión generada endógenamente y la oposición controlada.",
    fase1: "Activación", fase1_desc: "Inicio de la señal neural consciente.",
    fase2: "Tensión", fase2_desc: "Reclutamiento de unidades motoras sin carga externa.",
    fase3: "Oposición", fase3_desc: "Generación de torque interno contrapuesto.",
    fase4: "Modulación", fase4_desc: "Ajuste del Tantus Angular en tiempo real.",
    fase5: "Movimiento", fase5_desc: "Transformación de la isometría en isotonía continua.",
    // ... resto de traducciones
  },
  en: {
    hero_title: "PIxTI — Internal Resistance Training System",
    hero_desc: "Neuromuscular model based on internally generated tension and controlled opposition.",
    fase1: "Activation", fase1_desc: "Onset of conscious neural signaling.",
    fase2: "Tension", fase2_desc: "Motor unit recruitment without external load.",
    fase3: "Opposition", fase3_desc: "Generation of opposing internal torque.",
    fase4: "Modulation", fase4_desc: "Real-time adjustment of the Tantus Angular.",
    fase5: "Movement", fase5_desc: "Transformation of isometrics into continuous isotony.",
    // ... resto de traducciones
  }
};

function updateCycleContent(i, lang) {
  const key = fases[i].getAttribute("data-text-key");
  if (translations[lang][key]) {
    descripcion.style.opacity = 0;
    setTimeout(() => {
      descripcion.textContent = translations[lang][key];
      descripcion.style.opacity = 1;
    }, 200);
  }
}

function activarFase(i) {
  const lang = localStorage.getItem("lang") || "es";
  fases.forEach(f => f.classList.remove("activa"));
  fases[i].classList.add("activa");
  updateCycleContent(i, lang);
}

// Control de Animación
setInterval(() => {
  if (autoPlay) {
    index = (index + 1) % fases.length;
    activarFase(index);
  }
}, 3500);

fases.forEach((fase, i) => {
  fase.addEventListener("click", () => {
    autoPlay = false; // Detener animación al interactuar
    index = i;
    activarFase(index);
    setTimeout(() => { autoPlay = true; }, 10000); // Reanudar tras 10s de inactividad
  });
});

// Inicialización de Idioma
function setLang(lang) {
  localStorage.setItem("lang", lang);
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
  activarFase(index); // Refrescar el ciclo al cambiar idioma
}
