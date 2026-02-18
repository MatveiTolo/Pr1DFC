import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

// Типы для задачи
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// Типы для контекста
interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

// Создаем контекст с начальным значением undefined
const TodoContext = createContext<TodoContextType | undefined>(undefined);

// Провайдер контекста
export const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Изучить Context API', completed: false },
    { id: 2, text: 'Сравнить с Redux', completed: false },
  ]);

  const addTodo = (text: string) => {
    if (text.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        text,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

// Хук для использования контекста
export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
};