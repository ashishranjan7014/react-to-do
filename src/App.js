import React from 'react';
import './style.css';
import Forms from './Forms/Forms';
import { Provider } from 'react-redux';
import Store from './Store/Store';
import ToDoList from './TodoList/TodoList';

console.log(Store);
export default function App() {
  return (
    <Provider store={Store}>
      <div>
        <Forms />
        <ToDoList />
      </div>
    </Provider>
  );
}
