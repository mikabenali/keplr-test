import express from 'express';
import morgan from 'morgan'
import bodyParser from "body-parser";
import route from './routes'
import sequelize from "./models";

const app = express();
const port = process.env.API_PORT || 3000;

app.use(morgan('dev'))
app.use(bodyParser.text())
app.use(route);

// init database
sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error(err));

sequelize.sync()
    .then(() => console.log('Database sync has been done successfully.'))
    .catch(err => console.error(err));

app.listen(port, () => {
    console.log(`App listening on port : ${port}`)
})
