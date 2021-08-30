import React from 'react';
import { useSelector } from 'react-redux';
import { GetToDoList } from '../Store/Selector/Selector';

const ToDoList = () => {
  const { toDoList } = useSelector(GetToDoList);
  return (
    <div>
      {toDoList && toDoList.length
        ? toDoList.map(({ email, name, contact }, index) => {
            return (
              <div
                style={{ margin: '1px', border: '2px solid black' }}
                key={index + email}
              >
                <div style={{ padding: '10px' }}>
                  <strong>Name : </strong> {name}
                </div>
                <div style={{ padding: '10px' }}>
                  <strong>Email : </strong> {email}
                </div>
                <div style={{ padding: '10px' }}>
                  <strong>Contact : </strong> {contact}
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default ToDoList;
