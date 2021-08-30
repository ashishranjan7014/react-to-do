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
    case ActionTypes.REMOVE_FROM_LIST: {
      const { id } = payload;
      return {
        ...state,
        toDoList: state.toDoList.filter((elem, index) => {
          if (elem.email + index !== id) {
            return elem;
          }
        })
      };
    }
    default: {
      return state;
    }
  }
};

export default ListReducers;
