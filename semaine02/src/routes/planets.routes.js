import express from 'express';
import HttpError  from 'http-errors';
import PLANETS from '../data/planets.js';
import HttpStatus from 'http-status';

const router = express.Router();

class PlanetsRoutes{
    constructor() {
        router.get('/planets',this.getAll);
        router.get('/planets/:idPlanet', this.getOne);
        router.post('/planets/',this.post);

    }

    post(req, res, next){
        
    }

    getAll(req, res, next) {
        res.status(200); //Etape 1 = Status
        //res.set('Content-Type', 'application/json'); //Etape 2 = Contenu de la réponse
        res.Json(PLANETS); //etape 3 = Envoye rles données.
    }

    getOne(req,res,next){
         const idPlanet = req.params.idPlanet;
        // let planet;
        
        // for(let p of PLANETS ){
        //     if(p.id === idPlanet){ // jai toruver la planete
        //         planet = p;
        //         break;
        //     }
        // }

        const planet = PLANETS.find(p => p.id == idPlanet);

        if(planet){// 1. j'ai une planete
            res.status(HttpStatus.OK).json(planet);
        } else{
            return next(HttpError.NotFound(`La planète ${idPlanet} n'existe pas`));
            //2. J'ai pas de planète
        }
        
    }
}

new PlanetsRoutes();
export default router;
