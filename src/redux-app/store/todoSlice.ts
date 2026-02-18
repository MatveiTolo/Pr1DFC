import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';  // type-only import

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [
    { id: 1, text: 'Изучить Redux Toolkit', completed: false },
    { id: 2, text: 'Сравнить с Context API', completed: false },
  ],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      if (action.payload.trim()) {
        const newTodo: Todo = {
          id: Date.now(),
          text: action.payload,
          completed: false,
        };
        state.todos.push(newTodo);
      }
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find(t => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;