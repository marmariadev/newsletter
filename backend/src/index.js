const { PORT } = require('./config/config');
const app = require('./app');

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});