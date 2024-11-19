import React from 'react';
import { TodoItem } from './TodoItem';
import { useTodo } from '../context/TodoContext';
import { ClipboardList } from 'lucide-react';

export function TodoList() {
  const { todos } = useTodo();

  if (todos.length === 0) {
    return (
      <div className="mt-8 text-center py-12 bg-white rounded-lg shadow-sm">
        <ClipboardList className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-500">No tasks yet. Add one to get started!</p>
      </div>
    );
  }

  return (
    <div className="mt-8 space-y-3">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <div className="text-sm text-gray-500 text-right">
        {todos.filter(t => t.completed).length} of {todos.length} tasks completed
      </div>
    </div>
  );
}