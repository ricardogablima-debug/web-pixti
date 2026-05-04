const translations = {
    es: {
        menu_method: "Método",
        hero_title: "PIxTI — Sistema de Entrenamiento de Resistencia Interna",
        hero_phrase: "El cuerpo genera su propia resistencia mediante coherencia de tensión.",
        btn_explore: "Explorar Método",
        fase1_desc: "Activación: Reclutamiento inicial de unidades motoras.",
        fase2_desc: "Tensión: Estabilización isométrica del complejo articular.",
        fase3_desc: "Oposición: Generación de fuerza agonista-antagonista.",
        fase4_desc: "Modulación: Ajuste del Tantus Angular según el objetivo.",
        fase5_desc: "Movimiento: Transición fluida a la isotonía continua.",
        science_title: "Evidencia y Artículos Científicos"
    },
    en: {
        menu_method: "Method",
        hero_title: "PIxTI — Internal Resistance Training System",
        hero_phrase: "The body generates its own resistance through tension coherence.",
        btn_explore: "Explore Method",
        fase1_desc: "Activation: Initial motor unit recruitment.",
        fase2_desc: "Tension: Isometric stabilization of the joint complex.",
        fase3_desc: "Opposition: Generation of agonist-antagonist force.",
        fase4_desc: "Modulation: Adjusting the Tantus Angular per objective.",
        fase5_desc: "Movement: Fluid transition to continuous isotony.",
        science_title: "Evidence & Scientific Papers"
    }
};

function setLang(lang) {
    // Actualizar botones de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Cambiar textos con data-key
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

// Interacción de las fases del Ciclo
document.querySelectorAll('.fase').forEach(fase => {
    fase.addEventListener('click', function() {
        const desc = this.getAttribute('data-desc');
        const descBox = document.getElementById('ciclo-descripcion');
        
        descBox.style.opacity = 0;
        setTimeout(() => {
            descBox.textContent = desc;
            descBox.style.opacity = 1;
            descBox.style.color = "#0070f3";
            descBox.style.fontWeight = "bold";
        }, 200);
    });
});

// Animación de entrada al hacer scroll
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => observer.observe(section));

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    setLang('es');
    console.log("PIxTI System Initialized | 2026");
});
