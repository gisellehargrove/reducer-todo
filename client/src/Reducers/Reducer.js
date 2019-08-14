// build a simple reducer function
function createNew(state, action) {
  return state;
};

const toggleComplete = (state, id) => {
  console.log('toggleComplete')
  state.forEach(todo => {
    if(todo.id === id) {
      todo.completed = !todo.completed
    }
  })
  return [...state]
};

const clearCompleted = (state) => {
  const updatedState = state.filter(todo => {
    if(!todo.completed) return todo
  });

  return updatedState;
};

const reducer = (state, action) => {
  console.log(action)
  switch(action.type) {
    case 'NEW':
      return [
        ...state,
        {
          item: action.todo,
          completed: false,
          id: Date.now()
        }
      ]

    case 'TOGGLE_COMPLETE':
      return toggleComplete(state, action.id)

    case 'CLEAR_COMPLETED':
      return clearCompleted(state)

    default:
      return state
  }
};

const initialState = [
  {
    item: '#1',
    completed: false,
    id: 1
  },
  {
    item: '#2',
    completed: false,
    id: 2
  },
  {
    item: '#3',
    completed: false,
    id: 3
  }
];

  export { reducer, initialState };
