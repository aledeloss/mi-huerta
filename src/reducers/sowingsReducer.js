export const initialState = {
  records: []
};

export function reducer(state, action) {
  switch (action.type) {
    case "ADD":
    return {
      ...state,
      records: [...state.records, action.payload]
    };
    case "DELETE_RECORD":
    return {
      ...state,
      records: state.records.filter((record) => record.id !== action.payload) 
    };
    case "DELETE_ALL":
    return {
      ...state,
      records: []
    }
    case "RECOVER_ALL":
    return {
      records: (JSON.parse(localStorage.getItem("records")))
    };
    default:
      throw new Error();
  }
}