import express from 'express';

import { ItemsController } from './controllers/ItemsController';
import { PointsController } from './controllers/PointsController';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

// Routes -> Items
routes.get('/items', itemsController.index);

// Routes -> Points
routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export { routes };