const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Servir archivos estáticos
app.use(express.static(__dirname));

// --- MAPEO DE ENLACES VIEJOS A PÁGINAS NUEVAS ---

// Redirigir la sección de servicios a las nuevas páginas
app.get('/servicios/auditoria', (req, res) => res.redirect('/auditoria.html'));
app.get('/servicios/impuestos', (req, res) => res.redirect('/impuesto.html'));
app.get('/servicios/contabilidad', (req, res) => res.redirect('/contabilidad.html'));
app.get('/servicios/consultoria', (req, res) => res.redirect('/consultoria.html'));
app.get('/servicios/legal', (req, res) => res.redirect('/legal.html'));

// Otros enlaces comunes de Google
app.get('/servicios', (req, res) => res.redirect('/index.html#servicios'));
app.get('/carreras', (req, res) => res.redirect('/vacantes.html'));
app.get('/quienes-somos', (req, res) => res.redirect('/nosotros.html'));

// Página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// --- FIN DEL MAPEO ---

app.listen(PORT, () => {
    console.log(`Servidor activo en el puerto ${PORT}`);
});
