import ActionTypes from '../Constant/Constant';

const UpdateList = (arr, obj) => {
  let tempArr = arr;
  if (tempArr && tempArr.length) {
    tempArr.map((e, i, a) => {
      if (e.email === obj.email) {
        a[i].email = obj.email;
        a[i].name = obj.name;
        a[i].contact = obj.contact;
      }
    });
    return tempArr;
  }
};

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
          isEmailExists: [...state.isEmailExists, payload.email],
          toDoList: [...state.toDoList, payload]
        };
      } else if (state.isEmailExists.includes(payload.email)) {
        return {
          ...state,
          toDoList: UpdateList(state.toDoList, payload)
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
