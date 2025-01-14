import { Router } from 'express';
import { JobController } from '../controllers/jobController';

const router = Router();

router.post('/', JobController.create);
router.get('/', JobController.findAll);
router.get('/:id', JobController.findById);
router.put('/:id', JobController.update);
router.delete('/:id', JobController.delete);

export default router;