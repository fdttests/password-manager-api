import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './src/router';
import { ValidationError } from 'express-validation';

const app = express();
const port = process.env.PORT || 3000;

app.set('port', port);

/** Middlewares **/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
    origin: true,
    credentials: true,
}));

/** Routes **/
app.use(router);

app.use((err: any, req: any, res: any, next: any) => {
    if (err instanceof ValidationError) {
        return res.status(err.statusCode).json(err);
    }

    return res.status(500).json(err);
});

app.listen(app.get('port'), () => {
    console.log(`Running HTTP API on Port ${app.get('port')}`);
});
