import React, { useState } from 'react';
import { Check, Trash2, Edit2, X, Save } from 'lucide-react';
import { Todo } from '../types/todo';
import { useTodo } from '../context/TodoContext';

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  const { toggleTodo, deleteTodo, editTodo } = useTodo();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    if (editedText.trim()) {
      editTodo(todo.id, editedText);
      setIsEditing(false);
    }
  };

  return (
    <div className={`group flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm transition-all duration-200 ${todo.completed ? 'opacity-75' : ''}`}>
      <button
        onClick={() => toggleTodo(todo.id)}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 transition-colors duration-200 flex items-center justify-center
          ${todo.completed ? 'bg-emerald-500 border-emerald-500' : 'border-gray-300 hover:border-emerald-500'}`}
      >
        {todo.completed && <Check className="w-4 h-4 text-white" />}
      </button>
      
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          className="flex-grow bg-gray-50 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
          autoFocus
        />
      ) : (
        <p className={`flex-grow text-gray-700 ${todo.completed ? 'line-through text-gray-400' : ''}`}>
          {todo.text}
        </p>
      )}

      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {isEditing ? (
          <>
            <button
              onClick={handleEdit}
              className="p-1 text-emerald-600 hover:bg-emerald-50 rounded transition-colors duration-200"
            >
              <Save className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                setIsEditing(false);
                setEditedText(todo.text);
              }}
              className="p-1 text-gray-600 hover:bg-gray-50 rounded transition-colors duration-200"
            >
              <X className="w-4 h-4" />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="p-1 text-blue-600 hover:bg-blue-50 rounded transition-colors duration-200"
            >
              <Edit2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors duration-200"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}