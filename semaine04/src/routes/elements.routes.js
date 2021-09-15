import express from 'express';
import HttpErrors from 'http-errors';
import HttpStatus from 'http-status';
import ELEMENTS from '../data/elements.js';
const router = express.Router();

class ElementsRoutes {

    constructor() {
        router.get('/', this.getAll);
        router.post('/', this.post);
        router.get('/:symbol', this.getOne);
        router.delete('/:symbol', this.delete);

    }

    getAll(req, res, next) {
       res.status(200);
       res.json(ELEMENTS);
    }

    getOne(req, res, next) {
       const symbol = req.params.symbol;

       const element = ELEMENTS.find(e => e.symbol == symbol);

       if (element){
           res.status(HttpStatus.OK).json(element);
       }
       else{
          return next(HttpErrors.NotFound(`L'element avec le symbol ${symbol} n'existe pas`));
       }
    }

    post(req, res, next) {
        const newElement = req.body;
        const element = ELEMENTS.find(e => e.symbol == newElement.symbol);
        if(element){
            return next(HttpError.Conflict(`L'element avec le symbol ${newElement.symbol} éxiste déjà`))
        }
        else{
            ELEMENTS.push(newElement);
            res.status(201).json(newElement);
        }
        
    }
    
    delete(req, res, next) {
        const index = ELEMENTS.findIndex(e => e.symbol == req.params.symbol);
        if(index === -1){
            return next(HttpError.NotFound(`L'element avec le symbol ${red.params.symbol} n'éxiste pas.`));
        }
        ELEMENTS.splice(index, 1);
        res.status(204).end();
        
    }
}

new ElementsRoutes();

export default router;