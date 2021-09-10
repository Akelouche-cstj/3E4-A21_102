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

        
    }
    
    delete(req, res, next) {
     
    }
}

new ElementsRoutes();

export default router;