const initialState = {
  characters: [],
  charactersList: [],
  detail: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_CHARACTERS":
      return {
        ...state,
        characters: action.payload,
        charactersList: action.payload,
      };
    case "GET_DETAILS":
      return {
        ...state,

        detail: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
