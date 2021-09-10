import dayjs from 'dayjs';
import express from 'express';
import planetsRoutes from './routes/planets.routes.js';
import elementsRoutes from './routes/elements.routes.js';
import methodMiddleware from './middlewares/method.js';
import errorMiddleware from './middlewares/error.js';

const app = express();
app.use(express.json());
app.use(methodMiddleware);
app.use('/planets',planetsRoutes);
app.use('/elements', elementsRoutes);


app.get('/premiere', (req, res) => {
    res.status(200); //gud
    res.set('Content-Type', 'text/plain');
    res.send('Notre première route avec express');
});
//maths/produit
//maths/différence
//maths/quotiant
//maths/reste
//maths/somme
app.get('/maths/:operation', (req, res) => {
    //console.log(req.query);

    const operation = req.params.operation;
    //console.log(operation);

    const a = parseInt(req.query.a, 10);
    const b = parseInt(req.query.b, 10);

    let result = 0;

    switch (operation) {
        case 'somme':
            result = a + b;
            break;
        case 'difference':
            result = a - b;
            break;
        case 'produit':
            result = a * b;
            break;
        case 'quotient':
            result = a / b;
            break;
        case 'reste':
            result = a % b;
            break;
        default:
            //console.log('Opération non reconnu')
            return res.status(400).end();

    }
    res.status(200);
    res.set('Content-type','text/html');
    res.send(`<b>${result}</b>`);
})

app.get('/date', (req, res) => {
    res.status(200).set('Content-Type', 'text/plain');
    const now = dayjs().format('YYYY-MM-DD HH:mm')
    res.send(now)

})

app.use(errorMiddleware);

export default app;