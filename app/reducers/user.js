const INITIAL_STATE = {
  username: "",
  remaining: 150
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_USERNAME":
      return {
        username: action.value,
        remaining: 150 - action.value.length
      };
  }

  return state;
};

export default reducer;
