import { NextFunction, Request, Response } from 'express';

export default {
  index: (req: Request, res: Response, next: NextFunction) => {
    res.send('index page');
  },
};
