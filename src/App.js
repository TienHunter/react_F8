
import { useReducer, useRef } from 'react'

// useReducer

// 1. init state
const initState = {
  job: '',
  jobs: []
}
// 2. Actions
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload
  }
}
const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload
  }
}
const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload
  }
}
// 3.reducer
const reducer = (state, action) => {
  console.log('Action', action);
  console.log('Prev state:', state);

  let newState;
  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload
      }
      break
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload]
      }
      break
    case DELETE_JOB:
      const newJobs = [...state.jobs]
      newJobs.splice(action.payload, 1)
      newState = {
        ...state,
        jobs: newJobs
      }
      break
    default:
      throw new Error('Invalid action !!!')
  }
  console.log('New state', newState);
  return newState
}

// 4.dispatch

function App() {

  const [state, dispatch] = useReducer(reducer, initState)
  const { job, jobs } = state

  const inputRef = useRef()
  const hanldeSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(''))
    inputRef.current.focus()
  }
  return (
    <div>
      <h2>Todo</h2>

      <input
        ref={inputRef}
        value={job}
        placeholder="Enter your work..."
        onChange={(e) => dispatch(setJob(e.target.value))}
      />

      <button onClick={hanldeSubmit}>Add</button>

      <ul>
        {jobs.map((job, index) =>
          <li key={index} >
            {job}
            <button onClick={() => dispatch(deleteJob(index))}>&times;</button>
          </li>
        )}
      </ul>
    </div>
  )
}
export default App