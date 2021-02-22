import express from 'express';
import morgan from 'morgan'
import route from './routes'

const app = express();
const port = process.env.API_PORT || 3000;

app.use(morgan('dev'))
app.use(route);

app.listen(port, () => {
    console.log(`App listening on port : ${port}`)
})
