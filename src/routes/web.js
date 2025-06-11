import express from 'express';
import homeController from '../controllers/homeController.js';

let router = express.Router();

let initWebRoutes = (app) => {

    router.get('/', homeController.getHomePage);

    router.get('/about', homeController.getAboutPage);

    router.get('/dat', homeController.getDatPage);

    return app.use('/', router);
}

module.exports = initWebRoutes;