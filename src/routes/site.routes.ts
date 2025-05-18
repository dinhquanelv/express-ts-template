import { Router } from 'express';

import siteController from '~/controllers/site.controller';

const router = Router();

router.get('/', siteController.index);

export default router;
