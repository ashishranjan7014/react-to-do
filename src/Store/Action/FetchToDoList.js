import ActionTypes from '../Constant/Constant';

const FetchToDoList = () => {
  fetch('node-a9gqtv--8080.local.webcontainer.io')
    .then(res => res.json())
    .then(data => {
      console.log(data, '################');
    });
  return {
    type: ActionTypes.FETCH_TO_DO_LIST
  };
};

export default FetchToDoList;
