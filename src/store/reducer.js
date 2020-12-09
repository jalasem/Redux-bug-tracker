/* eslint-disable no-unreachable */
const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_BUG":
      return [
        ...state,
        {
          id: action.payload.id,
          description: action.payload.description,
          resolved: false,
        },
      ];
      break;
    case "RESOLVE_BUG":
      return state.map((bug) => {
        if (bug.id === action.payload.id) bug.resolved = true;

        return bug;
      });
      break;
    case "UNRESOLVE_BUG":
      return state.map((bug) => {
        if (bug.id === action.payload.id) bug.resolved = false;

        return bug;
      });
      break;
    case "REMOVE_BUG":
      return state.filter((bug) => bug.id !== action.payload.id);
      break;
    default:
      return state;
      break;
  }
};

export default reducer;
