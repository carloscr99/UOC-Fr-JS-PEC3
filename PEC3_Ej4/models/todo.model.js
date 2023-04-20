"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @class Model
 *
 * Manages the data of the application.
 */
const uuid_1 = require("uuid");
class Todo {
    constructor({ text = '', complete = false }) {
        this.id = this.generarUUIDv4();
        this.text = text;
        this.complete = complete;
    }
    generarUUIDv4() {
        return (0, uuid_1.v4)();
    }
}
exports.default = Todo;
