import React, { useState } from 'react';
import { connect } from 'react-redux';
import { decrement, increment, incrementByAmount, signIn, signOut } from './actions';

const App = ({ counter, isLogged, increment, decrement, incrementByAmount, signIn, signOut }) => {
  const [amount, setAmount] = useState(0);

  const handleAmountChange = e => {
    setAmount(Number(e.target.value));
  };

  return (
    <div id='main'>
      {isLogged ? (
        <div>
          <div data-testid='counter'>{counter}</div>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
          <input type='number' value={amount} onChange={handleAmountChange} />
          <button onClick={() => incrementByAmount(amount)}>Add Amount</button>
          <button onClick={signOut}>Logout</button>
        </div>
      ) : (
        <button onClick={signIn}>Login</button>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  counter: state.counter,
  isLogged: state.isLogged
});

const mapDispatchToProps = {
  decrement,
  increment,
  incrementByAmount,
  signIn,
  signOut
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
