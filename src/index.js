import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  count: 0
};

//sets the initial state and returns the new state
//decides what the initial state is and returns new state depending on actions
//ignores states it doesn't understand
function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Counter/>
  </Provider>
);

render(<App />, document.getElementById('root'));


/*
import connect from react-redux in component

Connect component to redux
* Use connect from react-redux 
  Connect is a higher order function when called returns a fucntion takes in the component
* Set up mapStateToProps in connect function
  Tells what data to pull out of the store, mapStateToProps

Create Store
* Create store function
* Provide store to App
* Create a reducer which passes into createStore

Wire Up Actions
* Store has a function which dispatches actions i.e store.dispatch({type: "INCREMENT"})
* this passes actions into the reducer
* connect function injects the dispatch into props

*/