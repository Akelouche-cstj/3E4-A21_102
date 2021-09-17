import express from 'express';
import HttpError from 'http-errors';
import PLANETS from '../data/planets.js';
import HttpStatus from 'http-status';

import planetRepository from '../repositories/planet.repository.js';

const router = express.Router();

class PlanetsRoutes {
    constructor() {
        router.get('/', this.getAll);
        router.get('/:idPlanet', this.getOne);
        router.post('/', this.post);
        router.delete('/:idPlanet', this.delete);
        router.patch('/:idPlanet', this.patch);
        router.put('/:idPlanet', this.put);
    }

    put(req, res, next) {
        return next(HttpError.MethodNotAllowed());
    }

    patch(req, res, next) {
        return next(HttpError.NotImplemented());
    }

    delete(req, res, next) {
        const index = PLANETS.findIndex(p => p.id == req.params.idPlanet);

        if (index === -1) {
            return next(HttpError.NotFound(`La planète avec l'identifiant ${red.params.idPlanet} n'éxiste pas.`));

        }
        PLANETS.splice(index, 1);
        res.status(204).end();

    }

    post(req, res, next) {
        // console.log(req.body);
        const newPlanet = req.body;
        const planet = PLANETS.find(p => p.id == newPlanet.id);

        if (planet) {
            //elle exite deja doublon.
            return next(HttpError.Conflict(`La planète avec l'identifiant ${newPlanet.id} éxiste déjà.`));

        } else {
            PLANETS.push(newPlanet);
            res.status(201).json(newPlanet); // res.status(httpStatus.CREATED.json(newPlanet) ==  res.status(201).json(newPlanet)
        }

    }

    async getAll(req, res, next) {

        const filter = {};
        if(req.query.explorer){
            filter.discoveredBy = req.query.explorer
        }
        try{
            const planets = await planetRepository.retrieveAll(filter);
            res.status(200).json(planets);
        }catch(err){
            return next(err)
        }
    }

    async getOne(req, res, next) {
        const idPlanet = req.params.idPlanet;

        try {
            const planet = await planetRepository.retrieveById(idPlanet);//TODO voir dans la BD

            if (planet) {// 1. j'ai une planete
                res.status(HttpStatus.OK).json(planet);
            } else {
                return next(HttpError.NotFound(`La planète ${idPlanet} n'existe pas`));
                //2. J'ai pas de planète
            }

        } catch (err) {
            return next(err);
        }
    }
}

new PlanetsRoutes();
export default router;
