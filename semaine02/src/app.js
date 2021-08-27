import express, { response } from 'express';

const app = express();

app.get('/premiere', (req,res) => {
    res.status(200); //gud
    res.set('Content-Type','text/plain');
    res.send('Notre première route avec express');
});

app.get('/maths/somme', (req,res) =>{
    //console.log(req.query);
    const a = parseInt(req.query.a,10);
    const b = parseInt(req.query.b,10);
    const somme = a + b;
    res.status(200); //gud
    res.set('Content-Type', 'text/plain')
    res.send(`
    Nous allons faire une somme.
    10 + 13 = ${somme}
    merci d'avoir participé à mon cours de maths!
    Au revoir.`);
})

export default app;