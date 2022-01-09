import { useReducer, useRef } from 'react'
import reducer, { initState } from './reducer'
import { setJob, addJob, deleteJob } from './actions'
import logger from './logger'
function ToDoApp() {
   const [state, dispatch] = useReducer(logger(reducer), initState)
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
export default ToDoApp