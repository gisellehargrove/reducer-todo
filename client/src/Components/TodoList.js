import React, { useReducer } from 'react';
import { reducer, initialState } from '../Reducers/Reducer';

function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state)

  return (
    <ul>
      {state.map(todo => {
        return <li key={todo.id}>{todo.item}</li>
      })}

    </ul>
  );
};

export default TodoList;
