const express = require('express');
const Stream = require('node-rtsp-stream');

const app = express();

const stream = new Stream({
  name: 'Test stream',
  streamUrl: 'rtsp://170.93.143.139/rtplive/470011e600ef003a004ee33696235daa',
  wsPort: 9999,
  ffmpegOptions: {
    '-stats': '',
    '-r': 30,
  },
});

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(5000, () => {
  console.log('Listening on port 5000...');
});
