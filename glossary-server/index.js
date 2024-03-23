const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const URL_CLIENT = process.env.URL_CLIENT || 'http://localhost:3000';

app.use(
    cors({
        origin: URL_CLIENT
    })
);

app.use('/api', require('./routes/glossary.routes'));
app.use('/api', require('./routes/author.routes'));

async function start() {
    try {
        app.listen(PORT, () => {
            console.log(`Server has been started on port ${PORT}`);
        });
    } catch (error) {
        console.log(`Error: ${error}`);
        process.exit(1);
    }
}

start();
