import express from 'express';
import morgan from 'morgan'
import bodyParser from "body-parser";
import "reflect-metadata";
import route from './routes'
import { createConnection } from "typeorm"
import compression from "compression";

createConnection().then(async connection => {
    const app = express();
    const port = process.env.API_PORT || 3000;

    app.use(morgan('dev'));
    app.use(bodyParser.text());
    app.use(compression());
    app.use(route);

    app.listen(port, () => { console.log(`App listening on port : ${port}`)})
}).catch(err => console.log('typeorm error', err));

