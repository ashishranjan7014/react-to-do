import ActionTypes from '../Constant/Constant';
import Axios from 'axios';

const FetchToDoList = () => {
  fetch('https://node-a9gqtv--8080.local.webcontainer.io/')
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
  return {
    type: ActionTypes.FETCH_TO_DO_LIST
  };
};

export default FetchToDoList;
