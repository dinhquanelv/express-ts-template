/**
 *
 * Defines the routes for the application, which link HTTP requests to specific controllers
 *
 */

import { Application } from 'express';

import siteRouter from '~/routes/site.routes';
import exampleRouter from '~/routes/example.routes';

export const routes = (app: Application): void => {
  app.use('/api/examples', exampleRouter);
  app.use(`/`, siteRouter);
};
