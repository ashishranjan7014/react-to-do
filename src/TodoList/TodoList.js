import React from 'react';
import { useSelector } from 'react-redux';
import { GetToDoList } from '../Store/Selector/Selector';

const ToDoList = () => {
  const { toDoList } = useSelector(GetToDoList);
  return (
    <div>
      {toDoList && toDoList.length
        ? toDoList.map(({ email, name, contact }, index) => {
            <div key={index + email}>
              <div>
                <strong>Name : </strong> {name}
              </div>
              <div>
                <strong>Email : </strong> {email}
              </div>
              <div>
                <strong>Contact : </strong> {contact}
              </div>
            </div>;
          })
        : null}
    </div>
  );
};

export default ToDoList;
