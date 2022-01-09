
import { useReducer } from 'react'


// init state
const initState = 0

// Action
const UP_COUNT = 'up'
const DOWN_COUNT = 'down'

// reducer
const reducer = (state, action) => {
  console.log('reducer running ...');
  switch (action) {
    case UP_COUNT:
      return state + 1;

    case DOWN_COUNT:
      return state - 1;

    default:
      throw new Error('Invald action');
  }
}

function App() {

  const [count, dispatch] = useReducer(reducer, initState)

  return (
    <div style={{ padding: '20px' }}>
      <h1> {count} </h1>
      <button
        onClick={() => dispatch(DOWN_COUNT)}
      >
        Down
      </button>
      <button
        onClick={() => dispatch(UP_COUNT)}
      >
        Up
      </button>

    </div>
  )
}
export default App;
