import ActionTypes from '../Constant/Constant';

const defaultState = {
  toDoList: [],
  isEmailExists: []
};
const ListReducers = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.ADD_TO_LIST: {
      if (!state.isEmailExists.includes(payload.email)) {
        return {
          ...state,
          toDoList: [...state.toDoList, payload]
        };
      } else if (state.isEmailExists.includes(payload.email)) {
        let toDoList = state.toDoList;
        toDoList.map((e, i, a) => {
          if (e.email === payload.email) {
            a[i].email = payload.email;
            a[i].name = payload.name;
            a[i].contact = payload.contact;
          }
        });
        return {
          ...state,
          toDoList
        };
      }
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
