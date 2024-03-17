import { Router } from "express"; 
import { getTasks, getTask, createTask, updateTask, deleteTask } from '../controllers/task.controller';

const router = Router();

router.get('/tasks', getTasks);
router.get('/task/find/:id', getTask);
router.post('/task/add', createTask);
router.put('/task/update/:id', updateTask);
router.delete('/task/delete/:id', deleteTask);

export default router;