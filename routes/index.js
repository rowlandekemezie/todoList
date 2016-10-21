import express from 'express';
import {findAllTodos, createTodo, getTodo, upDateTodo, deleteTodo } from '../controllers/controllers'

const router = express.Router();

router.route('/todos')
  .get(findAllTodos);
  
  router.route('/todos')
  .post(createTodo);


router.route('/todos/:id')
  .get(getTodo)
  .put(upDateTodo)
  .delete(deleteTodo);

export default router;
