// build a simple reducer function
function createNew(state, action) {
  return state;
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
