import express from 'express';
const app = express()
const PORT = 8080;

app.get('/rest', (req, res) => {
    res.status(200).send({
        rest: 'good-night!'
    })
})

app.listen(
    PORT,
    () => console.log(`rest api live on http://localhost:${PORT}`)
);
