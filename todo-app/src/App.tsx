import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { TodoProvider } from './context/TodoContext';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <CheckCircle2 className="w-8 h-8 text-emerald-500" />
            <h1 className="text-3xl font-bold text-gray-900">Task Master</h1>
          </div>
          
          <TodoInput />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;