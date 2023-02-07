export const decrement = () => ({
  type: 'DECREMENT'
});

export const increment = () => ({
  type: 'INCREMENT'
});

export const incrementByAmount = amount => ({
  type: 'INCREMENTBYAMOUNT',
  payload: amount
});

export const signIn = () => ({
  type: 'SIGN_IN'
});

export const signOut = () => ({
  type: 'SIGN_OUT'
});
