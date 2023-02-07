const initialState = {
  counter: 0,
  isLogged: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'INCREMENTBYAMOUNT':
      return { ...state, counter: state.counter + action.payload };
    case 'SIGN_IN':
      return { ...state, isLogged: true };
    case 'SIGN_OUT':
      return { ...state, isLogged: false };
    default:
      return state;
  }
};

export default reducer;
