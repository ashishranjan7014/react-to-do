import ActionTypes from '../Constant/Constant';

const AddToList = listData => {
  return {
    type: ActionTypes.ADD_TO_LIST,
    payload: {
      ...listData
    }
  };
};

export default AddToList;
