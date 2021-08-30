import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GetToDoList } from '../Store/Selector/Selector';
import RemoveFromList from '../Store/Action/RemoveFromList';

const ToDoList = () => {
  const { toDoList } = useSelector(GetToDoList);
  const dispatch = useDispatch();
  return (
    <div>
      {toDoList && toDoList.length
        ? toDoList.map(({ email, name, contact }, index) => {
            return (
              <div
                style={{ margin: '1px', border: '2px solid black' }}
                key={index + email}
              >
                <strong
                  style={{
                    float: 'right',
                    cursor: 'pointer',
                    padding: '5px',
                    border: '1px solid red',
                    color: 'red'
                  }}
                  onClick={() => {
                    dispatch(RemoveFromList(email + index));
                  }}
                >
                  X
                </strong>
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
