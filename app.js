const express = require('express');
const path = require('path');
const app = express();

// Heroku asigna el puerto automáticamente
const PORT = process.env.PORT || 3000;

// Le decimos al servidor que la carpeta actual tiene los archivos estáticos
app.use(express.static(__dirname));

// Cuando entren a la página principal, mostramos el index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Arrancamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor activo en el puerto ${PORT}`);
});