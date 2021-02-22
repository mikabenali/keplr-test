import express from 'express';
const app = express();

const port = process.env.API_PORT || 3000;

app.listen(port, () => {
    console.log(`App listening on port : ${port}`)
})
