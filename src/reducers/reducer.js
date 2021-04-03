
export const initialState = {
  records: []
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SOW": {
      return {
        ...state,
        records: [...state.sows, action.value]
      };
    }
    default:
      return state;
  }
};