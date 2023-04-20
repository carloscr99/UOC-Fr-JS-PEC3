/**
 * @class Service
 *
 * Manages the data of the application.
*/

import Todo from "../models/todo.model";
import TodoController from "../controllers/todo.controller";

 class TodoService {
  todos: Todo[];
   onTodoListChanged: any;
  constructor(todos = []) {
    this.todos = (JSON.parse(localStorage.getItem("todos") as string) || todos).map(
      (      todo: { text?: string | undefined; complete?: boolean | undefined; }) => new Todo(todo)
    );
  }

  bindTodoListChanged(callback: any) {
    this.onTodoListChanged = callback;
  }

  _commit(todos: Todo[]) {
    this.onTodoListChanged(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  addTodo(text: any) {
    this.todos.push(new Todo({ text }));

    this._commit(this.todos);
  }

  editTodo(id: string, updatedText: any) {
    this.todos = this.todos.map(todo =>
      todo.id === id
        ? new Todo({
            ...todo,
            text: updatedText
          })
        : todo
    );

    this._commit(this.todos);
  }

  deleteTodo(_id: string) {
    this.todos = this.todos.filter(({ id }) => id !== _id);

    this._commit(this.todos);
  }

  toggleTodo(_id: string) {
    this.todos = this.todos.map(todo =>
      todo.id === _id ? new Todo({ ...todo, complete: !todo.complete }) : todo
    );

    this._commit(this.todos);
  }
}
export default TodoService;