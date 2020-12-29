// eslint-disable-next-line import/no-extraneous-dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(express.static('dist'));

app.get('/', (_req, res) => {
  const indexFile = path.resolve('../dist/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Nothing here');
    }
    return res.send(data);
  });
});
app.get('/a', (req, res) => {
  // eslint-disable-next-line no-console
  console.log(path.join(__dirname, 'dist', 'index.html'));
  res.send('Hello');

  // res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Serve the files on port 3000.
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Example app listening on port 3000!\n');
});

export default app;
