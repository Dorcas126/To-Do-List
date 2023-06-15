// todoCrud.test.js
import { addTodo } from '../src/todoCrud.js';

// removeTodo

/* eslint-disable no-unused-vars */
const { default: JSDOMEnvironment } = require('jest-environment-jsdom');
/* eslint-enable no-unused-vars */
/**
 * @jest-environment jsdom
 */

// Mock localStorage
const localStorage = (() => {
  let store = {};
  return {
    getItem: (key) => store[key],
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
    removeItem: (key) => {
      delete store[key];
    },
  };
})();
// Object.defineProperty(window, 'localStorage', { value: localStorage });

// Mock the Todo class
class Todo {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

// Mock the Todos class
class Todos {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(todo) {
    this.todos = this.todos.filter((t) => t !== todo);
    this.todos.forEach((t, i) => {
      t.index = i;
    });
  }

  save() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  retrieve() {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (todos) {
      this.todos = [...this.todos, ...todos];
    }
  }

}

describe('todoCrud', () => {
  describe('addTodo', () => {
    it('adds a new todo to the list', () => {
      const todos = new Todos();
      addTodo(Todo, todos, 'Test todo');
      expect(todos.todos.length).toBe(1);
      expect(todos.todos[0].description).toBe('Test todo');
      expect(todos.todos[0].completed).toBe(false);
    });

    it('saves the new todo to localStorage', () => {
      const todos = new Todos();
      addTodo(Todo, todos, 'Test todo');
      expect(localStorage.getItem('todos')).toBeTruthy();
      expect(JSON.parse(localStorage.getItem('todos')).length).toBe(1);
      expect(JSON.parse(localStorage.getItem('todos'))[0].description).toBe('Test todo');
      expect(JSON.parse(localStorage.getItem('todos'))[0].completed).toBe(false);
    });
  });
});