import TodoController from './controllers/todo.controller'
import TodoService from './services/todo.service';

const app = new TodoController(new TodoService(), new TodoView());

