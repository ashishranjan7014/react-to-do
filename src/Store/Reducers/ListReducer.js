import ActionTypes from '../Constant/Constant';

const defaultState = {
  toDoList: []
};
const ListReducers = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.ADD_TO_LIST: {
      return {
        ...state,
        toDoList: [...state.toDoList, payload]
      };
    }
    default: {
      return state;
    }
  }
};

export default ListReducers;
