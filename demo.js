const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.static('public'));

//Use router for amy api calls
// app.use('/api',apiRouetr)
app.use((req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

//npm i ni kra hai wa rukh mmkrtka rhkue bta

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`);
});
