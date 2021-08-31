import ActionType from '..//Constant/Constant';

const RemoveFromList = (id, email) => {
  return {
    type: ActionType.REMOVE_FROM_LIST,
    payload: {
      id,
      email
    }
  };
};

export default RemoveFromList;
