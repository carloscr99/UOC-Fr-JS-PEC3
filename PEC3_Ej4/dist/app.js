"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todo_controller_1 = require("./controllers/todo.controller");
const todo_service_1 = require("./services/todo.service");
const app = new todo_controller_1.default(new todo_service_1.default(), new TodoView());
