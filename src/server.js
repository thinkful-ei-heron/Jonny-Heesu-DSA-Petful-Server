const { PORT, NODE_ENV } = require('./config');
const app = require('./app.js');

app.listen(PORT, () => {
  if (NODE_ENV !== 'production') {
    console.log(`Server listening at http://localhost:${PORT}`);
  }
});


