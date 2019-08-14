import React, { useReducer, useState } from 'react';
import { reducer, initialState } from '../Reducers/Reducer';

function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newTodo, setNewTodo] = useState();

  const handleChange = e => {
    setNewTodo(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch({type: 'NEW', todo: newTodo})
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input onChange={handleChange} />

        <button>Add Todo</button>
      </form>
      <ul>
        {state.map(todo => {
          return (
            <li
              className={`${todo.completed ? 'strike-through' : ''}`}
              key={todo.id}
              onClick={() => dispatch({ type: 'TOGGLE_COMPLETE', id: todo.id })}>
              {todo.item}
            </li>
          );
        })}

      </ul>
    </div>
  );
};

export default TodoList;
