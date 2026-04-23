const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Banco de dados em memória (limpa se o Render reiniciar)
let links = {
    "repo": "https://github.com/lukeao"
};

// Check availability
app.get('/api/check/:id', (req, res) => {
    res.json({ available: !links.hasOwnProperty(req.params.id) });
});

// Create link
app.post('/api/create', (req, res) => {
    const { url, id } = req.body;
    if (links[id]) return res.status(400).json({ error: "Taken" });
    links[id] = url;
    res.json({ id });
});

// Redirect
app.get('/api/redirect/:id', (req, res) => {
    const target = links[req.params.id];
    if (target) return res.redirect(target);
    res.status(404).send("Not Found");
});

// Silent Ping
app.get('/api/ping', (req, res) => res.send("pong"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
