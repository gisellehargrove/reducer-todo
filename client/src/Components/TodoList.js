import React, { useReducer } from 'react';
import { reducer, initialState } from '../Reducers/Reducer';

function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state)

  return (
    <div>
      <form>
        <input />

        <button>Add Todo</button>
      </form>
      <ul>
        {state.map(todo => {
          return <li key={todo.id}>{todo.item}</li>
        })}

      </ul>
    </div>
  );
};

export default TodoList;
