const NodeMediaServer = require('node-media-server');

// O Render te dá uma porta dinâmica, temos que usar ela para o HTTP
const port = process.env.PORT || 8000;

const config = {
  rtmp: {
    port: 1935, // Porta interna (o OBS vai tentar falar aqui)
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: port, // Porta que o Render exige
    allow_origin: '*'
  }
};

var nms = new NodeMediaServer(config);

// Tratamento de erro para o servidor não "capotar"
try {
    nms.run();
    console.log(`Servidor rodando na porta HTTP: ${port}`);
} catch (err) {
    console.log("Erro ao iniciar servidor:", err);
}
