const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// --- CONFIGURACIÓN DE URLS LIMPIAS ---
// Esta línea le dice a Express que si alguien busca una página sin extensión,
// intente buscar automáticamente el archivo .html correspondiente.
app.use(express.static(__dirname, { extensions: ['html'] }));


// --- REDIRECCIONES PARA GOOGLE (Páginas viejas a nuevas sin .html) ---
app.get('/servicios/auditoria', (req, res) => res.redirect(301, '/auditoria'));
app.get('/servicios/impuestos', (req, res) => res.redirect(301, '/impuesto'));
app.get('/servicios/contabilidad', (req, res) => res.redirect(301, '/contabilidad'));
app.get('/servicios/consultoria', (req, res) => res.redirect(301, '/consultoria'));
app.get('/servicios/legal', (req, res) => res.redirect(301, '/legal'));

// Otros enlaces comunes
app.get('/carreras', (req, res) => res.redirect(301, '/vacantes'));
app.get('/quienes-somos', (req, res) => res.redirect(301, '/nosotros'));


// Página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor activo y con URLs limpias en el puerto ${PORT}`);
});
