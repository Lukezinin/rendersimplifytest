const port = process.env.PORT || 8000;

const config = {
  rtmp: {
    port: 1935, // Porta interna padrão
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: port,
    allow_origin: '*'
  }
};
