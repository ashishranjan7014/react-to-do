import ActionType from '..//Constant/Constant';

const RemoveFromList = id => {
  return {
    type: ActionType.REMOVE_FROM_LIST,
    payload: {
      id
    }
  };
};

export default RemoveFromList;
