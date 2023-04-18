/**
 * @class Model
 *
 * Manages the data of the application.
 */
import { v4 as uuidv4 } from 'uuid';

abstract class Todo {
  id: string;
  text: string;
  complete: boolean;

  constructor({ text = '', complete = false }) {
    this.id = this.generarUUIDv4();
    this.text = text;
    this.complete = complete;
  }

  generarUUIDv4(): string {
    return uuidv4();
  }
  
}
