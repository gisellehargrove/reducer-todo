import React, { useReducer, useState } from 'react';
import { reducer, initialState } from '../Reducers/Reducer';

function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newTodo, setNewTodo] = useState();

  const handleChange = e => {
    console.log(newTodo)
    setNewTodo(e.target.value);
  }

  return (
    <div>
      <form>
        <input onChange={handleChange} />

        <button type='button' onClick={() => dispatch({type: 'NEW', todo: newTodo})}>Add Todo</button>
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
