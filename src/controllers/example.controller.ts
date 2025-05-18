/**
 *
 * Houses the controller functions that handle incoming HTTP requests and responses
 *
 */

import { NextFunction, Request, Response } from 'express';
import { create, findAll, findOne, update, remove } from '~/services/example.service';

export default {
  // [POST] /api/examples
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await create();
    } catch (error) {
      next(error);
    }
  },

  // [GET] /api/examples
  findAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await findAll();
    } catch (error) {
      next(error);
    }
  },

  // [GET] /api/examples/:id
  findOne: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await findOne();
    } catch (error) {
      next(error);
    }
  },

  // [PATCH] /api/examples/:id
  update: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await update();
    } catch (error) {
      next(error);
    }
  },

  // [DELETE] /api/examples/:id
  remove: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await remove();
    } catch (error) {
      next(error);
    }
  },
};
