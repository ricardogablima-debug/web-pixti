// Configuración del Gráfico Comparativo
const ctx = document.getElementById('intensityChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['0°', '15°', '30°', '45°', '60°', '75°', '90°', '105°', '120°', '135°', '150°', '165°', '180°'],
        datasets: [{
            label: 'Tradicional (Carga Externa)',
            data: [10, 20, 35, 55, 75, 90, 100, 90, 75, 55, 35, 20, 10],
            borderColor: '#E53935',
            borderWidth: 2,
            tension: 0.4,
            pointRadius: 0
        }, {
            label: 'PIxTI (Resistencia Interna)',
            data: [80, 85, 90, 90, 95, 95, 95, 95, 90, 90, 85, 80, 80],
            borderColor: '#00e5ff',
            borderWidth: 4,
            tension: 0.3,
            pointRadius: 0,
            fill: true,
            backgroundColor: 'rgba(0, 229, 255, 0.05)'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { labels: { color: '#fff', font: { family: 'Plus Jakarta Sans' } } }
        },
        scales: {
            y: { ticks: { color: '#666' }, grid: { color: 'rgba(255,255,255,0.05)' }, title: { display: true, text: 'Intensidad / Torque (%)', color: '#888' } },
            x: { ticks: { color: '#666' }, grid: { display: false } }
        }
    }
});

// Animación de aparición suave
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.pilar-card, .glass-card').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s ease-out";
    observer.observe(el);
});
