import { useSelector } from 'react-redux';
import { GetToDoList } from '../Store/Selector/Selector';

const ToDoList = () => {
  const toDoList = useSelector(GetToDoList);
  return <div>ghg</div>;
};

export default ToDoList;
