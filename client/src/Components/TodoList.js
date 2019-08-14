import React, { useReducer } from 'react';
import { reducer, initialState } from '../Reducers/Reducer';

function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <div>ToDo List Component</div>
  );
};

export default TodoList;
