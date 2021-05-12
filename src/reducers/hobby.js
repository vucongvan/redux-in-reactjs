const initialState = {
  list: [],
  activeId: null
}

const hobbyReducer = (state = initialState, action) => {

  switch (action.type) {
    case "ADD_HOBBY": {
      newList.push(action.payload)
      const newList = [...state.list];
      return {
        ...state,
        list: newList,
      }
    }

    case "SET_ACTIVE_HOBBY": {
      const newActiveId = action.payload.id
      return {
        ...state,
        activeId: newActiveId,
      }
    }

    default:
      return state;
  }
}; 

export default hobbyReducer;
