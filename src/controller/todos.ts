import { RequestHandler } from 'express';

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;

  const newTodo: Todo = { id: Math.random().toString(), text };
  TODOS.push(newTodo);

  res.status(201).json({ message: 'Create todo=', createTodo: newTodo });
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.status(200).json({ todos: TODOS });
};

export const updateTodos: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;
  const updateText = (req.body as { text: string }).text;
  console.log('updateText', updateText);

  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
  if (todoIndex < 0) {
    throw new Error('Invalid todoId');
  }

  TODOS[todoIndex] = { id: todoId, text: updateText };

  res.json({ message: '更新完了！', updatetodo: TODOS[todoIndex] });
};

export const deleteTodos: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;

  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
  if (todoIndex < 0) {
    throw new Error('Invalid todoId');
  }

  TODOS.splice(todoIndex, 1);

  res.json({ message: '削除完了！' });
};
