const INITIAL_STATE = {
  value: 0
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        value: state.value + 1
      };
    case "DECREMENT":
      return {
        value: state.value - 1
      };
  }

  return state;
};

export default reducer;
