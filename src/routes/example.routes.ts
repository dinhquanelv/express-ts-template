import { Router } from 'express';

import exampleController from '~/controllers/example.controller';

const router = Router();

router.post('/', exampleController.create);
router.get('/', exampleController.findAll);
router.get('/:id', exampleController.findOne);
router.patch('/:id', exampleController.update);
router.delete('/:id', exampleController.remove);

export default router;
